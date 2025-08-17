'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function NewsletterSection() {
  return (
    <section className='bg-primary text-primary-foreground shadow-primary/30 rounded-t-3xl px-6 py-24 text-center shadow-md'>
      <h2 className='mb-4 text-3xl font-semibold'>Stay Updated</h2>
      <p className='mx-auto mb-10 max-w-xl leading-relaxed opacity-90'>
        Subscribe to our newsletter to receive the latest Meetora updates, tips,
        and exclusive offers directly in your inbox.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          alert('Thanks for subscribing!')
        }}
        className='mx-auto flex max-w-md flex-col gap-4 sm:flex-row'
      >
        <Input type='email' required placeholder='Your email address' />
        <Button type='submit' variant={'outline'}>
          Subscribe
        </Button>
      </form>
    </section>
  )
}
