import { Router } from "express";

const router = Router();

router.post("/newsletter/subscribe", async (req, res) => {
  const { email, firstName, lastName, interests } = req.body as {
    email?: string;
    firstName?: string;
    lastName?: string;
    interests?: string[];
  };

  if (!email || typeof email !== "string" || !email.includes("@")) {
    res.status(400).json({ message: "A valid email address is required." });
    return;
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!apiKey || !listId) {
    req.log.warn("Mailchimp not configured — MAILCHIMP_API_KEY or MAILCHIMP_LIST_ID missing");
    res.status(503).json({
      message:
        "Newsletter signup is not yet configured. Please check back soon.",
    });
    return;
  }

  // Derive the server prefix from the API key (e.g. "abc123-us1" → "us1")
  const serverPrefix = apiKey.split("-").pop();
  if (!serverPrefix) {
    req.log.error("Invalid Mailchimp API key format — cannot determine server prefix");
    res.status(500).json({ message: "Newsletter configuration error." });
    return;
  }

  const tags: string[] = [];
  if (Array.isArray(interests)) {
    if (interests.includes("patient")) tags.push("Patient");
    if (interests.includes("carer")) tags.push("Carer");
    if (interests.includes("research")) tags.push("Research");
    if (interests.includes("events")) tags.push("Events");
  }

  const payload = {
    email_address: email.toLowerCase().trim(),
    status: "subscribed",
    merge_fields: {
      ...(firstName ? { FNAME: firstName.trim() } : {}),
      ...(lastName ? { LNAME: lastName.trim() } : {}),
    },
    tags,
  };

  try {
    const mcRes = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      }
    );

    const data = (await mcRes.json()) as {
      status?: string | number;
      title?: string;
    };

    if (mcRes.ok) {
      req.log.info({ email }, "Mailchimp subscriber added");
      res.json({ success: true, message: "Subscribed successfully." });
      return;
    }

    // Already subscribed — treat as success so we don't reveal member status
    if (data.title === "Member Exists") {
      req.log.info({ email }, "Mailchimp subscriber already exists — treating as success");
      res.json({ success: true, message: "Already subscribed." });
      return;
    }

    req.log.error({ email, mailchimpStatus: data.status, title: data.title }, "Mailchimp error");
    res.status(502).json({
      message: "We could not complete your subscription. Please try again.",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to reach Mailchimp API");
    res.status(502).json({
      message: "We could not complete your subscription. Please try again.",
    });
  }
});

export default router;
