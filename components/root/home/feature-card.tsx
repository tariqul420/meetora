'use client'

import { ReactNode } from 'react'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  children: ReactNode
}

export default function FeatureCard({
  icon,
  title,
  children,
}: FeatureCardProps) {
  return (
    <div className='bg-card cursor-default rounded-2xl p-8 shadow transition-shadow hover:shadow-lg'>
      {icon}
      <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
      <p className='text-muted-foreground'>{children}</p>
    </div>
  )
}
