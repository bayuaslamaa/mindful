'use client'
import { useState } from 'react';

const Modal: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="bg-blue-500 text-white py-2 px-4 rounded"
            >
                Jadwalkan Konsultasi Gratis
            </button>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
                    <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 max-w-md">
                        <h3 className="text-xl font-bold text-center text-black">Pilih Opsi Konsultasi</h3>
                        <p className="text-center mt-2 text-black">
                            Kesehatan mental adalah bagian penting dari kesejahteraan kita. Dengan berdonasi, Anda membantu menyediakan akses ke layanan kesehatan mental yang sangat dibutuhkan. Mari bersama-sama menciptakan Indonesia yang lebih peduli dan mendukung kesehatan mental.
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            <a
                                className="w-full py-3 px-6 bg-yellow-500 text-white rounded-lg text-center hover:bg-yellow-600 transition"
                                href="https://lynk.id/mindfuls"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Donasi Dulu
                            </a>
                            <a
                                className="w-full py-3 px-6 bg-yellow-300 text-black rounded-lg text-center hover:bg-green-600 transition"
                                href="https://calendly.com/arbaincare"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Belum Sekarang dan Lanjut ke Konsultasi
                            </a>
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="text-gray-600 hover:text-gray-800 mt-2"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;