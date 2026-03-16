import {
  Scale,
  Briefcase,
  Calculator,
  FileText,
  ShieldCheck,
  Users,
  Laptop,
  Shield,
  Building2,
  ClipboardCheck
} from 'lucide-react';
import { Service, Testimonial, TeamMember, ServicePackage } from './types';


export const COLORS = {
  primary: '#1A1A1A',
  accent: '#C5A37E',
  bg: '#F9F8F6',
};

export const SERVICES: Service[] = [
  {
    id: 'fiscal',
    title: 'Asesoría Fiscal',
    description: 'Optimización de la carga impositiva y cumplimiento riguroso de las obligaciones tributarias.',
    icon: Calculator,
    benefits: ['Planificación fiscal estratégica', 'Gestión de impuestos (IVA, Sociedades, IRPF)', 'Representación ante inspecciones'],
    longDescription: 'En un entorno normativo en constante cambio, nuestra asesoría fiscal le proporciona la tranquilidad de saber que su empresa cumple con todas sus obligaciones mientras optimiza su factura fiscal de manera legal y ética.'
  },
  {
    id: 'laboral',
    title: 'Asesoría Laboral',
    description: 'Gestión integral de recursos humanos, nóminas y cumplimiento de la normativa laboral vigente.',
    icon: Users,
    benefits: ['Confección de nóminas y seguros sociales', 'Contratos y despidos', 'Auditoría laboral preventiva'],
    longDescription: 'Protegemos el activo más valioso de su empresa: las personas. Gestionamos toda la complejidad administrativa y legal de las relaciones laborales para que usted pueda centrarse en el crecimiento de su negocio.'
  },
  {
    id: 'contable',
    title: 'Asesoría Contable',
    description: 'Información financiera precisa y actualizada para una toma de decisiones estratégica.',
    icon: FileText,
    benefits: ['Contabilidad en tiempo real', 'Análisis de balances y resultados', 'Legalización de libros oficiales'],
    longDescription: 'La contabilidad no es solo una obligación, es la brújula de su negocio. Proporcionamos estados financieros claros y detallados que reflejan la realidad de su empresa.'
  },
  {
    id: 'mercantil',
    title: 'Derecho Mercantil',
    description: 'Soporte legal sólido para todas las etapas y transacciones de su vida societaria.',
    icon: Scale,
    benefits: ['Constitución de sociedades', 'Modificaciones estatutarias', 'Contratación mercantil'],
    longDescription: 'Desde la creación hasta la expansión o reestructuración, nuestros abogados mercantilistas aseguran que cada paso legal sea firme y proteja sus intereses a largo plazo.'
  },
  {
    id: 'software',
    title: 'Digitalización y Software',
    description: 'Implementación de soluciones ERP y CRM para optimizar la gestión operativa de su empresa.',
    icon: Laptop,
    benefits: ['Selección e implantación de ERP', 'Digitalización de procesos', 'Formación tecnológica'],
    longDescription: 'Transformamos su operativa mediante la tecnología. Ayudamos a su empresa a dar el salto digital implementando las herramientas que mejor se adaptan a su flujo de trabajo.'
  },
  {
    id: 'seguros',
    title: 'Seguros Corporativos',
    description: 'Protección integral contra riesgos empresariales, desde responsabilidad civil hasta ciberseguridad.',
    icon: Shield,
    benefits: ['Responsabilidad Civil', 'Ciberseguros', 'Seguros de Crédito y Caución'],
    longDescription: 'Blindamos su patrimonio y su continuidad de negocio. Analizamos sus riesgos específicos para contratar las pólizas que realmente necesita, sin sobrecostes.'
  },
  {
    id: 'constitucion',
    title: 'Constitución Express',
    description: 'Creación de nuevas sociedades de forma rápida y eficiente, cumpliendo todos los requisitos legales.',
    icon: Building2,
    benefits: ['Alta en 48-72 horas', 'Asesoramiento en estatutos', 'Tramitación telemática completa'],
    longDescription: 'Convertimos su idea en una realidad legal en tiempo récord. Gestionamos todo el proceso ante notario y registro mercantil para que usted solo se preocupe de emprender.'
  },
  {
    id: 'compliance',
    title: 'Compliance y Auditoría',
    description: 'Prevención de riesgos penales y cumplimiento normativo para asegurar la integridad de su marca.',
    icon: ClipboardCheck,
    benefits: ['Prevención de Riesgos Penales', 'Protección de Datos (RGPD)', 'Auditoría de Procesos'],
    longDescription: 'La integridad es su mejor activo. Implementamos sistemas de control interno que aseguran el cumplimiento de todas las normativas vigentes, evitando sanciones y daños reputacionales.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Rodríguez',
    role: 'CEO, Grupo Gastronómico Madrid',
    content: 'Medla Asesores ha sido fundamental en nuestra expansión. Su conocimiento del sector hostelería es inigualable.',
  },
  {
    id: '2',
    name: 'Elena Martínez',
    role: 'Fundadora, Tech Solutions SL',
    content: 'Profesionalidad, cercanía y resultados. No son solo asesores, son socios estratégicos que entienden mi negocio.',
  }
];

export const TEAM: TeamMember[] = [
  {
    id: '1',
    name: 'Antonio Medla',
    role: 'Socio Fundador - Abogado',
    bio: 'Especialista en derecho mercantil y fiscal con más de 20 años de experiencia asesorando a grandes grupos empresariales.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500',
  },
  {
    id: '2',
    name: 'Sofía García',
    role: 'Directora de Área Laboral',
    bio: 'Experta en relaciones laborales y gestión de capital humano, enfocada en la eficiencia y el cumplimiento normativo.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500',
  }
];

export const FAQS = [
  {
    question: '¿Cómo funciona la primera consulta gratuita?',
    answer: 'Es una sesión de 15 minutos donde analizamos los puntos clave de su situación y determinamos si podemos ayudarle de manera efectiva.'
  },
  {
    question: '¿Tienen experiencia específica en hostelería?',
    answer: 'Sí, somos asesores preferentes de importantes grupos gastronómicos en Madrid y Barcelona, gestionando desde licencias hasta convenios colectivos específicos.'
  },
  {
    question: '¿Puedo contratar servicios puntuales o solo igualas mensuales?',
    answer: 'Ofrecemos ambas modalidades. Desde gestiones mercantiles únicas hasta servicios de asesoramiento recurrente (igualas) adaptados al volumen de su empresa.'
  }
];

export const SUCCESS_CASES = [
  {
    title: 'Reestructuración de Grupo Hotelero',
    outcome: 'Ahorro fiscal del 25% anual mediante una nueva estructura de holding.',
    category: 'Fiscal / Mercantil'
  },
  {
    title: 'Defensa en Inspección de Trabajo',
    outcome: 'Resolución favorable sin sanciones tras auditoría preventiva de 6 meses.',
    category: 'Laboral'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    name: 'Pack Digital Essential',
    price: '499€',
    period: '/mes',
    description: 'La base sólida para nuevos negocios digitales y autónomos que buscan protección profesional.',
    features: [
      'Constitución Express de Sociedad',
      'Asesoría Fiscal & Contable básica',
      'Implementación de CRM Inicial',
      'Protección de Datos (RGPD) básica',
      'Soporte vía email prioritario'
    ],
    cta: 'Empezar ahora',
    highlight: false
  },
  {
    name: 'Pack Legal-Tech Pro',
    price: '999€',
    period: '/mes',
    description: 'Gestión integral para empresas en crecimiento que requieren escalabilidad y blindaje legal.',
    features: [
      'Todo lo del Pack Essential',
      'ERP Corporativo completo',
      'Compliance Penal preventivo',
      'Contratación Mercantil ilimitada',
      'Asesoría Laboral (hasta 10 empleados)',
      'Soporte 24/7 preferente'
    ],
    cta: 'Más Popular',
    highlight: true
  },
  {
    name: 'Pack Elite Global',
    price: '1.999€',
    period: '/mes',
    description: 'Blindaje total y transformación digital avanzada para empresas de alto impacto.',
    features: [
      'Todo lo del Pack Pro',
      'Auditoría de Sistemas anual',
      'Seguro de Ciberseguridad incluido',
      'Due Diligence para inversores',
      'Estrategia Fiscal Internacional',
      'Consultor dedicado 1-on-1'
    ],
    cta: 'Solicitar acceso Elite',
    highlight: false
  }
];

