'use client'

import * as React from 'react'
import { BookOpen, Frame, Eye, Settings2, SquareTerminal } from 'lucide-react'
import { GiDiceTwentyFacesTwenty } from 'react-icons/gi'
import { NavUser } from '@/components/sidebar/nav-user'
import { TeamSwitcher } from '@/components/sidebar/team-switcher'
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarRail, SidebarTrigger } from '@/components/ui/sidebar'
import { useEffect, useState } from 'react'
import { UserProfile } from '@/lib/application.types'
import { UserProfilesApi } from '@/api/client/user/profile.api'
import { NavGroup } from './nav-group'
import { DashboardIcon } from '@radix-ui/react-icons'

// This is sample data.

const data = {
  user: {
    name: 'shadcn',
    email: 'm@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'World of Darkness',
      logo: Eye,
      plan: 'Storytelling',
    },
  ],
  dungeonMaster: [
    {
      name: 'Dashboard',
      url: '/cod/dashboard',
      icon: <DashboardIcon />,
    },
    {
      name: 'Adventures',
      url: '/cod/adventures',
      icon: <GiDiceTwentyFacesTwenty />,
    },
  ],
  navMain: [
    {
      title: 'Adventures',
      url: '#',
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: 'History',
          url: '#',
        },
        {
          title: 'Starred',
          url: '#',
        },
        {
          title: 'Settings',
          url: '#',
        },
      ],
    },
    {
      title: 'Documentation',
      url: '#',
      icon: BookOpen,
      items: [
        {
          title: 'Introduction',
          url: '#',
        },
      ],
    },
    {
      title: 'Settings',
      url: '#',
      icon: Settings2,
      items: [
        {
          title: 'General',
          url: '#',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Design Engineering',
      url: '#',
      icon: Frame,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<UserProfile | null>(null)
  const { getUserProfile } = UserProfilesApi()

  useEffect(() => {
    const fetchUserProfile = async () => {
      const profile = await getUserProfile()
      setUser(profile)
      setLoading(false)
    }

    fetchUserProfile()
  }, [])

  return (
    <>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher teams={data.teams} />
        </SidebarHeader>
        <SidebarContent>
          <NavGroup title="Dungeon Master" items={data.dungeonMaster} />
        </SidebarContent>
        <SidebarFooter>{loading ? <></> : <NavUser user={user} />}</SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarTrigger />
    </>
  )
}
