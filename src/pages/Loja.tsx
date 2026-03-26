import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, Tag, ChevronRight, ShoppingCart, Info, RefreshCw } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Regata de Treino Dryfit Branca",
    price: "R$ 60,00",
    description: "Regata oficial de treino em tecido Dryfit premium. Leve, respirável e com secagem rápida. Logo Tatakinan no peito e arte nas costas.",
    image: "https://lh3.googleusercontent.com/d/15kcoxpZ1B8pY7r4ikRu6dFI-qXJ-QGzA",
    backImage: "https://lh3.googleusercontent.com/d/1uxImjEdNbEqFkCtXxSP4wKa-DTQ3v8iN",
    tag: "Treino"
  },
  {
    id: 2,
    name: "Camiseta de Treino Dryfit Preta",
    price: "R$ 65,00",
    description: "Camiseta de treino em Dryfit de alta performance. Conforto térmico ideal para a prática intensa de Taiko. Logo frontal e estampa traseira.",
    image: "https://lh3.googleusercontent.com/d/1O4J3HC_R28zfX_ayG2hQFAmi2TbAasdS",
    backImage: "https://lh3.googleusercontent.com/d/10m3sgp2nsspMgi837apgUTkVtQKOEWMV",
    tag: "Essencial"
  },
  {
    id: 3,
    name: "Camiseta Kitsune - Arte Autoral",
    price: "R$ 85,00",
    description: "Edição artística exclusiva com arte autoral de Sophia Demetrio. Inspirada na lenda da Kitsune, unindo tradição e design contemporâneo.",
    image: "https://lh3.googleusercontent.com/d/1vzxeUh7GoyWnOIaFCvyDTkECQra9dd6d",
    tag: "Arte & Cultura"
  }
];

const ProductCard = ({ product, index }: { product: any, index: number, key?: any }) => {
  const [showBack, setShowBack] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-card overflow-hidden border-white/5 hover:border-brand/40 transition-all duration-500">
        {/* Product Image Container */}
        <div 
          className="relative aspect-[4/5] overflow-hidden cursor-pointer"
          onMouseEnter={() => product.backImage && setShowBack(true)}
          onMouseLeave={() => setShowBack(false)}
          onClick={() => product.backImage && setShowBack(!showBack)}
        >
          <AnimatePresence mode="wait">
            <motion.img 
              key={showBack ? 'back' : 'front'}
              src={showBack ? product.backImage : product.image} 
              alt={product.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>

          <div className="absolute top-4 left-4 flex flex-col gap-2">
            <span className="bg-brand text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full w-fit">
              {product.tag}
            </span>
            {product.backImage && (
              <span className="bg-black/60 backdrop-blur-md text-white text-[8px] font-bold uppercase tracking-widest px-2 py-1 rounded-full flex items-center gap-1 w-fit">
                <RefreshCw size={8} /> Verso disponível
              </span>
            )}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
            <button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <ShoppingCart size={20} />
            </button>
            <button className="w-12 h-12 bg-brand text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform">
              <Info size={20} />
            </button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-8">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-display font-medium uppercase tracking-tight leading-none">
              {product.name}
            </h3>
            <span className="text-brand font-display text-xl">{product.price}</span>
          </div>
          <p className="text-gray-400 text-sm mb-8 line-clamp-2">
            {product.description}
          </p>
          
          <a 
            href={`https://wa.me/5583988220000?text=${encodeURIComponent(`Olá! Gostaria de comprar a ${product.name} da loja Tatakinan.`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 bg-white/5 border border-white/10 hover:bg-brand hover:border-brand text-white font-bold uppercase tracking-widest text-sm transition-all flex items-center justify-center gap-2 group/btn"
          >
            Comprar via WhatsApp <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Loja = () => {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 border border-brand/20 rounded-full mb-6"
          >
            <ShoppingBag size={18} className="text-brand" />
            <span className="text-brand font-bold uppercase tracking-widest text-xs">Loja Oficial Tatakinan</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-medium uppercase tracking-tighter mb-6"
          >
            Vista o <span className="text-brand">Ritmo</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Nossas camisas são feitas com materiais de alta qualidade para garantir conforto durante os treinos e estilo em qualquer lugar.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 glass-card p-12 text-center border-brand/20 bg-brand/5"
        >
          <div className="max-w-3xl mx-auto">
            <Tag size={48} className="text-brand mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-medium uppercase mb-4">Como Comprar?</h2>
            <p className="text-gray-400 mb-8 text-lg">
              Atualmente nossas vendas são realizadas diretamente via WhatsApp. Clique no botão de compra do produto desejado para ser redirecionado e finalizar seu pedido com nossa equipe.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span>Entrega em todo o Brasil</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span>Pagamento via PIX ou Cartão</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <div className="w-2 h-2 bg-brand rounded-full"></div>
                <span>Material Premium</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Loja;
