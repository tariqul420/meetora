'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className='bg-background px-4 py-24 sm:px-6 lg:px-8'>
      <div className='mx-auto max-w-7xl space-y-20'>
        {/* Hero Section */}
        <section className='mx-auto max-w-3xl space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl'>Let’s connect 👋</h1>
          <p className='text-muted-foreground text-lg'>
            Whether you have a question about features, pricing, demo, or
            anything else — our team is ready to answer.
          </p>
        </section>

        {/* Main Contact Layout */}
        <section className='grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-20'>
          {/* Left: Contact Info */}
          <div className='space-y-10'>
            <div className='space-y-4'>
              <h2 className='text-2xl font-semibold'>Contact Information</h2>
              <p className='text-muted-foreground'>
                Feel free to reach out directly or through the form.
              </p>

              <ul className='text-muted-foreground space-y-3 text-sm'>
                <li className='flex items-center gap-3'>
                  <Mail className='text-primary h-5 w-5' />
                  <span>support@tariqul.dev</span>
                </li>
                <li className='flex items-center gap-3'>
                  <Phone className='text-primary h-5 w-5' />
                  <span>+880 123-456-7890</span>
                </li>
                <li className='flex items-center gap-3'>
                  <MapPin className='text-primary h-5 w-5' />
                  <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </div>

            {/* Google Maps Embed Placeholder */}
            <div className='border-border h-64 overflow-hidden rounded-xl border'>
              <iframe
                title='Meetora Location'
                src='https://maps.google.com/maps?q=Dhaka,%20Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed'
                className='h-full w-full contrast-125 grayscale dark:brightness-75'
                loading='lazy'
              />
            </div>

            <div className='bg-muted/60 rounded-xl p-6 text-center'>
              <h3 className='mb-2 text-lg font-semibold'>Prefer email?</h3>
              <p className='text-muted-foreground text-sm'>
                Send us a message at{' '}
                <a href='mailto:support@tariqul.dev' className='underline'>
                  support@tariqul.dev
                </a>
              </p>
            </div>
          </div>

          {/* Right: Contact Form */}
          <form className='bg-card space-y-6 rounded-2xl border p-8 shadow-sm'>
            <h2 className='mb-2 text-2xl font-semibold'>Send Us a Message</h2>

            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div className='space-y-1'>
                <label htmlFor='firstName' className='text-sm font-medium'>
                  First Name
                </label>
                <Input id='firstName' placeholder='Jane' required />
              </div>

              <div className='space-y-1'>
                <label htmlFor='lastName' className='text-sm font-medium'>
                  Last Name
                </label>
                <Input id='lastName' placeholder='Doe' required />
              </div>
            </div>

            <div className='space-y-1'>
              <label htmlFor='email' className='text-sm font-medium'>
                Email Address
              </label>
              <Input
                type='email'
                id='email'
                placeholder='you@example.com'
                required
              />
            </div>

            <div className='space-y-1'>
              <label htmlFor='subject' className='text-sm font-medium'>
                Subject
              </label>
              <Input
                id='subject'
                placeholder='e.g. Bug report, Pricing, Help...'
              />
            </div>

            <div className='space-y-1'>
              <label htmlFor='message' className='text-sm font-medium'>
                Your Message
              </label>
              <Textarea
                id='message'
                rows={6}
                placeholder='Write your message here...'
                required
              />
            </div>

            <Button size='lg' className='mt-4 w-full'>
              <Send className='mr-2 h-4 w-4' />
              Send Message
            </Button>
          </form>
        </section>
      </div>
    </div>
  )
}
