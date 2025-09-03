import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-3xl font-bold text-red-600 mb-4">404 | Page Not Found</h2>
      <p className="text-gray-500 mb-6">Sorry, we couldn’t find the page you’re looking for.</p>
      <Link
        href="/"
        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
      >
        Back to Home
      </Link>
    </div>
  );
}
