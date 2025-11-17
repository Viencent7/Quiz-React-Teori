'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center min-vh-50">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="mb-4">
            <div className="mb-3" style={{ fontSize: "5rem" }}>
              😿
            </div>
            <h1 className="display-4 fw-bold text-danger">Oops! Terjadi Kesalahan</h1>
          </div>

          <h2 className="mb-3">Something Went Wrong</h2>
          <p className="lead text-muted mb-4">
            Maaf, terjadi kesalahan yang tidak terduga. Kucing kami sedang memperbaiki masalahnya!
          </p>

          {error.message && (
            <div className="alert alert-danger mb-4" role="alert">
              <strong>Error:</strong> {error.message}
            </div>
          )}

          <div className="card shadow-sm border-0 mb-4" style={{ background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)" }}>
            <div className="card-body text-white p-4">
              <h5 className="card-title mb-3">🐾 Cat Meme Pedia</h5>
              <p className="card-text mb-0">
                Coba refresh halaman atau kembali ke halaman utama.
              </p>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button
              onClick={reset}
              className="btn btn-primary btn-lg"
            >
              🔄 Coba Lagi
            </button>
            <Link href="/" className="btn btn-outline-primary btn-lg">
              🏠 Kembali ke Home
            </Link>
            <Link href="/memes" className="btn btn-outline-secondary btn-lg">
              😸 Lihat Meme Kucing
            </Link>
          </div>

          <div className="mt-5">
            <p className="text-muted small">
              {error.digest && `Error ID: ${error.digest}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

