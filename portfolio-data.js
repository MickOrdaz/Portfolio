/**
 * Juan Miguel Cerda Ordaz (Mick Ordaz) - Portfolio Data Configuration
 */

const PORTFOLIO_DATA = {
  // --- PROFILE INFO ---
  profile: {
    fullName: "Juan Miguel Cerda Ordaz",
    nickname: "Mick Ordaz",
    title: "Game Development Engineer | Software Engineer | Technical Lead | Co-Director",
    avatar: "images/mick_pp2.png",
    email: "mickordaz@gmail.com",
    phone: "(+52) 452 179 5154",
    linkedin: "Juan Miguel Cerda Ordaz",
    linkedinUrl: "https://www.linkedin.com/in/juan-miguel-cerda-ordaz",
    githubUrl: "https://github.com/mickordaz",
    cvUrl: "docs/Miguel Ordaz CV 2026.pdf",
    bio: `I started out purely as a <span class="bio-highlight">Game Development Engineer</span> with a passion for crafting fun, polished experiences. Over the years, I've worn many different hats—from a <span class="bio-highlight">solo indie developer</span> building wobbly game prototypes and teaching video game prototyping, to <span class="bio-highlight">leading and co-directing engineering teams</span> for professional, commercial releases, to architecting <span class="bio-highlight">full-stack AI swarms</span> and clinical systems.

At my core, I'm a <span class="bio-highlight">Game Development Engineer and Technical Lead</span> who loves bridging creative mechanics with robust technical engineering. I am deeply obsessed with <span class="bio-highlight">gamefeel</span>—the invisible art of adding 'juice' to gameplay, from fine-tuning frame-perfect inputs and heavy hit-stops to designing expressive, <span class="bio-highlight">wobbly physics and screenshakes</span> that make simply moving across a screen feel satisfying.

My work spans <span class="bio-highlight">systems engineering, high-performance games,</span> and <span class="bio-highlight">modern full-stack web architectures</span>. Whether I'm building a <span class="bio-highlight">custom C++ graphics engine</span> with live multi-client scene synchronization via <span class="bio-highlight">Nvidia Omniverse</span>, coding spatial computing apps for <span class="bio-highlight">Apple Vision Pro</span>, or designing React/Python platforms for medical research, I focus on delivering <span class="bio-highlight">clean, highly stable, and optimized code</span>.`,

    // --- ABOUT GALLERY ---
    galleryImages: [
      "images/Mick/mick_00.mp4",
      "images/Mick/mick_01.mp4",
      "images/Mick/mick_02.mp4",
      "images/Mick/mick_03.mp4"
    ],
    achievementBanner: "images/Mick/mick_04.png",
    achievementSpotlight: {
      badge: "Grand Prize Winner",
      event: "Banamex Supernova\nDevs Challenge",
      year: "2025",
      prize: "$500,000 MXN",
      subtitle: "Heaven Crawler"
    },

    // --- SKILLS ---
    skills: {
      languages: ["C#", "C++", "Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],
      engines: ["Unity", "Unreal Engine", "Git", "Custom Engines", "FMOD"],
      specialties: ["Core Gameplay Engineering", "Gamefeel & Polish", "Systems Architecture", "AI Behavior & Swarms", "Procedural Animation", "Multiplayer Systems", "XR (Apple Vision Pro)"]
    },

    // --- PERSONAL ACHIEVEMENTS ---
    achievements: [
      {
        title: "Grand Prize Winner - Supernova Game Challenge (2025)",
        description: "Led the engineering and co-direction of Heaven Crawler to secure the event's top award; successfully managed and reinvested the prize capital to scale the development team."
      },
      {
        title: "Indie Showcase Selection - Mexican Entertainment System (2025-2026)",
        description: "Heaven Crawler was selected as an official showcase title, highlighting its gameplay design and technical execution."
      },
      {
        title: "Most Anticipated Game Nominee - Game Effect Awards (2025)",
        description: "Heaven Crawler nominated for Most Anticipated Game, showing strong community and industry interest prior to its commercial release."
      },
      {
        title: "Co-Directed & Tech-Led Multi-Platform Showcase Projects",
        description: "Engineered systems for titles selected and showcased at premier global industry events, including Gamescom and the Latin American Game Showcase."
      },
      {
        title: "Featured Developer - Nvidia GPU Technology Conference (2021)",
        description: "Developed a custom graphics engine utilizing Nvidia Omniverse support for live scene synchronization."
      },
      {
        title: "Technical Speaker - Jalisco Talent Land (2023)",
        description: "Shared professional expertise in game engineering, optimization paradigms, and independent studio development."
      }
    ],

    // --- EXPERIENCE ---
    experience: [
      {
        date: "2019 - 2026",
        company: "Critical Slash",
        role: "Founder, Developer & Tech Lead",
        description: "Founded an independent studio to develop Heaven Crawler and various experimental indie titles. Solo-developed Heaven Crawler in its early stages before scaling it to a full-featured playable experience and partnering with Carbon Machina."
      },
      {
        date: "2021 - 2026",
        company: "Carbon Machina Studio",
        role: "Lead Programmer & Co-Director",
        description: "Led a multidisciplinary engineering team programming core features, advanced AI behavior, game feel, UI systems, and editor tools in Unity and Unreal. Collaborated with artists to design automated 2D/3D asset pipelines."
      },
      {
        date: "2022 - 2023",
        company: "Universidad de Artes Digitales",
        role: "Professor of Video Game Prototyping",
        description: "Instructed advanced students on rapid prototyping techniques, core gameplay loops, production mechanics, and clean code architecture in Unity."
      },
      {
        date: "2022 - 2026",
        company: "Bowhead Health & Good Place Games OÜ",
        role: "Medical AI & Research Engineer",
        description: "Engineered an AI Agent Swarm system for medical research featuring a 3D Virtual Lab. Developed simulations for cell behavior/cancer research and programmed interactive XR apps for Apple Vision Pro."
      }
    ]
  },

  // --- PROJECTS LIST ---
  projects: [
    {
      id: "heaven-crawler",
      title: "Heaven Crawler",
      category: "Games",
      tagline: "Heaven has taken enough. Time to take it back.",
      role: "Lead Programmer, Co-Director",
      techStack: ["Unity", "C#", "FMOD", "Procedural Generation", "Behavior Trees", "Inverse Kinematics"],
      banner: "images/LAGS2026_Intro_02.mp4",
      thumbnail: "images/LAGS2026_Intro_02.mp4",
      backgroundImage: "images/Heaven_crawler_STEAM_3_MAIN.png",
      description: {
        short: "Explore, fight, and uncover the secrets of a mysterious tower using unique Mechanical Arms as you climb your way through a deeply personal journey.",
        full: "Heaven Crawler is an action-adventure roguelite dungeon crawler with RPG elements. Help 'the Child' fight his way through The Womb — a colossal Babelian megastructure built to reach the heavens — in order to bring his mother back from the dead. Inside the Tower, he'll be aided by 'the Guide' and friendly robots that upgrade the hub and unveil the Tower's secrets across each run. Wield Mechanical Arms with unique abilities, mix Masks, Magic, Mementos, and Relics into your own build, and use the environment itself — traps, props, reactive elements — to overcome every challenge in your path. Inspired by The Legend of Zelda, NieR, and Fumito Ueda's work. And remember: bring her back."
      },
      links: [
        { label: "View on Steam", url: "https://store.steampowered.com/app/3036360/Heaven_Crawler" },
        { label: "Press Kit", url: "https://heavencrawler.com/" }
      ],
      awards: [
        { title: "Indie Showcase Selection", event: "Mexican Entertainment System", year: "2025–2026" },
        { title: "Most Anticipated Game Nominee", event: "Game Effect Awards", year: "2025" },
        { title: "Best Indie Dev Pitch", event: "Supernova Game Devs Challenge", year: "2025" }
      ],
      features: [
        "ASCEND A LIVING TOWER. The Womb is layered in Biomes — each with unique rooms, traps, challenges, and enemies. Gain souls, level up, and get better equipment to improve each run.",
        "MODULAR COMBAT WITH MECHANICAL ARMS. Customize your loadout, discover powerful synergies, and develop a combat style that is uniquely your own — every arm can be upgraded.",
        "NO CLASSES — BUILD YOUR OWN PLAYSTYLE. Mix-and-match Gear, Magic, Skills, and Relics freely. Each item unlocks different stats and abilities for you to combine however you choose.",
        "REACTIVE ELEMENTAL COMBAT. Fully reactive elements — electricity, fire, ice, and corrosion — unlock new gameplay possibilities and environmental interactions against every enemy.",
        "DYNAMIC ENEMIES AND EMERGENT ENCOUNTERS. Mechanical animals roam the Tower, each with distinct behaviors, attacks, and interactions that create unpredictable and dangerous situations.",
        "NPC INTERACTIONS AND A LIVING WORLD. Aid NPCs by setting them free, rescuing or defeating them. They'll reward you with unique systems, shops, and help throughout your journey.",
        "COLOSSAL BOSS ENCOUNTERS. At every layer of the Tower, a multi-phase Colossal Mechanical Creature awaits. Learn its patterns and master it to push further upward.",
        "ROGUELITE DEATH LOOP. Every death returns you to the Lobby with some souls — losing your Satchel but gaining Research and Proficiency. Expand your Lobby to permanently improve your odds.",
        "A ROGUELITE ABOUT LOSS AND GROWTH. A deeply personal story told through exploration and environmental storytelling, where every detail of the Tower holds meaning. Bring her back."
      ],
      timeline: [
        { date: "2018", description: "Concept. Prototypes developed by Miguel Cerda during free time." },
        { date: "March 2024", description: "Pre-production starts. Carbon Machina Studio joins to scale development." },
        { date: "June 2024", description: "Teaser Trailer officially announced." },
        { date: "October 2025", description: "Wins the Grand Prize at the Supernova Game Devs Challenge by unanimous decision." },
        { date: "June 2026", description: "Kickstarter campaign launched to fund final release stages." }
      ],
      videos: [
        { title: "Kickstarter Announcement Trailer - LAGS 2026", youtubeId: "_GxUC5dlLF4" },
        { title: "Teaser Trailer - LAGS 2024", youtubeId: "-A5Z86Qi9-o" }
      ],
      screenshots: [
        { caption: "Fight", url: "images/HeavenScreenshot_2026-06-02_04-04-21.png" },
        { caption: "Dynamic 3rd Person Camera", url: "images/CameraChange_01.mp4" },
        { caption: "Mechanical Arm-Based Modular Combat", url: "images/LAGS2026_GorillaCrawlers_01.mp4" },
        { caption: "Mix and Match Equipment Systems", url: "images/Bodygear_04.mp4" },
        { caption: "Colossal Mechanical Guardians", url: "images/BossCinematic_04.mp4" },
        { caption: "A Living Liminal Mega Structure", url: "images/RoomChanges_03.mp4" },
        { caption: "Expansive Persistent HUB", url: "images/NPC_02.mp4" },
        { caption: "Stylized Analog Inventory.", url: "images/LAGS2026_Inventory_04.mp4" },
        { caption: "An Emotional Adventure Awaits.", url: "images/LAGS2026_Intro_02.mp4" },
        { caption: "Adventure Awaits", url: "images/HeavenScreenshot_2026-06-02_20-24-06.png" },
        { caption: "Shop Room", url: "images/HeavenCrawler_ShopRoom_SS_001.png" },
        { caption: "Dragon Shot", url: "images/dragonshot.png" },
      ]
    },
    {
      id: "chicken-desktop-pet",
      title: "Chrimp Desktop Pet",
      category: "Games",
      tagline: "Your weird little chicken-shrimp pets live on your screen — and they brought minigames.",
      role: "Solo Developer",
      techStack: ["Unity", "C#", "Windows Win32 API", "URP", "Cinemachine", "Unity Behavior", "Inverse Kinematics"],
      banner: "images/Chrimp/chricken_09.mp4",
      thumbnail: "images/Chrimp/chricken_06.mp4",
      backgroundImage: "images/Chrimp/chricken_06.mp4",
      description: {
        short: "Chrimp are tiny chicken-shrimp hybrids that live directly on your Windows desktop — wandering around, eating, sleeping, and getting into trouble while you work. Drop a toy and suddenly you have a football match happening on top of your spreadsheet.",
        full: "Chrimp is a desktop companion game where your pets don't live inside a window — they live on top of everything. These wobbly little chicken-shrimp creatures walk across your actual screen, nap under your browser tabs, run toward food you drop for them, and react when you poke them. When you're not playing, clicks pass straight through them — they're just there, keeping you company. But drop a toy and chaos begins. A Toy Flag turns your Chrimpinto an armed garrison defending against zombie waves, picking up machine guns that fall from the sky. A football spawns goal posts at the edges of your monitor and they immediately start competing. A bomb appears with a burning fuse and they frantically pass it to each other, panicking until it explodes and sends everyone flying. Put on a Radio and they dance to whatever your PC is playing. Every Chrimp hatches from an egg, grows up, and can be a rare species — from the common little guy all the way to the legendary Ghost or Gilded. Keep them happy and fed, or if you're low on coins, there's always the Kitchen Pot."
      },
      links: [
        { label: "Coming soon to Steam!", url: "https://store.steampowered.com" }
      ],
      features: [
        "THEY LIVE ON YOUR DESKTOP: Chrimpswander, eat, sleep, and play across your actual screen — always on top of your apps but never in the way. Click right through them when you're busy.",
        "HATCH, GROW & COLLECT: Pets hatch from eggs and grow from tiny chicks into adults. Discover rare species — from Common to Ghost and Gilded — each with a unique look.",
        "TOWER DEFENSE: Drop a Toy Flag and your Chrimpgrab machine guns to defend it against zombie waves. Guns drop from the sky in four rarity tiers. Six zombie types try to overrun you. Level up with upgrade cards between waves.",
        "FOOTBALL MATCH: Drop a ball and your Chrimpimmediately split into teams. Goal posts appear at your screen edges. You aim and kick with a slingshot — they play on their own.",
        "BALLOON KEEP-UP: Take turns with your pets keeping a balloon airborne. The longer you rally, the faster it falls. Every 10 hits earns a coin streak bonus — but don't let it touch the ground.",
        "HOT POTATO BOMB: A bomb with a burning fuse appears on your desktop. Your Chrimpicker up and frantically pass it to each other. It beeps faster. Someone is getting launched.",
        "THEY DANCE TO YOUR MUSIC: Place a Radio and your pets start dancing to whatever audio is playing on your PC — they react to the beat in real time.",
        "THE KITCHEN POT: If you need coins, you can cook a Chrimp. Rarer ones are worth more. Eggs, babies, and your last surviving pet are always safe."
      ],
      timeline: [
        { date: "2024", description: "Window transparency, click-through management, and mouse-click-through prototypes completed using Win32 API." },
        { date: "2025", description: "Full pet IK rig, behavior trees, rarity tier system, and minigame collection integrated; audio spectrum radio mode added." }
      ],
      videos: [],
      screenshots: [
        { caption: "Zoombie Waves", url: "images/Chrimp/chricken_11.mp4" },
        { caption: "Hanging Around", url: "images/Chrimp/chricken_00.png" },
        { caption: "Menu & Food", url: "images/Chrimp/chricken_02.png" },
        { caption: "Eating", url: "images/Chrimp/chricken_03.png" },
        { caption: "Dance when Music Plays", url: "images/Chrimp/chricken_06.mp4" },
        { caption: "Football Match!", url: "images/Chrimp/chricken_07.mp4" },
        { caption: "Balloon minigame", url: "images/Chrimp/chricken_09.mp4" },
        { caption: "Cooking for coins", url: "images/Chrimp/chricken_10.mp4" },
        { caption: "Chicken AI", url: "images/Chrimp/chricken_13.mp4" }
      ]
    },
    {
      id: "ramen-abyss",
      title: "Ramen Abyss",
      category: "Games",
      tagline: "Local co-op roguelike built in Unity 6 with wobbly physics and procedural animation systems.",
      role: "Solo Developer",
      techStack: ["Unity", "C#", "Multiplayer", "Procedural Animation"],
      banner: "images/RamenAbyss/ramen_06.mp4",
      thumbnail: "images/RamenAbyss/ramen_06.mp4",
      backgroundImage: "images/RamenAbyss/ramen_06.mp4",
      description: {
        short: "Control a wobbly boiled egg in a local co-op roguelike. Structured as an educational project with tutorial videos uploaded to TikTok, Instagram, YouTube, and Facebook.",
        full: "Ramen Abyss is a top-down, local 2-player co-op roguelike built in Unity 6 targeting Steam, Itch, Android, and iOS. Players control a custom-built, horn-adorned soft-boiled egg featuring wobbly physics and procedurally animated limbs. Wielding three weapon categories (Pierce, Sharp, and Blunt), players descend into a randomly generated ramen cup to slay ingredient-themed monsters (like Pea Slimes and Pork Knights) across four distinct zones (Pork Plains, Seafood Depths, Inferno Bowl, and Abyssal Broth). The game features deep upgrades, perk shrines, and Narutomaki Coin meta-progression to unlock skins. The project doubles as an educational tool, structured to teach developers how to construct core gameplay loops and modular game systems by uploading educational tutorial videos to Instagram, TikTok, YouTube, and Facebook."
      },
      links: [
      ],
      features: [
        "WOBBLY PROCEDURAL ANIMATION: Play as a horn-adorned egg with soft-boiled wobbly physics and procedurally animated limbs supporting running and rolling movement modes.",
        "THREE COMBAT CLASSES: Wield Pierce weapons (chopsticks/skewers for dash thrusts), Sharp weapons (knives/cleavers for spin attacks), and Blunt weapons (spoons/spatulas for ground slams).",
        "PROCEDURAL INGREDIENT ZONES: Explore randomly generated levels across Pork Plains, Seafood Depths, Inferno Bowl, and Abyssal Broth, each ending in a unique boss encounter (like King Hog or King Rat).",
        "NARUTOMAKI COINS & META PROGRESSION: Defeat bosses to earn coins to unlock cosmetic skins, utilizing a premium model on Steam and an ad-supported free-to-play model on mobile.",
        "SYSTEMS TUTORIAL BLUEPRINT: Serves as an educational resource with clean code patterns, utilizing tutorial videos uploaded to Instagram, TikTok, YouTube, and Facebook to teach developers how to build character movement, health, AI states, and local multiplayer."
      ],
      timeline: [
        { date: "2025", description: "Prototyped procedurally animated limb physics and soft-boiled egg running/rolling movement models in Unity 6." },
        { date: "2026", description: "Polished local co-op, integrated the four ingredient zones, designed boss attack states, and authored system tutorial walkthroughs." }
      ],
      videos: [],
      screenshots: [
        { caption: "Ramen Abyss", url: "images/RamenAbyss/ramen_01.mp4" },
        { caption: "Start", url: "images/RamenAbyss/ramen_12.mp4" },
        { caption: "Door to next Level", url: "images/RamenAbyss/ramen_03.mp4" },
        { caption: "Fight", url: "images/RamenAbyss/ramen_04.mp4" },
        { caption: "Intelligent Enemies", url: "images/RamenAbyss/ramen_05.mp4" },
        { caption: "Multiplayer", url: "images/RamenAbyss/ramen_06.mp4" },
        { caption: "Procedural Generation", url: "images/RamenAbyss/ramen_07.mp4" },
        { caption: "Optimization", url: "images/RamenAbyss/ramen_08.mp4" },
        { caption: "Procedural Animation", url: "images/RamenAbyss/ramen_10.mp4" },
        { caption: "AI Behavior", url: "images/RamenAbyss/ramen_11.mp4" }
      ]
    },
    {
      id: "vivarium-engine",
      title: "Vivarium Engine",
      category: "Tools & Engines",
      tagline: "A custom C++ 3D Game Engine with live Omniverse scene synchronization.",
      role: "Solo Engine Developer",
      techStack: ["C++", "OpenGL", "DirectX", "Nvidia Omniverse API", "PhysX"],
      banner: "images/Vivarium/vivarium_06.mp4",
      thumbnail: "images/Vivarium/vivarium_06.mp4",
      backgroundImage: "images/Vivarium/vivarium_06.mp4",
      description: {
        short: "A C++ game engine featuring deferred rendering, VR support, and live multi-client scene sync.",
        full: "Vivarium Engine is a custom-built 3D game engine developed as a university thesis project. Built in C++, it features OpenGL deferred rendering, PBR shading, PhysX integration, VR capabilities, and a NavMesh baker. It features a custom Nvidia Omniverse Connector, allowing multiple clients to edit and sync 3D scene data in real-time. Showcased at the Nvidia GTC 2021 conference."
      },
      links: [
        { label: "NVIDIA Blog Article", url: "https://blogs.nvidia.com/blog/uad-omniverse-connector/" },
        { label: "NVIDIA Commuity Stream", url: "https://www.nvidia.com/en-us/on-demand/session/omniverse2020-om1437/" }
      ],
      features: [
        "CORE ARCHITECTURE: Fully custom Scene Graph supporting hierarchical Game Objects, modular Components, and a robust Resource Manager.",
        "PBR & DEFERRED RENDERING: High-fidelity Physically Based Rendering (PBR) pipeline utilizing a deferred shading architecture for optimized lighting.",
        "PHYSICS & COLLISION: Integrated PhysX simulation for realistic rigidbodies, joints, and collisions.",
        "BUILT-IN TOOLS: Editor features including 3D translation/rotation Gizmos, a NavMesh Baker, and a Camera Animator for complex pathing.",
        "SCENE HANDLING: Full capability to save and load scenes, preserving models, pointlights, spotlights, directional lights, transformations, and node hierarchy names.",
        "LIVE SYNC WITH CREATE APP: Real-time, bidirectional scene editing synchronizing with the Nvidia Omniverse Create App (Note: rendering restricted on Create due to GPU ray tracing limits).",
        "MULTI-CLIENT SYNCHRONIZATION: Multiple connected clients can edit, manipulate, and view the same 3D scene concurrently in real-time.",
        "SHARE PHYSICS SIMULATION: Shared PhysX transforms allowing cross-client interactions, enabling users to influence simulations by moving physical colliders like the floor."
      ],
      timeline: [
        { date: "2020", description: "Engine design and basic OpenGL rendering systems implemented." },
        { date: "2021", description: "Omniverse connector integrated and showcased at Nvidia GPU Technology Conference." }
      ],
      videos: [{ title: "Nvidia GTC 2021", youtubeId: "wdspUbtnLtA" }],
      screenshots: [
        { caption: "Vivarium Engine", url: "images/Vivarium/vivarium_06.mp4" },
        { caption: "Live synchronization with another client", url: "images/Vivarium/vivarium_07.mp4" },
        { caption: "Share Physics Multipe Clients Online", url: "images/Vivarium/vivarium_01.mp4" },
        { caption: "Live sync with the Create App", url: "images/Vivarium/vivarium_03.mp4" },
      ]
    },
    {
      id: "mecha-ko",
      title: "Mecha K.O.",
      category: "Games",
      tagline: "A boxing game where your arms are machines — and they fall apart mid-fight.",
      role: "Lead Gameplay & Tech Programmer",
      techStack: ["Unity", "C#", "URP", "Cel Shading"],
      banner: "images/MechaKO/mechako_03.mp4",
      thumbnail: "images/MechaKO/mechako_03.mp4",
      backgroundImage: "images/MechaKO/mechako_00.png",
      description: {
        short: "A real-time 3D anime-style boxing game where fighters wield giant mechanical arms that physically break apart during combat — and must be repaired or upgraded between bouts.",
        full: "Mecha K.O. is a real-time 3D boxing game with an anime cel-shaded art style. Fighters battle using massive mechanical arms, each built from three interlocking armor pieces. As the fight goes on, those pieces can crack and fall off — taking hits on an already damaged arm puts it at risk of going completely out of commission. Win the round and head back to the corner to repair what's left or swap out parts and upgrade before the next fight starts. The combat is direct and physical: no health bars hiding behind abstraction — what you see on the arm IS the health."
      },
      links: [],
      features: [
        "ARMOR THAT BREAKS IN REAL TIME: Each mechanical arm has 3 armor pieces that crack and fall apart as you take hits — lose all three and that arm is done for the fight.",
        "FIGHT → REPAIR → UPGRADE LOOP: Between rounds, choose what to fix, what to sacrifice, and what to upgrade. Every decision carries into the next fight.",
        "ANIME CEL-SHADED 3D: Stylized toon shading gives the game a hand-drawn anime feel while keeping the combat visceral and readable.",
        "DIRECT REAL-TIME BOXING: Fast, physical combat where the damage you see on your arms tells you exactly how close you are to losing a limb."
      ],
      timeline: [
        { date: "2024", description: "Built the arm destruction system, cel shading pipeline, and repair/upgrade loop." }
      ],
      videos: [],
      screenshots: [
        { caption: "", url: "images/MechaKO/mechako_01.mp4" },
        { caption: "", url: "images/MechaKO/mechako_02.mp4" },
        { caption: "", url: "images/MechaKO/mechako_03.mp4" },
        { caption: "", url: "images/MechaKO/mechako_04.mp4" },
        { caption: "", url: "images/MechaKO/mechako_05.mp4" },
        { caption: "", url: "images/MechaKO/mechako_06.mp4" },

      ]
    },
    {
      id: "american-trail",
      title: "American Trail",
      category: "Games",
      tagline: "A game jam adventure exploring climate-induced migration through the eyes of a child.",
      role: "Lead Programmer, Tools Developer & Train Operator",
      techStack: ["Unity", "C#", "Cinemachine"],
      banner: "images/AmericanTrail/trail_00.png",
      thumbnail: "images/AmericanTrail/trail_00.png",
      backgroundImage: "images/AmericanTrail/trail_07.png",
      description: {
        short: "Help young Alfonso and his Abuela survive the harsh elements aboard a train heading north.",
        full: "American Trail is a narrative-driven adventure about climate migration. After losing their home to a flood, Alfonso and his Abuela board a northbound train. Players must travel through scorching deserts, oil-swamps, and frozen mountains, helping Alfonso complete tasks, talk to fellow travelers, and keep Abuela safe. Created in one week for the Just Play 2024 Climate Jam."
      },
      links: [
        { label: "View Project on Itch.io", url: "https://carbon-machina.itch.io/american-trail" }
      ],
      features: [
        "DYNAMIC WEATHER EFFECTS: Manage heat, cold, and wet conditions affecting characters.",
        "INTERACTIVE PASSENGERS: Engage in dialogue choices to learn stories and earn money.",
        "INVENTORY SYSTEM: Backpack manager to gather supplies, food, and tools for Abuela's needs.",
        "ORIGINAL CREDITS: Built by a collaborative team of designers, artists, and sound engineers."
      ],
      timeline: [
        { date: "2024", description: "Developed inside one week for the Climate Futures Game Jam." }
      ],
      videos: [],
      screenshots: [
        { caption: "", url: "images/AmericanTrail/trail_07.png" },
        { caption: "", url: "images/AmericanTrail/trail_06.png" },
        { caption: "", url: "images/AmericanTrail/trail_01.mp4" },
        { caption: "", url: "images/AmericanTrail/trail_02.mp4" },
        { caption: "", url: "images/AmericanTrail/trail_03.mp4" },
        { caption: "", url: "images/AmericanTrail/trail_04.mp4" },
        { caption: "", url: "images/AmericanTrail/trail_05.mp4" },
      ]
    },
    {
      id: "skate-slash",
      title: "Skate & Slash",
      category: "Games",
      tagline: "Use a Skateboard-Sword to do kickflips and slash monsters!",
      role: "Solo Developer (School Project)",
      techStack: ["Unity", "C#"],
      banner: "images/Skate&Slash/skate_00.png",
      thumbnail: "images/Skate&Slash/skate_00.png",
      backgroundImage: "images/Skate&Slash/skate_00.png",
      description: {
        short: "A fast-paced skateboard action game made in under 20 hours in Unity.",
        full: "Skate & Slash is a gameplay prototype combining skateboarding tricks with hack-and-slash combat. Players ride a Skateboard-Sword down a dangerous obstacle course, building momentum on ramps and flipping to slice through incoming monsters, ending in a giant boss fight."
      },
      links: [
        { label: "Itch.io Page", url: "https://critical-slash.itch.io/skate-slash" }
      ],
      features: [
        "TRICK-BASED COMBAT: You can only damage enemies while in mid-air, sliding down ramps, or doing flip tricks.",
        "INTENSE VELOCITY: Maintain speed by jumping over obstacles and riding ramps correctly.",
        "BOSS SHOWDOWN: Slice the final monster boss at the end of the road."
      ],
      timeline: [
        { date: "2023", description: "Designed and programmed the entire prototype in less than 20 hours." }
      ],
      videos: [],
      screenshots: [
        { caption: "Skate & Slash", url: "images/Skate&Slash/skate_00.png" },
        { caption: "Skate & Slash", url: "images/Skate&Slash/skate_01.mp4" },
        { caption: "Skate & Slash", url: "images/Skate&Slash/skate_02.png" },
        { caption: "Skate & Slash", url: "images/Skate&Slash/skate_03.png" },
        { caption: "Skate & Slash", url: "images/Skate&Slash/skate_04.png" },
        { caption: "Skate & Slash", url: "images/Skate&Slash/skate_05.png" },
      ]
    },
    /*
    {
      id: "sprinter-slayer",
      title: "Sprinter Slayer",
      category: "Games",
      tagline: "Cowboy eggs riding velociraptors in an intense race for survival.",
      role: "Developer",
      techStack: ["Unreal Engine", "Blueprints", "C++"],
      banner: "images/SprinterSlayer/Sprinter_00.png",
      thumbnail: "images/SprinterSlayer/Sprinter_00.png",
      backgroundImage: "images/SprinterSlayer/Sprinter_02.png",
      description: {
        short: "A wild racing prototype where eggs ride dinosaurs and fight over a golden bone.",
        full: "Sprinter Slayer is an Unreal Engine racing prototype. Players control cowboy egg riders on velociraptors, dashing through a prehistoric canyon. The objective is to grab the bone in your mouth and cross the finish line first while warding off other raptor riders."
      },
      links: [{ label: "Itch.io Page", url: "https://critical-slash.itch.io/sprinter-slayer" }],
      features: [
        "RAPTOR RACING MECHANICS: Steer velociraptors with high speed drift physics.",
        "THE BONE MECHANIC: Grab, carry, and steal the bone from opponents during the race.",
        "EGG PHYSICS: Custom wobbly physics for the cowboy egg riders."
      ],
      timeline: [
        { date: "2024", description: "Created the Unreal movement model and raptor animations." }
      ],
      videos: [],
      screenshots: [
        { caption: "Sprinter Slayer Gameplay", url: "images/SprinterSlayer/Sprinter_01.mp4" },
        { caption: "Sprinter Slayer Gameplay", url: "images/SprinterSlayer/Sprinter_02.png" },
        { caption: "Sprinter Slayer Gameplay", url: "images/SprinterSlayer/Sprinter_03.png" },
        { caption: "Sprinter Slayer Gameplay", url: "images/SprinterSlayer/Sprinter_04.png" }
      ]
    },
    */
    {
      id: "slug-slayer",
      title: "Slug Slayer",
      category: "Games",
      tagline: "A 1-day Rain World-inspired prototype featuring physics-based sliding and boids AI.",
      role: "Lead Developer",
      techStack: ["Unity", "C#", "Boids Algorithm"],
      banner: "images/SlugSlayer/slugslayer_00.png",
      thumbnail: "images/SlugSlayer/slugslayer_00.png",
      backgroundImage: "images/SlugSlayer/slugslayer_05.png",
      description: {
        short: "Slither, slide, and bite rival slugs to escape rising floodwaters in this Rain World-inspired prototype.",
        full: "Slug Slayer is a fast-paced physics action prototype built in under 24 hours for a school assignment. Inspired by the movement mechanics and dark atmosphere of Rain World, players pilot an agile slug sliding through complex chambers. You must hunt down and consume rival boid-controlled mini-slugs to open the drainage pipe and escape before the rain completely floods the level."
      },
      links: [],
      features: [
        "IMPULSE SLIDING CONTROLS: Aim with the mouse, right-click to apply physical impulse forces to slide, and left-click to bite and eat mini-slugs.",
        "BOIDS AI & STEERING BEHAVIORS: Implemented a custom flocking Boids algorithm for the mini-slugs, enabling them to swarm, evade the player, and steer realistically through corridors.",
        "RAIN WORLD INSPIRATION: Developed in 1 day as a tribute to Rain World, capturing its wobbly creature physics, atmospheric rain hazards, and survival theme.",
        "RISING WATER HAZARD: Survive rooms under a strict time limit representing torrential rain that floods the map, restricting movements and drowning slow players."
      ],
      timeline: [
        { date: "2022", description: "Fully designed, programmed, and polished in 1 day for a school project." }
      ],
      videos: [],
      screenshots: [
        { caption: "", url: "images/SlugSlayer/slugslayer_00.png" },
        { caption: "", url: "images/SlugSlayer/slugslayer_01.png" },
        { caption: "", url: "images/SlugSlayer/slugslayer_02.png" },
        { caption: "", url: "images/SlugSlayer/slugslayer_05.png" },
        { caption: "", url: "images/SlugSlayer/slugslayer_03.png" },
      ]
    },
    {
      id: "docs-slayer",
      title: "Docs Slayer",
      category: "Tools & Engines",
      tagline: "Your codebase, documented and alive. No more stale wikis. — Closed Beta.",
      role: "Solo Founder & Full-Stack Engineer",
      techStack: ["React 19", "TypeScript", "TanStack Start", "Hono", "Cloudflare Workers", "Gemini AI", "Firebase", "Tiptap", "Tailwind CSS", "Vercel"],
      banner: "images/DocsSlayer/docs-slayer_01.png",
      thumbnail: "images/DocsSlayer/docs-slayer_01.png",
      backgroundImage: "images/DocsSlayer/docs-slayer_01.png",
      description: {
        short: "A tech-noir AI documentation engine for game studios — connects to your GitHub repo, deep-scans source code with Google Gemini, and generates living docs that stay in sync with your codebase. Currently in closed beta.",
        full: "Docs Slayer is a tech-noir AI documentation engine purpose-built for game studios. It connects directly to a GitHub repository, uses Google Gemini to deep-scan source code — parsing functions, classes, and call graphs — and auto-generates documentation that stays in sync with the actual codebase. Instead of maintaining stale wikis, teams get living specs where every AI-proposed change goes through a human-controlled diff review: approve with [SLAY], reject with [VOID]. I designed and built the entire product independently: concept, UI/UX, frontend architecture, backend API, AI integration, database schema, auth system, and cloud infrastructure. Currently in closed beta."
      },
      links: [
        { label: "Visit Docs Slayer Website", url: "https://docsslayer.vercel.app/" }
      ],
      features: [
        "GITHUB-NATIVE REPO CONNECTION: Links to any public or private repository and reads real source code directly — no copy-paste, no manual imports.",
        "AI DEEP-SCAN: Uses Google Gemini to analyze code structure, parse functions, classes, and call graphs, and generate accurate up-to-date documentation.",
        "DIFF REVIEW WORKFLOW: Every AI-generated change is presented as a diff for human approval before publishing — approve with [SLAY], reject with [VOID].",
        "RICH TEXT EDITOR: Full Markdown/WYSIWYG editing powered by Tiptap v3 with code blocks, tables, images, highlights, and more.",
        "PUBLIC DOC PAGES: Shareable documentation at /docs/:studio/:project/:page with SEO meta tags — ready to hand to collaborators or the public.",
        "STUDIO & PROJECT MANAGEMENT: Multi-studio, multi-project workspaces with invite and token-based team access.",
        "EDGE-RENDERED SSR: Server-side rendering deployed globally on Vercel's edge network via TanStack Start with a Hono backend on Cloudflare Workers.",
        "FIREBASE AUTH: Full sign-up / login flow with Firebase Authentication and Firestore Security Rules for per-user data isolation."
      ],
      timeline: [
        { date: "2025", description: "Designed product concept and full architecture. Built GitHub connector, Gemini AI deep-scan pipeline, and diff review workflow ([SLAY]/[VOID])." },
        { date: "2026", description: "Completed Tiptap rich text editor, public doc pages, studio/project management, deployed on Vercel edge + Cloudflare Workers. Launched closed beta." }
      ],
      videos: [],
      screenshots: [
        { caption: "Editor", url: "images/DocsSlayer/docs-slayer_00.png" },
        { caption: "Features", url: "images/DocsSlayer/docs-slayer_02.png" },
        { caption: "Repo Scan", url: "images/DocsSlayer/docs-slayer_03.png" },
      ]
    },
    {
      id: "cyberdogz",
      title: "Cyberdogz 3D Space Battle",
      category: "Games",
      tagline: "Online 3D space shooter game where Cyberdogz fly spaceships.",
      role: "Gameplay & Network Programmer",
      techStack: ["Unity", "C#", "Photon Networking"],
      banner: "images/CyberDogz/cyberdogz_00.png",
      thumbnail: "images/CyberDogz/cyberdogz_00.png",
      backgroundImage: "images/CyberDogz/cyberdogz_00.png",
      description: {
        short: "Online 3D space shooter game where CYBERDOGZ fly spaceships and battle in real-time.",
        full: "Cyberdogz 3D Space Battle is an online multiplayer 3D space shooter built in Unity using C# and Photon Networking. Players connect Metamask web3 wallets to verify collections, pilot customizable fighter spaceships using full 3D keyboard/mouse flight controls, and engage in chaotic online battles. Features a persistent global Leaderboard challenge, Free-for-All matches supporting up to 10 players or bots, dynamic shield/health UI telemetry, radar systems, and custom graphics/gameplay settings menus."
      },
      links: [
        { label: "Visit Website", url: "https://cyberdogz.io/" }
      ],
      features: [
        "3D FLIGHT CONTROLS: Pilot fighter craft with full keyboard and mouse control (WASD for movement, Q/E for roll, Shift for speed boost, Space/Ctrl for altitude adjustments).",
        "LEADERBOARD CHALLENGE (FFA): Up to 10 players engage in a 10-minute Free-for-All. Earn 100 points per kill and subtract 100 per death to climb ranks and win prizes.",
        "MULTIPLE GAME MODES: Features a Leaderboard Challenge, Quick Match (with EXP and level-up systems), and Bot Attack cooperative wave defense.",
        "TACTICAL COCKPIT UI: Rich HUD tracking Shield, Health, countdown timer, K/D ratios, Primary/Secondary weapon ammo bars, speed, reticle, and radar waypoints.",
        "WEB3 & MULTIPLAYER ENGINE: Implements wallet verification via MetaMask, low-latency multiplayer syncing with Photon, and smart client-side bot spawning if playing solo."
      ],
      timeline: [
        { date: "2022", description: "Engineered space physics flight model, cockpit telemetry, and Photon multiplayer systems." }
      ],
      videos: [],
      screenshots: [
        { caption: "CyberDogz", url: "images/CyberDogz/cyberdogz_01.png" },
        { caption: "CyberDogz", url: "images/CyberDogz/cyberdogz_02.png" },
        { caption: "CyberDogz", url: "images/CyberDogz/cyberdogz_03.png" },
        { caption: "CyberDogz", url: "images/CyberDogz/cyberdogz_04.png" },
        { caption: "CyberDogz", url: "images/CyberDogz/cyberdogz_05.png" },
      ]
    },
    {
      id: "biogame",
      title: "Biogame AI",
      category: "Tools & Engines",
      tagline: "A living 3D lab where AI research agents handle the science while you guide the direction.",
      role: "Sole Developer & Architect",
      techStack: ["React", "TypeScript", "Three.js", "Python", "FastAPI", "LangGraph", "Claude API", "Neo4j", "ChromaDB", "Firebase", "Stripe", "Docker"],
      banner: "images/Biogame/biogame_00.png",
      thumbnail: "images/Biogame/biogame_00.png",
      backgroundImage: "images/Biogame/biogame_00.png",
      description: {
        short: "A multi-agent AI bioinformatics research platform with a 3D interactive lab — specialized agents handle drug discovery, structural biology, and literature review while a Lab Director orchestrates and synthesizes it all.",
        full: "Biogame AI is a full SaaS multi-agent research platform where scientists interact with specialized AI agents inside a real-time isometric 3D workspace built with Three.js. A Lab Director orchestrator creates execution plans, spawns domain-specific agents (drug discovery, immunotherapy, structural biology, literature review), and synthesizes all findings into comprehensive cited reports via a Plan-Approve-Execute workflow. I designed and built the entire platform end-to-end: 3D environment, all backend services and LangGraph agent orchestration, 12+ tool modules, biomedical database integrations, knowledge graph pipeline, authentication, Stripe billing, and deployment infrastructure on Google Cloud Run."
      },
      links: [{ label: "Visit Biogame Website", url: "https://biogame.ai/" }],
      features: [
        "3D INTERACTIVE LAB: An isometric Three.js workspace where agents appear as interactive entities at research stations — navigable with WASD and mouse, with animated scenes.",
        "LAB DIRECTOR ORCHESTRATION: Top-level AI agent decomposes research objectives into sub-tasks, spawns specialized sub-agents per domain, and synthesizes all findings into cited reports.",
        "PLAN-APPROVE-EXECUTE WORKFLOW: Lab Director drafts a structured research plan with search queries; user approves before agents execute — keeping the scientist in control.",
        "LIVE BIOMEDICAL DATABASES: Real-time queries to PubMed, ClinicalTrials.gov, UniProt, OpenAlex, Open Targets, FDA FAERS, USPTO, and EPO — no cached data.",
        "DRUG DISCOVERY TOOLS: Virtual screening via FlowDock, ADMET property prediction, compound optimization, and ligand docking through the Neurosnap API.",
        "IMMUNOTHERAPY & STRUCTURAL BIOLOGY: CAR-T tonic signaling prediction, antibody humanization, vaccine neoantigen design, and 3D protein structure visualization (PDB/CIF via pdbe-molstar).",
        "PERSISTENT KNOWLEDGE GRAPH: Entity and relationship extraction across sessions stored in Neo4j — research discoveries compound over time into a growing knowledge network.",
        "RAG DOCUMENT SEARCH: ChromaDB vector search over saved research documents with semantic retrieval via Sentence Transformers.",
        "CREDIT-BASED SAAS: Free, Researcher, Lab, and Enterprise tiers; BYOK (Bring Your Own Keys) model; Stripe billing; PostHog analytics.",
        "MULTI-LANGUAGE SUPPORT: 16 languages including Arabic, Hindi, Urdu, Bengali, and Swahili via i18next.",
        "PER-USER ISOLATION: SHA-256 API key hashing scopes all agents, Neo4j subgraphs, ChromaDB collections, and Firestore data per user session."
      ],
      timeline: [
        { date: "2024", description: "Designed system architecture, multi-agent orchestration with LangGraph, and all backend services including 12+ tool modules and biomedical API adapters." },
        { date: "2024", description: "Built the isometric Three.js 3D lab environment, React/TypeScript frontend, real-time WebSocket UI, and knowledge graph pipeline (Neo4j + ChromaDB)." },
        { date: "2025", description: "Integrated Stripe billing, credit tier system, BYOK model, Firebase Auth, PostHog analytics, and deployed on Google Cloud Run via Docker." }
      ],
      videos: [],
      screenshots: [
        { caption: "Biogame AI Home", url: "images/Biogame/biogame_00.png" },
        { caption: "Multi-Agent Research Swarm", url: "images/Biogame/biogame_01.png" },
        { caption: "Knowledge Graph Entities & Discoveries", url: "images/Biogame/biogame_02.png" },
        { caption: "Bioinformatics Database Connectors", url: "images/Biogame/biogame_03.png" }
      ]
    },
    {
      id: "minicule",
      title: "Minicule",
      category: "Tools & Engines",
      tagline: "Search across biomedical databases and explore findings as interactive knowledge graphs.",
      role: "Full-Stack Developer",
      techStack: ["React", "Neo4j", "PubMed API", "OpenAlex", "USPTO"],
      banner: "images/Minicule/minicule_00.png",
      thumbnail: "images/Minicule/minicule_00.png",
      backgroundImage: "images/Minicule/minicule_00.png",
      description: {
        short: "An AI-powered web platform turning complex medical databases into visual knowledge trees.",
        full: "Minicule is a research platform that accelerates drug discovery and scientific pattern checking. I contributed across the stack: frontend components, backend service connectors to PubMed, OpenAlex, and USPTO, and several backend features. The platform uses AI to extract concept relationships from live databases and translates them into interactive knowledge graphs and dendrograms."
      },
      links: [
        { label: "Visit Minicule Website", url: "https://minicule.com/" }
      ],
      features: [
        "BIOMEDICAL API CONNECTORS: Built service integrations to PubMed, OpenAlex, and USPTO that fetch and normalize live research data for use across the platform.",
        "KNOWLEDGE GRAPHS: Mappable connections between concepts, genes, drugs, and authors rendered as interactive visualizations.",
        "DENDROGRAMS: Interactive tree diagrams grouping publications by evidence strength and topic proximity.",
        "MULTI-DATABASE QUERYING: Unified interface to search across scientific literature, open research data, and patent databases simultaneously."
      ],
      timeline: [
        { date: "2024", description: "Built frontend components, external API connectors (PubMed, OpenAlex, USPTO), and contributed backend features." }
      ],
      videos: [],
      screenshots: [
        { caption: "Minicule", url: "images/Minicule/minicule_00.png" },
        { caption: "Minicule", url: "images/Minicule/minicule_01.png" },
        { caption: "Minicule", url: "images/Minicule/minicule_02.png" },
      ]
    },
    {
      id: "doppelbio",
      title: "Doppelbio",
      category: "Tools & Engines",
      tagline: "Tell it what to research. Your AI lab team takes it from there.",
      role: "Sole Developer & Architect",
      techStack: ["Python", "FastAPI", "React", "TypeScript", "Claude API", "Neo4j", "ChromaDB", "Firebase", "WebSockets", "Docker"],
      banner: "images/Doppelbio/doppel_00.png",
      thumbnail: "images/Doppelbio/doppel_00.png",
      backgroundImage: "images/Doppelbio/doppel_00.png",
      description: {
        short: "A multi-agent AI research platform where a Lab Director AI orchestrates a team of specialized agents to automate biomedical literature reviews, drug discovery tasks, and biological data analysis.",
        full: "Doppelbio is a multi-agent AI research platform for biomedical and bioinformatics automation. Scientists define a research objective and a Lab Director AI decomposes it into sub-tasks, spawns specialized sub-agents, delegates work across them, and synthesizes everything into a structured research report — all in real time. I designed and built the entire platform end-to-end: system architecture, all backend services and agent orchestration logic, all frontend components and real-time UI, database integrations (Firestore, Neo4j, ChromaDB), biomedical API adapters, and deployment infrastructure."
      },
      links: [],
      features: [
        "LAB DIRECTOR ORCHESTRATION: A top-level AI agent receives research objectives, breaks them into sub-tasks, spawns specialized agents, delegates work via @mentions, and synthesizes results into structured reports with citations.",
        "MULTI-AGENT COLLABORATION: Sub-agents communicate in real time, each specialized for a research domain — literature review, drug discovery, biological data analysis, and more.",
        "BIOMEDICAL DATABASE INTEGRATION: Unified search across PubMed, ClinicalTrials.gov, UniProt, OpenAlex, USPTO, and EPO — with parallel async queries and LLM-based relevance scoring.",
        "KNOWLEDGE GRAPH PIPELINE: Adaptive ontology detection, LLM-driven entity and relationship extraction, BM25 importance scoring, and automatic persistence to Neo4j.",
        "RAG + GRAPH QUERYING: Agents use both ChromaDB (vector search) and Neo4j (graph traversal) as first-class research tools to find and connect knowledge.",
        "PLAN-APPROVE-EXECUTE WORKFLOW: The Lab Director drafts a structured research plan with search queries, waits for user approval, then executes the full agent workflow.",
        "REAL-TIME AGENT COMMUNICATION: WebSocket broadcasts deliver live agent messages, status updates, and completion events to the frontend — scoped per user session.",
        "PER-USER SESSION ISOLATION: Each user's session scopes all agents, Firestore data, Neo4j subgraphs, and ChromaDB collections through SHA-256 key hashing."
      ],
      timeline: [
        { date: "2025", description: "Designed the multi-agent architecture and Lab Director orchestration model. Built all backend services, agent tools, and biomedical API adapters." },
        { date: "2025", description: "Built the React/TypeScript frontend, real-time WebSocket UI, and integrated Firestore, Neo4j, and ChromaDB. Deployed the full platform." }
      ],
      videos: [],
      screenshots: [
        { caption: "Doppelbio", url: "images/Doppelbio/doppel_01.png" },
        { caption: "Doppelbio", url: "images/Doppelbio/doppel_03.png" },
        { caption: "Doppelbio", url: "images/Doppelbio/doppel_04.png" },
        { caption: "Doppelbio", url: "images/Doppelbio/doppel_06.png" },
        { caption: "Doppelbio", url: "images/Doppelbio/doppel_07.png" },
        { caption: "Doppelbio", url: "images/Doppelbio/doppel_09.png" },
      ]
    },
    {
      id: "propermax",
      title: "Propermax",
      category: "Tools & Engines",
      tagline: "Real estate app for Spain and Estonia featuring 3D maps and AI valuations.",
      role: "Lead Fullstack Developer",
      techStack: ["React", "Three.js", "Mapbox SDK", "AI Chat Agent"],
      banner: "images/Propermax/proper_03.png",
      thumbnail: "images/Propermax/proper_03.png",
      backgroundImage: "images/Propermax/proper_03.png",
      description: {
        short: "Browse real estate using satellite 3D overlays and calculate property values with AI.",
        full: "Propermax is a premium real estate web app built for European markets. It features interactive 3D map views, routing, and satellite layer overlays. It includes AI tools that analyze market prices and calculate property valuations, along with an AI Agent chatbot that lets users control the app using natural language."
      },
      links: [
        { label: "Visit Propermax Website", url: "https://propermax.com/" }
      ],
      features: [
        "3D MAP ROTATION: Smooth Mapbox routing, satellite overlays, and structural mockups.",
        "AI CHAT AGENT CONTROLLER: Instruct the assistant to filter properties, search locations, or calculate fees.",
        "AUTOMATED VALUATION MODEL (AVM): Predicts property values based on historical area metrics."
      ],
      timeline: [
        { date: "2025", description: "Engineered property search backend and 3D map interface." },
        { date: "2026", description: "Integrated valuation algorithms and conversational AI controllers." }
      ],
      videos: [],
      screenshots: [
        { caption: "Propermax", url: "images/Propermax/proper_00.png" },
        { caption: "Propermax", url: "images/Propermax/proper_01.png" },
        { caption: "Propermax", url: "images/Propermax/proper_02.png" },
        { caption: "Propermax", url: "images/Propermax/proper_03.png" },
        { caption: "Propermax", url: "images/Propermax/proper_04.png" },
        { caption: "Propermax", url: "images/Propermax/proper_05.png" },
        { caption: "Propermax", url: "images/Propermax/proper_06.png" },
      ]
    },
    {
      id: "bowhead-health",
      title: "Bowhead Health",
      category: "Tools & Engines",
      tagline: "Interactive web portal and clinical trial matching platform with scroll-driven animations.",
      role: "Web Frontend Developer",
      techStack: ["React", "TailwindCSS", "Node.js", "GSAP", "Scroll-Driven Animations"],
      banner: "images/Bowhead/bowhead_00.png",
      thumbnail: "images/Bowhead/bowhead_00.png",
      backgroundImage: "images/Bowhead/bowhead_00.png",
      description: {
        short: "Built the official marketing website and precision medicine portal for Bowhead Health, featuring responsive layouts and a custom scroll-driven 3D animation system.",
        full: "Bowhead Health is a precision medicine platform transforming clinical trial matching and drug development. Designed and developed the official website and interface layouts, integrating interactive elements and a scroll-driven 3D animation system. As the user scrolls up or down, the 3D cell and lab scene animation plays or scrubs/rewinds dynamically. The website is fully optimized for performance, highly responsive, and presents complex clinical data including the Bowhead Therapeutics Pipeline, Trialstream™ reasoning maps, and Navigator matching modules cleanly."
      },
      links: [
        { label: "Visit Official Website", url: "https://bowheadhealth.com/" }
      ],
      features: [
        "BOWHEAD NAVIGATOR™: Accelerate oncology trial matching globally using explainable, auditable AI updated daily with ClinicalTrials.gov data.",
        "SCROLL-DRIVEN 3D ANIMATION: Custom-engineered, highly optimized animation showing molecular structures and 3D laboratory environments that dynamically plays forward or rewinds as you scroll.",
        "TRIALSTREAM™ REASONING MAP: Visualizes AI matching logic into an auditable map, ensuring every inclusion and exclusion decision is traceable to its source.",
        "PATIENT & TRIAL MATCHING: Dual matching modules featuring customizable ranking engines (distance, recency, ECOG status, cancer type) and feasibility visualizations.",
        "BOWHEAD THERAPEUTICS PIPELINE: Preclinical pipeline displays for CAR-T cell therapies, gene therapy, and targeted therapeutics for oncology (EBV, HER2, CD20 programs) and CNS disorders.",
        "CLINICIAN-IN-THE-LOOP CONTROL: Interactive feedback systems allowing researchers, oncologists, and radiologists to review and refine AI outputs.",
        "MAXIMUM PERFORMANCE & RESPONSIVENESS: Fully responsive portal optimized for fast static load times, ensuring layout fluidity across all devices."
      ],
      timeline: [
        { date: "2022", description: "Designed the homepage layout, navigation structures, and initial responsive design." },
        { date: "2023", description: "Engineered the scroll-driven cell and lab scene animations that scrub dynamically with scroll direction." },
        { date: "2024", description: "Updated portal content with Bowhead Navigator, Trialstream™, and Bowhead Therapeutics pipeline specs." }
      ],
      videos: [],
      screenshots: [
        { caption: "Bowhead Navigator - Clinical Trial Matching Platform", url: "images/Bowhead/bowhead_01.png" },
        { caption: "Molecular Profile & Clinical Trial Matching Animation", url: "images/Bowhead/bowhead_02.png" },
        { caption: "Clinical Evidence Decision Support Interface", url: "images/Bowhead/bowhead_03.png" },
        { caption: "Bowhead Core Platform Integration", url: "images/Bowhead/bowhead_04.png" },
        { caption: "Trialstream™ - Visual AI Reasoning Map", url: "images/Bowhead/bowhead_05.png" }
      ]
    },
    {
      id: "exact-agent",
      title: "Exact Agent",
      category: "Tools & Engines",
      tagline: "No-code autonomous AI agent infrastructure for enterprise workflows.",
      role: "Agent Features Developer",
      techStack: ["Node.js", "AWS KMS", "React", "AI Agent Core"],
      banner: "images/ExactAgent/exact_00.png",
      thumbnail: "images/ExactAgent/exact_00.png",
      backgroundImage: "images/ExactAgent/exact_00.png",
      description: {
        short: "An easy-to-use AI agent infrastructure to create, deploy, and manage powerful AI agents without code.",
        full: "Exact Agent is a no-code AI agent platform for enterprise workflow automation. As part of the engineering team, I developed agent features and built a standout real-time 3D AI Presenter: a talking avatar that delivers continuously AI-generated space news like a live broadcast. Users can also chat directly with the AI presenter — sending messages and watching the 3D model respond with full lip-sync animation, making it feel like a conversation with a living news anchor."
      },
      links: [
        { label: "Visit Exact Agent Website", url: "https://exactagent.ai/" }
      ],
      features: [
        "3D AI NEWS PRESENTER: A live-speaking 3D avatar that delivers real-time AI-generated space news like a continuous broadcast program — fully animated with lip-sync.",
        "INTERACTIVE CHAT WITH THE PRESENTER: Users can send messages and receive responses directly from the AI anchor, with the 3D model visibly reacting and speaking each reply.",
        "AUTONOMOUS AGENT FEATURES: Contributed agent workflow features enabling autonomous task execution across connected tools and platforms.",
        "COMPLETE AUTONOMY: Agents work independently to accomplish complex tasks without constant human supervision.",
        "DATA PROTECTION: The user's data is not used to train models, ensuring information remains private and secure.",
        "SECURE CREDENTIALS: Credentials are securely stored within AWS key management with enterprise-grade encryption.",
        "100% TRANSPARENCY: A full activity log lets users see exactly what agents are doing and stop them at any time.",
        "SPREADSHEETS & GMAIL AUTOMATION: Automate Google Spreadsheets entry, analysis, and reporting; manage Gmail inbox, drafts, and responses.",
        "SOCIAL & MESSAGING INTEGRATIONS: Monitor Discord channels, manage X social presence and trends, and send Telegram updates."
      ],
      timeline: [
        { date: "2025", description: "Developed agent workflow features and integrations within the platform engineering team." },
        { date: "2025", description: "Built the real-time 3D AI Presenter — a live-speaking avatar delivering AI-generated space news with interactive chat and lip-sync animation." }
      ],
      videos: [],
      screenshots: [
        { caption: "Exact Agent", url: "images/ExactAgent/exact_04.png" },
        { caption: "Exact Agent", url: "images/ExactAgent/exact_01.png" },
        { caption: "Exact Agent", url: "images/ExactAgent/exact_03.png" },
        { caption: "Exact Agent", url: "images/ExactAgent/exact_02.png" }
      ]
    },
    {
      id: "mental-chat-ai",
      title: "Mental Chat AI",
      category: "Tools & Engines",
      tagline: "Mental health chatbot with interactive 3D avatars for mobile and Apple Vision Pro.",
      role: "Lead Programmer",
      techStack: ["Unity", "C#", "iOS", "visionOS", "AI Chat API", "3D Avatars"],
      banner: "images/Mila/mila_00.png",
      thumbnail: "images/Mila/mila_00.png",
      backgroundImage: "images/Mila/mila_00.png",
      description: {
        short: "An AI-powered mental health chatbot featuring 3D interactive avatars developed for Mobile and Apple Vision Pro (currently in closed beta).",
        full: "Mental Chat AI (Mila) is a conversational companion chatbot designed for mental health support. Built for Mobile platforms and Apple Vision Pro, the app features interactive 3D avatars that react and animate dynamically as they chat. By combining advanced AI conversational APIs with optimized 3D avatar rendering, Mila provides a highly empathetic and immersive conversational experience. The project is currently in closed beta."
      },
      links: [],
      features: [
        "3D INTERACTIVE AVATARS: Real-time animated avatars that react dynamically to conversational content, providing empathetic visual feedback.",
        "SPATIAL COMPUTING SUPPORT: Full visionOS compatibility for Apple Vision Pro, featuring optimized spatial UI layouts and immersive interactions.",
        "CONVERSATIONAL AI API: Integrates advanced NLP models to sustain supportive, context-aware dialogues around mental wellness.",
        "CLOSED BETA RELEASES: Currently undergoing active testing in a closed beta environment to validate user experience and conversational safety boundaries.",
        "OPTIMIZED MOBILE RENDERING: Highly optimized 3D pipelines designed to render animations fluidly on mobile devices without thermal or battery strain."
      ],
      timeline: [
        { date: "2025", description: "Prototyped 3D facial animations and conversational API integration." },
        { date: "2026", description: "Integrated visionOS support for Apple Vision Pro and launched closed beta testing." }
      ],
      videos: [],
      screenshots: [
        { caption: "Mila Mental Chat AI - Interactive Mobile View", url: "images/Mila/mila_00.png" },
        { caption: "3D Avatar Conversation Interface", url: "images/Mila/mila_01.png" }
      ]
    },
    {
      id: "solbag",
      title: "SOLBAG",
      category: "Games",
      tagline: "Move in the real world to claim crypto token airdrops (Pokémon GO style).",
      role: "Lead Programmer",
      techStack: ["Niantic 8th Wall", "WebXR", "React", "Solana SDK"],
      banner: "images/Solbag/solbag_00.png",
      thumbnail: "images/Solbag/solbag_00.png",
      backgroundImage: "images/Solbag/solbag_00.png",
      description: {
        short: "Interactive location-based Web Augmented Reality (AR) platform for crypto drops.",
        full: "SOLBAG is an interactive location-based Web Augmented Reality (AR) platform. Using mobile web browser GPS coordinates and augmented reality interfaces built with Niantic 8th Wall, players walk in the real world to locate and claim digital crypto token bags. Once found, players view the bags in 3D AR space and claim Solana tokens directly into their Web3 wallets."
      },
      links: [],
      features: [
        "AUGMENTED REALITY (AR): Implements WebXR-based real-world token drop hunting using Niantic 8th Wall.",
        "MOBILE WALLET INTEGRATION: Connects directly with Phantom or Solflare wallets for instant token claims.",
        "ANTI-CHEAT SYSTEMS: Verifies device movements to prevent GPS spoofing."
      ],
      timeline: [
        { date: "2023", description: "Built the mobile client and integrated Solana smart contract actions." }
      ],
      videos: [],
      screenshots: [{ caption: "SOLBAG Gameplay", url: "images/Solbag/solbag_00.png" }]
    },
  ]
};
