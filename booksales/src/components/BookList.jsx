import { useState } from "react";
import initialBooks from "../utils/bookApa yang dimaksud dengan access modifier dalam OOP?
Question 2Answer

a.
Menentukan fungsi

b.
Menentukan visibilitas atau aksesibilitas dari properti dan metode

c.
Menentukan struktur kendali

d.
Menentukan tipe data

e.
Menentukan variabelApa yang dimaksud dengan access modifier private?
Question 3Answer

a.
Hanya dapat diakses dari dalam kelas

b.
Tidak dapat diakses sama sekali

c.
Dapat diakses dari mana saja

d.
Hanya dapat diakses dari dalam metode

e.
Dapat diakses dari kelas turunan";

function BookList() {
  const [books, setBooks] = useState(initialBooks);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    year: "",
    description: "",
    image: ""
  });

  const handleChange = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const addBook = () => {
    if (!newBook.title || !newBook.author) {
      alert("Judul dan Penulis wajib diisi!");
      return;
    }

    const bookToAdd = {
      id: books.length + 1,
      ...newBook
    };

    setBooks([...books, bookToAdd]);
    setNewBook({ title: "", author: "", year: "", description: "", image: "" });
  };

  return (
    <div>
      <h2>Daftar Buku</h2>
      {books.map((book) => (
        <div key={book.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h3>{book.title}</h3>
          <p><b>{book.author}</b> - {book.year}</p>
          <img src={book.image} alt={book.title} width="150" />
          <p>{book.description}</p>
        </div>
      ))}

      <h3>Tambah Buku Baru</h3>
      <input
        type="text"
        name="title"
        placeholder="Judul"
        value={newBook.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Penulis"
        value={newBook.author}
        onChange={handleChange}
      />
      <input
        type="number"
        name="year"
        placeholder="Tahun"
        value={newBook.year}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Deskripsi"
        value={newBook.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="image"
        placeholder="URL Gambar"
        value={newBook.image}
        onChange={handleChange}
      />
      <button onClick={addBook}>Tambah Buku</button>
    </div>
  );
}

export default BookList;
