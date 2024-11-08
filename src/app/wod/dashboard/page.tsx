import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

const DashboardPage = async () => {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/')
  }


  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
    </div>
  )
}

export default DashboardPage
