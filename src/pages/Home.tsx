import { motion } from "motion/react";
import { ChevronRight, ChevronDown, Calendar, Music, Mail, User, Instagram, Youtube, MessageCircle, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1WQ6a9Y42idEYPfnIc9Fn9BKxM9SGtOan" 
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
            <h1 className="text-5xl md:text-8xl font-display font-medium uppercase tracking-tighter mb-6">
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
        >
          <motion.div 
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2, 
              ease: "easeInOut" 
            }}
            className="text-brand"
          >
            <ChevronDown size={20} strokeWidth={1.5} />
          </motion.div>
        </motion.div>
      </section>

      {/* Road Trip Progress Section (Redesigned) */}
      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card border-brand/20 bg-brand/5 p-8 md:p-12 relative overflow-hidden text-center"
          >
            <div className="relative z-10">
              <h2 className="text-brand font-display italic text-xl mb-2">Próximo Evento</h2>
              <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter mb-6">
                Nerdeste Day
              </h1>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
                <div className="bg-brand/10 border border-brand/20 px-6 py-2 rounded-full">
                  <span className="text-2xl md:text-3xl font-display text-brand">26 de Abril</span>
                </div>
                <div className="text-gray-400 text-xl md:text-2xl font-display uppercase tracking-widest">
                  Campina Grande, PB
                </div>
              </div>

              <div className="relative h-32 flex items-center justify-center">
                {/* Road Line */}
                <div className="absolute bottom-4 left-1/4 right-1/4 h-px bg-white/10"></div>
                
                <motion.div 
                  animate={{ 
                    y: [0, -4, 0],
                    rotate: [0, 1, 0, -1, 0]
                  }}
                  transition={{ 
                    duration: 0.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative z-10"
                >
                  <div className="relative">
                    {/* Smoke Puffs */}
                    <div className="absolute -left-4 bottom-2 flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          animate={{ 
                            x: [-10, -40], 
                            y: [0, -20], 
                            scale: [0.5, 2], 
                            opacity: [0.6, 0] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 1, 
                            delay: i * 0.3,
                            ease: "easeOut"
                          }}
                          className="w-3 h-3 bg-white/40 rounded-full blur-sm"
                        />
                      ))}
                    </div>
                    <img 
                      src="https://lh3.googleusercontent.com/d/1cLITplqx1WPWoK_2V1ISTaHsjoEgKxiq" 
                      alt="Van Tatakinan" 
                      className="w-48 md:w-64 h-auto drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                      referrerPolicy="no-referrer"
                    />
                    <motion.div 
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                      className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-2 bg-brand/20 blur-md rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand/5 rounded-full -ml-32 -mb-32 blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          {/* Banner Image above Raiz Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mb-8 rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
          >
            <img 
              src="https://lh3.googleusercontent.com/d/1A19Ng6YOsDUjvvBIquKK8oJEbyu0507X" 
              alt="Tatakinan Banner" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* New Slender Card (Moved up) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link 
              to="/raiz" 
              className="glass-card border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/5 transition-all group flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6"
            >
              <div className="flex items-center gap-6 text-left">
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium uppercase text-emerald-500 tracking-tight">Raiz do Tatakinan</h3>
                  <p className="text-gray-400 text-sm">Conheça a história e a fundadora que iniciou nossa jornada.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase text-sm tracking-widest">
                Conhecer História <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          {/* Store Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <Link 
              to="/loja" 
              className="glass-card border-brand/20 hover:border-brand/50 hover:bg-brand/5 transition-all group flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-6"
            >
              <div className="flex items-center gap-6 text-left">
                <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ShoppingBag size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-medium uppercase text-brand tracking-tight">Loja Tatakinan</h3>
                  <p className="text-gray-400 text-sm">Vista o ritmo! Adquira nossas camisas oficiais e acessórios exclusivos.</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-brand font-bold uppercase text-sm tracking-widest">
                Ver Produtos <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Calendar size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium uppercase">Agenda</h3>
              <p className="text-gray-400">Confira nossas próximas apresentações e eventos culturais.</p>
              <Link to="/agenda" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Ver Mais <ChevronRight size={16} />
              </Link>
            </div>
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Music size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium uppercase">O Taiko</h3>
              <p className="text-gray-400">Descubra a história e a alma por trás dos tambores japoneses.</p>
              <Link to="/taiko" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Ver Mais <ChevronRight size={16} />
              </Link>
            </div>
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <Mail size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium uppercase">Contato</h3>
              <p className="text-gray-400">Entre em contato para apresentações, workshops e parcerias.</p>
              <Link to="/contato" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Ver Mais <ChevronRight size={16} />
              </Link>
            </div>
            <div className="glass-card text-center space-y-4 hover:border-brand/40 transition-all group">
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                <User size={32} />
              </div>
              <h3 className="text-2xl font-display font-medium uppercase">Área do Aluno</h3>
              <p className="text-gray-400">Acesse materiais exclusivos, vídeos e cronograma de aulas.</p>
              <Link to="/aluno" className="text-brand font-bold flex items-center justify-center gap-1 hover:gap-2 transition-all">
                Acessar <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-brand font-display italic text-xl mb-2">Conecte-se Conosco</h2>
            <h1 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tighter mb-12">
              Siga o <span className="text-brand">Tatakinan</span>
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <a 
                href="https://www.instagram.com/tatakinan_daiko/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all group"
              >
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Instagram size={32} />
                </div>
                <span className="text-xl font-display font-medium uppercase">Instagram</span>
                <span className="text-gray-400 text-sm mt-2">@tatakinan_daiko</span>
              </a>
              
              <a 
                href="https://www.youtube.com/@tatakinandaiko" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all group"
              >
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Youtube size={32} />
                </div>
                <span className="text-xl font-display font-medium uppercase">YouTube</span>
                <span className="text-gray-400 text-sm mt-2">@tatakinandaiko</span>
              </a>
              
              <a 
                href="https://wa.me/558396902052" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-brand/40 hover:bg-brand/5 transition-all group"
              >
                <div className="w-16 h-16 bg-brand/10 text-brand rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle size={32} />
                </div>
                <span className="text-xl font-display font-medium uppercase">WhatsApp</span>
                <span className="text-gray-400 text-sm mt-2">(83) 99690-2052</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Home;
