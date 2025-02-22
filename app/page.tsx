import Head from 'next/head';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Waiting List Mindfuls.id</title>
      </Head>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-500">Selamat Datang di Daftar Tunggu Mindfuls</h1>
        <p className="text-center text-gray-600">Bergabunglah dengan daftar waiting list kami dan dapatkan update terbaru!</p>
      </header>

      <main className="flex flex-col items-center gap-4">
        {/* <a
          className="w-full max-w-xs py-3 px-6 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition"
          href="https://example.com/waiting-list"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bergabung dengan Daftar Tunggu
        </a> */}
        <a
          className="w-full max-w-xs py-3 px-6 bg-white text-black rounded-lg text-center hover:bg-green-600 transition"
          href="https://chat.whatsapp.com/FN3MWP1ATDwGR48UeQE6bv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daftar Waiting List
        </a>
        <a
          className="w-full max-w-xs py-3 px-6 bg-white text-black rounded-lg text-center hover:bg-green-600 transition"
          href="https://calendly.com/arbaincare"
          target="_blank"
          rel="noopener noreferrer"
        >
          Konsul Gratis
        </a>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>© 2025 Mindful oleh Arbain. Semua hak dilindungi.</p>
        <p>Mindfuls.id adalah platform super app psikologi dan konseling muslim pertama di Indonesia.</p>
      </footer>
    </div>
  );
}

export const metadata = {
  title: 'Waiting List Mindfuls.id',
  description: 'Some description here...',
};
