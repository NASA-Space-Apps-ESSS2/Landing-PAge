import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Rocket, Star, Zap, Globe } from "lucide-react"
import Link from "next/link"

export default function SpaceLanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Rocket className="h-6 w-6 mr-2" />
          <span className="font-bold">SpaceX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Missions
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Explore the Universe
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Embark on a journey beyond Earth. Discover new worlds, push the boundaries of human exploration, and be part of the next giant leap for mankind.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-gray-900 hover:bg-gray-200">Start Your Journey</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Missions</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 border border-gray-700 p-4 rounded-lg">
                <Star className="h-12 w-12 text-yellow-400" />
                <h3 className="text-xl font-bold">Interstellar Exploration</h3>
                <p className="text-gray-300 text-center">Venture beyond our solar system to uncover the mysteries of distant stars and galaxies.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 p-4 rounded-lg">
                <Globe className="h-12 w-12 text-blue-400" />
                <h3 className="text-xl font-bold">Planetary Colonization</h3>
                <p className="text-gray-300 text-center">Establish sustainable human settlements on Mars and beyond, paving the way for a multi-planetary species.</p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-gray-700 p-4 rounded-lg">
                <Zap className="h-12 w-12 text-purple-400" />
                <h3 className="text-xl font-bold">Advanced Propulsion</h3>
                <p className="text-gray-300 text-center">Develop cutting-edge propulsion technologies to make interstellar travel a reality.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Space Revolution</h2>
                <p className="mx-auto max-w-[600px] text-gray-300 md:text-xl">
                  Be part of humanity's greatest adventure. Sign up now to receive updates on our latest missions and opportunities.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-gray-700 text-white placeholder-gray-400"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-white text-gray-900 hover:bg-gray-200" type="submit">
                    Subscribe
                  </Button>
                </form>
                <p className="text-xs text-gray-400">
                  By subscribing, you agree to our{" "}
                  <Link className="underline underline-offset-2" href="#">
                    Terms & Conditions
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-700">
        <p className="text-xs text-gray-400">© 2024 SpaceX. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-400" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}