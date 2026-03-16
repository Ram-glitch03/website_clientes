import { motion } from 'motion/react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  onClick: () => void;
}

export const ServiceCard = ({ title, description, icon: Icon, onClick }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, borderColor: 'var(--color-brand-accent)' }}
      transition={{ duration: 0.2 }}
      className="group relative bg-white border border-brand-primary/10 p-8 hover:shadow-xl transition-all cursor-pointer flex flex-col h-full"
      onClick={onClick}
    >
      {/* Dashboard Micro-labels */}
      <div className="flex justify-between items-start mb-8">
        <div className="w-12 h-12 bg-brand-bg flex items-center justify-center group-hover:bg-brand-accent transition-colors">
          <Icon className="text-brand-primary group-hover:text-white transition-colors w-6 h-6" />
        </div>
        <div className="text-[8px] uppercase tracking-[0.2em] text-brand-muted font-bold opacity-40 group-hover:opacity-100 transition-opacity">
          ID: {title.substring(0, 3).toUpperCase()}-001
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow">
        <h3 className="text-lg mb-3 font-sans font-bold uppercase tracking-tight group-hover:text-brand-accent transition-colors">
          {title}
        </h3>
        <p className="text-brand-muted text-xs leading-relaxed mb-6 font-light line-clamp-3">
          {description}
        </p>
      </div>

      {/* Footer / Action */}
      <div className="mt-auto pt-6 border-t border-brand-primary/5 flex items-center justify-between">
        <div className="flex gap-1">
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-brand-accent/20 group-hover:bg-brand-accent transition-colors"></div>
          ))}
        </div>
        <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-brand-muted group-hover:text-brand-accent transition-colors">
          Expandir <ArrowUpRight size={12} />
        </div>
      </div>
    </motion.div>
  );
};
