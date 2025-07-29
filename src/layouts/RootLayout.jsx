import { Outlet } from "react-router";
import { Footer } from "../components/landing/Footer";
import { Header } from "../components/landing/Header";

export default function RootLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
