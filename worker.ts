interface Env {
  ASSETS: Fetcher;
  MAILCHIMP_API_KEY?: string;
  MAILCHIMP_LIST_ID?: string;
}

interface SubscribeBody {
  email?: string;
  firstName?: string;
  lastName?: string;
  interests?: string[];
}

interface MailchimpResponse {
  title?: string;
}

async function handleSubscribe(request: Request, env: Env): Promise<Response> {
  let body: SubscribeBody;
  try {
    body = await request.json();
  } catch {
    return Response.json({ message: 'Invalid request body.' }, { status: 400 });
  }

  const { email, firstName, lastName, interests } = body;
  if (!email || typeof email !== 'string' || !email.includes('@')) {
    return Response.json({ message: 'A valid email address is required.' }, { status: 400 });
  }

  const apiKey = env.MAILCHIMP_API_KEY;
  const listId = env.MAILCHIMP_LIST_ID;
  if (!apiKey || !listId) {
    return Response.json(
      { message: 'Newsletter signup is not yet configured. Please check back soon.' },
      { status: 503 },
    );
  }

  const serverPrefix = apiKey.split('-').pop();
  if (!serverPrefix) {
    return Response.json({ message: 'Newsletter configuration error.' }, { status: 500 });
  }

  const tags: string[] = [];
  if (Array.isArray(interests)) {
    if (interests.includes('patient')) tags.push('Patient');
    if (interests.includes('carer')) tags.push('Carer');
    if (interests.includes('research')) tags.push('Research');
    if (interests.includes('events')) tags.push('Events');
  }

  const payload = {
    email_address: email.toLowerCase().trim(),
    status: 'subscribed',
    merge_fields: {
      ...(firstName ? { FNAME: firstName.trim() } : {}),
      ...(lastName ? { LNAME: lastName.trim() } : {}),
    },
    tags,
  };

  try {
    const mcRes = await fetch(`https://${serverPrefix}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    const data = (await mcRes.json()) as MailchimpResponse;

    if (mcRes.ok || data.title === 'Member Exists') {
      return Response.json({ success: true, message: mcRes.ok ? 'Subscribed successfully.' : 'Already subscribed.' });
    }

    return Response.json(
      { message: 'We could not complete your subscription. Please try again.' },
      { status: 502 },
    );
  } catch {
    return Response.json(
      { message: 'We could not complete your subscription. Please try again.' },
      { status: 502 },
    );
  }
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/newsletter/subscribe') {
      if (request.method !== 'POST') {
        return new Response('Method Not Allowed', { status: 405 });
      }
      return handleSubscribe(request, env);
    }

    return env.ASSETS.fetch(request);
  },
};
