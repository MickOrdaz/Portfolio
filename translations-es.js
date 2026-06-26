// Spanish translations for the portfolio.
// Merges over PORTFOLIO_DATA at runtime when "es" language is selected.
const TRANSLATIONS_ES = {
  profile: {
    title: "Ingeniero de Desarrollo de Videojuegos | Ingeniero de Software | Líder Técnico | Co-Director",
    bio: `¡Hola! Soy Miguel — un <span class="bio-highlight">Ingeniero de Desarrollo de Videojuegos</span> e Ingeniero de Software que ama construir todo lo relacionado con juegos, experiencias interactivas, simulaciones y motores gráficos 3D. Siempre he sido <span class="bio-highlight">creativo y profundamente curioso sobre cómo funcionan las cosas</span>, lo que eventualmente me llevó a dedicarme a crear software y videojuegos — y me encanta. Soy la clase de persona que se queda despierta hasta las 3am programando una <span class="bio-highlight">mascota pollito-camarón de escritorio</span> simplemente porque es divertido, aprendiendo constantemente para poder llevar cualquier idea a la realidad.

A lo largo de los años he usado muchos sombreros: comenzando como <span class="bio-highlight">desarrollador indie en solitario</span>, luego como <span class="bio-highlight">profesor de videojuegos</span> enseñando a estudiantes universitarios con los que me encariñé, luego <span class="bio-highlight">liderando equipos de ingeniería y co-dirigiendo el desarrollo de juegos premiados</span>, y también construyendo <span class="bio-highlight">biosimulaciones, enjambres de agentes de IA y sistemas clínicos de investigación</span> para el estudio del cáncer, entre otras cosas.

En esencia, soy un <span class="bio-highlight">Ingeniero de Videojuegos y Líder Técnico</span> que ama conectar la mecánica creativa con la ingeniería técnica robusta. Estoy profundamente obsesionado con el <span class="bio-highlight">gamefeel</span> — el arte invisible de añadir 'jugo' al gameplay, desde inputs con precisión de frame y pesados hit-stops hasta expresivas <span class="bio-highlight">físicas blandas y pantallazos</span> que hacen que simplemente moverse en pantalla se sienta satisfactorio.

Mi trabajo abarca <span class="bio-highlight">ingeniería de sistemas, juegos locos y divertidos</span> y <span class="bio-highlight">arquitecturas full-stack modernas</span>. Ya sea construyendo un <span class="bio-highlight">motor gráfico personalizado en C++</span> con sincronización de escena en vivo vía <span class="bio-highlight">Nvidia Omniverse</span>, o diseñando plataformas React/Python para investigación médica, me enfoco en entregar <span class="bio-highlight">código limpio, altamente estable y optimizado</span>.

¡Trabajemos juntos — si puedes imaginarlo, yo puedo hacerlo realidad!`,
    achievementSpotlight: {
      badge: "Gran Premio",
      event: "Banamex Supernova\nDevs Challenge",
      subtitle: "Heaven Crawler"
    },
    skills: {
      specialties: ["Ingeniería de Gameplay Principal", "Gamefeel y Pulido", "Arquitectura de Sistemas", "IA y Enjambres de Comportamiento", "Animación Procedural", "Sistemas Multijugador", "XR (Apple Vision Pro)"]
    },
    achievements: [
      {
        title: "Gran Premio — Supernova Game Challenge (2025)",
        description: "Lideré la ingeniería y co-dirección de Heaven Crawler para asegurar el premio máximo del evento; administré y reinvertí exitosamente el capital premiado para escalar el equipo de desarrollo."
      },
      {
        title: "Selección Indie Showcase — Sistema de Entretenimiento Mexicano (2025-2026)",
        description: "Heaven Crawler fue seleccionado como título oficial del showcase, destacando su diseño de gameplay y ejecución técnica."
      },
      {
        title: "Nominado a Juego Más Anticipado — Game Effect Awards (2025)",
        description: "Heaven Crawler nominado a Juego Más Anticipado, demostrando fuerte interés de la comunidad e industria previo a su lanzamiento comercial."
      },
      {
        title: "Co-Dirección y Liderazgo Técnico en Proyectos Multi-Plataforma",
        description: "Ingeniería de sistemas para títulos seleccionados y presentados en eventos globales de la industria, incluyendo Gamescom y el Latin American Game Showcase."
      },
      {
        title: "Desarrollador Destacado — Nvidia GPU Technology Conference (2021)",
        description: "Desarrollé un motor gráfico personalizado con soporte de Nvidia Omniverse para sincronización de escena en tiempo real."
      },
      {
        title: "Ponente Técnico — Jalisco Talent Land (2023)",
        description: "Compartí experiencia profesional en ingeniería de videojuegos, paradigmas de optimización y desarrollo de estudio independiente."
      }
    ],
    experience: [
      {
        role: "Fundador, Desarrollador y Líder Técnico",
        description: "Fundé un estudio independiente para desarrollar Heaven Crawler y varios títulos indie experimentales. Desarrollé Heaven Crawler en solitario en sus etapas iniciales hasta convertirlo en una experiencia completamente jugable antes de escalar y asociarme con Carbon Machina."
      },
      {
        role: "Programador Principal y Co-Director",
        description: "Lideré un equipo de ingeniería multidisciplinario programando características principales, gameplay, IA avanzada, gamefeel, sistemas de UI y herramientas de editor en Unity y Unreal."
      },
      {
        role: "Profesor de Prototipado de Videojuegos",
        description: "Instruí a estudiantes avanzados en técnicas de prototipado rápido, bucles de gameplay principales, mecánicas de producción y arquitectura de código limpio en Unity."
      },
      {
        role: "Ingeniero de IA Médica e Investigación",
        description: "Ingeniería de un sistema de enjambre de agentes de IA para investigación médica con un Laboratorio Virtual 3D. Desarrollé simulaciones para investigación de comportamiento celular/cáncer y programé apps XR interactivas para Apple Vision Pro."
      }
    ]
  },
  projects: {
    "heaven-crawler": {
      tagline: "Arrastrémonos hasta el cielo.",
      description: {
        short: "Explora, combate y descubre los secretos de una misteriosa torre usando Brazos Mecánicos únicos mientras asciendes a través de un viaje profundamente personal.",
        full: "Heaven Crawler es un dungeon crawler roguelite de acción-aventura con elementos RPG. Ayuda al 'Niño' a abrirse camino a través de El Vientre — una colosal megaestructura babeliana construida para alcanzar los cielos — para traer a su madre de vuelta de la muerte. Dentro de la Torre, será asistido por 'la Guía' y robots amigables que mejoran el hub y revelan los secretos de la Torre en cada run. Empuña Brazos Mecánicos con habilidades únicas, combina Máscaras, Magia, Recuerdos y Reliquias en tu propia build, y usa el entorno mismo — trampas, objetos, elementos reactivos — para superar cada desafío en tu camino. Inspirado en The Legend of Zelda, NieR y el trabajo de Fumito Ueda. Y recuerda: tráela de vuelta."
      },
      features: [
        "ASCIENDE UNA TORRE VIVIENTE. El Vientre está organizado en Biomas — cada uno con salas únicas, trampas, desafíos y enemigos. Obtén almas, sube de nivel y consigue mejor equipo para mejorar cada run.",
        "COMBATE MODULAR CON BRAZOS MECÁNICOS. Personaliza tu build, descubre poderosas sinergias y desarrolla un estilo de combate únicamente tuyo — cada brazo puede mejorarse.",
        "SIN CLASES — CONSTRUYE TU PROPIO ESTILO. Mezcla y combina Equipo, Magia, Habilidades y Reliquias libremente. Cada objeto desbloquea diferentes estadísticas y habilidades para combinar como elijas.",
        "COMBATE ELEMENTAL REACTIVO. Elementos completamente reactivos — electricidad, fuego, hielo y corrosión — desbloquean nuevas posibilidades de gameplay e interacciones ambientales con cada enemigo.",
        "ENEMIGOS DINÁMICOS Y ENCUENTROS EMERGENTES. Animales mecánicos merodean la Torre, cada uno con comportamientos, ataques e interacciones distintos que crean situaciones impredecibles y peligrosas.",
        "INTERACCIONES CON NPCs Y UN MUNDO VIVO. Ayuda a los NPCs liberándolos, rescatándolos o derrotándolos. Te recompensarán con sistemas únicos, tiendas y ayuda a lo largo de tu viaje.",
        "ENCUENTROS CON JEFES COLOSALES. En cada capa de la Torre, una Criatura Mecánica Colosal de múltiples fases te espera. Aprende sus patrones y domínala para avanzar más arriba.",
        "BUCLE DE MUERTE ROGUELITE. Cada muerte te devuelve al Lobby con algunas almas — pierdes tu Mochila pero ganas Investigación y Proficiencia. Expande tu Lobby para mejorar permanentemente tus probabilidades.",
        "UN ROGUELITE SOBRE LA PÉRDIDA Y EL CRECIMIENTO. Una historia profundamente personal contada a través de la exploración y la narrativa ambiental, donde cada detalle de la Torre tiene significado. Tráela de vuelta."
      ],
      timeline: [
        "El desarrollo en solitario comienza. Concepto, worldbuilding y primeros prototipos construidos por mí durante mi tiempo libre en Critical Slash.",
        "Seis años de desarrollo en solitario. El juego fue iterado y expandido hasta alcanzar un estado completamente jugable de principio a fin — historia completa, mecánicas y sistemas principales.",
        "Asociación con Carbon Machina Studio para desbloquear el máximo potencial del juego. La preproducción reinicia con un equipo completo para elevar el arte, audio y calidad de producción.",
        "Tráiler oficial anunciado.",
        "Gana el Gran Premio en el Supernova Game Devs Challenge por decisión unánime.",
        "Campaña de Kickstarter lanzada para financiar las etapas finales del lanzamiento."
      ]
    },
    "chicken-desktop-pet": {
      tagline: "Tus extrañas mascotas de pollito-camarón viven en tu pantalla — y trajeron minijuegos.",
      description: {
        short: "Los Chrimp son pequeños híbridos de pollo y camarón que viven directamente en tu escritorio de Windows — deambulando, comiendo, durmiendo y metiéndose en problemas mientras trabajas. Suelta un juguete y de repente tienes un partido de fútbol encima de tu hoja de cálculo.",
        full: "Chrimp es un juego de mascotas de escritorio donde tus mascotas no viven dentro de una ventana — viven encima de todo. Estas pequeñas y tambaleantes criaturas de pollo-camarón caminan por tu pantalla real, duermen bajo tus pestañas del navegador, corren hacia la comida que les dejas caer, y reaccionan cuando los tocas. Cuando no estás jugando, los clics los atraviesan — simplemente están ahí, haciéndote compañía. Pero suelta un juguete y comienza el caos. Una Bandera Juguete convierte a tu Chrimp en una guarnición armada que defiende contra oleadas de zombis, recogiendo ametralladoras que caen del cielo. Un balón de fútbol hace aparecer porterías en los bordes de tu monitor y de inmediato comienzan a competir. Aparece una bomba con una mecha encendida y frenéticamente se la pasan entre ellos, en pánico hasta que explota y los lanza a todos volando. Pon una Radio y bailan con lo que sea que esté reproduciendo tu PC. Cada Chrimp sale de un huevo, crece y puede ser una especie rara — desde el pequeño común hasta el legendario Fantasma o Dorado. Mantenlos felices y alimentados, o si te faltan monedas, siempre está la Olla de Cocina."
      },
      features: [
        "VIVEN EN TU ESCRITORIO: Los Chrimp deambulan, comen, duermen y juegan por tu pantalla real — siempre encima de tus apps pero sin estorbar. Haz clic a través de ellos cuando estés ocupado.",
        "INCUBA, CRECE Y COLECCIONA: Las mascotas salen de huevos y crecen de pollitos a adultos. Descubre especies raras — de Común a Fantasma y Dorado — cada una con aspecto único.",
        "DEFENSA DE TORRES: Suelta una Bandera Juguete y tus Chrimp agarran ametralladoras para defenderla contra oleadas de zombis. Las armas caen del cielo en cuatro niveles de rareza. Seis tipos de zombis intentan invadirte. Sube de nivel con cartas de mejora entre oleadas.",
        "PARTIDO DE FÚTBOL: Suelta un balón y tus Chrimp se dividen inmediatamente en equipos. Las porterías aparecen en los bordes de tu pantalla. Apuntas y chutas con una honda — ellos juegan solos.",
        "GLOBO AL AIRE: Turna con tus mascotas para mantener un globo en el aire. Cuanto más tiempo lo mantengas, más rápido cae. Cada 10 toques ganas un bono de racha de monedas — pero no dejes que toque el suelo.",
        "BOMBA CALIENTE: Aparece una bomba con mecha encendida en tu escritorio. Tus Chrimp la recogen y se la pasan frenéticamente entre ellos. Pita más rápido. Alguien va a salir disparado.",
        "BAILAN CON TU MÚSICA: Coloca una Radio y tus mascotas comienzan a bailar con el audio que esté reproduciendo tu PC — reaccionan al ritmo en tiempo real.",
        "LA OLLA DE COCINA: Si necesitas monedas, puedes cocinar un Chrimp. Los más raros valen más. Los huevos, bebés y tu última mascota sobreviviente siempre están seguros."
      ],
      timeline: [
        "Transparencia de ventana, gestión de click-through y prototipo de clic-a-través del ratón completados usando Win32 API.",
        "Rig IK completo de mascota, árboles de comportamiento, sistema de niveles de rareza y colección de minijuegos integrados; modo de radio con espectro de audio añadido."
      ]
    },
    "ramen-abyss": {
      tagline: "Roguelike cooperativo local construido en Unity 6 con física tambaleante y animación procedural.",
      description: {
        short: "Controla un huevo cocido tambaleante en un roguelike cooperativo local. Estructurado como proyecto educativo con videos tutoriales subidos a TikTok, Instagram, YouTube y Facebook.",
        full: "Ramen Abyss es un roguelike top-down de 2 jugadores locales construido en Unity 6 para Steam, Itch, Android e iOS. Los jugadores controlan un huevo blando cocido con cuernos con física tambaleante y extremidades animadas proceduralmente. Empuñando tres categorías de armas (Perforante, Cortante y Contundente), los jugadores descienden a un vaso de ramen generado aleatoriamente para eliminar monstruos con temática de ingredientes a través de cuatro zonas distintas. El juego tiene mejoras profundas, santuarios de ventajas y meta-progresión con Monedas Narutomaki para desbloquear skins. El proyecto también sirve como herramienta educativa, estructurado para enseñar a los desarrolladores cómo construir bucles de gameplay y sistemas modulares de juego."
      },
      features: [
        "ANIMACIÓN PROCEDURAL TAMBALEANTE: Juega como un huevo con cuernos con física blanda tambaleante y extremidades animadas proceduralmente que soportan modos de movimiento de correr y rodar.",
        "TRES CLASES DE COMBATE: Empuña armas Perforantes (palillos/brochetas), Cortantes (cuchillos/hachas) y Contundentes (cucharas/espátulas), cada una con ataques únicos.",
        "ZONAS DE INGREDIENTES PROCEDURALES: Explora niveles generados aleatoriamente a través de Llanuras de Cerdo, Profundidades de Mariscos, Cuenco Infernal y Caldo Abisal, cada uno con un jefe único.",
        "MONEDAS NARUTOMAKI Y META-PROGRESIÓN: Derrota jefes para ganar monedas y desbloquear skins cosméticos, con modelo premium en Steam y gratuito con anuncios en móvil.",
        "PLAN DE SISTEMAS TUTORIAL: Recurso educativo con patrones de código limpio y videos tutoriales para enseñar a los desarrolladores a construir sistemas de juego modulares."
      ],
      timeline: [
        "Prototipado de física de extremidades con animación procedural y modelos de movimiento en Unity 6.",
        "Pulido del cooperativo local, integración de las cuatro zonas, diseño de jefes y elaboración de guías tutorial del sistema."
      ]
    },
    "vivarium-engine": {
      tagline: "Un motor de videojuegos 3D personalizado en C++ con sincronización de escena en vivo con Omniverse.",
      description: {
        short: "Un motor de videojuegos en C++ con renderizado diferido, soporte VR y sincronización de escena en vivo multi-cliente.",
        full: "Vivarium Engine es un motor de videojuegos 3D construido a medida desarrollado como proyecto de tesis universitaria. Construido en C++, cuenta con renderizado diferido OpenGL, sombreado PBR, integración PhysX, capacidades VR y un generador NavMesh. Incluye un conector personalizado de Nvidia Omniverse que permite a múltiples clientes editar y sincronizar datos de escena 3D en tiempo real. Presentado en la conferencia Nvidia GTC 2021."
      },
      features: [
        "ARQUITECTURA CENTRAL: Grafo de escena completamente personalizado que soporta Objetos del Juego jerárquicos, Componentes modulares y un Administrador de Recursos robusto.",
        "PBR Y RENDERIZADO DIFERIDO: Pipeline de Renderizado Basado en Física de alta fidelidad usando arquitectura de sombreado diferido para iluminación optimizada.",
        "FÍSICA Y COLISIÓN: Simulación PhysX integrada para cuerpos rígidos, articulaciones y colisiones realistas.",
        "HERRAMIENTAS INTEGRADAS: Gizmos 3D de traslación/rotación, Generador de NavMesh y Animador de Cámara para trayectorias complejas.",
        "MANEJO DE ESCENAS: Capacidad completa para guardar y cargar escenas preservando todos los datos de objetos y jerarquías.",
        "SINCRONIZACIÓN EN VIVO CON CREATE APP: Edición de escena bidireccional en tiempo real sincronizando con la App Nvidia Omniverse Create.",
        "SINCRONIZACIÓN MULTI-CLIENTE: Múltiples clientes conectados pueden editar y ver la misma escena 3D simultáneamente.",
        "COMPARTIR SIMULACIÓN DE FÍSICA: Transformaciones PhysX compartidas permitiendo interacciones entre clientes en tiempo real."
      ],
      timeline: [
        "Diseño del motor y sistemas básicos de renderizado OpenGL implementados.",
        "Conector Omniverse integrado y presentado en la Nvidia GPU Technology Conference."
      ]
    },
    "mecha-ko": {
      tagline: "Un juego de boxeo donde tus brazos son máquinas — y se desarman a mitad del combate.",
      description: {
        short: "Un juego de boxeo 3D en tiempo real con estilo anime donde los luchadores empuñan enormes brazos mecánicos que físicamente se rompen durante el combate — y deben repararse o mejorarse entre peleas.",
        full: "Mecha K.O. es un juego de boxeo 3D en tiempo real con estilo artístico anime cel-shading. Los luchadores combaten usando brazos mecánicos masivos, cada uno construido con tres piezas de armadura entrelazadas. A medida que avanza la pelea, esas piezas pueden agrietarse y caer — recibir golpes en un brazo ya dañado lo pone en riesgo de quedar completamente fuera de combate. Gana el round y regresa al rincón para reparar lo que queda o intercambiar piezas y mejorar antes de la próxima pelea. El combate es directo y físico: sin barras de vida escondidas — lo que ves en el brazo ES la vida."
      },
      features: [
        "ARMADURA QUE SE ROMPE EN TIEMPO REAL: Cada brazo mecánico tiene 3 piezas de armadura que se agrietan y caen al recibir golpes — pierde las tres y ese brazo está fuera de la pelea.",
        "BUCLE PELEAR → REPARAR → MEJORAR: Entre rounds, elige qué reparar, qué sacrificar y qué mejorar. Cada decisión se lleva a la siguiente pelea.",
        "ANIME CEL-SHADING 3D: Sombreado toon estilizado que da al juego una sensación de anime dibujado a mano manteniendo el combate visceral y legible.",
        "BOXEO EN TIEMPO REAL DIRECTO: Combate físico rápido donde el daño visible en tus brazos te dice exactamente qué tan cerca estás de perder un miembro."
      ],
      timeline: [
        "Sistema de destrucción de brazos, pipeline de cel shading y bucle de reparación/mejora construidos."
      ]
    },
    "american-trail": {
      tagline: "Una aventura game jam que explora la migración inducida por el clima a través de los ojos de un niño.",
      description: {
        short: "Ayuda al joven Alfonso y a su Abuela a sobrevivir los elementos hostiles a bordo de un tren rumbo al norte.",
        full: "American Trail es una aventura narrativa sobre la migración climática. Tras perder su hogar en una inundación, Alfonso y su Abuela suben a un tren rumbo al norte. Los jugadores deben viajar por desiertos abrasadores, pantanos de petróleo y montañas heladas, ayudando a Alfonso a completar tareas, hablar con otros viajeros y mantener a la Abuela a salvo. Creado en una semana para el Just Play 2024 Climate Jam."
      },
      features: [
        "EFECTOS CLIMÁTICOS DINÁMICOS: Gestiona condiciones de calor, frío y humedad que afectan a los personajes.",
        "PASAJEROS INTERACTIVOS: Participa en opciones de diálogo para conocer historias y ganar dinero.",
        "SISTEMA DE INVENTARIO: Gestor de mochila para reunir suministros, comida y herramientas para las necesidades de la Abuela.",
        "CRÉDITOS ORIGINALES: Construido por un equipo colaborativo de diseñadores, artistas e ingenieros de sonido."
      ],
      timeline: [
        "Desarrollado en una semana para el Climate Futures Game Jam."
      ]
    },
    "skate-slash": {
      tagline: "¡Usa una Patineta-Espada para hacer kickflips y matar monstruos!",
      description: {
        short: "Un juego de acción en patineta rápido hecho en menos de 20 horas en Unity.",
        full: "Skate & Slash es un prototipo de gameplay que combina trucos de patineta con combate hack-and-slash. Los jugadores montan una Patineta-Espada por una peligrosa pista de obstáculos, acumulando impulso en rampas y girando para cortar a los monstruos que se acercan, terminando en una épica pelea contra un jefe gigante."
      },
      features: [
        "COMBATE BASADO EN TRUCOS: Solo puedes dañar enemigos mientras estás en el aire, deslizándote por rampas o haciendo trucos giratorios.",
        "VELOCIDAD INTENSA: Mantén la velocidad saltando obstáculos y montando rampas correctamente.",
        "ENFRENTAMIENTO CON EL JEFE: Corta al monstruo jefe final al final del camino."
      ],
      timeline: [
        "Diseñado y programado todo el prototipo en menos de 20 horas."
      ]
    },
    "slug-slayer": {
      tagline: "Un prototipo de 1 día inspirado en Rain World con deslizamiento basado en física e IA boids.",
      description: {
        short: "Deslízate, resbala y muerde babosas rivales para escapar del agua que sube en este prototipo inspirado en Rain World.",
        full: "Slug Slayer es un prototipo de acción física rápida construido en menos de 24 horas para una tarea escolar. Inspirado en las mecánicas de movimiento y la oscura atmósfera de Rain World, los jugadores pilotan una ágil babosa que se desliza por cámaras complejas. Debes cazar y consumir mini-babosas controladas por boids para abrir el tubo de drenaje y escapar antes de que la lluvia inunde completamente el nivel."
      },
      features: [
        "CONTROLES DE DESLIZAMIENTO POR IMPULSO: Apunta con el ratón, clic derecho para aplicar fuerzas de impulso físico y deslizarse, clic izquierdo para morder y comer mini-babosas.",
        "IA BOIDS Y COMPORTAMIENTOS DE DIRECCIÓN: Algoritmo de Boids personalizado para las mini-babosas, permitiéndoles agruparse, evadir al jugador y dirigirse de manera realista.",
        "INSPIRACIÓN EN RAIN WORLD: Desarrollado en 1 día como homenaje a Rain World, capturando su física de criaturas tambaleante y temática de supervivencia.",
        "PELIGRO DE AGUA CRECIENTE: Sobrevive bajo un límite de tiempo estricto representando lluvia torrencial que inunda el mapa y ahoga a los jugadores lentos."
      ],
      timeline: [
        "Completamente diseñado, programado y pulido en 1 día para un proyecto escolar."
      ]
    },
    "docs-slayer": {
      tagline: "Tu código base, documentado y vivo. Sin más wikis desactualizados. — Beta Cerrada.",
      description: {
        short: "Un motor de documentación con IA estilo tech-noir para estudios de videojuegos — se conecta a tu repositorio de GitHub, escanea profundamente el código con Google Gemini y genera documentación viva sincronizada con tu código. Actualmente en beta cerrada.",
        full: "Docs Slayer es un motor de documentación con IA estilo tech-noir creado para estudios de videojuegos. Se conecta directamente a un repositorio de GitHub, usa Google Gemini para escanear profundamente el código fuente — analizando funciones, clases y grafos de llamadas — y genera automáticamente documentación que se mantiene sincronizada con el código base real. En lugar de wikis desactualizados, los equipos obtienen especificaciones vivas donde cada cambio propuesto por IA pasa por revisión controlada por humanos: aprueba con [SLAY], rechaza con [VOID]. Diseñé y construí todo el producto de forma independiente: concepto, UI/UX, arquitectura frontend, API backend, integración de IA, esquema de base de datos, sistema de autenticación e infraestructura en la nube. Actualmente en beta cerrada."
      },
      features: [
        "CONEXIÓN NATIVA A GITHUB: Se vincula a cualquier repositorio público o privado y lee código fuente real — sin copiar-pegar, sin importaciones manuales.",
        "ESCANEO PROFUNDO CON IA: Usa Google Gemini para analizar la estructura del código, funciones, clases y grafos de llamadas, y generar documentación precisa y actualizada.",
        "FLUJO DE REVISIÓN DE DIFERENCIAS: Cada cambio generado por IA se presenta como diferencia para aprobación humana — aprueba con [SLAY], rechaza con [VOID].",
        "EDITOR DE TEXTO ENRIQUECIDO: Edición completa Markdown/WYSIWYG con Tiptap v3: bloques de código, tablas, imágenes, resaltados y más.",
        "PÁGINAS DE DOCUMENTACIÓN PÚBLICAS: Documentación compartible con meta tags SEO — lista para colaboradores o el público.",
        "GESTIÓN DE ESTUDIOS Y PROYECTOS: Espacios de trabajo multi-estudio y multi-proyecto con acceso de equipo por invitación y tokens.",
        "SSR RENDERIZADO EN EL BORDE: Renderizado del lado del servidor en la red de borde de Vercel vía TanStack Start con backend Hono en Cloudflare Workers.",
        "FIREBASE AUTH: Flujo completo de registro/login con Firebase Authentication y aislamiento de datos por usuario."
      ],
      timeline: [
        "Concepto de producto y arquitectura completa diseñados. Conector de GitHub, pipeline de escaneo profundo con Gemini y flujo de revisión ([SLAY]/[VOID]) construidos.",
        "Editor de texto enriquecido Tiptap, páginas de documentación públicas y gestión de estudios/proyectos completados. Beta cerrada lanzada en Vercel + Cloudflare Workers."
      ]
    },
    "cyberdogz": {
      tagline: "Juego de disparos espaciales 3D en línea donde los Cyberdogz pilotan naves espaciales.",
      description: {
        short: "Juego de disparos espaciales 3D en línea donde los CYBERDOGZ pilotan naves espaciales y batallan en tiempo real.",
        full: "Cyberdogz 3D Space Battle es un shooter espacial 3D multijugador en línea construido en Unity usando C# y Photon Networking. Los jugadores conectan billeteras Metamask web3 para verificar colecciones, pilotan naves de combate personalizables con controles completos de vuelo 3D, y participan en caóticas batallas en línea. Incluye un Desafío de Tabla de Clasificación global persistente, partidas Libre Para Todos para hasta 10 jugadores o bots, telemetría dinámica de escudo/salud, sistemas de radar y menús de configuración personalizados."
      },
      features: [
        "CONTROLES DE VUELO 3D: Pilota naves de combate con teclado y ratón completos (WASD para movimiento, Q/E para rodar, Shift para impulso, Espacio/Ctrl para altitud).",
        "DESAFÍO DE TABLA DE CLASIFICACIÓN (LPA): Hasta 10 jugadores en Libre Para Todos de 10 minutos. Gana 100 puntos por eliminación y resta 100 por muerte.",
        "MÚLTIPLES MODOS DE JUEGO: Desafío de Tabla de Clasificación, Partida Rápida (con EXP y subida de nivel) y defensa cooperativa de oleadas contra bots.",
        "HUD TÁCTICO EN CABINA: Rastrea Escudo, Salud, temporizador, ratios K/D, barras de munición, velocidad, retícula y puntos de referencia de radar.",
        "WEB3 Y MOTOR MULTIJUGADOR: Verificación de billetera vía MetaMask, sincronización multijugador de baja latencia con Photon y bots inteligentes del lado del cliente."
      ],
      timeline: [
        "Modelo de vuelo físico espacial, telemetría de cabina y sistemas multijugador Photon desarrollados."
      ]
    },
    "biogame": {
      tagline: "Un laboratorio 3D vivo donde los agentes de IA manejan la ciencia mientras tú guías la dirección.",
      description: {
        short: "Una plataforma de investigación multi-agente con IA y laboratorio 3D interactivo — agentes especializados manejan descubrimiento de fármacos, biología estructural y revisión de literatura mientras un Director de Laboratorio orquesta y sintetiza todo.",
        full: "Biogame AI es una plataforma SaaS multi-agente donde los científicos interactúan con agentes de IA especializados en un espacio de trabajo 3D isométrico en tiempo real construido con Three.js. Un Director de Laboratorio crea planes de ejecución, genera agentes especializados por dominio y sintetiza hallazgos en informes completos con citas mediante un flujo Planificar-Aprobar-Ejecutar. Diseñé y construí toda la plataforma de extremo a extremo: entorno 3D, servicios backend, orquestación LangGraph, más de 12 módulos de herramientas, integraciones biomédicas, grafos de conocimiento, autenticación, facturación Stripe e infraestructura en Google Cloud Run."
      },
      features: [
        "LABORATORIO 3D INTERACTIVO: Espacio de trabajo isométrico Three.js donde los agentes aparecen como entidades en estaciones de investigación — navegable con WASD y ratón.",
        "ORQUESTACIÓN DEL DIRECTOR DE LABORATORIO: Agente de IA que descompone objetivos de investigación, genera sub-agentes por dominio y sintetiza hallazgos en informes con citas.",
        "FLUJO PLANIFICAR-APROBAR-EJECUTAR: El Director redacta un plan estructurado; el usuario aprueba antes de que los agentes ejecuten — manteniendo al científico en control.",
        "BASES DE DATOS BIOMÉDICAS EN TIEMPO REAL: Consultas a PubMed, ClinicalTrials.gov, UniProt, OpenAlex, Open Targets, FDA FAERS, USPTO y EPO — sin datos en caché.",
        "HERRAMIENTAS DE DESCUBRIMIENTO DE FÁRMACOS: Cribado virtual, predicción ADMET, optimización de compuestos y acoplamiento de ligandos.",
        "INMUNOTERAPIA Y BIOLOGÍA ESTRUCTURAL: Predicción CAR-T, humanización de anticuerpos, diseño de vacunas y visualización 3D de proteínas.",
        "GRAFO DE CONOCIMIENTO PERSISTENTE: Extracción de entidades y relaciones almacenada en Neo4j — el conocimiento se acumula entre sesiones.",
        "BÚSQUEDA RAG: Búsqueda vectorial ChromaDB sobre documentos de investigación con recuperación semántica.",
        "SAAS BASADO EN CRÉDITOS: Niveles gratuito, Investigador, Laboratorio y Empresarial; modelo BYOK; facturación Stripe; análisis PostHog.",
        "SOPORTE MULTILINGÜE: 16 idiomas vía i18next.",
        "AISLAMIENTO POR USUARIO: SHA-256 delimita todos los agentes, subgrafos Neo4j, colecciones ChromaDB y datos Firestore por sesión."
      ],
      timeline: [
        "Arquitectura del sistema, orquestación multi-agente con LangGraph y todos los servicios backend construidos.",
        "Entorno 3D Three.js, frontend React/TypeScript, UI WebSocket en tiempo real y pipeline de grafos de conocimiento construidos.",
        "Facturación Stripe, sistema de créditos, BYOK, Firebase Auth y PostHog integrados. Desplegado en Google Cloud Run."
      ]
    },
    "minicule": {
      tagline: "Busca en bases de datos biomédicas y explora hallazgos como grafos de conocimiento interactivos.",
      description: {
        short: "Una plataforma web con IA que convierte bases de datos médicas complejas en árboles de conocimiento visuales.",
        full: "Minicule es una plataforma de investigación que acelera el descubrimiento de fármacos y la verificación de patrones científicos. Contribuí a lo largo del stack: componentes frontend, conectores de servicios backend a PubMed, OpenAlex y USPTO, y varias características backend. La plataforma usa IA para extraer relaciones conceptuales de bases de datos en vivo y las traduce en grafos de conocimiento interactivos y dendrogramas."
      },
      features: [
        "CONECTORES DE API BIOMÉDICA: Integraciones de servicio para PubMed, OpenAlex y USPTO que recuperan y normalizan datos de investigación en vivo.",
        "GRAFOS DE CONOCIMIENTO: Conexiones mapeables entre conceptos, genes, fármacos y autores como visualizaciones interactivas.",
        "DENDROGRAMAS: Diagramas de árbol interactivos que agrupan publicaciones por fuerza de evidencia y proximidad de tema.",
        "CONSULTA MULTI-BASE DE DATOS: Interfaz unificada para buscar simultáneamente en literatura científica, datos de investigación y bases de datos de patentes."
      ],
      timeline: [
        "Componentes frontend, conectores de API externos (PubMed, OpenAlex, USPTO) y características backend contribuidas."
      ]
    },
    "doppelbio": {
      tagline: "Dile qué investigar. Tu equipo de laboratorio con IA se encarga del resto.",
      description: {
        short: "Una plataforma de investigación multi-agente con IA donde un Director de Laboratorio orquesta un equipo de agentes especializados para automatizar revisiones de literatura biomédica, descubrimiento de fármacos y análisis de datos biológicos.",
        full: "Doppelbio es una plataforma de investigación multi-agente con IA para automatización biomédica y bioinformática. Los científicos definen un objetivo de investigación y un Director de Laboratorio lo descompone en sub-tareas, genera sub-agentes especializados, delega trabajo entre ellos y sintetiza todo en un informe estructurado — en tiempo real. Diseñé y construí toda la plataforma de extremo a extremo: arquitectura del sistema, servicios backend y lógica de orquestación, componentes frontend y UI en tiempo real, integraciones de bases de datos, adaptadores de API biomédica e infraestructura de despliegue."
      },
      features: [
        "ORQUESTACIÓN DEL DIRECTOR DE LABORATORIO: Agente de IA que recibe objetivos, los desglosa en sub-tareas, genera agentes especializados, delega trabajo vía @menciones y sintetiza resultados con citas.",
        "COLABORACIÓN MULTI-AGENTE: Sub-agentes se comunican en tiempo real, especializados por dominio — literatura, descubrimiento de fármacos, datos biológicos y más.",
        "INTEGRACIÓN DE BASES DE DATOS BIOMÉDICAS: Búsqueda unificada en PubMed, ClinicalTrials.gov, UniProt, OpenAlex, USPTO y EPO con consultas paralelas.",
        "PIPELINE DE GRAFO DE CONOCIMIENTO: Detección de ontología, extracción de entidades y relaciones, puntuación BM25 y persistencia automática en Neo4j.",
        "CONSULTA RAG + GRAFO: Los agentes usan ChromaDB y Neo4j como herramientas de investigación para encontrar y conectar conocimiento.",
        "FLUJO PLANIFICAR-APROBAR-EJECUTAR: El Director redacta un plan con consultas, espera aprobación del usuario y ejecuta el flujo completo de agentes.",
        "COMUNICACIÓN EN TIEMPO REAL: WebSockets entregan mensajes de agentes, actualizaciones de estado y eventos de finalización al frontend.",
        "AISLAMIENTO POR SESIÓN: SHA-256 delimita todos los agentes, datos Firestore, subgrafos Neo4j y colecciones ChromaDB por usuario."
      ],
      timeline: [
        "Arquitectura multi-agente y Director de Laboratorio diseñados. Todos los servicios backend, herramientas y adaptadores de API construidos.",
        "Frontend React/TypeScript, UI WebSocket e integración de Firestore, Neo4j y ChromaDB construidos. Plataforma desplegada."
      ]
    },
    "propermax": {
      tagline: "App inmobiliaria para España y Estonia con mapas 3D y valoraciones con IA.",
      description: {
        short: "Explora inmuebles usando superposiciones 3D satelitales y calcula el valor de las propiedades con IA.",
        full: "Propermax es una aplicación web inmobiliaria premium para mercados europeos. Cuenta con vistas de mapa 3D interactivas, rutas y superposiciones satelitales. Incluye herramientas de IA que analizan precios de mercado y calculan valoraciones de propiedades, junto con un chatbot Agente de IA que permite a los usuarios controlar la app con lenguaje natural."
      },
      features: [
        "ROTACIÓN DE MAPA 3D: Rutas fluidas de Mapbox, superposiciones satelitales y maquetas estructurales.",
        "CONTROLADOR DE CHAT IA: Indica al asistente que filtre propiedades, busque ubicaciones o calcule tarifas.",
        "MODELO DE VALORACIÓN AUTOMATIZADA (AVM): Predice valores de propiedades basados en métricas históricas del área."
      ],
      timeline: [
        "Backend de búsqueda de propiedades e interfaz de mapa 3D desarrollados.",
        "Algoritmos de valoración y controladores de IA conversacional integrados."
      ]
    },
    "bowhead-health": {
      tagline: "Portal web interactivo y plataforma de coincidencia de ensayos clínicos con animaciones impulsadas por scroll.",
      description: {
        short: "Construí el sitio web oficial y portal de medicina de precisión para Bowhead Health, con diseños responsivos y un sistema de animación 3D impulsado por scroll personalizado.",
        full: "Bowhead Health es una plataforma de medicina de precisión que transforma la coincidencia de ensayos clínicos y el desarrollo de fármacos. Diseñé y desarrollé el sitio web oficial y los diseños de interfaz, integrando elementos interactivos y un sistema de animación 3D impulsado por scroll. A medida que el usuario hace scroll, la animación de la escena de célula y laboratorio 3D se reproduce o rebobina dinámicamente. El sitio está completamente optimizado para rendimiento, es altamente responsivo y presenta datos clínicos complejos de manera clara."
      },
      features: [
        "BOWHEAD NAVIGATOR™: Acelera la coincidencia de ensayos de oncología globalmente usando IA explicable y auditable actualizada con datos de ClinicalTrials.gov.",
        "ANIMACIÓN 3D IMPULSADA POR SCROLL: Animación personalizada optimizada mostrando estructuras moleculares y laboratorios 3D que se reproducen o rebobinan al hacer scroll.",
        "MAPA DE RAZONAMIENTO TRIALSTREAM™: Visualiza la lógica de coincidencia de IA en un mapa auditable, con cada decisión rastreable a su fuente.",
        "COINCIDENCIA DE PACIENTES Y ENSAYOS: Módulos duales con motores de clasificación personalizables y visualizaciones de viabilidad.",
        "PIPELINE DE TERAPÉUTICOS BOWHEAD: Pantallas preclínicas para terapias CAR-T, terapia génica y terapéuticos dirigidos para oncología y trastornos del SNC.",
        "CONTROL MÉDICO EN EL BUCLE: Sistemas interactivos para que investigadores y oncólogos revisen y refinen los resultados de la IA.",
        "MÁXIMO RENDIMIENTO: Portal completamente responsivo optimizado para tiempos de carga rápidos en todos los dispositivos."
      ],
      timeline: [
        "Diseño de la página de inicio, estructuras de navegación y diseño responsivo inicial.",
        "Animaciones de escena impulsadas por scroll que reproducen/rebobinan dinámicamente con la dirección del scroll.",
        "Contenido actualizado con Bowhead Navigator, Trialstream™ y pipeline de Terapéuticos Bowhead."
      ]
    },
    "exact-agent": {
      tagline: "Infraestructura de agentes de IA autónomos sin código para flujos de trabajo empresariales.",
      description: {
        short: "Una infraestructura de agentes de IA fácil de usar para crear, desplegar y gestionar poderosos agentes de IA sin código.",
        full: "Exact Agent es una plataforma de agentes de IA sin código para automatización de flujos de trabajo empresariales. Como parte del equipo de ingeniería, desarrollé características de agentes y construí un destacado Presentador de Noticias 3D con IA en tiempo real: un avatar parlante que entrega noticias espaciales generadas continuamente por IA como transmisión en vivo. Los usuarios también pueden chatear directamente con el presentador — enviando mensajes y viendo el modelo 3D responder con animación completa de sincronización labial."
      },
      features: [
        "PRESENTADOR DE NOTICIAS 3D CON IA: Avatar 3D que habla en vivo entregando noticias espaciales generadas por IA en tiempo real — completamente animado con sincronización labial.",
        "CHAT INTERACTIVO CON EL PRESENTADOR: Los usuarios envían mensajes y reciben respuestas del presentador de IA, con el modelo 3D reaccionando visiblemente.",
        "CARACTERÍSTICAS DE AGENTES AUTÓNOMOS: Características de flujo de trabajo que permiten ejecución autónoma de tareas en herramientas y plataformas conectadas.",
        "AUTONOMÍA COMPLETA: Los agentes trabajan independientemente para tareas complejas sin supervisión humana constante.",
        "PROTECCIÓN DE DATOS: Los datos del usuario no se usan para entrenar modelos, garantizando privacidad y seguridad.",
        "CREDENCIALES SEGURAS: Almacenadas en gestión de claves AWS con encriptación de nivel empresarial.",
        "100% TRANSPARENCIA: Registro completo de actividad para ver y detener agentes en cualquier momento.",
        "AUTOMATIZACIÓN DE HOJAS DE CÁLCULO Y GMAIL: Automatiza Google Spreadsheets y gestiona la bandeja de entrada de Gmail.",
        "INTEGRACIONES SOCIALES: Monitorea Discord, gestiona presencia en X y envía actualizaciones por Telegram."
      ],
      timeline: [
        "Características de flujo de trabajo de agentes e integraciones desarrolladas en el equipo de ingeniería.",
        "Presentador de Noticias 3D con IA construido — avatar en vivo con noticias generadas por IA, chat interactivo y sincronización labial."
      ]
    },
    "mental-chat-ai": {
      tagline: "Chatbot de salud mental con avatares 3D interactivos para móvil y Apple Vision Pro.",
      description: {
        short: "Un chatbot de salud mental con IA con avatares 3D interactivos para Móvil y Apple Vision Pro (actualmente en beta cerrada).",
        full: "Mental Chat AI (Mila) es un chatbot compañero conversacional diseñado para apoyo de salud mental. Construido para Móvil y Apple Vision Pro, la app cuenta con avatares 3D interactivos que reaccionan y se animan dinámicamente durante las conversaciones. Al combinar APIs de IA conversacional con renderizado optimizado de avatares 3D, Mila proporciona una experiencia empática e inmersiva. El proyecto está actualmente en beta cerrada."
      },
      features: [
        "AVATARES 3D INTERACTIVOS: Avatares animados en tiempo real que reaccionan dinámicamente al contenido conversacional, proporcionando retroalimentación visual empática.",
        "SOPORTE DE COMPUTACIÓN ESPACIAL: Compatibilidad completa con visionOS para Apple Vision Pro con UI espacial optimizada e interacciones inmersivas.",
        "API DE IA CONVERSACIONAL: Integra modelos NLP avanzados para diálogos de apoyo conscientes del contexto sobre bienestar mental.",
        "LANZAMIENTOS DE BETA CERRADA: Pruebas activas en beta cerrada para validar experiencia de usuario y límites de seguridad conversacional.",
        "RENDERIZADO MÓVIL OPTIMIZADO: Pipelines 3D optimizados para animaciones fluidas en móviles sin tensión térmica o de batería."
      ],
      timeline: [
        "Animaciones faciales 3D e integración de API conversacional prototipadas.",
        "Soporte visionOS para Apple Vision Pro integrado y beta cerrada lanzada."
      ]
    },
    "solbag": {
      tagline: "Muévete en el mundo real para reclamar lanzamientos de tokens cripto (estilo Pokémon GO).",
      description: {
        short: "Plataforma interactiva de Realidad Aumentada Web basada en ubicación para lanzamientos de cripto.",
        full: "SOLBAG es una plataforma interactiva de Realidad Aumentada Web basada en ubicación. Usando coordenadas GPS del navegador móvil e interfaces AR construidas con Niantic 8th Wall, los jugadores caminan en el mundo real para localizar y reclamar bolsas de tokens digitales cripto. Una vez encontradas, los jugadores ven las bolsas en espacio AR 3D y reclaman tokens Solana directamente en sus billeteras Web3."
      },
      features: [
        "REALIDAD AUMENTADA (AR): Implementa búsqueda de drops de tokens en el mundo real basada en WebXR usando Niantic 8th Wall.",
        "INTEGRACIÓN DE BILLETERA MÓVIL: Se conecta directamente con billeteras Phantom o Solflare para reclamaciones instantáneas de tokens.",
        "SISTEMAS ANTI-TRAMPA: Verifica los movimientos del dispositivo para prevenir la suplantación de GPS."
      ],
      timeline: [
        "Cliente móvil construido e integración de acciones de contratos inteligentes de Solana."
      ]
    }
  }
};
