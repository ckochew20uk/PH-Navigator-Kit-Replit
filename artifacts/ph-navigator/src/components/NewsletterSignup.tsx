import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';

const INTERESTS = [
  { id: 'patient', label: 'Patient updates & news' },
  { id: 'carer', label: 'Carer resources' },
  { id: 'research', label: 'New research & treatments' },
  { id: 'events', label: 'Events & support groups' },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

interface Props {
  variant?: 'footer' | 'page';
}

export function NewsletterSignup({ variant = 'footer' }: Props) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [interests, setInterests] = useState<string[]>(['patient']);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const toggleInterest = (id: string) => {
    setInterests((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setErrorMessage('');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, firstName, lastName, interests }),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.message || 'Something went wrong. Please try again.');
        setStatus('error');
      } else {
        setStatus('success');
      }
    } catch {
      setErrorMessage('Unable to connect. Please check your connection and try again.');
      setStatus('error');
    }
  };

  const isFooter = variant === 'footer';

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        className={cn(
          'flex flex-col items-center text-center gap-3 py-6',
          isFooter ? 'text-primary-foreground' : 'text-foreground'
        )}
      >
        <CheckCircle className={cn('h-10 w-10', isFooter ? 'text-secondary' : 'text-secondary')} />
        <p className={cn('text-xl font-bold font-serif', isFooter ? 'text-white' : 'text-primary')}>
          You're on the list!
        </p>
        <p className={cn('text-base', isFooter ? 'text-primary-foreground/80' : 'text-foreground/70')}>
          Thank you for subscribing. You'll hear from us when we have news, resources, or events relevant to you.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <div>
          <Label
            htmlFor="nl-firstname"
            className={cn('text-sm font-semibold mb-1 block', isFooter ? 'text-primary-foreground/80' : 'text-foreground/80')}
          >
            First name
          </Label>
          <Input
            id="nl-firstname"
            type="text"
            placeholder="Margaret"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className={cn(
              'text-base rounded-lg',
              isFooter
                ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-secondary focus-visible:border-secondary'
                : 'bg-background border-border focus-visible:ring-primary'
            )}
          />
        </div>
        <div>
          <Label
            htmlFor="nl-lastname"
            className={cn('text-sm font-semibold mb-1 block', isFooter ? 'text-primary-foreground/80' : 'text-foreground/80')}
          >
            Last name
          </Label>
          <Input
            id="nl-lastname"
            type="text"
            placeholder="Thompson"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className={cn(
              'text-base rounded-lg',
              isFooter
                ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-secondary focus-visible:border-secondary'
                : 'bg-background border-border focus-visible:ring-primary'
            )}
          />
        </div>
      </div>

      <div className="mb-4">
        <Label
          htmlFor="nl-email"
          className={cn('text-sm font-semibold mb-1 block', isFooter ? 'text-primary-foreground/80' : 'text-foreground/80')}
        >
          Email address <span className="text-destructive">*</span>
        </Label>
        <Input
          id="nl-email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={cn(
            'text-base rounded-lg',
            isFooter
              ? 'bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-secondary focus-visible:border-secondary'
              : 'bg-background border-border focus-visible:ring-primary'
          )}
        />
      </div>

      <div className="mb-5">
        <p className={cn('text-sm font-semibold mb-2', isFooter ? 'text-primary-foreground/80' : 'text-foreground/80')}>
          I'm interested in:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {INTERESTS.map((interest) => (
            <label
              key={interest.id}
              className={cn(
                'flex items-center gap-2.5 cursor-pointer rounded-lg px-3 py-2 transition-colors',
                isFooter
                  ? 'hover:bg-white/10'
                  : 'hover:bg-muted',
                interests.includes(interest.id) && (isFooter ? 'bg-white/10' : 'bg-muted')
              )}
            >
              <Checkbox
                id={`nl-${interest.id}`}
                checked={interests.includes(interest.id)}
                onCheckedChange={() => toggleInterest(interest.id)}
                className={cn(
                  isFooter
                    ? 'border-white/40 data-[state=checked]:bg-secondary data-[state=checked]:border-secondary'
                    : 'border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary'
                )}
              />
              <span className={cn('text-sm', isFooter ? 'text-primary-foreground/90' : 'text-foreground/80')}>
                {interest.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {status === 'error' && (
          <motion.p
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-300 mb-3"
          >
            {errorMessage}
          </motion.p>
        )}
      </AnimatePresence>

      <Button
        type="submit"
        disabled={status === 'loading' || !email}
        className={cn(
          'w-full h-11 text-base font-semibold rounded-lg gap-2',
          isFooter
            ? 'bg-secondary hover:bg-secondary/90 text-white'
            : 'bg-destructive hover:bg-destructive/90 text-white'
        )}
      >
        {status === 'loading' ? (
          <><Loader2 className="h-4 w-4 animate-spin" /> Subscribing...</>
        ) : (
          <><Mail className="h-4 w-4" /> Subscribe</>
        )}
      </Button>

      <p className={cn('text-xs mt-3 leading-relaxed', isFooter ? 'text-primary-foreground/50' : 'text-foreground/50')}>
        We respect your privacy. Unsubscribe at any time. PH Navigator does not share your details with third parties. See our Privacy Policy.
      </p>
    </form>
  );
}
