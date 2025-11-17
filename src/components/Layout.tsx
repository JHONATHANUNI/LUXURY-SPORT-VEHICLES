import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="app-container">
      {/* HEADER */}
      <header className="main-header">
        <h1 className="logo">CARS LUXURY</h1>
      </header>

      {/* CONTENIDO */}
      <main>
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <p>© 2025 CARS LUXURY - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}
