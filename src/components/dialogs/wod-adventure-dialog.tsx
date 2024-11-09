'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { WodAdventureForm } from '@/components/forms/wod-adventure-form'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
import { useState } from 'react'
import { Adventure, Tag } from '@/lib/application.types'

type AdventureFormProps = {
  adventure?: Adventure
  tags?: Tag[]
}

export const WodAdventureDialog = ({ adventure, tags }: AdventureFormProps = {}) => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()
  const isEditing = !!adventure

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button size={isEditing ? 'sm' : 'default'} variant="secondary">{isEditing ? 'Edit Adventure' : 'New Adventure'}</Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[90%]">
          <DrawerHeader className="text-left">
            <DialogTitle>
              {isEditing ? 'Edit Adventure' : 'New Adventure'} <span className="text-primary">[ World of Darkness ]</span>
            </DialogTitle>
            <DrawerDescription>Provide details about your new World of Darkness adventure.</DrawerDescription>
          </DrawerHeader>
          <div className="overflow-y-auto">
            <WodAdventureForm adventure={adventure} tags={tags} />
          </div>
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={isEditing ? 'sm' : 'default'} variant="secondary">{isEditing ? 'Edit Adventure' : 'New Adventure'}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {isEditing ? 'Edit Adventure' : 'New Adventure'} <span className="text-primary">[ World of Darkness ]</span>
          </DialogTitle>
          <DialogDescription>Provide details about your new World of Darkness adventure.</DialogDescription>
        </DialogHeader>
        <ScrollArea className="sm:h-[680px] w-full">
          <WodAdventureForm adventure={adventure} tags={tags} />
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
