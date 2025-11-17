import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NotFound() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center align-items-center min-vh-50">
        <div className="col-md-8 col-lg-6 text-center">
          <div className="mb-4">
            <h1 className="display-1 fw-bold text-primary" style={{ fontSize: "8rem" }}>
              404
            </h1>
            <div className="mb-3" style={{ fontSize: "5rem" }}>
              🐱
            </div>
          </div>

          <h2 className="mb-3">Oops! Halaman Tidak Ditemukan</h2>
          <p className="lead text-muted mb-4">
            Sepertinya kucing ini tersesat! Halaman yang Anda cari mungkin sudah pindah atau tidak ada.
          </p>

          <div className="card shadow-sm border-0 mb-4" style={{ background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" }}>
            <div className="card-body text-white p-4">
              <h5 className="card-title mb-3">🐾 Cat Meme Pedia</h5>
              <p className="card-text mb-0">
                Jangan khawatir! Mari kembali ke halaman utama dan jelajahi koleksi meme kucing kami.
              </p>
            </div>
          </div>

          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <Link href="/" className="btn btn-primary btn-lg">
              🏠 Kembali ke Home
            </Link>
            <Link href="/memes" className="btn btn-outline-primary btn-lg">
              😸 Lihat Meme Kucing
            </Link>
            <Link href="/explore" className="btn btn-outline-secondary btn-lg">
              🔍 Explore Cats
            </Link>
          </div>

          <div className="mt-5">
            <p className="text-muted small">
              Error 404 - Page Not Found
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

