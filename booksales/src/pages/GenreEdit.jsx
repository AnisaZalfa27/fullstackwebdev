import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import AdminLayout from "../components/AdminLayout";

export default function GenreEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:8000/api/genre/${id}`)
      .then(res => setName(res.data.name));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/api/genre/${id}`, { name });
    navigate("/genre");
  };

  return (
    <AdminLayout>
      <div className="card p-4 shadow-sm" style={{ maxWidth: "450px", margin: "auto" }}>
        <h4 className="mb-3">Edit Genre</h4>
        <form onSubmit={handleSubmit}>
          <label className="form-label">Nama Genre</label>
          <input 
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="d-flex justify-content-end gap-2">
            <button className="btn btn-secondary" onClick={() => navigate("/genre")}>
              Kembali
            </button>
            <button className="btn btn-success">Simpan</button>
          </div>
        </form>
      </div>
    </AdminLayout>
  );
}
