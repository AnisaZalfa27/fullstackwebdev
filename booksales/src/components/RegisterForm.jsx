import { useState } from "react";

const RegisterForm = () => {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nama || !form.email || !form.username || !form.password) {
      return setError("Semua field harus diisi!");
    }

    if (!validateEmail(form.email)) {
      return setError("Format email tidak valid!");
    }

    setError("");

    alert("Registrasi berhasil!");
    console.log("Data terkirim:", form);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {error && <p style={styles.error}>{error}</p>}

      <input
        type="text"
        name="nama"
        placeholder="Nama Lengkap"
        value={form.nama}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        style={styles.input}
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        style={styles.input}
      />

      <button style={styles.button}>Daftar</button>
    </form>
  );
};

const styles = {
  form: {
    width: "100%",
    maxWidth: "350px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    padding: "25px",
    background: "#fff",
    borderRadius: "10px",
    boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    background: "#4CAF50",
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
  },
  error: {
    color: "red",
    marginBottom: "5px",
  },
};

export default RegisterForm;
