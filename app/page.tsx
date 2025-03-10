import React from 'react';
import Head from 'next/head';
import Modal from './modal';

export default function LandingPage() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-contain md:bg-cover bg-center p-4"
      style={{ backgroundImage: "url('/bg.webp')" }}
    >
      <Head>
        <title>Waiting List Mindfuls.id</title>
      </Head>

      {/* Content Box */}
      <div className="bg-white bg-opacity-40 backdrop-blur-md shadow-xl rounded-xl p-8 w-11/12 max-w-lg text-center">
        <h1 className="text-4xl font-extrabold text-blue-700 drop-shadow-lg">
          Selamat Datang di Mindfuls
        </h1>
        <p className="text-lg text-gray-900 mt-2">
          Bergabunglah dengan daftar waiting list kami atau coba konsultasi gratis!
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-4 mt-6">
          <a
            className="w-full max-w-sm py-3 px-6 bg-white text-gray-900 font-bold rounded-lg shadow-md hover:bg-green-600 hover:text-white transition duration-300"
            href="https://chat.whatsapp.com/FN3MWP1ATDwGR48UeQE6bv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Daftar Waiting List
          </a>

          {/* Button to open modal */}
          <Modal />

          <p className="text-lg text-gray-900 mt-4 font-medium">
            Mari berkontribusi untuk kesehatan mental Indonesia yang lebih baik
          </p>

          <a
            className="w-full max-w-sm py-3 px-6 bg-yellow-500 text-white font-bold rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
            href="https://lynk.id/mindfuls"
            target="_blank"
            rel="noopener noreferrer"
          >
            Donasi Peduli Kesehatan Mental
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center text-gray-800 font-medium text-sm drop-shadow-md bg-white bg-opacity-40 backdrop-blur-md shadow-xl rounded-xl p-8 w-11/12 max-w-lg">
        <p>© 2025 Mindful oleh Arbain. Semua hak dilindungi.</p>
        <p>Mindfuls.id adalah platform super app psikologi dan konseling muslim pertama di Indonesia.</p>
      </footer>
    </div>
  );
}
