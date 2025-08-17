export default function HowItWork() {
  return (
    <section className='bg-muted/50 px-6 py-20'>
      <h2 className='mb-16 text-center text-4xl font-bold'>How It Works</h2>

      <div className='relative mx-auto flex max-w-5xl flex-col items-center justify-between gap-10 md:flex-row'>
        {/* Timeline Line */}
        <div className='bg-primary/30 absolute top-1/2 right-8 left-8 -z-10 hidden h-1 translate-y-1/2 rounded-full md:block'></div>

        <Step
          number={1}
          title='Schedule'
          description='Add candidates, select time slots, and generate interview links.'
        />
        <Step
          number={2}
          title='Interview'
          description='Conduct video interviews with built-in notes and timers.'
        />
        <Step
          number={3}
          title='Evaluate'
          description='Collect feedback instantly from your team, all in one place.'
        />
      </div>
    </section>
  )
}

// Step Component for How it Works
function Step({
  number,
  title,
  description,
}: {
  number: number
  title: string
  description: string
}) {
  return (
    <div className='relative mx-auto flex max-w-xs flex-col items-center text-center'>
      {/* Circle with number */}
      <div className='bg-primary text-primary-foreground relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold shadow-md'>
        {number}
      </div>

      {/* Content */}
      <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
      <p className='text-muted-foreground'>{description}</p>
    </div>
  )
}
