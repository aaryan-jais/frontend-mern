export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-4">Page Not Found</p>
      <a href="/login" className="text-blue-600 underline">
        Go Back Home
      </a>
    </div>
  );
}
