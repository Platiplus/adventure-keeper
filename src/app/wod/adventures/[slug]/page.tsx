import { User, Users, Calendar, MapPin, Clock, Sword, Shield, Scroll } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { AdventuresWodApi } from '@/api/server/wod/adventure-wod.api'
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

import Image from 'next/image'
import dayjs from 'dayjs'
import { TagsApi } from '@/api/server/common/tags.api'
import { UserProfilesApi } from '@/api/server/common/profiles.api'
import logger from '@/lib/logger'

type AdventureSummaryPageProps = {
  params: Promise<{ slug: string }>
}

const AdventureSummaryPage = async ({ params }: AdventureSummaryPageProps) => {
  const slug = (await params).slug
  
  const adventuresApi = await AdventuresWodApi()
  const tagsApi = await TagsApi()
  const userProfilesApi = await UserProfilesApi()

  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/')
  }

  const adventure = await adventuresApi.getBySlug(slug);

  if (!adventure) redirect('/wod/adventures')

  const adventureTags = adventure.tags ? await tagsApi.listBySlug(adventure.tags) : []
  const dgMaster = await userProfilesApi.getById(adventure?.dg_master_id)

  return (
    <div className="max-w-4xl mx-auto space-y-8 px-4">
      <div className="relative h-48 sm:h-64 md:h-80 w-full rounded-xl overflow-hidden">
        <Image
          src={adventure.image_url!}
          alt={adventure.name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-3xl sm:text-4xl font-bold">{adventure.name}</h1>
          <div className="flex flex-wrap gap-2">
            <Badge variant={adventure.is_active ? "default" : "secondary"}>
              {adventure.is_active ? "Active" : "Inactive"}
            </Badge>
            <Badge variant={adventure.looking_for_players ? "default" : "outline"}>
              {adventure.looking_for_players ? "Looking for Players" : "Party Full"}
            </Badge>
          </div>
        </div>
        <p className="text-xl text-muted-foreground">{adventure.short_description}</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Adventure Details</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            <span>Start Date: {dayjs().format('MMMM DD, YYYY')}</span> {/* Placeholder: this will be the date of the first session */}
          </div>
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <span>Session duration: {adventure.session_duration} {adventure.session_duration === 1 ? "hour" : "hours"}</span>
          </div>
          <div className="flex items-center">
            <Users className="mr-2 h-4 w-4" />
            <span>Players: {3}/{adventure.max_players}</span> {/* Placeholder: this will be the number of players linked with the adventure / adventure max players */}
          </div>
          <div className="flex items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Storyteller: {dgMaster?.user_name}</span>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Adventure Description</h2>
        <p className="text-muted-foreground whitespace-pre-line">{adventure.long_description}</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-4">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {adventureTags.map((tag) => (
            <Badge key={tag.id} variant="outline">{tag.name}</Badge>
          ))}
        </div>
      </div>

      <Separator />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <Button size="lg" disabled={!adventure.looking_for_players}>
          {adventure.looking_for_players ? "Ask to join Adventure" : "Party Full"}
        </Button>
        <div className="flex items-center text-muted-foreground">
          <Shield className="mr-2 h-4 w-4" />
          <span>Adventure Slug: {slug}</span>
        </div>
      </div>
    </div>
  )
}

export default AdventureSummaryPage