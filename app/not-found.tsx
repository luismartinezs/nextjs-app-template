import { Link } from '@/shared/components/link'

export default async function NotFound() {
	return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-xl font-semibold">Page Not Found</h2>
        <p className="text-lg text-gray-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-md bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-gray-800"
        >
          Go back home
        </Link>
      </div>
    </div>
  )
}