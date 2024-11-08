import { AppSidebar } from '@/components/sidebar/app-sidebar'
import { SidebarProvider } from '@/components/ui/sidebar'

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <div className="w-full">{children}</div>
    </SidebarProvider>
  )
}
