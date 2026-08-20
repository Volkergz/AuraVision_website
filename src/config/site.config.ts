/* ============================================================
   AuraVisión — site.config.ts
   ÚNICA fuente de contenido editable de la página.
   Todo el texto y rutas de imágenes viven aquí; los componentes
   solo leen de este archivo.
   ============================================================ */

export interface SiteInfo {
  name: string;
  url: string;
  description: string;
  favicon: string;
  ogImage: string;
}

export interface CtaLink {
  label: string;
  href: string;
}

export interface HeroContent {
  tagline: string;
  hook: string;
  problem: string;
  solution: string;
  cta: CtaLink[];
  /** Referencia APA de la cifra del hook. */
  source: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Technology {
  name: string;
  detail: string;
}

export interface AboutContent {
  summary: string;
  problem: string;
  valueProposition: string[];
  technologies: Technology[];
  impactShort: string;
  impactMedium: string;
  impactLong: string;
  stats: Stat[];
}

export interface TimelinePhoto {
  src: string;
  alt: string;
  description: string;
}

export interface TimelineLink {
  label: string;
  href: string;
}

export interface TimelineItem {
  date: string;
  title: string;
  description: string;
  detail?: string;
  photos: TimelinePhoto[];
  links: TimelineLink[];
}

export interface Collaborator {
  name: string;
  role: string;
  photo: string;
  linkedin: string;
  github?: string;
}

export interface ContactContent {
  heading: string;
  text: string;
  email: string;
  ctaLabel: string;
}

export interface FooterContent {
  description: string;
  quickLinks: { label: string; href: string }[];
  copyright: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  site: SiteInfo;
  nav: NavLink[];
  hero: HeroContent;
  about: AboutContent;
  timeline: TimelineItem[];
  collaborators: Collaborator[];
  contact: ContactContent;
  footer: FooterContent;
}

export const siteConfig: SiteConfig = {
  /* ----------------------------------------------------------
     SITIO (SEO / metadatos)
  ---------------------------------------------------------- */
  site: {
    name: 'AuraVisión',
    url: 'https://auravision.vercel.app',
    description:
      'AuraVisión: lentes inteligentes con sensores ultrasónicos y retroalimentación háptica que complementan el bastón blanco para una movilidad más autónoma y segura.',
    favicon: '/images/isotipo.png',
    ogImage: '/images/isotipo.png',
  },

  /* ----------------------------------------------------------
     NAV (barra de navegación)
  ---------------------------------------------------------- */
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Proyecto', href: '#proyecto' },
    { label: 'Cronología', href: '#cronologia' },
    { label: 'Colaboradores', href: '#colaboradores' },
    { label: 'Contacto', href: '#contacto' },
  ],

  /* ----------------------------------------------------------
     HERO (portada)
  ---------------------------------------------------------- */
  hero: {
    tagline: 'Cambiar los obstáculos por caminos más seguros.',
    hook: '¿Sabías que más de 4,6 millones de personas adultas en Chile presentan algún grado de pérdida de visión, y más de 153 mil viven con ceguera total?',
    problem:
      'Imagina navegar por la ciudad diariamente cuando el suelo es tu única guía. Pero hay peligros que están a la altura de tu cara y del torso. No todos los obstáculos pueden ser detectados con el bastón tradicional.',
    solution:
      'Como solución a esta problemática, hemos creado un dispositivo en forma de lente que detecta los obstáculos cercanos a través de sensores, los cuales procesan la información y emiten una señal háptica mediante vibración direccional reconocible por el usuario.',
    cta: [
      { label: 'Ver proyecto', href: '#proyecto' },
      { label: 'Contáctanos', href: '#contacto' },
    ],
    source:
      'Fundación Luz. (2023). Estudio sobre personas con discapacidad visual en Chile: Análisis ENDIDE 2022. https://fundacionluz.cl/area/estudio-sobre-personas-con-discapacidad-visual-en-chile-fundacion-luz-endide-2022/',
  },

  /* ----------------------------------------------------------
     ABOUT (información del proyecto)
  ---------------------------------------------------------- */
  about: {
    summary:
      'AuraVisión es un dispositivo tipo lentes inteligentes que complementa y supera las limitaciones del bastón blanco para personas con discapacidad visual. Mediante sensores ultrasónicos y motores vibradores, detecta obstáculos a diferentes alturas y distancias, alertando al usuario a través de retroalimentación háptica (vibración) para un desplazamiento más autónomo, seguro y confiable.',
    problem:
      'El bastón blanco, pese a ser un apoyo fundamental, tiene limitaciones significativas para detectar obstáculos elevados y prevenir accidentes en entornos cambiantes. Las soluciones tecnológicas del mercado (OrCam, eSight) tienen un alto costo y limitada disponibilidad, lo que las hace inaccesibles para la mayoría de la población y perpetúa la exclusión.',
    valueProposition: [
      'Mayor seguridad: previene accidentes al detectar obstáculos en tiempo real, complementando el uso del bastón blanco.',
      'Información de calidad, obtenida a través de organizaciones como SENADIS, la biblioteca central para ciegos y la ONCE.',
      'Prototipo probado con usuarios reales, cuyo feedback ha permitido crear una solución más humana, accesible y eficiente.',
    ],
    technologies: [
      {
        name: 'Microcontrolador Seeed Studio XIAO ESP32-S3 Sense',
        detail: 'Procesa la información de los sensores, ejecuta los algoritmos y controla los componentes.',
      },
      {
        name: 'Sensores ultrasónicos',
        detail: 'Detección de obstáculos a diferentes alturas y distancias.',
      },
      {
        name: 'Motor vibrador PWM Switch DC',
        detail: 'Retroalimentación háptica.',
      },
      {
        name: 'Software de visualización y monitoreo',
        detail: 'Monitoreo en tiempo real del estado del dispositivo (batería, conexión y temperatura).',
      },
    ],
    impactShort:
      'Reducir el riesgo de incidentes en la movilidad diaria y fortalecer la seguridad personal, especialmente por la noche o en condiciones adversas.',
    impactMedium:
      'Mejorar la autonomía y confianza de los usuarios, favoreciendo su participación en actividades cotidianas (trabajo, estudios, vida social).',
    impactLong:
      'Servir como base validada para una escalabilidad y producción a mayor escala, haciendo asequible un dispositivo de apoyo a la movilidad.',
    stats: [
      { value: '+4,6M', label: 'personas adultas con pérdida de visión en Chile' },
      { value: '+153k', label: 'personas con ceguera total' },
      { value: '100%', label: 'bastón blanco complementado, nunca reemplazado' },
    ],
  },

  /* ----------------------------------------------------------
     TIMELINE (cronología de hitos)
     Hitos reales del proyecto con textos aprobados.
     Fotos en public/images/hitos/ con convención hito-N-img-M.jpg
     (ej. hito-2-img-1.jpg). Reemplazar una foto = sobrescribir el archivo.
  ---------------------------------------------------------- */
  timeline: [
    {
      date: '2025-09',
      title: 'Inicio del Proyecto',
      description:
        'El punto de partida: así nació AuraVisión en el Centro de Innovación y Transferencia Tecnológica de Duoc UC.',
      detail:
        'AuraVisión nació en el Centro de Innovación y Transferencia Tecnológica de Duoc UC como un proyecto de investigación aplicada. En esta primera reunión, el equipo completo —los cinco integrantes— definió el rumbo del proyecto. Se realizó una investigación inicial de los usuarios a quienes se dirigiría, consultando fuentes clave como SENADIS, ONCE y la Biblioteca Central para Ciegos. De ahí surgió la idea rectora: desarrollar un dispositivo detector de obstáculos cercanos para personas con discapacidad visual, que complementara el bastón blanco. También se tanteó una primera lista de componentes, cuya selección definitiva quedó delegada a la investigación en desarrollo.',
      photos: [
        {
          src: '/images/hitos/hito-1-img-1.jpg',
          alt: 'Reunión inicial del equipo de AuraVisión',
          description: 'La reunión donde nació AuraVisión y se definió la idea del dispositivo.',
        },
        {
          src: '/images/hitos/hito-1-img-2.jpg',
          alt: 'Armado del prototipo v1',
          description: 'Armado del Prototipo v1.',
        },
      ],
      links: [],
    },
    {
      date: '2025-10',
      title: 'Primera Prueba de Prototipo',
      description:
        'De la mesa de trabajo a la realidad: primer test del prototipo con usuarios reales.',
      detail:
        'Con el primer prototipo funcional en mano —detección de obstáculos, vibración háptica y un diseño 3D de los lentes, construido sobre un Arduino Nano con baterías— el equipo llegó a la Biblioteca Central para Ciegos para ponerlo a prueba por primera vez. Tanto los usuarios con discapacidad visual como el equipo de la biblioteca probaron el dispositivo y entregaron feedback valioso. La idea general fue bien recibida, pero quedó claro que el prototipo aún se encontraba en una fase muy temprana de investigación y necesitaba más desarrollo, especialmente en ergonomía.',
      photos: [
        {
          src: '/images/hitos/hito-2-img-1.jpg',
          alt: 'Usuarios probando el prototipo',
          description: 'Usuarios probando el prototipo.',
        },
      ],
      links: [],
    },
    {
      date: '2025-11',
      title: 'Demo Day',
      description:
        'AuraVisión salió al escenario: pitch y demo en vivo ante jurado, empresas e invitados.',
      detail:
        'La Demo Day, organizada por el Centro de Innovación y Transferencia Tecnológica (CITT) de Duoc UC, reunió a los proyectos de innovación del programa —muchos de ellos trabajando directamente con empresas externas que fueron invitadas y asistieron. El equipo de AuraVisión participó con un stand donde el jurado, los invitados y los estudiantes de la sede DuocUC Plaza Vespucio pudieron probar el prototipo. Luego llegó el momento cumbre: el pitch en el escenario frente a todos. Más allá de la competencia, fue una gran oportunidad de visibilidad: no solo para dar a conocer nuestra solución, sino también para compartir la problemática de la discapacidad visual con más personas y recibir feedback de muchas con conocimientos clave.',
      photos: [
        {
          src: '/images/hitos/hito-3-img-1.jpeg',
          alt: 'Stand de AuraVisión en la Demo Day',
          description: 'El stand de AuraVisión en la Demo Day del CITT, donde el público probó el prototipo.',
        },
      ],
      links: [],
    },
    {
      date: '2026-03',
      title: 'Planeación de la Nueva Iteración',
      description:
        'La iteración que cambia todo: nuevo hardware, nuevo diseño y un plan para probarlo.',
      detail:
        'En el periodo 2026-1, el equipo se reunió para planear la nueva iteración de AuraVisión. El foco principal era lograr un cambio significativo frente al primer prototipo: mejorar el diseño 3D y reducir el tamaño del dispositivo, incorporando nuevos componentes electrónicos que facilitaran ese trabajo. En la reunión se tomaron tres decisiones clave: el cambio a nuevo hardware, el rediseño del modelo 3D y un plan para probar las funcionalidades. El resultado fue un plan completo con tareas delegadas, listo para dar inicio al desarrollo.',
      photos: [
        {
          src: '/images/hitos/hito-4-img-1.jpeg',
          alt: 'Reunión de planeación de la nueva iteración de AuraVisión',
          description: 'El equipo planeando el rediseño y el nuevo hardware de la iteración 2026-1.',
        },
        {
          src: '/images/hitos/hito-4-img-2.jpg',
          alt: 'El equipo planeando el rediseño y el nuevo hardware',
          description: 'El equipo planeando el rediseño y el nuevo hardware de la iteración 2026-1.',
        },
      ],
      links: [],
    },
    {
      date: '2026-04',
      title: 'Lanzamiento CITT',
      description:
        'Nuestra sede, nuestro stand: el prototipo de AuraVisión se presentó ante los alumnos de Plaza Norte.',
      detail:
        'La inauguración del Centro de Innovación y Transferencia Tecnológica (CITT) se celebró en todas las sedes a la vez, y en cada una los proyectos del programa montaron sus stands para sus propios alumnos. AuraVisión se instaló en Sede Plaza Norte —donde estudia el equipo— y presentó el prototipo a los estudiantes e invitados que recorrieron el stand. El proyecto fue bien recibido: se generaron contactos y oportunidades de colaboración, y se logró difundir tanto la solución como la problemática de la discapacidad visual entre los compañeros.',
      photos: [
        {
          src: '/images/hitos/hito-5-img-1.jpeg',
          alt: 'Stand de AuraVisión en el Lanzamiento CITT en Sede Plaza Norte',
          description: 'El stand de AuraVisión en la inauguración del CITT en Sede Plaza Norte.',
        },
        {
          src: '/images/hitos/hito-5-img-2.jpg',
          alt: 'Alumnos e invitados visitando el stand de AuraVisión',
          description: 'Alumnos de Plaza Norte conociendo el proyecto durante el Lanzamiento CITT.',
        },
      ],
      links: [],
    },
    {
      date: '2026-05',
      title: 'AWS Community Day',
      description:
        'Rumbo a la nube: arquitectura y herramientas cloud para el monitoreo de AuraVisión.',
      detail:
        'El equipo asistió como participante al AWS Community Day, un evento de la comunidad que combina charlas y actividades sobre tecnologías cloud. Allí se interiorizó en arquitecturas y herramientas de AWS que servirán para el desarrollo del software de monitoreo en tiempo real del dispositivo. Además del aprendizaje técnico, la jornada fue una oportunidad de networking con profesionales de la comunidad, sumando contactos y nuevas ideas para seguir evolucionando AuraVisión.',
      photos: [
        {
          src: '/images/hitos/hito-6-img-1.jpg',
          alt: 'Equipo de AuraVisión en el AWS Community Day',
          description: 'Jornada de networking con la comunidad cloud en el AWS Community Day.',
        },
        {
          src: '/images/hitos/hito-6-img-2.jpg',
          alt: 'Networking en el AWS Community Day',
          description: 'El equipo participando en las charlas del AWS Community Day.',
        },
      ],
      links: [],
    },
    {
      date: '2026-06',
      title: 'Segunda Prueba de Prototipo',
      description:
        'Un salto tangible: la segunda visita a la Biblioteca Central para Ciegos validó el rediseño.',
      detail:
        'Con la nueva iteración en marcha —dispositivo más pequeño, mejor ergonomía y nuevo hardware— el equipo volvió a la Biblioteca Central para Ciegos para una segunda prueba de prototipo. En comparación con la primera visita, el avance fue significativo: los usuarios percibieron la mejora en el tamaño y la ergonomía del dispositivo, y el feedback recibido confirmó el rumbo del proyecto. Quedó claro que el trabajo de rediseño estaba rindiendo frutos, con el camino despejado para seguir puliendo la siguiente iteración.',
      photos: [
        {
          src: '/images/hitos/hito-7-img-1.jpg',
          alt: 'Segunda prueba del prototipo en la Biblioteca Central para Ciegos',
          description: 'La nueva iteración de AuraVisión en la segunda prueba con usuarios.',
        },
        {
          src: '/images/hitos/hito-7-img-2.jpg',
          alt: 'Usuario probando el prototipo rediseñado',
          description: 'Usuarios probando el dispositivo más pequeño y ergonómico.',
        },
        {
          src: '/images/hitos/hito-7-img-3.jpg',
          alt: 'Equipo AuraVisión después de realizar las pruebas',
          description: 'Equipo AuraVisión después de realizar las pruebas.',
        },
      ],
      links: [],
    },
    {
      date: '2026-08',
      title: 'Urbanix',
      description:
        'Primer lugar en Urbanix: la competencia de innovación que coronó el estado actual del proyecto.',
      detail:
        'Urbanix fue una competencia de proyectos de innovación enfocada en ciudades inteligentes, y el equipo de AuraVisión participó con stand y presentación del prototipo. El resultado no pudo ser mejor: nos llevamos el primer lugar de la competencia. Más allá del premio, Urbanix representa el estado actual del proyecto —un hito de cierre que consolida el camino recorrido desde la primera reunión y valida el avance de la solución— y, cabe aclararlo, fue solo el nombre del evento, no del proyecto.',
      photos: [
        {
          src: '/images/hitos/hito-8-img-1.jpg',
          alt: 'El momento del primer lugar en Urbanix',
          description: 'El momento del primer lugar en la competencia Urbanix.',
        },
        {
          src: '/images/hitos/hito-8-img-2.jpg',
          alt: 'Stand de AuraVisión en Urbanix',
          description: 'El stand de AuraVisión en la competencia Urbanix.',
        },
        {
          src: '/images/hitos/hito-8-img-3.jpg',
          alt: 'El equipo presentando el proyecto en Urbanix',
          description: 'El equipo presentando el proyecto en la competencia Urbanix.',
        },
      ],
      links: [],
    },
  ],

  /* ----------------------------------------------------------
     COLLABORATORS (colaboradores)
     Fotos en public/images/colaboradores/ con nombre descriptivo
     (haleym.png, angel.jpeg, aaron.jpeg, priscilla.jpeg, osnellys.jpeg).
     Reemplazar una foto = sobrescribir el archivo.
     github es opcional: si no existe, no se muestra el ícono.
  ---------------------------------------------------------- */
  collaborators: [
    {
      name: 'Haleym Hidalgo',
      role: 'Estudiante Investigador',
      photo: '/images/colaboradores/haleym.png',
      linkedin: 'https://www.linkedin.com/in/haleym-hidalgo-torres/',
      github: 'https://github.com/Volkergz',
    },
    {
      name: 'Angel Perugini',
      role: 'Estudiante Investigador',
      photo: '/images/colaboradores/angel.jpeg',
      linkedin: 'https://www.linkedin.com/in/angel-perugini-a60b0925b/',
      github: 'https://github.com/foxdeyvid88',
    },
    {
      name: 'Aaron Vasquez',
      role: 'Estudiante Investigador',
      photo: '/images/colaboradores/aaron.jpeg',
      linkedin: 'https://www.linkedin.com/in/arone/',
      github: 'https://github.com/xtron3r',
    },
    {
      name: 'Priscilla Castro',
      role: 'Estudiante Investigador',
      photo: '/images/colaboradores/priscilla.jpeg',
      linkedin: 'https://www.linkedin.com/in/priscilla-de-jes%C3%BAs-castro-burgos/',
      github: 'https://github.com/priscastro',
    },
    {
      name: 'Osnellys Andrade',
      role: 'Project Manager',
      photo: '/images/colaboradores/osnellys.jpeg',
      linkedin: 'https://www.linkedin.com/in/osnellys-andrade-d-348223168/',
    },
  ],

  /* ----------------------------------------------------------
     CONTACT (contacto)
     Método pendiente de decisión: mailto vs formulario (Formspree).
     Por ahora se usa mailto:. Cambiar href por endpoint de Formspree si se decide.
  ---------------------------------------------------------- */
  contact: {
    heading: 'Hablemos de AuraVisión',
    text: 'Si quieres conocer más sobre el proyecto, colaborar o sumarte a esta iniciativa, escríbenos.',
    email: 'contacto@auravision.cl',
    ctaLabel: 'Escríbenos',
  },

  /* ----------------------------------------------------------
     FOOTER
  ---------------------------------------------------------- */
  footer: {
    description:
      'AuraVisión — tecnología inclusiva que complementa el bastón blanco para una movilidad más autónoma y segura.',
    quickLinks: [
      { label: 'Inicio', href: '#inicio' },
      { label: 'Proyecto', href: '#proyecto' },
      { label: 'Cronología', href: '#cronologia' },
      { label: 'Colaboradores', href: '#colaboradores' },
      { label: 'Contacto', href: '#contacto' },
    ],
    copyright: 'AuraVisión. Todos los derechos reservados.',
  },
};