import { motion } from "motion/react";
import { MapPin, Calendar as CalendarIcon, ChevronRight } from "lucide-react";

const Agenda = () => {
  const events = [
    { date: "26 Abr", title: "Nerdeste Day", location: "Campina Grande, PB", time: "12:00" },
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand font-display italic text-xl mb-2">Próximas Apresentações</h2>
          <h1 className="text-4xl md:text-6xl font-display font-medium uppercase">Nossa Agenda</h1>
          <div className="w-24 h-1 bg-brand mx-auto mt-6"></div>
        </div>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card flex flex-col md:flex-row items-center gap-6 hover:border-brand/40 transition-all group"
            >
              <div className="bg-brand text-white px-6 py-4 rounded-xl text-center min-w-[100px] group-hover:scale-105 transition-transform">
                <span className="block text-2xl font-bold leading-none">{event.date.split(' ')[0]}</span>
                <span className="text-xs uppercase tracking-widest">{event.date.split(' ')[1]}</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h4 className="text-xl font-bold mb-1">{event.title}</h4>
                <div className="flex flex-wrap justify-center md:justify-start gap-4 text-gray-400 text-sm">
                  <span className="flex items-center gap-1"><MapPin size={14} className="text-brand" /> {event.location}</span>
                  <span className="flex items-center gap-1"><CalendarIcon size={14} className="text-brand" /> {event.time}</span>
                </div>
              </div>
              <button className="border border-brand text-brand hover:bg-brand hover:text-white px-6 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-2">
                Saiba Mais <ChevronRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agenda;
