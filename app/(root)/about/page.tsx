'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Sparkles } from 'lucide-react'
import Image from 'next/image'

const team = [
  {
    name: 'Tariqul Islam',
    role: 'Founder & Full Stack Engineer',
    image: '/avatars/tariqul.jpg',
  },
  {
    name: 'Sarah Lin',
    role: 'Product Designer',
    image: '/avatars/sarah.jpg',
  },
  {
    name: 'Jason Roy',
    role: 'AI/ML Engineer',
    image: '/avatars/jason.jpg',
  },
]

export default function AboutPage() {
  return (
    <div className='mx-auto max-w-6xl space-y-20 px-4 py-20'>
      {/* Hero */}
      <section className='space-y-4 text-center'>
        <div className='text-primary inline-flex items-center gap-2 text-sm font-medium'>
          <Sparkles className='h-4 w-4' />
          Empowering smarter interviews
        </div>
        <h1 className='text-4xl font-bold tracking-tight md:text-5xl'>
          About Meetora
        </h1>
        <p className='text-muted-foreground mx-auto max-w-2xl'>
          We help companies streamline the hiring process through structured,
          smart, and human-centered video interviews.
        </p>
        <Button size='lg' className='mt-4'>
          Try Meetora
        </Button>
      </section>

      {/* Story */}
      <section className='grid items-center gap-8 md:grid-cols-2'>
        <div>
          <h2 className='mb-4 text-2xl font-semibold'>Our Story</h2>
          <p className='text-muted-foreground leading-relaxed'>
            Meetora was founded to solve a real frustration — video interviews
            were clunky, inconsistent, and impersonal. Our team built a platform
            that puts both the recruiter and candidate experience first. From
            scheduling to evaluation, Meetora creates a seamless flow that helps
            teams hire smarter and faster.
          </p>
        </div>

        <Image
          src='/assets/about-illustration.svg'
          alt='Interview process illustration'
          width={800}
          height={600}
          className='h-auto w-full rounded-xl border'
        />
      </section>

      <Separator />

      {/* Values */}
      <section className='space-y-10 text-center'>
        <h2 className='text-2xl font-semibold'>Why We Built Meetora</h2>
        <div className='grid gap-8 md:grid-cols-3'>
          <div>
            <h3 className='text-lg font-semibold'>Remote-First Friendly</h3>
            <p className='text-muted-foreground'>
              Designed for global, async teams who need to interview across time
              zones.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Smart & Structured</h3>
            <p className='text-muted-foreground'>
              Evaluation tools, scorecards, and insights baked into your
              workflow.
            </p>
          </div>
          <div>
            <h3 className='text-lg font-semibold'>Built for Candidates</h3>
            <p className='text-muted-foreground'>
              No installs. Just a browser. A frictionless experience for every
              interviewee.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section>
        <h2 className='mb-6 text-center text-2xl font-semibold'>
          Meet the Team
        </h2>
        <div className='grid grid-cols-1 gap-8 text-center sm:grid-cols-2 md:grid-cols-3'>
          {team.map(({ name, role, image }) => (
            <div key={name} className='flex flex-col items-center space-y-3'>
              <Avatar className='ring-primary h-20 w-20 ring-2'>
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name[0]}</AvatarFallback>
              </Avatar>
              <div className='font-medium'>{name}</div>
              <div className='text-muted-foreground text-sm'>{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className='bg-muted space-y-4 rounded-xl p-10 text-center'>
        <h3 className='text-2xl font-semibold'>
          Want to work with us or have questions?
        </h3>
        <p className='text-muted-foreground'>We’d love to hear from you.</p>
        <Button variant='default' size='lg'>
          Contact Us
        </Button>
      </section>
    </div>
  )
}
