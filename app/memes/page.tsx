'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Meme {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

export default function MemePage() {
  const [memes, setMemes] = useState<Meme[]>([]);
  const [newTitle, setNewTitle] = useState("");
  const [newImage, setNewImage] = useState("");
  const [newDescription, setNewDescription] = useState("");

  useEffect(() => {
    async function load() {
      const res = await fetch("/api/memes");
      const data = await res.json();
      setMemes(data);
    }
    load();
  }, []);

  const addMeme = async () => {
    if (!newTitle || !newImage) return alert("Please fill all fields");

    const payload = { title: newTitle, imageUrl: newImage, description: newDescription };

    const res = await fetch("/api/memes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) return alert("Failed to create");

    const created = await res.json();
    setMemes((prev) => [created, ...prev]);

    setNewTitle("");
    setNewImage("");
    setNewDescription("");
  };

  const deleteMeme = async (id: number) => {
    const res = await fetch("/api/memes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (!res.ok) return alert("Delete failed");

    setMemes((prev) => prev.filter((m) => m.id !== id));
  };

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Cat Meme List</h1>

      <div className="card p-4 mb-4">
        <h4>Tambahkan Meme Baru</h4>

        <div className="row">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Nama meme"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="/images/name.jpg"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <button className="btn btn-success w-100" onClick={addMeme}>
              Tambahkan meme
            </button>
          </div>

          <div className="col-md-12 mt-3">
            <textarea
              className="form-control"
              placeholder="Deskripsi meme..."
              rows={3}
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="row">
        {memes.map((meme) => (
          <div key={meme.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src={meme.imageUrl}
                className="card-img-top"
                alt={meme.title}
                style={{ height: "250px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{meme.title}</h5>
              </div>

              <div className="card-footer d-flex justify-content-between">
                <Link href={`/memes/${meme.id}`} className="btn btn-primary btn-sm">
                  Detail
                </Link>

                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteMeme(meme.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {memes.length === 0 && (
          <p className="text-center">No memes available.</p>
        )}
      </div>
    </div>
  );
}
