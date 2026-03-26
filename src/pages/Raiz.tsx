import { motion } from "motion/react";
import { User, Heart, History, Award, Sparkles } from "lucide-react";

const Raiz = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-emerald-500 font-display italic text-xl mb-2">Nossa História</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter">
            Raiz do <span className="text-emerald-500">Tatakinan</span>
          </h1>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-display font-medium uppercase mb-6 text-emerald-500">O Início de Tudo</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                O Tatakinan Daiko nasceu do sonho e da determinação de sua fundadora, que trouxe para João Pessoa a força e a magia dos tambores japoneses. O que começou como um desejo de compartilhar a cultura milenar do Taiko, transformou-se em uma jornada de superação e arte.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Desde as primeiras batidas, o foco sempre foi criar um espaço onde a disciplina e a paixão pudessem florescer, plantando as sementes de uma família que hoje ecoa sua energia por todo o Nordeste.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative rounded-3xl overflow-hidden border border-emerald-500/20 aspect-square bg-emerald-500/5 flex items-center justify-center"
            >
              <User size={120} className="text-emerald-500/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-emerald-500 font-display italic">Foto da Fundadora</p>
              </div>
            </motion.div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card border-emerald-500/10 hover:border-emerald-500/30 transition-all p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles size={20} />
              </div>
              <h4 className="text-lg font-display font-medium uppercase mb-2">O Sonho</h4>
              <p className="text-gray-400 text-xs">A visão que deu início a tudo.</p>
            </div>
            <div className="glass-card border-emerald-500/10 hover:border-emerald-500/30 transition-all p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart size={20} />
              </div>
              <h4 className="text-lg font-display font-medium uppercase mb-2">Paixão</h4>
              <p className="text-gray-400 text-xs">Amor pela arte que nos une.</p>
            </div>
            <div className="glass-card border-emerald-500/10 hover:border-emerald-500/30 transition-all p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <History size={20} />
              </div>
              <h4 className="text-lg font-display font-medium uppercase mb-2">Tradição</h4>
              <p className="text-gray-400 text-xs">Respeito às nossas raízes.</p>
            </div>
            <div className="glass-card border-emerald-500/10 hover:border-emerald-500/30 transition-all p-6 text-center">
              <div className="w-10 h-10 bg-emerald-500/10 text-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award size={20} />
              </div>
              <h4 className="text-lg font-display font-medium uppercase mb-2">Legado</h4>
              <p className="text-gray-400 text-xs">Construindo o futuro.</p>
            </div>
          </div>

          <section className="pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-3xl font-display font-medium uppercase text-emerald-500">Membros Antigos</h3>
              <p className="text-gray-400 mt-2">Aqueles que ajudaram a construir nossa história.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card group hover:border-emerald-500/50 transition-all text-center p-8"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src="https://lh3.googleusercontent.com/d/1HpLc5RZCNLq9S4EnUZ0EJxRDYt04rY_z" 
                    alt="Samuel Sensei" 
                    className="w-full h-full object-cover rounded-full border-2 border-emerald-500/30 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-display font-medium uppercase mb-1">Samuel Sensei</h3>
                <p className="text-emerald-500 text-sm font-medium mb-4">Membro Antigo</p>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "Ao meu sentir, Tatakinan-daiko representa amizade, auto-conhecimento, musicalidade, paixão e disciplina. Eternamente grato por fazer parte de sua história. Sore! 💪🏻❤️"
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card group hover:border-emerald-500/50 transition-all text-center p-8"
              >
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="absolute inset-0 bg-emerald-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <img 
                    src="https://lh3.googleusercontent.com/d/1QNfaJ1Sr_KGFSekf-0R0GDitVr3VG_vZ" 
                    alt="Vitória" 
                    className="w-full h-full object-cover rounded-full border-2 border-emerald-500/30 relative z-10"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-xl font-display font-medium uppercase mb-1">Vitória</h3>
                <p className="text-emerald-500 text-sm font-medium mb-4">Membro Antigo</p>
                <p className="text-gray-400 text-sm leading-relaxed italic">
                  "O Tatakinin Daiko representa para mim um ponto de encontro de amigos e música. Sinto muitas saudades de tocar taiko!"
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Raiz;
