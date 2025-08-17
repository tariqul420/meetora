'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        'Meetora transformed our hiring process and boosted team collaboration.',
      author: 'Sarah L.',
      role: 'Product Lead, TechCorp',
      image: '/avatars/sarah.jpg',
    },
    {
      quote: 'Scheduling and video interviews are now effortless and fast.',
      author: 'John D.',
      role: 'HR Manager, InnovateX',
      image: '/avatars/john.jpg',
    },
    {
      quote:
        'I love how easy it is to share feedback with my team in real time.',
      author: 'Emily K.',
      role: 'Recruitment Specialist, HireRight',
      image: '/avatars/emily.jpg',
    },
  ]

  const [testimonialIndex, setTestimonialIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((i: number) => (i + 1) % testimonials.length)
    }, 7000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const { quote, author, role, image } = testimonials[testimonialIndex]

  return (
    <section className='mx-auto max-w-4xl px-6 py-20 text-center'>
      <h2 className='mb-14 text-4xl font-bold'>What Our Users Say</h2>

      <figure className='mx-auto flex max-w-xl flex-col items-center space-y-8'>
        {/* Avatar */}
        <Avatar className='h-24 w-24 shadow-lg'>
          <AvatarImage src={image} alt={`${author} photo`} />
          <AvatarFallback>{author.split(' ')[0][0]}</AvatarFallback>
        </Avatar>

        {/* Quote Icon */}
        <Quote className='text-primary mx-auto h-8 w-8' />

        {/* Quote Text */}
        <blockquote className='text-muted-foreground text-lg italic'>{`“${quote}”`}</blockquote>

        {/* Author and Role */}
        <figcaption className='text-foreground mt-2 text-lg font-semibold'>
          {author}
          <span className='text-muted-foreground block text-sm font-normal'>
            {role}
          </span>
        </figcaption>
      </figure>

      {/* Pagination Dots */}
      <div className='mt-10 flex justify-center space-x-4'>
        {testimonials.map((_, i) => (
          <button
            key={i}
            aria-label={`Show testimonial ${i + 1}`}
            className={`focus:ring-primary h-4 w-4 rounded-full transition-colors focus:ring-2 focus:outline-none ${i === testimonialIndex ? 'bg-primary' : 'bg-muted-foreground hover:bg-primary/70'} `}
            onClick={() => setTestimonialIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
