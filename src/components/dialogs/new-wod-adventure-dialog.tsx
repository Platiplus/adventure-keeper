'use client'

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTrigger } from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { useIsMobile } from '@/hooks/use-mobile'
import { useState } from 'react'
import NewWodAdventureForm from '../forms/new-wod-adventure-form'

export const NewWodAdventureDialog = () => {
  const [open, setOpen] = useState(false)
  const isMobile = useIsMobile()

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">New Adventure</Button>
        </DrawerTrigger>
        <DrawerContent className='max-h-[90%]'>
          <DrawerHeader className="text-left">
            <DialogTitle>
              New Adventure <span className="text-primary">[ World of Darkness ]</span>
            </DialogTitle>
            <DrawerDescription>Provide details about your new World of Darkness adventure.</DrawerDescription>
          </DrawerHeader>
          <NewWodAdventureForm />
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
        <Button variant="outline">New Adventure</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            New Adventure <span className="text-primary">[ World of Darkness ]</span>
          </DialogTitle>
          <DialogDescription>Provide details about your new World of Darkness adventure.</DialogDescription>
        </DialogHeader>
        <NewWodAdventureForm />
      </DialogContent>
    </Dialog>
  )
}
