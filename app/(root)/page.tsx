import FeatureCard from '@/components/root/home/feature-card'
import HowItWork from '@/components/root/home/how-it-work'
import NewsletterSection from '@/components/root/home/newsletter-section'
import TestimonialSection from '@/components/root/home/testimonial-section'
import PricingCards from '@/components/root/pricing-cards'
import { Button } from '@/components/ui/button'
import { CalendarDays, Users2, Video } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className='bg-primary text-primary-foreground mt-10 rounded-md px-6 py-28'>
        <div className='mx-auto max-w-4xl space-y-8 text-center'>
          <h1 className='text-5xl leading-tight font-extrabold tracking-tight md:text-6xl'>
            Smarter Interviews. <br /> Better Hiring.
          </h1>
          <p className='text-primary-foreground/90 mx-auto max-w-3xl text-lg md:text-xl'>
            Conduct structured, unbiased interviews with built-in video,
            scheduling, and collaboration — all in one platform.
          </p>

          <div className='mt-8 flex flex-col flex-wrap justify-center gap-5 sm:flex-row'>
            <Link href={'/sign-in'}>
              <Button size='lg' variant='outline'>
                Get Started Free
              </Button>
            </Link>
            <Link href={'/pricing'}>
              <Button variant='outline' size='lg'>
                Book a Demo
              </Button>
            </Link>
          </div>
          {/* EduGenius Button */}
          <Link
            href='https://edu-genius.vercel.app'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex'
          >
            <Button size='lg' variant='secondary'>
              Explore EduGenius
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className='mx-auto max-w-7xl px-6 py-20'>
        <h2 className='mb-16 text-center text-4xl font-semibold'>
          Why Meetora?
        </h2>
        <div className='grid gap-14 text-center md:grid-cols-3'>
          <FeatureCard
            icon={<Video className='text-primary mx-auto mb-4 h-12 w-12' />}
            title='Built-In Video'
          >
            Conduct interviews directly in your browser — no downloads or
            plugins needed.
          </FeatureCard>
          <FeatureCard
            icon={
              <CalendarDays className='text-primary mx-auto mb-4 h-12 w-12' />
            }
            title='Smart Scheduling'
          >
            Auto detect time zones, sync calendars, and send automatic
            reminders.
          </FeatureCard>
          <FeatureCard
            icon={<Users2 className='text-primary mx-auto mb-4 h-12 w-12' />}
            title='Team Collaboration'
          >
            Share notes, feedback, and evaluate candidates together in real
            time.
          </FeatureCard>
        </div>
      </section>

      {/* How It Works */}
      <HowItWork />

      {/* Pricing Teaser */}
      <section className='bg-background py-20'>
        <div className='mx-auto max-w-6xl space-y-6 text-center'>
          <h2 className='text-5xl font-bold'>Simple Pricing</h2>
          <p className='text-muted-foreground mx-auto max-w-xl'>
            Transparent plans for teams of any size. Try Meetora free for 14
            days.
          </p>
          <PricingCards />
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Newsletter Signup */}
      <NewsletterSection />

      {/* Call to Action */}
      <section className='bg-muted/80 shadow-muted/50 rounded-b-3xl px-6 py-24 text-center shadow-inner'>
        <h2 className='mb-5 text-4xl font-extrabold'>Ready to Hire Smarter?</h2>
        <p className='text-muted-foreground mx-auto mb-10 max-w-xl text-lg leading-relaxed'>
          Join thousands of teams using Meetora for structured, remote-first
          interviews. Simplify your hiring workflow today.
        </p>
        <Link href={'/sign-up'}>
          <Button
            size='lg'
            className='px-10 py-5 shadow-lg transition hover:shadow-xl'
          >
            Create Your Free Account
          </Button>
        </Link>
      </section>
    </>
  )
}
