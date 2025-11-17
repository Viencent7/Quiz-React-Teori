'use client';
import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MemeCardProps {
  id: number;
  title: string;
  image: string;
  onDelete: (id: number) => void;
}

export default function MemeCard({ id, title, image, onDelete }: MemeCardProps) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "250px", objectFit: "cover" }}
      />

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>

      <div className="card-footer d-flex justify-content-between">
        <Link href={`/memes/${id}`} className="btn btn-primary btn-sm">
          Detail
        </Link>

        <button
          className="btn btn-danger btn-sm"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}