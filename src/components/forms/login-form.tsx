'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { FullLogo } from '@/components/common/logo/full-logo'
import { useAction } from 'next-safe-action/hooks'
import { GitHubIcon } from '@/components/icons/github'
import { GoogleIcon } from '../icons/google'
import { loginWithProvider } from '@/actions/login/login-with-provider'

export const LoginForm = () => {
  const { toast } = useToast()

  const { execute, isPending } = useAction(loginWithProvider, {
    onError: () => {
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.',
      })
    },
  })

  return (
    <div className="w-full flex items-center justify-center pt-0 px-4 bg-background">
      <div className="w-full max-w-[400px]">
        <header className="flex flex-col space-y-1.5 p-6">
          <div className="flex flex-col items-center mb-4">
            <FullLogo variant="icon" width={100} height={100} className="mb-2 fill-primary" />
          </div>
          <p className="text-2xl text-center font-semibold leading-none tracking-tight py-1">Login</p>
          <p className="text-sm text-muted-foreground text-center">Choose your preferred login method</p>
        </header>
        <article className="grid gap-4 p-6 pt-0">
          {isPending ? (
            <Button disabled={isPending} variant="outline">
              <Loader2 className="animate-spin mr-2" />
            </Button>
          ) : (
            <>
              <Button variant="outline" onClick={() => execute({ provider_id: 'google' })}>
                <GoogleIcon className="mr-2 h-4 w-4 fill-primary" /> Sign in with Google
              </Button>
              <Button variant="outline" onClick={() => execute({ provider_id: 'github' })}>
                <GitHubIcon className="mr-2 h-4 w-4 fill-primary" /> Sign in with Github
              </Button>
            </>
          )}
        </article>
        <footer className="flex flex-col items-center p-6 pt-0">
          <div className="text-xs text-muted-foreground text-left">
            By logging in, you agree to our{' '}
            <Link href="/terms-of-service" className="underline text-primary hover:text-primary/80">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy-policy" className="underline text-primary hover:text-primary/80">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  )
}
