import { DashboardSidebar } from '@/components/dashboard/dashboard-sidebar'
import { ModeToggle } from '@/components/global/mode-toggle'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { sidebar } from '@/constant/dashboard'
import { ChildrenProps } from '@/types'
import { auth } from '@clerk/nextjs/server'

type Role = keyof typeof sidebar

export default async function DashboardLayout({ children }: ChildrenProps) {
  const { sessionClaims } = await auth()
  const role = (sessionClaims?.role as Role) || undefined

  return (
    <SidebarProvider>
      {role && <DashboardSidebar menu={sidebar[role]} />}
      <main className='flex-1'>
        <nav className='dark:bg-dark-lite bg-light sticky top-0 z-[20] flex w-full items-center justify-between gap-4 px-4 py-3 shadow-sm'>
          <SidebarTrigger className='cursor-pointer' />
          <div className='flex items-center gap-4'>
            <ModeToggle />
          </div>
        </nav>
        <div className='@container/main w-full px-4 py-4 lg:px-6'>
          {children}
        </div>
      </main>
    </SidebarProvider>
  )
}
