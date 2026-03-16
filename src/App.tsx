import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Scale,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Globe,
  Shield,
  CreditCard,
  Calendar as CalendarIcon
} from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { SERVICES, TESTIMONIALS, TEAM, COLORS, FAQS, SUCCESS_CASES, SERVICE_PACKAGES } from './constants';

import { Service } from './types';

// --- Animation Variants ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const imageReveal = {
  hidden: { scale: 1.1, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } }
};

// --- Components ---

const Navbar = ({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', id: 'home' },
    { name: 'Servicios', id: 'services' },
    { name: 'Nosotros', id: 'about' },
    { name: 'Blog', id: 'blog' },
  ];

  return (
    <nav className="glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div
          className="flex items-center gap-4 cursor-pointer group"
          onClick={() => setActivePage('home')}
        >
          <img
            src="/logo-medla-oficial.png"
            alt="Medla Asesores Logo"
            className="h-16 w-auto object-contain"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActivePage(link.id)}
              className={`text-sm font-medium uppercase tracking-widest transition-colors hover:text-brand-accent ${activePage === link.id ? 'text-brand-accent' : 'text-brand-primary'
                }`}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => setActivePage('action')}
            className="btn-primary py-2 px-6 text-sm"
          >
            Reservar Cita
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-0 w-full bg-brand-bg border-b border-brand-primary/10 p-6 md:hidden z-40"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsOpen(false);
                  }}
                  className="text-left text-lg font-medium"
                >
                  {link.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setActivePage('action');
                  setIsOpen(false);
                }}
                className="btn-primary w-full"
              >
                Reservar Cita
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <footer className="bg-brand-primary text-white section-padding pb-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-6 cursor-pointer" onClick={() => setActivePage('home')}>
            <img
              src="/logo-medla-oficial.png"
              alt="Medla Asesores Logo"
              className="h-20 w-auto object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-brand-muted max-w-md mb-8">
            Su socio estratégico en el ámbito legal, fiscal y laboral. Comprometidos con la excelencia y el crecimiento de su negocio en España.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
              <Linkedin size={18} />
            </a>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-accent hover:border-brand-accent transition-all">
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-sans uppercase tracking-widest">Navegación</h4>
          <ul className="flex flex-col gap-4 text-brand-muted">
            <li><button onClick={() => setActivePage('home')} className="hover:text-brand-accent transition-colors">Inicio</button></li>
            <li><button onClick={() => setActivePage('services')} className="hover:text-brand-accent transition-colors">Servicios</button></li>
            <li><button onClick={() => setActivePage('about')} className="hover:text-brand-accent transition-colors">Nosotros</button></li>
            <li><button onClick={() => setActivePage('action')} className="hover:text-brand-accent transition-colors">Reservar</button></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 font-sans uppercase tracking-widest">Legal</h4>
          <ul className="flex flex-col gap-4 text-brand-muted">
            <li><a href="#" className="hover:text-brand-accent transition-colors">Aviso Legal</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Privacidad</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">Política de Cookies</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-20 pt-10 border-t border-white/10 text-center text-brand-muted text-sm">
        <p>© {new Date().getFullYear()} Medla Asesores. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const PricingSection = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <section className="section-padding bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-4 block">Planes Estratégicos</span>
          <h2 className="text-5xl md:text-6xl mb-6 font-serif">Soluciones Legal-Tech</h2>
          <p className="text-brand-muted text-lg max-w-2xl mx-auto font-light">
            Modelos de suscripción diseñados para combinar la seguridad jurídica con la potencia de la digitalización moderna.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICE_PACKAGES.map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`p-10 border flex flex-col h-full relative transition-all duration-500 ${pkg.highlight
                ? 'border-brand-accent bg-brand-primary text-white shadow-2xl scale-105 z-10'
                : 'border-brand-primary/5 bg-brand-bg text-brand-primary'
                }`}
            >
              {pkg.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest">
                  Más Recomendado
                </div>
              )}
              <h3 className="text-2xl font-serif mb-2 uppercase tracking-tight">{pkg.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-5xl font-bold font-serif">{pkg.price}</span>
                <span className={`text-xs uppercase tracking-widest font-bold ${pkg.highlight ? 'text-white/40' : 'text-brand-muted'}`}>{pkg.period}</span>
              </div>
              <p className={`text-sm mb-10 leading-relaxed font-light ${pkg.highlight ? 'text-white/70' : 'text-brand-muted'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-5 mb-12 flex-grow">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-4 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setActivePage('action')}
                className={`w-full py-5 font-bold uppercase tracking-widest text-xs transition-all duration-300 ${pkg.highlight
                  ? 'bg-brand-accent text-white hover:bg-white hover:text-brand-primary'
                  : 'bg-brand-primary text-white hover:bg-brand-accent shadow-sm'
                  }`}
              >
                {pkg.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Pages ---


const HomePage = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-brand-primary/90 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-6 right-6 text-brand-primary hover:text-brand-accent transition-colors"
                onClick={() => setSelectedService(null)}
              >
                <X size={32} />
              </button>

              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-64 md:h-auto overflow-hidden">
                  <img
                    src={`https://images.unsplash.com/photo-${selectedService.id === 'fiscal' ? '1450101499163-c8848c66ca85' :
                      selectedService.id === 'laboral' ? '1554224155-6726b3ff858f' :
                        selectedService.id === 'contable' ? '1521791055366-0d553872125f' :
                          selectedService.id === 'mercantil' ? '1505664194779-8beaceb93744' :
                            selectedService.id === 'software' ? '1460925895917-afdab827c52f' :
                              selectedService.id === 'seguros' ? '1450101499163-c8848c66ca85' :
                                selectedService.id === 'constitucion' ? '1486406146926-c627a92ad1ab' :
                                  '1507679799987-c73779587ccf'
                      }?auto=format&fit=crop&q=80&w=800`}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-12">
                  <div className="w-16 h-16 bg-brand-bg flex items-center justify-center mb-8">
                    <selectedService.icon className="text-brand-accent w-8 h-8" />
                  </div>
                  <h2 className="text-4xl mb-6 font-serif">{selectedService.title}</h2>
                  <p className="text-lg text-brand-muted mb-8 leading-relaxed font-light">
                    {selectedService.longDescription}
                  </p>
                  <div className="space-y-4 mb-10">
                    <p className="text-xs uppercase tracking-widest font-bold text-brand-accent">Beneficios Clave</p>
                    {selectedService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="text-brand-accent w-5 h-5" />
                        <span className="font-medium text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      setActivePage('action');
                    }}
                    className="btn-primary w-full"
                  >
                    Solicitar este servicio
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-[95vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <motion.img
            variants={imageReveal}
            initial="hidden"
            animate="visible"
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920"
            alt="Arquitectura corporativa moderna"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-4xl text-white"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-4 py-1 border border-brand-accent text-brand-accent uppercase tracking-[0.4em] text-xs font-bold mb-8"
            >
              Excelencia en Asesoramiento
            </motion.span>
            <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-[1.05] tracking-tight">
              Lideramos su <span className="italic text-brand-accent">estrategia</span> legal
            </h1>
            <p className="text-xl text-white/70 mb-12 max-w-2xl leading-relaxed font-light">
              Combinamos visión empresarial con rigor jurídico para ofrecer soluciones que no solo protegen, sino que impulsan su crecimiento en España.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePage('action')}
                className="btn-primary flex items-center justify-center gap-3 text-lg"
              >
                Agendar Asesoría <ArrowRight size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActivePage('services')}
                className="btn-secondary border-white/30 text-white hover:bg-white hover:text-brand-primary backdrop-blur-sm"
              >
                Explorar Servicios
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-20 right-6 md:right-24 z-10 hidden lg:block">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-sm"
          >
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-serif text-brand-accent mb-1">98%</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Éxito en Casos</p>
              </div>
              <div className="w-px h-12 bg-white/10"></div>
              <div>
                <p className="text-3xl font-serif text-brand-accent mb-1">15+</p>
                <p className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Sectores Clave</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 text-xs flex flex-col items-center gap-2"
        >
          <span className="uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent"></div>
        </motion.div>
      </section>

      {/* Trust Signals / Client Carousel */}
      <section className="bg-white py-16 border-b border-brand-primary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <p className="text-center text-[10px] uppercase tracking-[0.5em] text-brand-muted font-bold">
            Líderes que confían en nuestra visión estratégica
          </p>
        </div>

        <div className="relative flex overflow-x-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}
            className="flex whitespace-nowrap gap-20 items-center"
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-20 items-center">
                {[
                  "GRUPO GASTRONÓMICO MADRID",
                  "TECH SOLUTIONS SL",
                  "HOTEL RITZ MADRID",
                  "RESTAURANTE AMAZÓNICO",
                  "IBERIA EXPRESS",
                  "BANCO SANTANDER",
                  "TELEFÓNICA",
                  "INDITEX"
                ].map((client) => (
                  <div
                    key={client}
                    className="text-2xl font-serif font-bold tracking-tighter opacity-20 grayscale hover:opacity-100 hover:grayscale-0 transition-all cursor-default"
                  >
                    {client}
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Cases (New Section) */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="max-w-2xl"
            >
              <span className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-4 block">Resultados Tangibles</span>
              <h2 className="text-5xl md:text-6xl mb-6">Casos de Éxito</h2>
              <p className="text-brand-muted text-lg">
                Nuestra trayectoria se define por los resultados que logramos para nuestros clientes.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {SUCCESS_CASES.map((caseItem, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden bg-brand-bg p-12 border-l-4 border-brand-accent"
              >
                <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent mb-4 block">{caseItem.category}</span>
                <h3 className="text-2xl mb-6 font-serif italic">{caseItem.title}</h3>
                <p className="text-brand-primary text-xl font-light leading-relaxed">
                  {caseItem.outcome}
                </p>
                <div className="mt-10 w-12 h-px bg-brand-primary/20 group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview / Dashboard */}
      <section className="section-padding bg-brand-bg relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-4 block">Dashboard de Soluciones</span>
              <h2 className="text-5xl md:text-6xl mb-6">Ecosistema Empresarial</h2>
              <p className="text-brand-muted text-lg">
                Un conjunto completo de herramientas y asesoramiento diseñado para escalar su negocio con seguridad.
              </p>
            </div>
            <button onClick={() => setActivePage('services')} className="text-brand-accent font-bold uppercase tracking-widest flex items-center gap-3 hover:gap-5 transition-all group">
              Ver detalles técnicos <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {SERVICES.map((service) => (
              <motion.div key={service.id} variants={fadeIn}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  onClick={() => setSelectedService(service)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section (New) */}
      <PricingSection setActivePage={setActivePage} />

      {/* Process Section (Visual Reference 1 Style) */}

      <section className="bg-brand-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative min-h-[500px] overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1000"
              alt="Abogado trabajando"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-brand-primary/50 backdrop-grayscale-[0.5]"></div>
            <div className="absolute bottom-12 left-12">
              <p className="text-brand-accent font-serif italic text-3xl">"La precisión es nuestra norma."</p>
            </div>
          </div>
          <div className="lg:w-1/2 p-12 md:p-24 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span variants={fadeIn} className="text-brand-accent uppercase tracking-[0.3em] text-[10px] font-bold mb-6 block">Metodología Medla</motion.span>
              <motion.h2 variants={fadeIn} className="text-5xl md:text-6xl mb-16 leading-tight">Simple, transparente y efectivo</motion.h2>

              <div className="space-y-16">
                {[
                  { n: '01', t: 'Auditoría Inicial', d: 'Evaluamos riesgos y oportunidades ocultas en su estructura actual.' },
                  { n: '02', t: 'Diseño Estratégico', d: 'Creamos un blindaje legal y fiscal adaptado a sus objetivos.' },
                  { n: '03', t: 'Gestión Proactiva', d: 'Nos anticipamos a los cambios normativos para que usted nunca se detenga.' }
                ].map((step) => (
                  <motion.div key={step.n} variants={fadeIn} className="flex gap-10 group">
                    <span className="text-brand-accent font-serif text-4xl opacity-30 group-hover:opacity-100 transition-opacity duration-500">{step.n}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-widest">{step.t}</h4>
                      <p className="text-brand-muted text-base leading-relaxed font-light">{step.d}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section (New Section) */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-4 block">Resolviendo Dudas</span>
            <h2 className="text-4xl md:text-5xl mb-6">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="bg-white border border-brand-primary/5 overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-8 flex items-center justify-between text-left hover:bg-brand-bg transition-colors"
                >
                  <span className="text-lg font-bold uppercase tracking-tight">{faq.question}</span>
                  <ChevronRight className={`text-brand-accent transition-transform duration-300 ${activeFaq === idx ? 'rotate-90' : ''}`} />
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-brand-muted leading-relaxed border-t border-brand-primary/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none">
          <div className="absolute top-20 left-20 text-[20vw] font-serif italic">Trust</div>
        </div>
        <div className="max-w-7xl mx-auto text-center mb-20 relative z-10">
          <h2 className="text-5xl md:text-6xl mb-6">La voz de la experiencia</h2>
          <p className="text-brand-muted text-lg">Clientes que han transformado su seguridad legal con nosotros.</p>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
          {TESTIMONIALS.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ y: -10 }}
              className="bg-brand-bg p-12 relative border border-brand-primary/5"
            >
              <div className="text-brand-accent text-8xl font-serif absolute -top-4 left-8 opacity-10">“</div>
              <p className="text-xl font-light italic mb-10 relative z-10 leading-relaxed">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-accent rounded-full flex items-center justify-center text-white font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold uppercase tracking-[0.2em] text-xs">{t.name}</p>
                  <p className="text-brand-accent text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-brand-primary text-white text-center relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 20 }}
          className="absolute inset-0 opacity-10"
        >
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1920"
            alt="Fondo decorativo"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl mb-10 font-serif">Asegure el futuro de su empresa hoy</h2>
          <p className="text-xl mb-16 opacity-70 font-light max-w-2xl mx-auto leading-relaxed">
            No deje su tranquilidad legal al azar. Únase a los cientos de empresarios que ya confían en Medla Asesores.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage('action')}
            className="bg-brand-accent text-white px-16 py-6 font-bold uppercase tracking-[0.3em] text-sm hover:bg-white hover:text-brand-primary transition-all shadow-2xl"
          >
            Reservar Consulta Estratégica
          </motion.button>
        </div>
      </section>
    </div>
  );
};

const ServicesPage = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  const getServiceImage = (id: string) => {
    const images: Record<string, string> = {
      fiscal: '1450101499163-c8848c66ca85',
      laboral: '1554224155-6726b3ff858f',
      contable: '1521791055366-0d553872125f',
      mercantil: '1505664194779-8beaceb93744',
      software: '1460925895917-afdab827c52f',
      seguros: '1557800636-894a64c1696f',
      constitucion: '1486406146926-c627a92ad1ab',
      compliance: '1507679799987-c73779587ccf'
    };
    return images[id] || '1507679799987-c73779587ccf';
  };

  return (
    <div className="pt-20">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1920"
          alt="Servicios legales"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.3]"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-accent uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Nuestra Experiencia</span>
            <h1 className="text-6xl md:text-8xl text-white mb-8">Especialidades</h1>
            <p className="text-xl text-white/60 max-w-2xl font-light">
              Un abanico completo de soluciones legales y estratégicas diseñadas para el éxito empresarial en el mercado español.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-40">
          {SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`flex flex-col lg:flex-row gap-20 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
            >
              <motion.div variants={fadeIn} className="lg:w-1/2">
                <div className="flex items-center gap-6 mb-10">
                  <div className="w-20 h-20 bg-brand-bg flex items-center justify-center group">
                    <service.icon className="text-brand-accent w-10 h-10 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="h-px w-12 bg-brand-accent/30"></div>
                  <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-brand-muted">Área {idx + 1}</span>
                </div>
                <h2 className="text-4xl md:text-5xl mb-8 font-serif leading-tight">{service.title}</h2>
                <p className="text-xl text-brand-muted mb-10 leading-relaxed font-light">
                  {service.longDescription}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
                  {service.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-brand-bg/50 border border-brand-primary/5">
                      <div className="mt-1">
                        <CheckCircle2 className="text-brand-accent w-5 h-5" />
                      </div>
                      <span className="font-medium text-xs uppercase tracking-tight">{benefit}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ x: 10 }}
                  onClick={() => setActivePage('action')}
                  className="btn-primary flex items-center gap-3"
                >
                  Solicitar Información <ArrowRight size={18} />
                </motion.button>
              </motion.div>
              <motion.div variants={fadeIn} className="lg:w-1/2 relative group">
                <div className="absolute -inset-4 border border-brand-accent/20 translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-700"></div>
                <div className="overflow-hidden relative z-10">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1 }}
                    src={`https://images.unsplash.com/photo-${getServiceImage(service.id)}?auto=format&fit=crop&q=80&w=1200`}
                    alt={service.title}
                    className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 left-0 bg-brand-primary text-white p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-xs uppercase tracking-[0.3em] font-bold mb-2 text-brand-accent">Compromiso Medla</p>
                    <p className="text-sm font-light opacity-70 italic">"Excelencia técnica y cercanía humana en cada proceso."</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const AboutPage = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div className="pt-20">
      <section className="section-padding bg-brand-bg overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeIn} className="text-brand-accent uppercase tracking-[0.4em] text-xs font-bold mb-6 block">Nuestra Historia</motion.span>
            <motion.h1 variants={fadeIn} className="text-6xl md:text-7xl mb-10 font-serif leading-tight">Más que asesores, sus socios de <span className="italic">confianza</span></motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-brand-muted mb-8 leading-relaxed font-light">
              Fundada con la visión de modernizar el asesoramiento legal en España, Medla Asesores combina décadas de experiencia con un enfoque tecnológico y proactivo.
            </motion.p>
            <motion.p variants={fadeIn} className="text-xl text-brand-muted mb-12 leading-relaxed font-light">
              Nos especializamos en sectores críticos como la hostelería, el retail y las startups tecnológicas, entendiendo que cada industria tiene retos únicos que requieren soluciones a medida.
            </motion.p>
            <motion.div variants={fadeIn} className="grid grid-cols-2 gap-12">
              <div className="group">
                <p className="text-5xl font-serif text-brand-accent mb-2 group-hover:scale-110 transition-transform origin-left">20+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">Años de Trayectoria</p>
              </div>
              <div className="group">
                <p className="text-5xl font-serif text-brand-accent mb-2 group-hover:scale-110 transition-transform origin-left">500+</p>
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-primary">Empresas Asesoradas</p>
              </div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-brand-accent/5 rounded-full blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=1000"
              alt="Equipo Medla"
              className="w-full h-[700px] object-cover shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-brand-accent uppercase tracking-widest text-xs font-bold mb-4 block">El Factor Humano</span>
            <h2 className="text-5xl md:text-6xl mb-6">Liderazgo Experto</h2>
            <p className="text-brand-muted text-lg max-w-2xl mx-auto">Contamos con un equipo de profesionales apasionados por el derecho y la estrategia empresarial.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-5xl mx-auto">
            {TEAM.map((member, idx) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-brand-accent/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[600px] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl font-bold mb-2 uppercase tracking-tight">{member.name}</h3>
                <p className="text-brand-accent font-bold text-xs uppercase tracking-[0.3em] mb-6">{member.role}</p>
                <p className="text-brand-muted text-lg leading-relaxed font-light">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-brand-primary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-10 h-full">
            {Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="border border-white/10"></div>
            ))}
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-6xl mb-10 font-serif italic">¿Hablamos de su futuro?</h2>
          <p className="text-xl mb-16 opacity-60 font-light max-w-2xl mx-auto">
            Estamos listos para escuchar sus retos y proponer soluciones que marquen la diferencia.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setActivePage('action')}
            className="btn-primary px-16"
          >
            Agendar Entrevista
          </motion.button>
        </div>
      </section>
    </div>
  );
};

const BLOG_POSTS = [
  {
    id: 1,
    title: "Novedades en la Reforma Fiscal: Lo que su empresa debe saber",
    excerpt: "Analizamos los cambios más significativos en la normativa tributaria y cómo prepararse estratégicamente para optimizar su carga fiscal.",
    category: "Fiscal",
    date: "15 Oct 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Compliance Penal: Más allá del cumplimiento normativo",
    excerpt: "Por qué implementar un modelo de prevención de delitos no solo protege a los directivos, sino que aporta valor real a la reputación corporativa.",
    category: "Legal",
    date: "02 Oct 2024",
    readTime: "7 min",
    image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Ciberseguridad y Responsabilidad Legal en la Era Digital",
    excerpt: "Cómo las empresas de tecnología deben estructurar sus políticas de datos y seguridad para evitar sanciones según la nueva normativa europea.",
    category: "Digital",
    date: "28 Sep 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Due Diligence: Claves en Fusiones y Adquisiciones",
    excerpt: "Identificar riesgos ocultos es vital antes de cerrar un trato. Conozca las mejores prácticas para una auditoría legal impecable.",
    category: "Corporativo",
    date: "12 Sep 2024",
    readTime: "8 min",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Ley de Startups: Beneficios y oportunidades en España",
    excerpt: "Desglosamos cómo el nuevo marco legal español está atrayendo talento e inversión con deducciones fiscales sin precedentes.",
    category: "Emprendimiento",
    date: "05 Sep 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?auto=format&fit=crop&q=80"
  },
  {
    id: 6,
    title: "Negociación Contractual y Cláusulas de Escape",
    excerpt: "Prepare sus contratos con visión a futuro. Formas estratégicas de proteger su empresa ante escenarios macroeconómicos inestables.",
    category: "Mercantil",
    date: "28 Ago 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80"
  }
];

const BlogPage = ({ setActivePage }: { setActivePage: (p: string) => void }) => {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-brand-primary text-white section-padding relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="py-10"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl mb-6">Perspectiva <span className="text-brand-accent italic">Estratégica</span></motion.h1>
            <motion.p variants={fadeIn} className="text-brand-muted max-w-2xl mx-auto text-lg leading-relaxed">
              Análisis profundo, actualizaciones normativas y visión experta sobre los desafíos legales, fiscales y empresariales del momento.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Grid de Artículos */}
      <section className="section-padding bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white border border-brand-primary/5 overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-500 flex flex-col h-full rounded-sm"
              >
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute top-4 left-4 bg-brand-primary text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 z-10 shadow-lg">
                    {post.category}
                  </div>
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-brand-primary/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-brand-muted mb-4 uppercase tracking-widest font-semibold flex-wrap">
                    <span className="flex items-center gap-1.5"><CalendarIcon size={14} className="text-brand-accent" /> {post.date}</span>
                    <span className="text-brand-primary/30">•</span>
                    <span>{post.readTime} lect.</span>
                  </div>
                  <h3 className="text-2xl font-bold font-serif mb-4 leading-tight group-hover:text-brand-accent transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-brand-muted mb-8 leading-relaxed flex-grow text-sm">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-brand-accent font-bold uppercase tracking-widest text-xs group/btn mt-auto gap-2">
                    <span className="relative overflow-hidden">
                      <span className="block transition-transform duration-300 group-hover/btn:-translate-y-full">Leer Artículo</span>
                      <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover/btn:translate-y-0">Leer Artículo</span>
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 text-center border-t border-brand-primary/10 pt-16">
            <h3 className="text-2xl font-serif font-bold mb-6">¿Necesita profundizar en algún tema?</h3>
            <p className="text-brand-muted mb-8 max-w-xl mx-auto">Nuestros consultores están listos para analizar su caso particular y brindarle un asesoramiento a la medida de su empresa.</p>
            <button className="btn-secondary" onClick={() => setActivePage('action')}>
              Agendar Asesoría
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ActionPage = () => {
  const [selectedService, setSelectedService] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <div className="pt-20 min-h-screen bg-brand-bg flex items-center justify-center p-6 pb-20">
      <div className="max-w-5xl w-full bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden">
        <div className="md:w-1/3 bg-brand-primary text-white p-10 flex flex-col justify-between hidden md:flex">
          <div className="sticky top-10">
            <h2 className="text-3xl mb-8">Centro de Gestión</h2>
            <p className="text-sm text-brand-muted mb-8 italic">
              "El primer paso hacia la seguridad legal y el crecimiento estratégico de su empresa."
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-brand-accent">
                <Shield className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">Atención Confidencial</span>
              </div>
              <div className="flex items-center gap-4 text-brand-accent">
                <Globe className="w-6 h-6" />
                <span className="font-bold uppercase tracking-widest text-xs">Asesoría Integral</span>
              </div>
            </div>

            <div className="mt-20 pt-10 border-t border-white/10">
              <p className="text-xs text-brand-muted mb-4">¿Dudas previas?</p>
              <div className="flex items-center gap-2 text-sm">
                <Phone size={16} className="text-brand-accent" />
                <span>+34 910 000 000</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-2">
                <Mail size={16} className="text-brand-accent" />
                <span>contacto@medla-asesores.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 overflow-y-auto max-h-[90vh]">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center p-8 md:p-16 py-32"
              >
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl mb-4">¡Solicitud Enviada!</h3>
                <p className="text-brand-muted mb-8">Hemos recibido su información correctamente. Un asesor se pondrá en contacto con usted muy pronto.</p>
                <button onClick={() => { setIsSuccess(false); setFormData({ name: '', email: '', phone: '', company: '', message: '' }); }} className="btn-primary">Nueva Solicitud</button>
              </motion.div>
            ) : (
              <motion.div
                key="content"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex flex-col"
              >
                {/* SECTION 1: CALENDAR */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl mb-2 font-bold uppercase tracking-tight text-center">Agendar Consulta Directa</h3>
                  <p className="text-brand-muted text-center mb-8">Seleccione su horario con nuestros especialistas.</p>
                  <div className="w-full relative -mt-4">
                    <iframe
                      src="https://api.leadconnectorhq.com/widget/group/BNmduXhI2aISxGDuMOEg"
                      style={{ width: '100%', border: 'none', overflow: 'hidden', minHeight: '600px' }}
                      scrolling="no"
                      id="BNmduXhI2aISxGDuMOEg_1772645358870"
                      title="Calendario de Consultas"
                    ></iframe>
                  </div>
                </div>

                {/* SECTION 2: FORM */}
                <div className="p-8 md:p-12 bg-brand-bg/60 border-t border-brand-primary/5">
                  <h3 className="text-2xl mb-2 font-bold uppercase tracking-tight">¿Prefiere recibir información?</h3>
                  <p className="text-brand-muted mb-8">Si aún no desea agendar una cita, déjenos sus datos y le contactaremos.</p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-widest font-bold text-brand-primary mb-2">
                        ¿Sobre qué área necesita información? *
                      </label>
                      <div className="relative">
                        <select
                          required
                          value={selectedService}
                          onChange={(e) => setSelectedService(e.target.value)}
                          className="w-full p-4 border border-brand-primary/20 bg-white focus:border-brand-accent outline-none appearance-none cursor-pointer"
                        >
                          <option value="" disabled>Seleccione un área de especialidad</option>
                          {SERVICES.map((s: any) => (
                            <option key={s.id} value={s.id}>{s.title}</option>
                          ))}
                        </select>
                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-primary/50 pointer-events-none rotate-90" />
                      </div>
                    </div>

                    {/* Client Details Form */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Nombre Completo *"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full p-4 border border-brand-primary/10 bg-white focus:border-brand-accent outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Correo Electrónico *"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full p-4 border border-brand-primary/10 bg-white focus:border-brand-accent outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="tel"
                          placeholder="Teléfono (Opcional)"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full p-4 border border-brand-primary/10 bg-white focus:border-brand-accent outline-none"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          placeholder="Empresa (Opcional)"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className="w-full p-4 border border-brand-primary/10 bg-white focus:border-brand-accent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        placeholder="Breve descripción de sus dudas o requerimientos (Opcional)"
                        rows={4}
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        className="w-full p-4 border border-brand-primary/10 bg-white focus:border-brand-accent outline-none resize-none"
                      />
                    </div>

                    <p className="text-xs text-brand-muted text-center pt-2">
                      Al enviar este formulario, acepta nuestra política de privacidad y términos de servicio.
                    </p>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="btn-primary w-full flex items-center justify-center gap-2 mt-4"
                    >
                      {isProcessing ? 'Enviando Datos...' : 'Solicitar Información'}
                    </button>
                  </form>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
            {activePage === 'services' && <ServicesPage setActivePage={setActivePage} />}
            {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}
            {activePage === 'blog' && <BlogPage setActivePage={setActivePage} />}
            {activePage === 'action' && <ActionPage />}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer setActivePage={setActivePage} />

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            className="fixed bottom-0 left-0 w-full bg-brand-primary text-white p-6 z-[100] border-t border-brand-accent/20"
          >
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm text-brand-muted text-center md:text-left">
                Utilizamos cookies propias y de terceros para mejorar su experiencia y nuestros servicios. Al continuar navegando, acepta nuestra <a href="#" className="text-brand-accent underline">Política de Cookies</a>.
              </p>
              <div className="flex gap-4">
                <button onClick={() => setShowCookieBanner(false)} className="text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">Configurar</button>
                <button onClick={() => setShowCookieBanner(false)} className="bg-brand-accent text-white px-8 py-2 text-xs font-bold uppercase tracking-widest hover:bg-brand-accent-hover transition-colors">Aceptar Todo</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
