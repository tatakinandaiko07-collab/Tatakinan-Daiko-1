import { Instagram, Music, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <Link to="/" className="flex items-center justify-center gap-2 mb-6 group">
          <div className="w-8 h-8 bg-brand rounded-full flex items-center justify-center font-display font-bold text-sm italic group-hover:scale-110 transition-transform">T</div>
          <span className="text-lg font-display font-bold tracking-tighter uppercase">
            Tatakinan <span className="text-brand">Daiko</span>
          </span>
        </Link>
        <p className="text-gray-500 text-sm mb-6">
          © {new Date().getFullYear()} Tatakinan Daiko. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Instagram size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Music size={20} /></a>
          <a href="#" className="text-gray-400 hover:text-brand transition-colors"><Mail size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
