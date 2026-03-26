import { motion } from "motion/react";
import { Image as ImageIcon, Maximize2, Dumbbell, Star } from "lucide-react";

const photos = [
  {
    url: "https://lh3.googleusercontent.com/d/1Z-ZU3x8s-mOOpxQqfQeoyZ4zh8fPoykI",
    title: "Treino Tatakinan",
    category: "Treinos"
  },
  {
    url: "https://lh3.googleusercontent.com/d/1Z9m6T-oHpi7hmNKe9uSdbmbPv54KvmJc",
    title: "Apresentação Tatakinan",
    category: "Eventos"
  }
];

const Gallery = () => {
  const treinos = photos.filter(p => p.category === "Treinos");
  const eventos = photos.filter(p => p.category === "Eventos");

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-brand font-display italic text-xl mb-2">Momentos Tatakinan</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase tracking-tighter">
            Nossa <span className="text-brand">Galeria</span>
          </h1>
          <div className="w-24 h-1 bg-brand mx-auto mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Treinos Block */}
          <motion.section
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Dumbbell size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-medium uppercase tracking-tight">Treinos</h2>
                <p className="text-gray-400 text-sm italic">Onde a disciplina encontra a paixão</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {treinos.map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10]"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-display font-medium text-white uppercase tracking-tight">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Eventos Block */}
          <motion.section
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-brand/10 text-brand rounded-xl flex items-center justify-center">
                <Star size={24} />
              </div>
              <div>
                <h2 className="text-3xl font-display font-medium uppercase tracking-tight">Eventos</h2>
                <p className="text-gray-400 text-sm italic">Compartilhando nossa energia</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {eventos.map((photo, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10]"
                >
                  <img 
                    src={photo.url} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                    <h3 className="text-2xl font-display font-medium text-white uppercase tracking-tight">{photo.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
