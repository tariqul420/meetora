import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const faqs = [
  {
    question: 'How do I join an interview?',
    answer:
      'After logging in, go to your Dashboard and click on the “Join” button next to the scheduled interview. Make sure your mic and camera are allowed in your browser.',
  },
  {
    question: 'I can’t access my camera or microphone',
    answer:
      'Please check browser permissions. Meetora needs access to your mic and camera to run interviews. Use Chrome or Firefox for best compatibility.',
  },
  {
    question: 'How do I schedule an interview?',
    answer:
      'If you are a recruiter, go to the "Create Interview" page, choose date/time, and invite candidates by email. They’ll receive a join link.',
  },
  {
    question: 'Can I reschedule an interview?',
    answer:
      'Yes, as a recruiter you can edit the interview details from the interview detail page. The candidate will be notified automatically.',
  },
  {
    question: 'Is Meetora free?',
    answer:
      'Yes! Meetora has a free plan for individuals. Paid plans unlock unlimited interviews, custom branding, and team analytics.',
  },
]

export default function HelpPage() {
  return (
    <div className='mx-auto max-w-3xl space-y-12 px-4 py-16'>
      {/* Header */}
      <section className='space-y-4 text-center'>
        <h1 className='text-4xl font-bold'>Help Center</h1>
        <p className='text-muted-foreground'>
          Find answers to your questions or reach out to our support team.
        </p>
        <div className='mt-4 flex justify-center'>
          <Input
            placeholder='Search for answers...'
            className='w-full max-w-md'
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className='mb-6 text-2xl font-semibold'>
          Frequently Asked Questions
        </h2>
        <Accordion type='single' collapsible className='w-full space-y-2'>
          {faqs.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* Contact CTA */}
      <section className='bg-muted space-y-4 rounded-xl px-6 py-10 text-center'>
        <h3 className='text-xl font-semibold'>Still need help?</h3>
        <p className='text-muted-foreground'>
          Can’t find your answer? Our team is here to support you.
        </p>
        <Button variant='default' size='lg'>
          Contact Support
        </Button>
      </section>
    </div>
  )
}
