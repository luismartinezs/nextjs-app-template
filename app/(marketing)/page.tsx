"use server"

export default async function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                Your App Name
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Your app description goes here. Make it compelling!
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                {/* CTA buttons will go here */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}