import PricingCards from '@/components/root/pricing-cards'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

const faq = [
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, you can cancel your subscription from your account dashboard anytime without penalty.',
  },
  {
    question: 'Is there a free trial?',
    answer:
      'Absolutely! The Pro plan includes a 7-day free trial with no credit card required.',
  },
  {
    question: 'Do you offer discounts for nonprofits or students?',
    answer:
      'Yes, we offer special pricing. Please contact our support team for eligibility.',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept all major credit cards. For Enterprise, invoicing is also available.',
  },
]

export default function PricingPage() {
  return (
    <div className='mx-auto max-w-6xl space-y-24 px-4 py-16'>
      {/* Hero Section */}
      <section className='space-y-4 text-center'>
        <h1 className='text-4xl font-bold md:text-5xl'>
          Pricing that fits your team
        </h1>
        <p className='text-muted-foreground text-lg'>
          Start for free, upgrade as you grow. No contracts, cancel anytime.
        </p>
      </section>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Feature Comparison Table */}
      <section>
        <h2 className='mb-6 text-center text-2xl font-bold'>Compare Plans</h2>
        <div className='overflow-x-auto'>
          <table className='border-border w-full rounded-lg border text-sm'>
            <thead>
              <tr className='bg-muted text-left'>
                <th className='p-3 font-semibold'>Feature</th>
                <th className='p-3'>Free</th>
                <th className='p-3'>Pro</th>
                <th className='p-3'>Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Recruiter Seats', '1', '5', 'Unlimited'],
                ['Monthly Interviews', '5', 'Unlimited', 'Unlimited'],
                ['Custom Branding', '-', '✓', '✓'],
                ['Team Roles & Permissions', '-', '-', '✓'],
                ['Priority Support', '-', '✓', '✓'],
                ['SSO Integration', '-', '-', '✓'],
              ].map(([feature, free, pro, enterprise]) => (
                <tr key={feature} className='border-t'>
                  <td className='p-3'>{feature}</td>
                  <td className='p-3 text-center'>{free}</td>
                  <td className='p-3 text-center'>{pro}</td>
                  <td className='p-3 text-center'>{enterprise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className='mb-6 text-center text-2xl font-bold'>
          Frequently Asked Questions
        </h2>
        <Accordion
          type='single'
          collapsible
          className='mx-auto w-full max-w-2xl'
        >
          {faq.map(({ question, answer }) => (
            <AccordionItem key={question} value={question}>
              <AccordionTrigger>{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* CTA Section */}
      <section className='bg-muted space-y-4 rounded-2xl p-8 text-center'>
        <h3 className='text-2xl font-semibold'>
          Ready to start interviewing smarter?
        </h3>
        <p className='text-muted-foreground'>
          Create your account and run your first interview in minutes.
        </p>
        <Button size='lg'>Get Started</Button>
      </section>
    </div>
  )
}
