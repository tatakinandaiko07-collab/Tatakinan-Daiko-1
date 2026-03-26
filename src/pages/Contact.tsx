import { motion } from "motion/react";
import { Mail, Phone, MapPin, Instagram, Youtube, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-display italic text-xl mb-2">Fale Conosco</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase">Contato</h1>
          <div className="w-24 h-1 bg-brand mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h3 className="text-3xl font-display font-medium uppercase mb-8 leading-tight">Vamos Levar o <br /> Taiko até Você</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Quer contratar o Tatakinan Daiko para seu evento, festival ou workshop? Entre em contato conosco e vamos conversar sobre como podemos levar a energia dos tambores japoneses para o seu público.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500 mb-1">E-mail</h4>
                  <p className="text-lg">tatakinandaiko@gmail.com</p>
                </div>
              </div>
              <a href="https://wa.me/558396902052" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500 mb-1">WhatsApp</h4>
                  <p className="text-lg">(83) 99690-2052</p>
                </div>
              </a>
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 bg-brand/10 text-brand rounded-full flex items-center justify-center group-hover:bg-brand group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase text-xs tracking-widest text-gray-500 mb-1">Localização</h4>
                  <p className="text-lg">João Pessoa, PB</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="https://www.instagram.com/tatakinan_daiko/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-brand text-white rounded-full flex items-center justify-center transition-all" title="Instagram"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/@tatakinandaiko" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-brand text-white rounded-full flex items-center justify-center transition-all" title="YouTube"><Youtube size={20} /></a>
              <a href="https://wa.me/558396902052" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 hover:bg-brand text-white rounded-full flex items-center justify-center transition-all" title="WhatsApp"><MessageCircle size={20} /></a>
              <a href="mailto:tatakinandaiko@gmail.com" className="w-12 h-12 bg-white/5 hover:bg-brand text-white rounded-full flex items-center justify-center transition-all" title="E-mail"><Mail size={20} /></a>
            </div>
          </div>

          <form className="glass-card space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Nome</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400">E-mail</label>
                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand outline-none transition-all" placeholder="seu@email.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Assunto</label>
              <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand outline-none transition-all appearance-none cursor-pointer">
                <option className="bg-zinc-900">Apresentação</option>
                <option className="bg-zinc-900">Workshop</option>
                <option className="bg-zinc-900">Parceria</option>
                <option className="bg-zinc-900">Outros</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Mensagem</label>
              <textarea rows={6} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 focus:border-brand outline-none transition-all resize-none" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button type="submit" className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-4 rounded-lg transition-all shadow-lg shadow-brand/20">
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
