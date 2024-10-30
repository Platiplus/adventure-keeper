import Link from 'next/link'
import { Eye, Map, Compass, Book, ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LoginDialog } from '@/components/dialogs/login-dialog'

type FeatureCardProps = { icon: React.ReactNode, title: string, description: string }
type TestimonialCardProps = { quote: string, author: string }
type PricingCardProps = { title: string, price: string, features: string[] }

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center space-x-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

const TestimonialCard = ({ quote, author }: TestimonialCardProps) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <blockquote className="text-lg mb-4">&quot;{quote}&quot;</blockquote>
        <cite className="text-muted-foreground">- {author}</cite>
      </CardContent>
    </Card>
  )
}

const PricingCard = ({ title, price, features }: PricingCardProps) => {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <CardDescription className="text-3xl font-bold">{price}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <ArrowRight className="h-4 w-4 mr-2 text-primary" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardContent className="pt-0">
        <Button className="w-full" asChild>
          <Link href="/register">Choose Plan</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="p-4 md:p-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Eye className="h-6 w-6 md:h-8 md:w-8 text-primary" />
          <span className="text-lg md:text-xl font-bold">Adventure Keeper</span>
        </div>
        <nav className="hidden md:flex space-x-4">
          <Link href="#features" className="text-muted-foreground hover:text-primary">Features</Link>
          <Link href="#testimonials" className="text-muted-foreground hover:text-primary">Testimonials</Link>
          <Link href="#pricing" className="text-muted-foreground hover:text-primary">Pricing</Link>
        </nav>
        <LoginDialog />
      </header>

      <main>
        <section className="py-12 md:py-24 text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Track Your Epic Quests</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Adventure Keeper helps you log, manage, and relive your tabletop RPG campaigns with ease.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button size="lg" asChild>
              <Link href="/register">Start Your Journey</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </section>

        <section id="features" className="py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<Map className="h-10 w-10 text-primary" />}
                title="Campaign Tracking"
                description="Keep detailed logs of your adventures, including locations, NPCs, and key events."
              />
              <FeatureCard
                icon={<Compass className="h-10 w-10 text-primary" />}
                title="Character Management"
                description="Manage your party's characters, inventory, and progression all in one place."
              />
              <FeatureCard
                icon={<Book className="h-10 w-10 text-primary" />}
                title="Story Archiving"
                description="Create a lasting record of your epic tales to revisit and share with others."
              />
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-12 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Adventurers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <TestimonialCard
                quote="Adventure Keeper has revolutionized how we manage our D&D campaigns. It's a game-changer!"
                author="Elara Swiftwind, Elven Ranger"
              />
              <TestimonialCard
                quote="I've never been so organized with my quests. This app is a must-have for any serious RPG player."
                author="Grimlock Ironfist, Dwarven Paladin"
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="py-12 md:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Choose Your Path</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <PricingCard
                title="Novice"
                price="Free"
                features={[
                  "Basic campaign tracking",
                  "Up to 3 active campaigns",
                  "Character sheet storage"
                ]}
              />
              <PricingCard
                title="Adventurer"
                price="$4.99/month"
                features={[
                  "Unlimited campaigns",
                  "Advanced story mapping",
                  "Collaborative party management",
                  "Priority support"
                ]}
              />
              <PricingCard
                title="Legendary"
                price="$9.99/month"
                features={[
                  "All Adventurer features",
                  "Custom theme creator",
                  "API access for integrations",
                  "Early access to new features"
                ]}
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-muted py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2024 Adventure Keeper. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default LandingPage