import { Outlet } from "react-router";
import { Footer } from "../components/landing/Footer";
import { Header } from "../components/landing/Header";

export default function LandingLayout() {
  return (
    <div style={{ background: "#fffcfc" }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
