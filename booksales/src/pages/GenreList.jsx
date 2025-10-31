import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

export default function GenreList() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/genre")
      .then(res => setGenres(res.data));
  }, []);

  const handleDelete = async (id) => {
    if (confirm("Yakin ingin hapus?")) {
      await axios.delete(`http://localhost:8000/api/genre/${id}`);
      setGenres(genres.filter(g => g.id !== id));
    }
  };

  return (
    <AdminLayout>
      <div className="d-flex justify-content-between mb-3">
        <h4>Manajemen Genre</h4>
        <Link to="/genre/add" className="btn btn-primary">+ Tambah Genre</Link>
      </div>

      <table className="table table-hover">
        <thead className="table-dark">
          <tr>
            <th>No</th>
            <th>Nama Genre</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((g, i) => (
            <tr key={g.id}>
              <td>{i + 1}</td>
              <td>{g.name}</td>
              <td>
                <Link to={`/genre/edit/${g.id}`} className="btn btn-warning btn-sm me-2">Edit</Link>
                <button onClick={() => handleDelete(g.id)} className="btn btn-danger btn-sm">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminLayout>
  );
}
