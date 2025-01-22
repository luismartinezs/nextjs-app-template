import { Link } from '@/shared/components/link'
import { Button } from '@/shared/components/ui/button'

export default async function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-semibold">App</span>
          </Link>
        </div>

        {/* Navigation - Centered */}
        <nav className="hidden flex-1 justify-center md:flex">
          <div className="flex items-center gap-6">
            <Link
              href="/features"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
          </div>
        </nav>

        {/* Auth Buttons - Right */}
        <div className="flex items-center gap-4">
          <Link href="/login">
            <Button variant="ghost" size="sm" tabIndex={-1}>
              Sign In
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm" tabIndex={-1}>Get Started</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
