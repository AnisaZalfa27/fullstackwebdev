

import React, { useState } from "react";

export default function AdminGenresAuthors() {
  const [genres, setGenres] = useState([]);
  const [authors, setAuthors] = useState([]);

  const [genreName, setGenreName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorBio, setAuthorBio] = useState("");

  function addGenre(e) {
    e.preventDefault();
    if (!genreName.trim()) return;
    setGenres([{ name: genreName }, ...genres]);
    setGenreName("");
  }

  function addAuthor(e) {
    e.preventDefault();
    if (!authorName.trim()) return;
    setAuthors([{ name: authorName, bio: authorBio }, ...authors]);
    setAuthorName("");
    setAuthorBio("");
  }

  return (
    <div className="p-6 max-w-5xl mx-auto font-sans">
      <h1 className="text-2xl font-semibold mb-6">Admin — Genre & Author</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Genre */}
        <div className="bg-white border rounded p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-3">Genres</h2>

          <form onSubmit={addGenre} className="flex gap-2 mb-4">
            <input
              value={genreName}
              onChange={(e) => setGenreName(e.target.value)}
              placeholder="Nama Genre"
              className="border rounded px-3 py-2 flex-1"
            />
            <button className="px-4 py-2 bg-black text-white rounded">Tambah</button>
          </form>

          <ul className="space-y-2 text-sm">
            {genres.length === 0 && <p className="text-gray-500">Belum ada genre.</p>}
            {genres.map((g, i) => (
              <li key={i} className="border-b pb-1">{g.name}</li>
            ))}
          </ul>
        </div>

        {/* Author */}
        <div className="bg-white border rounded p-4 shadow-sm">
          <h2 className="text-lg font-medium mb-3">Authors</h2>

          <form onSubmit={addAuthor} className="space-y-2 mb-4">
            <input
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="Nama Author"
              className="border rounded px-3 py-2 w-full"
            />
            <textarea
              value={authorBio}
              onChange={(e) => setAuthorBio(e.target.value)}
              placeholder="Bio (opsional)"
              className="border rounded px-3 py-2 w-full h-20"
            />
            <button className="px-4 py-2 bg-black text-white rounded w-full">Tambah</button>
          </form>

          <ul className="space-y-3 text-sm">
            {authors.length === 0 && <p className="text-gray-500">Belum ada author.</p>}
            {authors.map((a, i) => (
              <li key={i} className="border-b pb-2">
                <div className="font-medium">{a.name}</div>
                {a.bio && <div className="text-gray-600">{a.bio}</div>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
