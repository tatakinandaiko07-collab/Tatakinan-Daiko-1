import { motion } from "motion/react";
import { Users, Star, Award } from "lucide-react";

const members = [
  {
    name: "Alex",
    role: "Membro Ativo",
    bio: "O Taiko me motiva a fazer coisas que eu nem sabia que podia.",
    image: "https://lh3.googleusercontent.com/d/15c5rezSXap8sCOsyx38frCHi-VdecZbW"
  },
  {
    name: "Aruh",
    role: "Membro Ativo",
    bio: "Taiko, é mais que música, é a amizade, a união e o sentimento de paixão pela arte.",
    image: "https://lh3.googleusercontent.com/d/198x59Qt7VDFBvr9El6GU-pp-bWfO_NOj"
  },
  {
    name: "Ian",
    role: "Membro Ativo",
    bio: "Graças as músicas que tocamos, sou capaz de me conectar verdadeiramente com o mundo e com as pessoas ao meu redor.",
    image: "https://lh3.googleusercontent.com/d/1ovh_bVr8Wjv4EcjzhGtFS-lDnRU04qhc"
  },
  {
    name: "Luana",
    role: "Membro Ativo",
    bio: "Taiko não é só instrumento, é declaração de presença no mundo. No Tatakinan Daiko aprendi que ritmo coletivo é mais forte que qualquer batida solitária.",
    image: "https://lh3.googleusercontent.com/d/1thIkpf-xi8k2J9nl8HwExX4RGr7Zo0V-"
  },
  {
    name: "Lucas",
    role: "Membro Ativo",
    bio: "Nossos corações batem como um só, somos uma família.",
    image: "https://lh3.googleusercontent.com/d/1HEUQ7RP-7AN5fHHquoHuAPehMavWtmkH"
  },
  {
    name: "Marconi",
    role: "Membro Ativo",
    bio: "Som de trovão, bachi a tocar, coração a bater.",
    image: "https://lh3.googleusercontent.com/d/183WlMciyN386B9OfrJ6VJWqYiEe8H8KF"
  },
  {
    name: "Nick",
    role: "Membro Ativo",
    bio: "Dedicado à energia e ao ritmo que une o grupo em cada apresentação.",
    image: "https://lh3.googleusercontent.com/d/16h_96tNOT7g69Uk3GmdHSaI0IxQ4Pe-f"
  },
  {
    name: "Rômulo",
    role: "Membro Ativo",
    bio: "O Tatakinan soa com as batidas dos nossos dourados corações!",
    image: "https://lh3.googleusercontent.com/d/16aetFGl8GJqQgLbAIy57X9ZiFlvmGbKF"
  },
  {
    name: "Sophia",
    role: "Membro Ativo",
    bio: "Dedicada à arte do Taiko e à harmonia do grupo Tatakinan Daiko.",
    image: "https://lh3.googleusercontent.com/d/1qdjGiwNAeyiO5ltz55vAQLUMeur2syU0"
  },
  {
    name: "Tuane",
    role: "Membro Ativo",
    bio: "Tatakinan é especial para mim pois faz eu me sentir pertencente, me sinto bem entre bons amigos, compartilhando risadas, conversas e música.",
    image: "https://lh3.googleusercontent.com/d/1drLfaC0NRmAum8x7tgpeOtvdrIAfIaR3"
  },
  {
    name: "Tito",
    role: "Membro Ativo",
    bio: "Integrante fundamental que traz força e precisão para cada batida do grupo.",
    image: "https://lh3.googleusercontent.com/d/1kFuxKc86nak15uKNDhW5tEkRsZHN6aoL"
  }
];

const Members = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-brand font-display italic text-xl mb-2">A Família Tatakinan</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter">
            Nossos <span className="text-brand">Membros</span>
          </h1>
          <div className="w-24 h-1 bg-brand mx-auto mt-6"></div>
        </motion.div>

        {/* Featured Leader Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card mb-20 p-8 md:p-12 border-brand/30 bg-brand/5 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="grid md:grid-cols-3 gap-12 items-center relative z-10">
            <div className="md:col-span-1">
              <div className="relative aspect-square rounded-2xl overflow-hidden border-4 border-brand/20 shadow-2xl">
                <img 
                  src="https://lh3.googleusercontent.com/d/1QxELE_Rss6rulOy0z9nl0co4Mu0P0AQl" 
                  alt="Ian Gama Oashi" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-brand font-display italic text-xl mb-1">Líder do Grupo</h2>
                <h1 className="text-4xl md:text-5xl font-display font-medium uppercase tracking-tighter">Ian Gama Oashi</h1>
              </div>
              <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                <p className="italic border-l-4 border-brand/40 pl-6">
                  "Somos um vibrante e apaixonado grupo de taiko, formado por pessoas que compartilham o amor pela música, pelo ritmo e pela tradição. Fazemos parte de uma das diversas oficinas culturais da ACBJ-PB, um espaço dedicado à preservação, difusão e celebração da cultura japonesa em nossa comunidade."
                </p>
                <p className="italic border-l-4 border-brand/40 pl-6">
                  "Nossos treinos acontecem todos os domingos, das 14h às 16h, e vão muito além da prática musical. É um momento de aprendizado, disciplina e conexão, no qual mergulhamos na arte do taiko, desenvolvendo técnica, coordenação, espírito de equipe e respeito às tradições japonesas. Cada batida do tambor carrega energia, emoção e história, fortalecendo laços entre os participantes e criando uma experiênia única e envolvente."
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group hover:border-brand/50 transition-all text-center"
            >
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="absolute inset-0 bg-brand rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-full border-2 border-brand/30 relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-display font-medium uppercase mb-1">{member.name}</h3>
              <p className="text-brand text-sm font-medium mb-4">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 p-12 bg-brand/5 border border-brand/20 rounded-3xl text-center"
        >
          <Users className="text-brand mx-auto mb-6" size={48} />
          <h2 className="text-3xl font-display font-medium uppercase mb-4">Faça parte do grupo</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Estamos sempre em busca de novas energias. Se você tem paixão pelo Taiko e quer se juntar à nossa família, entre em contato conosco.
          </p>
          <button className="bg-brand hover:bg-brand-dark text-white px-8 py-3 rounded-full font-bold transition-all">
            Quero me Juntar
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Members;
