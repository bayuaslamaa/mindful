
export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-500">Welcome to Mindful Waiting List</h1>
        <p className="text-center text-gray-600">Join our waiting list and stay updated!</p>
      </header>

      <main className="flex flex-col items-center gap-4">
        {/* <a
          className="w-full max-w-xs py-3 px-6 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition"
          href="https://example.com/waiting-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Waiting List
        </a> */}
        <a
          className="w-full max-w-xs py-3 px-6 bg-green-500 text-white rounded-lg text-center hover:bg-green-600 transition"
          href="https://calendly.com/arbaincare"
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsul Gratis
        </a>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>© 2025 Mindful by Arbain. All rights reserved.</p>
      </footer>
    </div>
  );
}
