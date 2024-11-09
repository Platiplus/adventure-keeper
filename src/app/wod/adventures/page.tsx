import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import { AdventuresWodApi } from '@/api/server/wod/adventure-wod.api'
import { User, Calendar } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { WodAdventureDialog } from '@/components/dialogs/wod-adventure-dialog'

import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import { TagsApi } from '@/api/server/common/tags.api'

const AdventuresPage = async () => {
  const adventuresApi = await AdventuresWodApi()
  const tagsApi = await TagsApi()
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return redirect('/')
  }

  const adventures = await adventuresApi.listAll();
  const adventureTags = await tagsApi.listAll();

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Adventures</h1>
        <WodAdventureDialog tags={adventureTags}/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {adventures.map((adventure) => (
          <Link key={adventure.id} href={`/wod/adventures/${adventure.slug}`}>
            <Card key={adventure.id} className="cursor-pointer hover:bg-accent transition-colors">
              <CardHeader>
                <CardTitle className='text-primary'>{adventure.name}</CardTitle>
                <CardDescription>{adventure.short_description}</CardDescription>
                <Image className='w-full mt-20' src={adventure.image_url ?? ""} width={600} height={400} alt={adventure.name} />
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>4 players</span>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>Last played: {dayjs().format('MMMM DD, YYYY')}</span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default AdventuresPage
