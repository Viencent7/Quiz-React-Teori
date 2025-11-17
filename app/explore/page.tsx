'use client';

import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=9", {
  headers: {
    "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY!,
  },
});

interface CatImage {
  id: string;
  url: string;
}

export default function ExploreCats() {
  const [cats, setCats] = useState<CatImage[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCats = async () => {
    setLoading(true);

    const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=9");
    const data = await res.json();

    setCats(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Explore cat image dari API</h1>

      <button className="btn btn-primary mb-4" onClick={fetchCats}>
        Refresh Cats
      </button>

      {loading && <p>Loading...</p>}

      <div className="row">
        {cats.map((cat) => (
          <div key={cat.id} className="col-md-4 mb-4">
            <div className="card">
              <img 
                src={cat.url} 
                className="card-img-top"
                style={{ height: "250px", objectFit: "cover" }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
