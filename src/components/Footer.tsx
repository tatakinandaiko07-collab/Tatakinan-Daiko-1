import { Instagram, Youtube, MessageCircle, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <Link to="/" className="flex items-center justify-center gap-3 mb-6 group">
          <img 
            src="https://lh3.googleusercontent.com/d/1WIGmBGUhPa-KRb8rCQLuc0Yp8XfSByrU" 
            alt="Tatakinan Daiko Logo" 
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
            referrerPolicy="no-referrer"
          />
          <span className="text-lg font-display font-medium tracking-tighter uppercase">
            Tatakinan <span className="text-brand">Daiko</span>
          </span>
        </Link>
        <p className="text-gray-500 text-sm mb-6">
          © {new Date().getFullYear()} Tatakinan Daiko. Todos os direitos reservados.
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://www.instagram.com/tatakinan_daiko/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors" title="Instagram"><Instagram size={24} /></a>
          <a href="https://www.youtube.com/@tatakinandaiko" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors" title="YouTube"><Youtube size={24} /></a>
          <a href="https://wa.me/558396902052" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand transition-colors" title="WhatsApp"><MessageCircle size={24} /></a>
          <a href="mailto:tatakinandaiko@gmail.com" className="text-gray-400 hover:text-brand transition-colors" title="E-mail"><Mail size={24} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
