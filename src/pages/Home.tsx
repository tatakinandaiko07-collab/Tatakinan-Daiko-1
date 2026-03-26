import { motion } from "motion/react";
import { ChevronRight, Calendar, Music, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/app-engine-aistudio/tatakinan.daiko07%40gmail.com/input_file_1.png" 
            alt="Tatakinan Daiko em ação" 
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-brand font-display italic text-2xl md:text-3xl mb-2">Tradição e Energia</h2>
            <h1 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-6">
              Tatakinan <span className="text-brand">Daiko</span>
            </h1>
            <p className="max-w-2xl mx-auto text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
              Sentindo o pulsar do coração através dos tambores japoneses. Um grupo brasileiro dedicado à arte milenar do Taiko.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/agenda" className="bg-brand hover:bg-brand-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-lg shadow-brand/20">
                Ver Agenda <ChevronRight size={20} />
              </Link>
              <Link to="/taiko" className="border border-white/20 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg transition-all flex items-center justify-center">
                Conheça o Taiko
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand/60"
        >
          <div className="w-6 h-10 border-2 border-brand/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase">Agenda</h3>
              <p className="text-gray-400">Confira nossas próximas apresentações e eventos culturais.</p>
              <Link to="/agenda" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Ver Mais <ChevronRight size={16} />
              </Link>
            </div>
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Music size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase">O Taiko</h3>
              <p className="text-gray-400">Descubra a história e a alma por trás dos tambores japoneses.</p>
              <Link to="/taiko" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Ver Mais <ChevronRight size={16} />
              </Link>
            </div>
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-display font-bold uppercase">Contato</h3>
              <p className="text-gray-400">Entre em contato para apresentações, workshops e parcerias.</p>
              <Link to="/contato" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Ver Mais <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
