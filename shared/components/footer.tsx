import { Link } from "@/shared/components/link";
import { brandName } from "@/shared/constants/brand";

export default async function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-8">
        <div className="grid grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="space-y-3">
            <Link href="/" className="flex items-center space-x-2">
              <span className="text-lg font-semibold">App</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {brandName}.<br />
              All rights reserved.
            </p>
          </div>

          {/* Column 2 - Main Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Main</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/features" className="text-sm text-muted-foreground hover:text-foreground">
                Features
              </Link>
              <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground">
                Pricing
              </Link>
              <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
                Blog
              </Link>
            </nav>
          </div>

          {/* Column 3 - Secondary Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground">
                Terms
              </Link>
            </nav>
          </div>

          {/* Column 4 - Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
