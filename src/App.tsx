import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Taiko from "./pages/Taiko";
import Contact from "./pages/Contact";
import Members from "./pages/Members";
import Gallery from "./pages/Gallery";
import StudentArea from "./pages/StudentArea";
import Raiz from "./pages/Raiz";
import Loja from "./pages/Loja";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  
  if (!user) {
    return <Navigate to="/aluno" replace />;
  }
  
  return <>{children}</>;
};

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen selection:bg-brand selection:text-white flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/agenda" element={<Agenda />} />
              <Route path="/taiko" element={<Taiko />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/membros" element={<Members />} />
              <Route path="/galeria" element={<Gallery />} />
              <Route path="/aluno" element={<StudentArea />} />
              <Route path="/raiz" element={<Raiz />} />
              <Route path="/loja" element={<Loja />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}
