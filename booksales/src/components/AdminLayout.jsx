import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function AdminLayout({ children }) {
  return (
    <div className="container py-4">
      <h2 className="fw-bold mb-4">Admin Panel</h2>
      {children}
    </div>
  );
}
