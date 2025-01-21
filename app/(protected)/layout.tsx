export default async function ProtectedLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background">
        <div className="container flex h-16 items-center">
          {/* Navigation will go here */}
        </div>
      </header>

      <div className="container flex-1">
        <div className="flex gap-12">
          <aside className="hidden w-64 shrink-0 lg:block">
            {/* Sidebar will go here */}
          </aside>
          <main className="flex-1 py-6">{children}</main>
        </div>
      </div>
    </div>
  )
}