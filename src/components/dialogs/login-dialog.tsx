import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { LoginForm } from '../forms/login-form'
import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog'

export const LoginDialog = () => {
  return (
    <Dialog>
      <VisuallyHidden asChild>
        <DialogTitle>Login</DialogTitle>
      </VisuallyHidden>
      <VisuallyHidden asChild>
        <DialogDescription>Choose your preferred login method</DialogDescription>
      </VisuallyHidden>
      <DialogTrigger asChild>
        <Button>Login</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <LoginForm />
      </DialogContent>
    </Dialog>
  )
}
