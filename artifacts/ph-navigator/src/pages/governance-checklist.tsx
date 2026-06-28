import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const checklistItems = [
  {
    title: 'Newsletter consent wording',
    detail: 'Confirm every newsletter form clearly explains what subscribers will receive, how often they may hear from PH Navigator, and that subscribing is optional.'
  },
  {
    title: 'Mailchimp data handling',
    detail: 'Document that newsletter email addresses and interest preferences are sent to Mailchimp for list management, and confirm Mailchimp settings match the published privacy commitments.'
  },
  {
    title: 'Unsubscribe process',
    detail: 'Verify every email includes an unsubscribe link, unsubscribe requests are honoured promptly, and support contacts know how to remove someone manually if needed.'
  },
  {
    title: 'Privacy policy review',
    detail: 'Review the Privacy Policy before launch so it covers newsletter collection, Community Voices submissions, health information, third-party services, and contact pathways.'
  },
  {
    title: 'Patient story consent forms',
    detail: 'Use written consent forms before collecting, editing, or publishing patient stories, photos, quotes, diagnosis details, or other identifiable personal or health information.'
  },
  {
    title: 'Story withdrawal process',
    detail: 'Create a clear process for contributors to request edits or withdrawal of their story, including who receives the request and expected response timeframes.'
  },
  {
    title: 'Content moderation',
    detail: 'Assign reviewers to check Community Voices content for consent, respectful tone, privacy risks, medical claims, crisis language, and suitability before publication.'
  },
  {
    title: 'Data retention',
    detail: 'Set retention periods for newsletter records, consent forms, draft submissions, published story files, and withdrawn content, including secure deletion steps.'
  },
  {
    title: 'Access to submitted personal/health information',
    detail: 'List the roles or named teams allowed to access submitted personal or health information, limit access to those who need it, and review permissions regularly.'
  }
];

export default function GovernanceChecklist() {
  return (
    <div className="w-full">
      <section className="bg-muted py-12 md:py-20 border-b border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wide mb-3">Phase 1 governance</p>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Launch governance checklist</h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
            A working checklist for privacy, consent, newsletter handling, and Community Voices safeguards before Phase 1 launch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-accent/10 border border-accent/20 p-5 rounded-lg mb-10 text-foreground/75 leading-relaxed">
            This checklist is an operational planning aid and should be reviewed with the Privacy Policy, Terms of Use, and Community Voices publishing workflow before public launch.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {checklistItems.map((item) => (
              <Card key={item.title} className="h-full border-l-4 border-l-secondary">
                <CardHeader className="pb-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 text-secondary mt-1 shrink-0" />
                    <h2 className="text-xl font-serif font-bold text-primary">{item.title}</h2>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/75 leading-relaxed">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
