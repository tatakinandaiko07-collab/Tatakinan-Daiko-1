import { motion } from "motion/react";
import { Music, Zap, Shield, Heart } from "lucide-react";

const Taiko = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-display italic text-xl mb-2">A Arte dos Tambores</h2>
          <h1 className="text-4xl md:text-6xl font-display font-bold uppercase">O Taiko</h1>
          <div className="w-24 h-1 bg-brand mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-4 border-brand/20">
              <img 
                src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?q=80&w=800&auto=format&fit=crop" 
                alt="Taiko Drums" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand p-8 rounded-2xl shadow-xl hidden sm:block">
              <Music size={40} className="text-white" />
            </div>
          </motion.div>

          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              O Taiko (太鼓) é muito mais que um instrumento musical; é uma expressão de força, disciplina e união. Originário do Japão, suas batidas eram usadas em campos de batalha, rituais religiosos e festivais.
            </p>
            <p>
              No <span className="text-white font-bold">Tatakinan Daiko</span>, buscamos preservar essa tradição enquanto exploramos novas sonoridades, trazendo a energia vibrante dos tambores para o contexto brasileiro.
            </p>
            <p>
              Cada batida é um reflexo do espírito do tocador, exigindo não apenas técnica musical, mas também preparo físico e mental.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: <Zap size={32} />, title: "Energia", desc: "O som que reverbera no corpo e na alma." },
            { icon: <Shield size={32} />, title: "Disciplina", desc: "Foco e dedicação em cada movimento." },
            { icon: <Heart size={32} />, title: "Paixão", desc: "Amor pela cultura e pela arte milenar." },
            { icon: <Music size={32} />, title: "Ritmo", desc: "A harmonia entre o silêncio e o som." },
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card text-center space-y-4 hover:border-brand/40 transition-all"
            >
              <div className="w-16 h-16 bg-brand/10 text-brand rounded-full flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold uppercase">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Taiko;
