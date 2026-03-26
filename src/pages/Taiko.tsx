import { motion } from "motion/react";
import { Music, Zap, Shield, Heart } from "lucide-react";

const Taiko = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-display italic text-xl mb-2">A Arte dos Tambores</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase">O Taiko</h1>
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
                src="https://lh3.googleusercontent.com/d/1BO9rMtEChzEAtUtHUBBSFpJp2DtBekix" 
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
              De acordo com historiadores, o taiko é um instrumento de percussão tradicional do Japão com mais de 2.500 anos de história. Desde seus primórdios, ele esteve profundamente ligado à vida social, religiosa e militar do povo japonês.
            </p>
            <p>
              Durante o período bélico, líderes militares passaram a utilizar o jindaiko, o tambor de guerra, como forma de transmitir comandos ao exército e também para fortalecer o ânimo dos soldados por meio de batidas fortes e marcantes. Ao mesmo tempo, o taiko ocupava um papel importante em cerimônias e festividades religiosas.
            </p>
            <p>
              Acreditava-se que, após rituais de abstinência e purificação, tocar o taiko com a alma permitiria invocar os deuses para atender aos desejos humanos. Dessa forma, o instrumento era visto como um elo entre o mundo divino e o mundo dos homens. Algumas tradições religiosas, inclusive, consideravam o taiko como a morada dos deuses e das almas dos antepassados, o que reforçava seu caráter sagrado e sua grande importância simbólica.
            </p>
            <p>
              Com o passar do tempo, o uso do taiko deixou de ser restrito ao clero e à aristocracia e passou a se espalhar gradualmente pela sociedade japonesa. Inicialmente, as apresentações eram realizadas por poucas pessoas, mas esse formato mudou após a Segunda Guerra Mundial, quando surgiu o sistema múltiplo conhecido como kumidaiko. A partir desse momento, desenvolveram-se as apresentações coletivas com muitos tocadores e diferentes tipos de tambores, semelhantes às que conhecemos hoje.
            </p>
            <p>
              A prática do taiko proporciona diversos benefícios, como a melhora do condicionamento físico, o aumento da coordenação motora e o desenvolvimento de valores como disciplina, respeito, cooperação e esforço coletivo. Além disso, contribui para o crescimento intelectual do praticante, que passa a ter contato com a teoria musical, a cultura japonesa e até mesmo com o idioma.
            </p>
            <p>
              Atualmente, o taiko é uma expressão cultural que vem conquistando praticantes em todo o mundo. Presente em mais de 47 países, essa arte pode ser praticada por pessoas de todas as idades, e o número de adeptos continua crescendo a cada ano.
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
