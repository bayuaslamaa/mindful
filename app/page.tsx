
import React from 'react';
import Head from 'next/head';
import Modal from './modal'; // Import the Modal component

export const metadata = {
  title: 'Waiting List Mindfuls.id',
  description: 'Some description here...',
};

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <Head>
        <title>Waiting List Mindfuls.id</title>
      </Head>
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-center text-blue-500">Selamat Datang di Mindfuls</h1>
        <p className="text-center text-gray-600">Bergabunglah dengan daftar waiting list kami atau coba konsultasi gratis!</p>
      </header>

      <main className="flex flex-col items-center gap-4">
        <a
          className="w-full max-w-xs py-3 px-6 bg-white text-black rounded-lg text-center hover:bg-green-600 transition"
          href="https://chat.whatsapp.com/FN3MWP1ATDwGR48UeQE6bv"
          target="_blank"
          rel="noopener noreferrer"
        >
          Daftar Waiting List
        </a>

        {/* Button to open modal */}
        <Modal />

        <div className="text-center mb-2 mt-4">
          <p className="text-xl text-gray-600">Mari berkontribusi untuk kesehatan mental Indonesia yang lebih baik</p>
        </div>
        <a
          className="w-full max-w-xs py-3 px-6 bg-yellow-500 text-white rounded-lg text-center hover:bg-yellow-600 transition"
          href="https://lynk.id/mindfuls"
          target="_blank"
          rel="noopener noreferrer"
        >
          Donasi Peduli Kesehatan Mental
        </a>
      </main>

      <footer className="mt-8 text-center text-gray-500">
        <p>© 2025 Mindful oleh Arbain. Semua hak dilindungi.</p>
        <p>Mindfuls.id adalah platform super app psikologi dan konseling muslim pertama di Indonesia.</p>
      </footer>
    </div>
  );
}

