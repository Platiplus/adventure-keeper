'use client'

import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAction } from 'next-safe-action/hooks'
import { createCodAdventure } from '@/actions/adventure/cod/create-adventure'
import { toast } from '@/hooks/use-toast'
import * as z from 'zod'
import { CodAdventure, Tag } from '@/lib/application.types'
import { updateCodAdventure } from '@/actions/adventure/cod/update-adventure'
import { deleteCodAdventure } from '@/actions/adventure/cod/delete-adventure'
import { redirect } from 'next/navigation'

const formSchema = z.object({
  id: z.number().int().positive().optional(),
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  short_description: z.string().max(500, {
    message: 'Short description must not exceed 500 characters.',
  }),
  long_description: z.string().optional(),
  image: z.instanceof(File).optional(),
  image_url: z.string().optional(),
  looking_for_players: z.boolean().default(false),
  is_active: z.boolean().default(false),
  slug: z.string(),
  max_players: z.number().int().positive(),
  session_duration: z.number().int().positive(),
  tags: z.array(z.string()).optional(),
})

type AdventureFormProps = {
  adventure?: CodAdventure
  tags?: Tag[]
}

export const CodAdventureForm = ({ adventure, tags }: AdventureFormProps = {}) => {
  const [slug, setSlug] = useState('')
  const isEditing = !!adventure

  const { execute, isPending } = useAction(isEditing ? updateCodAdventure : createCodAdventure, {
    onSuccess: () => {
      toast({
        title: isEditing ? 'Adventure updated!' : 'Adventure created!',
        description: isEditing ? 'Your adventure has been successfully updated.' : 'Your adventure has been successfully created.',
      })
    },
    onError: ({ error }) => {
      toast({
        title: 'Error',
        description: error.serverError,
        variant: 'destructive',
      })
    },
  })

  const { execute: executeDelete, isPending: isPendingDelete } = useAction(deleteCodAdventure, {
    onSuccess: () => {
      toast({
        title: 'Adventure deleted!',
        description: 'Your adventure has been successfully deleted.',
      })
      redirect('/cod/adventures')
    },
    onError: ({ error }) => {
      toast({
        title: 'Error',
        description: error.serverError,
        variant: 'destructive',
      })
    },
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: adventure?.name || '',
      short_description: adventure?.short_description || '',
      long_description: adventure?.long_description || '',
      looking_for_players: adventure?.looking_for_players || false,
      is_active: adventure?.is_active || false,
      slug: adventure?.slug || '',
      image_url: adventure?.image_url || '',
      max_players: adventure?.max_players || 4,
      session_duration: adventure?.session_duration || 3,
      tags: adventure?.tags || [],
    },
  })

  const generateSlug = (name: string) => {
    return name
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const adventureData = {
      ...values,
      image: values.image,
      slug: slug,
    }

    if (isEditing) {
      adventureData.id = adventure?.id
    }

    execute(adventureData)
  }

  useEffect(() => {
    if (adventure) {
      Object.entries(adventure).forEach(([key, value]) => {
        form.setValue(key as keyof z.infer<typeof formSchema>, value !== null ? value : undefined)
      })
      setSlug(adventure.slug)
    }
  }, [adventure, form])

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mx-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adventure Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onChange={(e) => {
                    field.onChange(e)
                    const newSlug = generateSlug(e.target.value)
                    setSlug(newSlug)
                    form.setValue('slug', newSlug)
                  }}
                />
              </FormControl>
              <FormDescription>Enter the name of your adventure.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="short_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
              <FormDescription>Provide a brief description of your adventure (max 500 characters).</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="long_description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Long Description</FormLabel>
              <FormControl>
                <Textarea {...field} rows={10} />
              </FormControl>
              <FormDescription>Provide a detailed description of your adventure. HTML is allowed for formatting.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Adventure Image</FormLabel>
              <FormControl>
                <Input type="file" accept="image/*" onChange={(e) => field.onChange(e.target.files?.[0])} />
              </FormControl>
              <FormDescription>Upload an image for your adventure.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="max_players"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Players</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10))} />
              </FormControl>
              <FormDescription>Enter the maximum number of players for this adventure.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="session_duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Session Duration (hours)</FormLabel>
              <FormControl>
                <Input type="number" {...field} onChange={(e) => field.onChange(parseInt(e.target.value, 10))} />
              </FormControl>
              <FormDescription>Enter the estimated duration of a session in hours.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="tags"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel>Tags</FormLabel>
                <FormDescription>Select tags that best describe your adventure.</FormDescription>
              </div>
              <ScrollArea className="h-72 w-full rounded-md border">
                <div className="flex flex-col gap-4 p-4">
                  {(tags || []).map((tag) => (
                    <FormField
                      key={tag.id}
                      control={form.control}
                      name="tags"
                      render={({ field }) => {
                        return (
                          <FormItem key={tag.id} className="flex flex-row items-start space-x-3 space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(tag.slug)}
                                onCheckedChange={(checked) => {
                                  const fieldValue = field.value || []
                                  return checked ? field.onChange([...fieldValue, tag.slug]) : field.onChange(field.value?.filter((value) => value !== tag.slug))
                                }}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{tag.name} <span className='text-xs text-muted-foreground'>({tag.description})</span></FormLabel>
                          </FormItem>
                        )
                      }}
                    />
                  ))}
                </div>
              </ScrollArea>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="looking_for_players"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5" />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Looking for Players</FormLabel>
                <FormDescription>Check this if you want to advertise your adventure on public channels.</FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="is_active"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} className="w-5 h-5" />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>Active Adventure</FormLabel>
                <FormDescription>Check this if the adventure is ongoing. Uncheck for draft mode.</FormDescription>
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input {...field} disabled value={slug} />
              </FormControl>
              <FormDescription>
                This is the URL-friendly version of your adventure name. It's generated automatically along with a small hash at the end for uniqueness.
              </FormDescription>
            </FormItem>
          )}
        />

        <div className='flex flex-col gap-2'>
        <Button loading={isPending} className="xs:w-full" type="submit">
          {isEditing ? 'Update Adventure' : 'Create Adventure'}
        </Button>
        {isEditing && (
          <Button loading={isPendingDelete} variant="destructive" className="xs:w-full" onClick={() => executeDelete({ id: adventure?.id })}>
            Delete Adventure
          </Button>
        )}
        </div>
      </form>
    </Form>
  )
}
