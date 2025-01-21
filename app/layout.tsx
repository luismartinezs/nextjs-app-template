import "@/app/globals.css"
import { Inter } from "next/font/google"
import { cn } from "@/shared/utils/cn"
import Header from "@/shared/components/header"
import Footer from "@/shared/components/footer"

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, "min-h-screen bg-background antialiased")}>
        <div className="relative flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
