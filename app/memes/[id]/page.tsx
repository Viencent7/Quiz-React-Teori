"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css';

interface Meme {
  id: number;
  title: string;
  imageUrl: string;
  description?: string;
}

export default function MemeDetail() {
  const { id } = useParams();
  const [meme, setMeme] = useState<Meme | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMeme() {
      const res = await fetch(`/api/memes/${id}`);
      if (!res.ok) {
        setLoading(false);
        return;
      }

      const data = await res.json();
      setMeme(data);
      setLoading(false);
    }

    loadMeme();
  }, [id]);

  if (loading) {
    return (
      <div className="container py-5">
        <p>Loading...</p>
      </div>
    );
  }

  if (!meme) {
    return (
      <div className="container py-5 text-center">
        <h3>Meme not found.</h3>
        <Link href="/memes" className="btn btn-secondary mt-3">
          ← Back
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-5">

      <div className="card mx-auto shadow" style={{ maxWidth: "600px" }}>
        <img
          src={meme.imageUrl}
          alt={meme.title}
          className="card-img-top"
          style={{ height: "350px", objectFit: "cover" }}
        />

        <div className="card-body">
          <h3 className="card-title">{meme.title}</h3>
          <p className="mt-3">{meme.description || "No description"}</p>
        </div>

        <div className="card-footer text-center">
          <Link href="/memes" className="btn btn-primary">
            ← Back to Meme List
          </Link>
        </div>
      </div>
    </div>
  );
}
