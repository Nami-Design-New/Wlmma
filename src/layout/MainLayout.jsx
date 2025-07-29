import { useState, useEffect } from "react";
import { Home } from "../Pages/Home";
import { Preloader } from "../components/shared/Preloader";
import { Header } from "../components/shared/Header";
import { Footer } from "../components/shared/Footer";

export function MainLAyout() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return loading ? (
    <Preloader />
  ) : (
    <main>
      <Header />
      <Home />
      <Footer />
    </main>
  );
}

