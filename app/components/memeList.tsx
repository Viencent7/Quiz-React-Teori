"use client";

import MemeCard from "./MemeCard";

interface Meme {
  id: number;
  title: string;
  image: string;
}

interface MemeListProps {
  memes: Meme[];
  onDelete: (id: number) => void;
}

export default function MemeList({ memes, onDelete }: MemeListProps) {
  return (
    <div className="row">
      {memes.map((meme) => (
        <div key={meme.id} className="col-md-4 mb-4">
          <MemeCard
            id={meme.id}
            title={meme.title}
            image={meme.image}
            onDelete={onDelete}
          />
        </div>
      ))}

      {memes.length === 0 && (
        <p className="text-center">No memes available.</p>
      )}
    </div>
  );
}
