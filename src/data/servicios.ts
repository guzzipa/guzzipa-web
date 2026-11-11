// Catálogo completo de servicios. Lo usan la home (resumen) y /servicios (detalle).
// Para agregar, sacar o reordenar un servicio, editá solo este archivo: la numeración es automática.

export type Donde = 'direccion' | 'equipos' | 'tecnologia' | 'operacion';
export type Cuando = 'decidir' | 'construir' | 'sostener';

export interface Servicio {
  t: string; // nombre
  c: string; // nombre corto, para el mapa
  donde: Donde; // en qué parte de la empresa opera
  cuando: Cuando; // en qué momento
  d: string; // qué es
  para: string; // para quién
  out: string; // qué te llevás
  href?: string; // página propia, si la tiene
  cta?: string; // texto del botón a esa página
}

export interface Grupo {
  id: string;
  k: string; // etiqueta corta
  t: string; // título del grupo
  d: string; // bajada
  items: Servicio[];
}

export const grupos: Grupo[] = [
  {
    id: 'estrategia',
    k: 'Decidir',
    t: 'Estrategia',
    d: 'Para saber dónde estás, a dónde ir y en qué orden.',
    items: [
      {
        t: 'Diagnóstico de madurez de datos e IA',
        c: 'Diagnóstico',
        donde: 'direccion',
        cuando: 'decidir',
        d: 'Un relevamiento de cómo tu empresa usa hoy los datos y la IA: equipos, procesos, plataformas, calidad de datos y adopción.',
        para: 'Empresas que quieren una foto honesta antes de invertir.',
        out: 'Un informe con brechas, riesgos y oportunidades priorizadas.',
      },
      {
        t: 'Estrategia y hoja de ruta de IA',
        c: 'Hoja de ruta',
        donde: 'direccion',
        cuando: 'decidir',
        d: 'Definimos qué querés lograr con IA, qué capacidades hacen falta y en qué orden construirlas.',
        para: 'Directorios y equipos de liderazgo que necesitan un plan, no una lista de ideas.',
        out: 'Una hoja de ruta por etapas, con responsables, inversión estimada e indicadores.',
      },
      {
        t: 'Priorización de casos de uso',
        c: 'Casos de uso',
        donde: 'operacion',
        cuando: 'decidir',
        d: 'Ordenamos las ideas de IA por impacto, factibilidad y riesgo, y armamos el business case de las primeras.',
        para: 'Empresas con muchas ideas y pocas certezas sobre por cuál empezar.',
        out: 'Un portafolio priorizado y el business case de los casos elegidos.',
      },
      {
        t: 'Arquitectura y selección de proveedores',
        c: 'Arquitectura',
        donde: 'tecnologia',
        cuando: 'decidir',
        d: 'Te ayudo a elegir nube, plataforma de datos, modelos y herramientas, y a negociar con proveedores con criterio técnico.',
        para: 'Equipos que están por tomar una decisión tecnológica que dura años.',
        out: 'Una arquitectura objetivo y una recomendación de proveedores fundamentada.',
      },
    ],
  },
  {
    id: 'implementacion',
    k: 'Construir',
    t: 'Implementación',
    d: 'Para pasar de la idea a algo funcionando en la operación.',
    items: [
      {
        t: 'AI Gateway',
        c: 'AI Gateway',
        donde: 'tecnologia',
        cuando: 'construir',
        d: 'Un único punto de entrada para que toda la empresa use cualquier modelo de IA con control de accesos, costos y datos, en tu propia nube.',
        para: 'Empresas donde cada área ya usa IA por su cuenta.',
        out: 'El gateway funcionando en tu nube, conectado a tu identidad y a tus proveedores.',
        href: '/ai-implementation',
        cta: 'Conocer el AI Gateway',
      },
      {
        t: 'Automatizaciones y agentes de IA',
        c: 'Automatizaciones',
        donde: 'operacion',
        cuando: 'construir',
        d: 'Identificamos los procesos manuales que más horas consumen y los automatizamos con IA, integrados a tus sistemas.',
        para: 'Operaciones con tareas repetitivas que hoy dependen de planillas y copiar y pegar.',
        out: 'Automatizaciones en producción y un equipo que sabe sostenerlas.',
      },
      {
        t: 'Asistentes de atención al cliente',
        c: 'Asistentes',
        donde: 'operacion',
        cuando: 'construir',
        d: 'Asistentes conversacionales en web, app o WhatsApp que resuelven consultas reales y derivan bien a una persona cuando hace falta.',
        para: 'Áreas de atención con alto volumen de consultas repetidas.',
        out: 'Un asistente en producción, con métricas de resolución y calidad.',
      },
      {
        t: 'Scoring de riesgo y crédito alternativo',
        c: 'Scoring',
        donde: 'operacion',
        cuando: 'construir',
        d: 'Modelos de riesgo que usan datos no tradicionales para evaluar a quienes el sistema financiero no ve.',
        para: 'Fintechs, bancos y empresas que dan crédito o financian compras.',
        out: 'Un modelo validado, integrado a la decisión de crédito y monitoreado.',
      },
      {
        t: 'Modelos de valor de cliente',
        c: 'Valor de cliente',
        donde: 'operacion',
        cuando: 'construir',
        d: 'Modelos de lifetime value, abandono y propensión para decidir dónde invertir en cada cliente.',
        para: 'Negocios con muchos clientes y decisiones de marketing, crédito o retención.',
        out: 'Predicciones accionables conectadas a las campañas y al producto.',
      },
      {
        t: 'Plataforma de datos y analítica self-service',
        c: 'Plataforma de datos',
        donde: 'tecnologia',
        cuando: 'construir',
        d: 'La base para que toda la empresa consuma datos confiables sin depender de un intermediario para cada pregunta.',
        para: 'Empresas donde cada reporte es un pedido al equipo de datos.',
        out: 'Una plataforma de datos ordenada y herramientas de consulta para el negocio.',
      },
      {
        t: 'Gobierno de datos y de IA',
        c: 'Gobierno',
        donde: 'tecnologia',
        cuando: 'sostener',
        d: 'Reglas, roles y controles para usar datos e IA con calidad, seguridad y cumplimiento regulatorio.',
        para: 'Empresas reguladas o que manejan datos sensibles de clientes.',
        out: 'Un modelo de gobierno práctico, con políticas que se aplican de verdad.',
      },
    ],
  },
  {
    id: 'liderazgo',
    k: 'Liderar',
    t: 'Liderazgo',
    d: 'Para tener a alguien que conduzca datos e IA desde adentro o cerca de la mesa.',
    items: [
      {
        t: 'Fractional CDO / CAIO',
        c: 'Fractional CDO/CAIO',
        donde: 'direccion',
        cuando: 'sostener',
        d: 'Asumo el rol de Chief Data o Chief AI Officer a tiempo parcial: estrategia, equipo y ejecución.',
        para: 'Empresas que necesitan ese liderazgo y todavía no a tiempo completo.',
        out: 'Un líder de datos e IA dentro de tu equipo directivo, por el tiempo que haga falta.',
      },
      {
        t: 'Armado de equipos de datos e IA',
        c: 'Armado de equipos',
        donde: 'equipos',
        cuando: 'construir',
        d: 'Diseño de la estructura, perfiles y carrera del equipo, y acompañamiento en la búsqueda de sus líderes.',
        para: 'Empresas que van a contratar a su Head of Data o a armar el área desde cero.',
        out: 'Un organigrama, descripciones de puesto y las primeras contrataciones bien hechas.',
      },
      {
        t: 'Advisory para CEOs y directorios',
        c: 'Advisory',
        donde: 'direccion',
        cuando: 'sostener',
        d: 'Un set de horas para pensar decisiones de datos e IA con alguien que ya las tomó.',
        para: 'CEOs, directorios y comités que necesitan una segunda opinión experta.',
        out: 'Decisiones mejor fundadas, con un interlocutor de confianza.',
      },
      {
        t: 'Advisor de startups',
        c: 'Advisor de startups',
        donde: 'direccion',
        cuando: 'sostener',
        d: 'Acompañamiento a fundadores que construyen productos con datos e IA: producto, arquitectura, equipo y relato para inversores.',
        para: 'Startups en etapa temprana o en crecimiento.',
        out: 'Un advisor involucrado en las decisiones que más pesan.',
      },
    ],
  },
  {
    id: 'mentoria',
    k: 'Acompañar',
    t: 'Mentoría',
    d: 'Para las personas que lideran datos e IA.',
    items: [
      {
        t: 'Mentoría 1:1 para líderes de datos e IA',
        c: 'Mentoría 1:1',
        donde: 'equipos',
        cuando: 'sostener',
        d: 'Encuentros uno a uno para trabajar decisiones difíciles, armado de equipo, carrera y cómo ganar lugar en la mesa del negocio.',
        para: 'Quienes lideran o quieren liderar equipos de datos e IA.',
        out: 'Un mentor que ya recorrió el camino y te acompaña en el tuyo.',
      },
      {
        t: 'Mentoría a equipos de liderazgo',
        c: 'Mentoría a equipos',
        donde: 'equipos',
        cuando: 'sostener',
        d: 'Sesiones con el equipo de liderazgo de datos e IA de una empresa para alinear prioridades y formas de trabajo.',
        para: 'Áreas de datos que crecieron rápido y necesitan ordenarse.',
        out: 'Un equipo de liderazgo alineado y con criterios compartidos.',
      },
    ],
  },
  {
    id: 'formacion',
    k: 'Formar',
    t: 'Formación',
    d: 'Para que la IA deje de ser tema de pocos.',
    items: [
      {
        t: 'Workshops de IA para líderes',
        c: 'Workshops',
        donde: 'equipos',
        cuando: 'construir',
        d: 'Talleres in-company para que directivos y mandos medios entiendan qué puede hacer la IA en su área y cómo empezar.',
        para: 'Equipos directivos y gerenciales.',
        out: 'Líderes con criterio propio y una primera lista de casos para su área.',
      },
      {
        t: 'Alfabetización en IA para toda la empresa',
        c: 'Alfabetización en IA',
        donde: 'equipos',
        cuando: 'construir',
        d: 'Programas de formación para que todos los equipos usen IA en su trabajo diario, con buenas prácticas y cuidado de los datos.',
        para: 'Empresas que quieren adopción amplia y ordenada.',
        out: 'Equipos que usan IA todos los días, con reglas claras.',
      },
      {
        t: 'Keynotes y charlas',
        c: 'Charlas',
        donde: 'equipos',
        cuando: 'decidir',
        d: 'Charlas para congresos, eventos corporativos y programas ejecutivos sobre datos, IA y liderazgo.',
        para: 'Organizadores de eventos, empresas y universidades.',
        out: 'Una charla a medida de tu audiencia.',
        href: '/prensa',
        cta: 'Kit para organizadores',
      },
    ],
  },
];

// Numeración corrida 01, 02, ... a lo largo de todo el catálogo.
let n = 0;
export const catalogo = grupos.map((g) => ({
  ...g,
  items: g.items.map((s) => ({ ...s, n: String(++n).padStart(2, '0') })),
}));
export const totalServicios = n;

// Situaciones para el selector guiado: cada una recomienda 2 o 3 servicios (por nombre exacto).
export const situaciones = [
  {
    k: 'Por dónde empezar',
    g: 'estrategia',
    t: 'Quiero saber por dónde empezar con IA',
    d: 'Primero una foto honesta de dónde estás, después un plan con prioridades claras.',
    s: ['Diagnóstico de madurez de datos e IA', 'Estrategia y hoja de ruta de IA', 'Priorización de casos de uso'],
  },
  {
    k: 'IA sin control',
    g: 'implementacion',
    t: 'Cada área usa IA por su cuenta',
    d: 'Ordenar accesos, costos y datos antes de que el uso escale, sin frenar a nadie.',
    s: ['AI Gateway', 'Gobierno de datos y de IA', 'Alfabetización en IA para toda la empresa'],
  },
  {
    k: 'Automatizar procesos',
    g: 'implementacion',
    t: 'Tengo procesos que quiero automatizar',
    d: 'Elegir bien qué automatizar y llevarlo a producción, integrado a tus sistemas.',
    s: ['Automatizaciones y agentes de IA', 'Asistentes de atención al cliente', 'Priorización de casos de uso'],
  },
  {
    k: 'Datos de clientes',
    g: 'implementacion',
    t: 'Quiero sacarle más valor a los datos de mis clientes',
    d: 'Modelos y plataforma para decidir mejor en crédito, marketing y retención.',
    s: ['Modelos de valor de cliente', 'Scoring de riesgo y crédito alternativo', 'Plataforma de datos y analítica self-service'],
  },
  {
    k: 'Liderazgo',
    g: 'liderazgo',
    t: 'Necesito a alguien que lidere datos e IA',
    d: 'Liderazgo con experiencia, a tiempo parcial o como segunda opinión en la mesa.',
    s: ['Fractional CDO / CAIO', 'Armado de equipos de datos e IA', 'Advisory para CEOs y directorios'],
  },
  {
    k: 'Crecer como líder',
    g: 'mentoria',
    t: 'Quiero crecer como líder de datos o IA',
    d: 'Acompañamiento de alguien que ya recorrió el camino.',
    s: ['Mentoría 1:1 para líderes de datos e IA', 'Mentoría a equipos de liderazgo'],
  },
  {
    k: 'Formación y charlas',
    g: 'formacion',
    t: 'Quiero formar a mi equipo o sumar una charla',
    d: 'Desde un workshop para directivos hasta una keynote para tu evento.',
    s: ['Workshops de IA para líderes', 'Alfabetización en IA para toda la empresa', 'Keynotes y charlas'],
  },
];

const porNombre = new Map(catalogo.flatMap((g) => g.items.map((s) => [s.t, { ...s, grupo: g.t, gid: g.id }] as const)));
export const situacionesResueltas = situaciones.map((x) => ({
  ...x,
  items: x.s.map((t) => {
    const it = porNombre.get(t);
    if (!it) throw new Error(`Servicio inexistente en situaciones: ${t}`);
    return it;
  }),
}));

// Ejes del mapa de servicios.
export const ejesDonde: { id: Donde; t: string; d: string }[] = [
  { id: 'direccion', t: 'Dirección', d: 'Directorio, CEO y equipo directivo' },
  { id: 'equipos', t: 'Equipos y personas', d: 'Líderes, talento y cultura' },
  { id: 'tecnologia', t: 'Datos y tecnología', d: 'Plataformas, modelos y controles' },
  { id: 'operacion', t: 'Operación y clientes', d: 'Procesos, productos y atención' },
];
export const ejesCuando: { id: Cuando; t: string; d: string }[] = [
  { id: 'decidir', t: 'Decidir', d: 'Saber dónde estás y a dónde ir' },
  { id: 'construir', t: 'Construir', d: 'Llevarlo a producción' },
  { id: 'sostener', t: 'Sostener', d: 'Liderarlo y hacerlo crecer' },
];
