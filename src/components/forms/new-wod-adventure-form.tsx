'use client'

import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useAction } from 'next-safe-action/hooks'
import { createWodAdventure } from '@/actions/adventure/wod/create-adventure'
import { toast } from '@/hooks/use-toast'
import * as z from 'zod'

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  short_description: z.string().max(500, {
    message: 'Short description must not exceed 500 characters.',
  }),
  image: z.instanceof(File).optional(),
  looking_for_players: z.boolean().default(false),
  is_active: z.boolean().default(false),
  slug: z.string(),
})

const NewWodAdventureForm = () => {
  const [slug, setSlug] = useState('')
  const { execute, isPending } = useAction(createWodAdventure, {
    onSuccess: () => {
      toast({
        title: 'Adventure created!',
        description: 'Your adventure has been successfully created.',
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

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      short_description: '',
      looking_for_players: false,
      is_active: false,
      slug: '',
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

    execute(adventureData)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 xs:px-4 sm:px-1 xs:overflow-auto">
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

        <Button loading={isPending} className="xs:w-full" type="submit">
          Create Adventure
        </Button>
      </form>
    </Form>
  )
}

export default NewWodAdventureForm
