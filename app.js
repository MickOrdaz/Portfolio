/* =====================================================
   MICK ORDAZ PORTFOLIO V2 — app.js
   All data + UI logic. No frameworks. Vanilla JS.
   ===================================================== */

'use strict';

/* ── DATA ──
   gallery items are either a string (local media url, .mp4 => video, else image)
   or an object { yt: 'youtubeId', title: '...' } for embedded YouTube.
*/

const PROJECTS = [
  {
    id: 'heaven-crawler',
    title: 'Heaven Crawler',
    category: 'games',
    role: 'Lead Programmer · Co-Director',
    description:
      'An action-adventure roguelite dungeon crawler with RPG elements. Help "the Child" fight through The Womb, a colossal Babelian megastructure built to reach the heavens, to bring his mother back from the dead. Wield Mechanical Arms with unique abilities, mix Masks, Magic, Mementos, and Relics into your own build, and use the environment itself to overcome every challenge. Solo-developed over six years, then co-led with a full production team. Grand Prize winner at the Supernova Devs Challenge 2025 and showcased at Gamescom.',
    stack: ['Unity', 'C#', 'FMOD', 'Procedural Generation', 'Behavior Trees', 'Inverse Kinematics'],
    features: [
      'ASCEND A LIVING TOWER: Layered biomes, each with unique rooms, traps, challenges, and enemies. Gain souls, level up, and improve every run.',
      'MODULAR COMBAT WITH MECHANICAL ARMS: Customize your loadout, discover synergies, and develop a combat style that is uniquely your own — every arm can be upgraded.',
      'NO CLASSES: Mix-and-match Gear, Magic, Skills, and Relics freely. Each item unlocks different stats and abilities.',
      'REACTIVE ELEMENTAL COMBAT: Electricity, fire, ice, and corrosion unlock new gameplay possibilities and environmental interactions.',
      'DYNAMIC ENEMIES: Mechanical animals roam the Tower, each with distinct behavior trees, attacks, and emergent encounters.',
      'COLOSSAL BOSS ENCOUNTERS: Multi-phase mechanical creatures with cinematic state machines guard every layer of the Tower.',
      'ROGUELITE DEATH LOOP: Every death returns you to the Lobby with some souls — expand it to permanently improve your odds.',
    ],
    links: [
      { label: 'View on Steam', url: 'https://store.steampowered.com/app/3036360/Heaven_Crawler' },
      { label: 'Press Kit', url: 'https://heavencrawler.com/' },
    ],
    thumb: 'images/LAGS2026_Intro_02.mp4',
    gallery: [
      { yt: '_GxUC5dlLF4', title: 'Kickstarter Announcement Trailer — LAGS 2026' },
      { yt: '-A5Z86Qi9-o', title: 'Teaser Trailer — LAGS 2024' },
      'images/LAGS2026_Intro_02.mp4',
      'images/LAGS2026_GorillaCrawlers_01.mp4',
      'images/BossCinematic_04.mp4',
      'images/RoomChanges_03.mp4',
      'images/CameraChange_01.mp4',
      'images/NPC_02.mp4',
      'images/LAGS2026_Inventory_04.mp4',
      'images/HeavenScreenshot_2026-06-02_04-04-21.png',
      'images/HeavenScreenshot_2026-06-02_20-24-06.png',
      'images/HeavenCrawler_ShopRoom_SS_001.png',
      'images/dragonshot.png',
    ],
  },
  {
    id: 'chicken-desktop-pet',
    title: 'Chrimp Desktop Pet',
    category: 'games',
    role: 'Solo Developer',
    description:
      'A desktop companion game where your pets do not live inside a window — they live on top of everything. These wobbly chicken-shrimp creatures walk across your actual screen, nap under your browser tabs, and react when you poke them. Clicks pass straight through them while you work. Drop a toy and chaos begins: tower defense against zombie waves, football matches across your monitor, hot-potato bombs, balloon keep-up, and audio-reactive dance mode. Every Chrimp hatches from an egg, grows up, and can be a rare species.',
    stack: ['Unity', 'C#', 'Windows Win32 API', 'URP', 'Cinemachine', 'Unity Behavior', 'Inverse Kinematics'],
    features: [
      'THEY LIVE ON YOUR DESKTOP: Chrimp wander, eat, sleep, and play across your actual screen — always on top but never in the way. Click right through them.',
      'HATCH, GROW & COLLECT: Pets hatch from eggs and grow into adults. Discover rare species from Common to Ghost and Gilded.',
      'TOWER DEFENSE: Drop a Toy Flag and your Chrimp grab machine guns to defend against zombie waves, with upgrade cards between rounds.',
      'FOOTBALL MATCH: Drop a ball and they split into teams; goal posts appear at your screen edges. Aim and kick with a slingshot.',
      'BALLOON KEEP-UP & HOT POTATO: Rally a balloon airborne, or frantically pass a live bomb until someone gets launched.',
      'THEY DANCE TO YOUR MUSIC: Place a Radio and pets dance to whatever audio is playing on your PC, reacting to the beat in real time.',
      'THE KITCHEN POT: Low on coins? Cook a Chrimp. Rarer ones are worth more. Eggs, babies, and your last pet are always safe.',
    ],
    links: [{ label: 'Coming soon to Steam', url: 'https://store.steampowered.com' }],
    thumb: 'images/Chrimp/chricken_09.mp4',
    gallery: [
      'images/Chrimp/chricken_07.mp4',
      'images/Chrimp/chricken_11.mp4',
      'images/Chrimp/chricken_06.mp4',
      'images/Chrimp/chricken_09.mp4',
      'images/Chrimp/chricken_10.mp4',
      'images/Chrimp/chricken_13.mp4',
      'images/Chrimp/chricken_00.png',
      'images/Chrimp/chricken_02.png',
      'images/Chrimp/chricken_03.png',
    ],
  },
  {
    id: 'mecha-ko',
    title: 'Mecha K.O.',
    category: 'games',
    role: 'Lead Gameplay & Tech Programmer',
    description:
      'A real-time 3D boxing game with an anime cel-shaded art style. Fighters battle using massive mechanical arms, each built from three interlocking armor pieces. As the fight goes on, those pieces crack and fall off — the damage you see on the arm IS the health system. Win the round and head back to the corner to repair, swap parts, or upgrade before the next fight. Built the cel-shading pipeline, the structural destruction system, the repair/upgrade loop, and the Android port solo.',
    stack: ['Unity', 'C#', 'URP', 'Cel Shading', 'Real-time Destruction'],
    features: [
      'ARMOR THAT BREAKS IN REAL TIME: Each mechanical arm has 3 armor pieces that crack and fall apart as you take hits — lose all three and that arm is done for the fight.',
      'FIGHT → REPAIR → UPGRADE LOOP: Between rounds, choose what to fix, what to sacrifice, and what to upgrade. Every decision carries forward.',
      'ANIME CEL-SHADED 3D: Stylized toon shading gives a hand-drawn anime feel while keeping combat visceral and readable.',
      'DIRECT REAL-TIME BOXING: Fast, physical combat where the damage on your arms tells you exactly how close you are to losing a limb.',
    ],
    links: [],
    thumb: 'images/MechaKO/mechako_03.mp4',
    gallery: [
      'images/MechaKO/mechako_01.mp4',
      'images/MechaKO/mechako_02.mp4',
      'images/MechaKO/mechako_03.mp4',
      'images/MechaKO/mechako_04.mp4',
      'images/MechaKO/mechako_05.mp4',
      'images/MechaKO/mechako_06.mp4',
      'images/MechaKO/mechako_00.png',
    ],
  },
  {
    id: 'ramen-abyss',
    title: 'Ramen Abyss',
    category: 'games',
    role: 'Solo Developer',
    description:
      'A top-down, local 2-player co-op roguelike built in Unity 6, targeting Steam, Itch, Android, and iOS. Players control a custom-built, horn-adorned soft-boiled egg with wobbly physics and procedurally animated limbs. Wield three weapon categories across four procedurally generated ingredient zones, slaying ingredient-themed monsters. The project doubles as an educational tool, with tutorial videos teaching developers how to build core gameplay loops and modular systems.',
    stack: ['Unity', 'C#', 'Multiplayer', 'Procedural Animation'],
    features: [
      'WOBBLY PROCEDURAL ANIMATION: A horn-adorned egg with soft-boiled wobbly physics and procedurally animated limbs supporting running and rolling.',
      'THREE COMBAT CLASSES: Pierce weapons for dash thrusts, Sharp weapons for spin attacks, and Blunt weapons for ground slams.',
      'PROCEDURAL INGREDIENT ZONES: Randomly generated levels across Pork Plains, Seafood Depths, Inferno Bowl, and Abyssal Broth, each ending in a unique boss.',
      'NARUTOMAKI COINS & META PROGRESSION: Defeat bosses to earn coins and unlock cosmetic skins.',
      'SYSTEMS TUTORIAL BLUEPRINT: An educational resource with clean code patterns and tutorial videos across TikTok, Instagram, YouTube, and Facebook.',
    ],
    links: [],
    thumb: 'images/RamenAbyss/ramen_06.mp4',
    gallery: [
      'images/RamenAbyss/ramen_01.mp4',
      'images/RamenAbyss/ramen_12.mp4',
      'images/RamenAbyss/ramen_03.mp4',
      'images/RamenAbyss/ramen_04.mp4',
      'images/RamenAbyss/ramen_05.mp4',
      'images/RamenAbyss/ramen_06.mp4',
      'images/RamenAbyss/ramen_07.mp4',
      'images/RamenAbyss/ramen_08.mp4',
      'images/RamenAbyss/ramen_10.mp4',
      'images/RamenAbyss/ramen_11.mp4',
    ],
  },
  {
    id: 'american-trail',
    title: 'American Trail',
    category: 'games',
    role: 'Lead Programmer & Tools Developer',
    description:
      'A narrative-driven adventure about climate migration, created in one week for the Just Play 2024 Climate Jam. After losing their home to a flood, young Alfonso and his Abuela board a northbound train. Players travel through scorching deserts, oil-swamps, and frozen mountains, helping Alfonso complete tasks, talk to fellow travelers, and keep Abuela safe.',
    stack: ['Unity', 'C#'],
    features: [
      'DYNAMIC WEATHER EFFECTS: Manage heat, cold, and wet conditions affecting characters.',
      'INTERACTIVE PASSENGERS: Dialogue choices to learn stories and earn money.',
      'INVENTORY SYSTEM: Backpack manager to gather supplies, food, and tools for Abuela.',
      'ORIGINAL TEAM PROJECT: Built by a collaborative team of designers, artists, and sound engineers in one week.',
    ],
    links: [{ label: 'View on Itch.io', url: 'https://carbon-machina.itch.io/american-trail' }],
    thumb: 'images/AmericanTrail/trail_00.png',
    gallery: [
      'images/AmericanTrail/trail_01.mp4',
      'images/AmericanTrail/trail_02.mp4',
      'images/AmericanTrail/trail_03.mp4',
      'images/AmericanTrail/trail_04.mp4',
      'images/AmericanTrail/trail_05.mp4',
      'images/AmericanTrail/trail_07.png',
      'images/AmericanTrail/trail_06.png',
      'images/AmericanTrail/trail_00.png',
    ],
  },
  {
    id: 'skate-slash',
    title: 'Skate & Slash',
    category: 'games',
    role: 'Solo Developer',
    description:
      'A fast-paced skateboard action prototype made in under 20 hours in Unity, combining skateboarding tricks with hack-and-slash combat. Ride a Skateboard-Sword down a dangerous obstacle course, build momentum on ramps, and flip to slice through incoming monsters — ending in a giant boss fight.',
    stack: ['Unity', 'C#'],
    features: [
      'TRICK-BASED COMBAT: You can only damage enemies while mid-air, sliding down ramps, or doing flip tricks.',
      'INTENSE VELOCITY: Maintain speed by jumping over obstacles and riding ramps correctly.',
      'BOSS SHOWDOWN: Slice the final monster boss at the end of the road.',
    ],
    links: [{ label: 'Itch.io Page', url: 'https://critical-slash.itch.io/skate-slash' }],
    thumb: 'images/Skate&Slash/skate_00.png',
    gallery: [
      'images/Skate&Slash/skate_01.mp4',
      'images/Skate&Slash/skate_00.png',
      'images/Skate&Slash/skate_02.png',
      'images/Skate&Slash/skate_03.png',
      'images/Skate&Slash/skate_04.png',
      'images/Skate&Slash/skate_05.png',
    ],
  },
  {
    id: 'slug-slayer',
    title: 'Slug Slayer',
    category: 'games',
    role: 'Lead Developer',
    description:
      'A fast-paced physics action prototype built in under 24 hours for a school assignment, inspired by the movement mechanics and dark atmosphere of Rain World. Pilot an agile slug sliding through complex chambers, hunting boid-controlled mini-slugs to open the drainage pipe and escape before the rain floods the level.',
    stack: ['Unity', 'C#', 'Boids Algorithm'],
    features: [
      'IMPULSE SLIDING CONTROLS: Aim with the mouse, right-click to apply physical impulse forces, left-click to bite and eat mini-slugs.',
      'BOIDS AI & STEERING BEHAVIORS: A custom flocking Boids algorithm lets mini-slugs swarm, evade the player, and steer through corridors.',
      'RAIN WORLD INSPIRATION: Built in 1 day, capturing wobbly creature physics, atmospheric rain hazards, and a survival theme.',
      'RISING WATER HAZARD: Survive rooms under a strict time limit as torrential rain floods the map.',
    ],
    links: [],
    thumb: 'images/SlugSlayer/slugslayer_00.png',
    gallery: [
      'images/SlugSlayer/slugslayer_00.png',
      'images/SlugSlayer/slugslayer_01.png',
      'images/SlugSlayer/slugslayer_02.png',
      'images/SlugSlayer/slugslayer_05.png',
      'images/SlugSlayer/slugslayer_03.png',
      'images/SlugSlayer/slugslayer_04.png',
    ],
  },
  {
    id: 'cyberdogz',
    title: 'Cyberdogz 3D Space Battle',
    category: 'games',
    role: 'Gameplay & Network Programmer',
    description:
      'An online multiplayer 3D space shooter built in Unity with Photon Networking. Players connect Web3 wallets to verify collections, pilot customizable fighter spaceships with full 3D flight controls, and engage in chaotic real-time battles. Features a persistent global leaderboard, free-for-all matches for up to 10 players or bots, dynamic shield/health telemetry, and radar systems.',
    stack: ['Unity', 'C#', 'Photon Networking'],
    features: [
      '3D FLIGHT CONTROLS: Pilot fighter craft with full keyboard and mouse control — movement, roll, speed boost, and altitude adjustments.',
      'LEADERBOARD CHALLENGE (FFA): Up to 10 players in a 10-minute free-for-all. Earn points per kill to climb the ranks.',
      'MULTIPLE GAME MODES: Leaderboard Challenge, Quick Match with EXP and level-ups, and Bot Attack cooperative wave defense.',
      'TACTICAL COCKPIT UI: Rich HUD tracking shield, health, timer, K/D, ammo, speed, reticle, and radar waypoints.',
      'WEB3 & MULTIPLAYER ENGINE: Wallet verification, low-latency Photon sync, and client-side bot spawning for solo play.',
    ],
    links: [{ label: 'Visit Website', url: 'https://cyberdogz.io/' }],
    thumb: 'images/CyberDogz/cyberdogz_00.png',
    gallery: [
      'images/CyberDogz/cyberdogz_01.png',
      'images/CyberDogz/cyberdogz_02.png',
      'images/CyberDogz/cyberdogz_03.png',
      'images/CyberDogz/cyberdogz_04.png',
      'images/CyberDogz/cyberdogz_05.png',
      'images/CyberDogz/cyberdogz_00.png',
    ],
  },
  {
    id: 'solbag',
    title: 'SOLBAG',
    category: 'games',
    role: 'Lead Programmer',
    description:
      'An interactive location-based Web Augmented Reality platform — think Pokémon GO for crypto airdrops. Using mobile browser GPS and AR built with Niantic 8th Wall, players walk in the real world to locate and claim digital token bags, viewing them in 3D AR space and claiming Solana tokens directly into their Web3 wallets.',
    stack: ['Niantic 8th Wall', 'WebXR', 'React', 'Solana SDK'],
    features: [
      'AUGMENTED REALITY (AR): WebXR-based real-world token-drop hunting using Niantic 8th Wall.',
      'MOBILE WALLET INTEGRATION: Connects directly with Phantom or Solflare wallets for instant token claims.',
      'ANTI-CHEAT SYSTEMS: Verifies device movement to prevent GPS spoofing.',
    ],
    links: [],
    thumb: 'images/Solbag/solbag_00.png',
    gallery: ['images/Solbag/solbag_00.png'],
  },
  {
    id: 'vivarium-engine',
    title: 'Vivarium Engine',
    category: 'tools',
    role: 'Solo Engine Developer',
    description:
      'A custom-built 3D game engine developed as a university thesis project. Built in C++, it features OpenGL deferred rendering, PBR shading, PhysX integration, VR capabilities, and a NavMesh baker. Its custom Nvidia Omniverse Connector allows multiple clients to edit and sync 3D scene data in real time. Featured Developer at Nvidia GTC 2021 and on the Nvidia developer blog.',
    stack: ['C++', 'OpenGL', 'DirectX', 'Nvidia Omniverse API', 'PhysX'],
    features: [
      'CORE ARCHITECTURE: Fully custom scene graph supporting hierarchical game objects, modular components, and a robust resource manager.',
      'PBR & DEFERRED RENDERING: High-fidelity physically based rendering with a deferred shading architecture for optimized lighting.',
      'PHYSICS & COLLISION: Integrated PhysX simulation for realistic rigidbodies, joints, and collisions.',
      'BUILT-IN TOOLS: 3D translation/rotation gizmos, a NavMesh baker, and a camera animator for complex pathing.',
      'LIVE SYNC WITH CREATE APP: Real-time, bidirectional scene editing synchronized with the Nvidia Omniverse Create App.',
      'MULTI-CLIENT SYNCHRONIZATION: Multiple connected clients edit, manipulate, and view the same 3D scene concurrently in real time.',
      'SHARED PHYSICS SIMULATION: Shared PhysX transforms enable cross-client interactions by moving physical colliders.',
    ],
    links: [
      { label: 'NVIDIA Blog Article', url: 'https://blogs.nvidia.com/blog/uad-omniverse-connector/' },
      { label: 'NVIDIA Community Stream', url: 'https://www.nvidia.com/en-us/on-demand/session/omniverse2020-om1437/' },
    ],
    thumb: 'images/Vivarium/vivarium_06.mp4',
    gallery: [
      'images/Vivarium/vivarium_06.mp4',
      'images/Vivarium/vivarium_07.mp4',
      'images/Vivarium/vivarium_01.mp4',
      'images/Vivarium/vivarium_03.mp4',
      { yt: 'wdspUbtnLtA', title: 'Nvidia GTC 2021' },
    ],
  },
  {
    id: 'biogame',
    title: 'Biogame AI',
    category: 'tools',
    role: 'Sole Developer & Architect',
    description:
      'A full SaaS multi-agent research platform where scientists interact with specialized AI agents inside a real-time isometric 3D workspace built with Three.js. A Lab Director orchestrator creates execution plans, spawns domain-specific agents (drug discovery, immunotherapy, structural biology, literature review), and synthesizes findings into cited reports via a Plan-Approve-Execute workflow. Built end-to-end: 3D environment, all backend services, LangGraph orchestration, 12+ tool modules, knowledge graph pipeline, auth, Stripe billing, and deployment on Google Cloud Run.',
    stack: ['React', 'TypeScript', 'Three.js', 'Python', 'FastAPI', 'LangGraph', 'Claude API', 'Neo4j', 'ChromaDB', 'Firebase', 'Stripe', 'Docker'],
    features: [
      '3D INTERACTIVE LAB: An isometric Three.js workspace where agents appear as interactive entities at research stations, navigable with WASD and mouse.',
      'LAB DIRECTOR ORCHESTRATION: A top-level AI agent decomposes objectives into sub-tasks, spawns specialized sub-agents, and synthesizes findings into cited reports.',
      'PLAN-APPROVE-EXECUTE WORKFLOW: The Lab Director drafts a research plan with search queries; the user approves before agents execute.',
      'LIVE BIOMEDICAL DATABASES: Real-time queries to PubMed, ClinicalTrials.gov, UniProt, OpenAlex, Open Targets, FDA FAERS, USPTO, and EPO.',
      'DRUG DISCOVERY TOOLS: Virtual screening, ADMET prediction, compound optimization, and ligand docking via the Neurosnap API.',
      'PERSISTENT KNOWLEDGE GRAPH: Entity and relationship extraction stored in Neo4j — discoveries compound over time.',
      'RAG DOCUMENT SEARCH: ChromaDB vector search with semantic retrieval via Sentence Transformers.',
      'CREDIT-BASED SAAS: Free, Researcher, Lab, and Enterprise tiers; BYOK model; Stripe billing; PostHog analytics; 16-language support.',
      'PER-USER ISOLATION: SHA-256 API key hashing scopes all agents, Neo4j subgraphs, ChromaDB collections, and Firestore data per session.',
    ],
    links: [{ label: 'Visit Biogame', url: 'https://biogame.ai/' }],
    thumb: 'images/Biogame/biogame_00.png',
    gallery: [
      'images/Biogame/biogame_00.png',
      'images/Biogame/biogame_01.png',
      'images/Biogame/biogame_02.png',
      'images/Biogame/biogame_03.png',
    ],
  },
  {
    id: 'doppelbio',
    title: 'Doppelbio',
    category: 'tools',
    role: 'Sole Developer & Architect',
    description:
      'A multi-agent AI research platform for biomedical and bioinformatics automation. Scientists define a research objective and a Lab Director AI decomposes it into sub-tasks, spawns specialized sub-agents, delegates work across them, and synthesizes everything into a structured research report — all in real time. Built end-to-end: system architecture, all backend services and agent orchestration, all frontend components and real-time UI, database integrations, biomedical API adapters, and deployment.',
    stack: ['Python', 'FastAPI', 'React', 'TypeScript', 'Claude API', 'Neo4j', 'ChromaDB', 'Firebase', 'WebSockets', 'Docker'],
    features: [
      'LAB DIRECTOR ORCHESTRATION: A top-level agent receives objectives, breaks them into sub-tasks, spawns specialized agents, delegates via @mentions, and synthesizes cited reports.',
      'MULTI-AGENT COLLABORATION: Sub-agents communicate in real time, each specialized for a domain — literature review, drug discovery, biological data analysis.',
      'BIOMEDICAL DATABASE INTEGRATION: Unified search across PubMed, ClinicalTrials.gov, UniProt, OpenAlex, USPTO, and EPO with parallel async queries.',
      'KNOWLEDGE GRAPH PIPELINE: Adaptive ontology detection, LLM-driven entity/relationship extraction, BM25 scoring, and persistence to Neo4j.',
      'RAG + GRAPH QUERYING: Agents use both ChromaDB vector search and Neo4j graph traversal as first-class research tools.',
      'REAL-TIME AGENT COMMUNICATION: WebSocket broadcasts deliver live agent messages, status, and completion events, scoped per user session.',
      'PER-USER SESSION ISOLATION: Each session scopes all agents, Firestore data, Neo4j subgraphs, and ChromaDB collections via SHA-256 key hashing.',
    ],
    links: [],
    thumb: 'images/Doppelbio/doppel_00.png',
    gallery: [
      'images/Doppelbio/doppel_01.png',
      'images/Doppelbio/doppel_03.png',
      'images/Doppelbio/doppel_04.png',
      'images/Doppelbio/doppel_06.png',
      'images/Doppelbio/doppel_07.png',
      'images/Doppelbio/doppel_09.png',
    ],
  },
  {
    id: 'minicule',
    title: 'Minicule',
    category: 'tools',
    role: 'Full-Stack Developer',
    description:
      'A research platform that accelerates drug discovery and scientific pattern checking. Contributed across the stack: frontend components, backend service connectors to PubMed, OpenAlex, and USPTO, and several backend features. The platform uses AI to extract concept relationships from live databases and translates them into interactive knowledge graphs and dendrograms. Live at minicule.com.',
    stack: ['React', 'Neo4j', 'PubMed API', 'OpenAlex', 'USPTO'],
    features: [
      'BIOMEDICAL API CONNECTORS: Service integrations to PubMed, OpenAlex, and USPTO that fetch and normalize live research data.',
      'KNOWLEDGE GRAPHS: Mappable connections between concepts, genes, drugs, and authors rendered as interactive visualizations.',
      'DENDROGRAMS: Interactive tree diagrams grouping publications by evidence strength and topic proximity.',
      'MULTI-DATABASE QUERYING: A unified interface to search literature, open research data, and patent databases simultaneously.',
    ],
    links: [{ label: 'Visit Minicule', url: 'https://minicule.com/' }],
    thumb: 'images/Minicule/minicule_00.png',
    gallery: [
      'images/Minicule/minicule_00.png',
      'images/Minicule/minicule_01.png',
      'images/Minicule/minicule_02.png',
    ],
  },
  {
    id: 'docs-slayer',
    title: 'Docs Slayer',
    category: 'tools',
    role: 'Solo Founder & Full-Stack Engineer',
    description:
      'A tech-noir AI documentation engine purpose-built for game studios. It connects to a GitHub repository, uses Google Gemini to deep-scan source code, and auto-generates documentation that stays in sync with the codebase. Every AI-proposed change goes through a human-controlled diff review: approve with [SLAY], reject with [VOID]. Designed and built the entire product independently. Currently in closed beta.',
    stack: ['React 19', 'TypeScript', 'TanStack Start', 'Hono', 'Cloudflare Workers', 'Gemini AI', 'Firebase', 'Tiptap', 'Tailwind CSS', 'Vercel'],
    features: [
      'GITHUB-NATIVE REPO CONNECTION: Links to any public or private repository and reads real source code directly.',
      'AI DEEP-SCAN: Uses Google Gemini to analyze code structure, parse functions, classes, and call graphs, and generate accurate docs.',
      'DIFF REVIEW WORKFLOW: Every AI-generated change is presented as a diff for human approval — approve with [SLAY], reject with [VOID].',
      'RICH TEXT EDITOR: Full Markdown/WYSIWYG editing powered by Tiptap v3 with code blocks, tables, images, and highlights.',
      'PUBLIC DOC PAGES: Shareable documentation with SEO meta tags, ready to hand to collaborators or the public.',
      'EDGE-RENDERED SSR: Server-side rendering deployed globally on Vercel edge via TanStack Start with a Hono backend on Cloudflare Workers.',
      'FIREBASE AUTH: Full sign-up/login with Firebase Authentication and Firestore Security Rules for per-user data isolation.',
    ],
    links: [{ label: 'Visit Docs Slayer', url: 'https://docsslayer.vercel.app/' }],
    thumb: 'images/DocsSlayer/docs-slayer_01.png',
    gallery: [
      'images/DocsSlayer/docs-slayer_01.png',
      'images/DocsSlayer/docs-slayer_00.png',
      'images/DocsSlayer/docs-slayer_02.png',
      'images/DocsSlayer/docs-slayer_03.png',
    ],
  },
  {
    id: 'propermax',
    title: 'Propermax',
    category: 'tools',
    role: 'Lead Fullstack Developer',
    description:
      'A premium real estate web app built for European markets (Spain and Estonia). It features interactive 3D map views, routing, and satellite layer overlays, plus AI tools that analyze market prices and calculate property valuations — and an AI Agent chatbot that lets users control the app using natural language. Live at propermax.com.',
    stack: ['React', 'Three.js', 'Mapbox SDK', 'AI Chat Agent'],
    features: [
      '3D MAP ROTATION: Smooth Mapbox routing, satellite overlays, and structural mockups.',
      'AI CHAT AGENT CONTROLLER: Instruct the assistant to filter properties, search locations, or calculate fees.',
      'AUTOMATED VALUATION MODEL (AVM): Predicts property values based on historical area metrics.',
    ],
    links: [{ label: 'Visit Propermax', url: 'https://propermax.com/' }],
    thumb: 'images/Propermax/proper_03.png',
    gallery: [
      'images/Propermax/proper_00.png',
      'images/Propermax/proper_01.png',
      'images/Propermax/proper_02.png',
      'images/Propermax/proper_03.png',
      'images/Propermax/proper_04.png',
      'images/Propermax/proper_05.png',
      'images/Propermax/proper_06.png',
    ],
  },
  {
    id: 'bowhead-health',
    title: 'Bowhead Health',
    category: 'tools',
    role: 'Web Frontend Developer',
    description:
      'The official marketing website and precision medicine portal for Bowhead Health, a platform transforming clinical trial matching and drug development. Designed and developed the website and interface layouts, integrating a custom scroll-driven 3D animation system: as the user scrolls, a 3D cell and lab scene plays or scrubs dynamically. Fully optimized for performance and highly responsive.',
    stack: ['React', 'TailwindCSS', 'Node.js', 'GSAP', 'Scroll-Driven Animations'],
    features: [
      'BOWHEAD NAVIGATOR: Accelerates oncology trial matching using explainable, auditable AI updated daily with ClinicalTrials.gov data.',
      'SCROLL-DRIVEN 3D ANIMATION: A custom, highly optimized animation of molecular structures and 3D lab environments that plays forward or rewinds as you scroll.',
      'TRIALSTREAM REASONING MAP: Visualizes AI matching logic into an auditable map, tracing every decision to its source.',
      'PATIENT & TRIAL MATCHING: Dual matching modules with customizable ranking engines and feasibility visualizations.',
      'MAXIMUM PERFORMANCE & RESPONSIVENESS: Fully responsive portal optimized for fast static load times across all devices.',
    ],
    links: [{ label: 'Visit Website', url: 'https://bowheadhealth.com/' }],
    thumb: 'images/Bowhead/bowhead_00.png',
    gallery: [
      'images/Bowhead/bowhead_01.png',
      'images/Bowhead/bowhead_02.png',
      'images/Bowhead/bowhead_03.png',
      'images/Bowhead/bowhead_04.png',
      'images/Bowhead/bowhead_05.png',
      'images/Bowhead/bowhead_00.png',
    ],
  },
  {
    id: 'exact-agent',
    title: 'Exact Agent',
    category: 'tools',
    role: 'Agent Features Developer',
    description:
      'A no-code AI agent platform for enterprise workflow automation. As part of the engineering team, developed agent features and built a standout real-time 3D AI Presenter: a talking avatar that delivers continuously AI-generated space news like a live broadcast. Users can chat directly with the presenter and watch the 3D model respond with full lip-sync animation.',
    stack: ['Node.js', 'AWS KMS', 'React', 'AI Agent Core'],
    features: [
      '3D AI NEWS PRESENTER: A live-speaking 3D avatar delivering real-time AI-generated space news like a continuous broadcast, fully animated with lip-sync.',
      'INTERACTIVE CHAT WITH THE PRESENTER: Users send messages and receive responses from the AI anchor, with the 3D model visibly reacting and speaking.',
      'AUTONOMOUS AGENT FEATURES: Agent workflow features enabling autonomous task execution across connected tools and platforms.',
      'SECURE CREDENTIALS: Credentials stored within AWS key management with enterprise-grade encryption; full activity logs for transparency.',
      'INTEGRATIONS: Automate Google Spreadsheets and Gmail; monitor Discord, manage X, and send Telegram updates.',
    ],
    links: [{ label: 'Visit Exact Agent', url: 'https://exactagent.ai/' }],
    thumb: 'images/ExactAgent/exact_00.png',
    gallery: [
      'images/ExactAgent/exact_04.png',
      'images/ExactAgent/exact_01.png',
      'images/ExactAgent/exact_03.png',
      'images/ExactAgent/exact_02.png',
      'images/ExactAgent/exact_00.png',
    ],
  },
  {
    id: 'mental-chat-ai',
    title: 'Mental Chat AI',
    category: 'tools',
    role: 'Lead Programmer',
    description:
      'Mental Chat AI (Mila) is a conversational companion chatbot for mental health support, built in Unity for Mobile and Apple Vision Pro. It features interactive 3D avatars that react and animate dynamically as they chat, combining advanced AI conversational APIs with optimized 3D avatar rendering for an empathetic, immersive experience. Currently in closed beta.',
    stack: ['Unity', 'C#', 'iOS', 'visionOS', 'AI Chat API', '3D Avatars'],
    features: [
      '3D INTERACTIVE AVATARS: Real-time animated avatars that react dynamically to conversational content, providing empathetic visual feedback.',
      'SPATIAL COMPUTING SUPPORT: Full visionOS compatibility for Apple Vision Pro with optimized spatial UI and immersive interactions.',
      'CONVERSATIONAL AI API: Integrates advanced NLP models to sustain supportive, context-aware dialogue around mental wellness.',
      'OPTIMIZED MOBILE RENDERING: Highly optimized 3D pipelines that render fluidly on mobile without thermal or battery strain.',
      'CLOSED BETA: Actively tested in a closed beta to validate UX and conversational safety boundaries.',
    ],
    links: [],
    thumb: 'images/Mila/mila_00.png',
    gallery: ['images/Mila/mila_00.png', 'images/Mila/mila_01.png'],
  },
];

/* ── CAPABILITIES (the "sell" section) ── */
const CAPABILITIES = [
  {
    label: 'Enemy AI · State Machines · Behavior Trees',
    sub: 'Encounters that think. Multi-phase colossal bosses and reactive enemies driven by layered behavior trees and cinematic state machines.',
    media: 'images/BossCinematic_04.mp4',
    projectId: 'heaven-crawler',
  },
  {
    label: 'Procedural Animation',
    sub: 'No canned clips. Limbs, spines, and creatures that move procedurally in real time with full-body IK — wobbly, alive, and reactive to physics.',
    media: 'images/IK_hc.mp4',
    projectId: 'heaven-crawler',
  },
  {
    label: 'Core Gameplay & Gamefeel',
    sub: 'The invisible craft that makes a game feel good to play: responsive controls, weighty hit-stops, screenshake, and juice. I build the core gameplay systems and obsess over the feel of every single interaction.',
    media: 'images/MechaKO/mechako_03.mp4',
    projectId: 'mecha-ko',
  },
  {
    label: 'Custom Game Engine Development',
    sub: 'A 3D engine built from scratch in C++ — deferred PBR rendering, PhysX, VR, and live Nvidia Omniverse scene sync. Featured at GTC 2021.',
    media: 'images/Vivarium/vivarium_06.mp4',
    projectId: 'vivarium-engine',
  },
  {
    label: 'Multiplayer & Networked Systems',
    sub: 'Real-time networked gameplay — synced movement, combat, and projectiles across clients, from local co-op to online battles.',
    media: 'images/RamenAbyss/ramen_06.mp4',
    projectId: 'ramen-abyss',
  },
  {
    label: 'Bringing Any Idea to Life',
    sub: 'A chicken-shrimp that lives on your desktop, climbs your windows, and plays five minigames. If I can imagine it, I can ship it.',
    media: 'images/Chrimp/chricken_09.mp4',
    projectId: 'chicken-desktop-pet',
  },
  {
    label: 'Rapid Prototyping',
    sub: 'Full playable prototypes in under 24 hours — core loop, mechanics, and feel, fast. Ideas validated before they get expensive.',
    media: 'images/Skate&Slash/skate_01.mp4',
    projectId: 'skate-slash',
  },
  {
    label: 'Developer Tools',
    sub: 'Tools that pull their weight — like an AI engine that reads your entire codebase and writes living documentation that never goes stale.',
    media: 'images/DocsSlayer/docs-slayer_01.png',
    projectId: 'docs-slayer',
  },
  {
    label: 'Complex Software · Bio-Simulations · Rendering',
    sub: 'Full-stack platforms for cancer and biomedical research: high-fidelity cell and molecular biosimulations, real-time 3D scientific visualization, and data pipelines across live databases.',
    media: 'images/Doppelbio/doppel_04.png',
    projectId: 'doppelbio',
  },
  {
    label: 'AI Agent Development',
    sub: 'Production AI agent systems: multi-agent research swarms with a Lab Director orchestrator (Biogame AI), autonomous enterprise agents that operate your tools end-to-end (Exact Agent), biomedical knowledge-graph agents (Minicule), and conversational AI companions (Mental Chat AI).',
    group: [
      { url: 'images/Biogame/biogame_01.png', projectId: 'biogame' },
      { url: 'images/ExactAgent/exact_00.png', projectId: 'exact-agent' },
      { url: 'images/Minicule/minicule_00.png', projectId: 'minicule' },
    ],
  },
];

const ACHIEVEMENTS = [
  { icon: '🏆', title: 'Grand Prize · Supernova Game Devs Challenge 2025', sub: '$500,000 MXN prize · Heaven Crawler' },
  { icon: '🎮', title: 'Gamescom Showcase 2025', sub: 'Heaven Crawler selected for international showcase' },
  { icon: '🎯', title: 'Most Anticipated Game Nominee', sub: 'Game Effect Awards 2025' },
  { icon: '💻', title: 'Featured Developer · Nvidia GTC 2021', sub: 'Vivarium Engine showcased at Nvidia\'s developer conference' },
  { icon: '🎓', title: 'Technical Speaker · Jalisco Talent Land 2023', sub: 'Game dev talk to thousands of students' },
  { icon: '🌟', title: 'Official Indie Showcase · Mexican Entertainment System', sub: '2025–2026 official selection' },
];

const SKILLS = [
  { label: 'Languages', pills: ['C#', 'C++', 'Python', 'JavaScript', 'TypeScript', 'GLSL / HLSL'] },
  { label: 'Engines & Tools', pills: ['Unity', 'Unreal Engine', 'Custom Engines', 'React', 'Three.js', 'FastAPI', 'Node.js', 'Docker', 'Git', 'OpenGL'] },
  {
    label: 'Specialties',
    pills: ['Core Gameplay Engineering', 'Gamefeel & Polish', 'Systems Architecture', 'AI Behavior & Swarms', 'Procedural Animation', 'Multiplayer Systems', 'XR (Apple Vision Pro)', 'Graphics Rendering'],
  },
  { label: 'AI & Research', pills: ['LangGraph', 'Claude API', 'Gemini AI', 'Neo4j', 'ChromaDB', 'Multi-Agent Systems', 'RAG Pipelines'] },
];

const EXPERIENCE = [
  {
    period: '2019 – 2026',
    role: 'Founder, Developer & Tech Lead',
    org: 'Critical Slash · Independent Studio, Mexico',
    desc: 'Founded an independent studio to develop Heaven Crawler and various experimental indie titles. Solo-developed Heaven Crawler in its early stages for 6 years — from concept through a fully playable experience — before scaling it to a full-featured, commercial-ready game and partnering with Carbon Machina Studio.',
  },
  {
    period: '2021 – 2026',
    role: 'Lead Programmer & Co-Director',
    org: 'Carbon Machina Studio · Mexico',
    desc: 'Led a multidisciplinary engineering team programming core features, gameplay, advanced AI behavior, gamefeel, UI systems, and editor tools in Unity and Unreal. Co-directed the creative vision — characters, story, and gameplay — as the IP’s original creator. Ran Agile sprints, conducted code reviews, and maintained clean architecture as the team scaled. After transitioning to full-time work elsewhere, I stayed on as part-time co-director on nights and weekends out of loyalty to the team — and reinvested the game’s grand-prize winnings directly into hiring more engineers to accelerate development.',
  },
  {
    period: '2022 – 2023',
    role: 'Professor of Video Game Prototyping',
    org: 'Universidad de Artes Digitales · Guadalajara, Mexico',
    desc: 'Instructed advanced students on rapid prototyping techniques, core gameplay loops, production mechanics, and clean code architecture in Unity. Mentored students on scalable, maintainable C# codebases, OOP principles, and software design patterns.',
  },
  {
    period: '2022 – 2026',
    role: 'Software Engineer — AI, Full-Stack & Medical Systems',
    org: 'Bowhead Health & Good Place Games OÜ · Remote',
    desc: 'Architected and shipped complex full-stack software and production AI systems: multi-agent AI research platforms for biomedical and cancer research with real-time 3D Virtual Labs and agent swarms (Biogame AI, Doppelbio), knowledge-graph and biomedical database pipelines (Minicule), and enterprise AI agent infrastructure (Exact Agent) — built with React, TypeScript, Python, FastAPI, Node.js, LangGraph, and Claude API. Also developed biosimulations modeling cell behavior, growth patterns, and cancer progression, and websites with scroll-driven 3D animations. On the Unity side, built and shipped Mental Chat AI on iOS and Android (3D avatars with real-time lip-sync), a separate visionOS build for Apple Vision Pro, and a TikTok Live integration with real-time client-server communication.',
  },
];

/* ── HELPERS ── */

function isVideo(url) {
  return typeof url === 'string' && /\.mp4$/i.test(url);
}
function isYouTube(item) {
  return item && typeof item === 'object' && item.yt;
}
function getProject(id) {
  return PROJECTS.find(p => p.id === id);
}

/** Create a lazy video or img element (uses data-src). */
function mediaEl(url, alt = '', cls = '', eager = false) {
  if (isVideo(url)) {
    const v = document.createElement('video');
    v.className = cls;
    v.muted = true;
    v.loop = true;
    v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('muted', '');
    if (eager) {
      v.src = url;
      v.autoplay = true;
    } else {
      v.setAttribute('data-src', url);
    }
    return v;
  }
  const img = document.createElement('img');
  img.className = cls;
  img.alt = alt;
  if (eager) {
    img.src = url;
  } else {
    img.setAttribute('data-src', url);
    img.loading = 'lazy';
  }
  return img;
}

/** Lazy load observer — sets src from data-src when visible */
const lazyObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const src = el.getAttribute('data-src');
    if (!src) return;
    el.src = src;
    el.removeAttribute('data-src');
    if (el.tagName === 'VIDEO') {
      el.load();
      el.play().catch(() => {});
    }
    lazyObserver.unobserve(el);
  });
}, { rootMargin: '250px' });

function lazyLoad(el) {
  if (el.getAttribute && el.getAttribute('data-src')) lazyObserver.observe(el);
  return el;
}

/* ── NAV ── */

function initNav() {
  const nav = document.getElementById('nav');
  const hamburger = document.getElementById('navHamburger');
  const links = document.getElementById('navLinks');

  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    links.classList.toggle('open');
    document.body.style.overflow = links.classList.contains('open') ? 'hidden' : '';
  });

  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      links.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── HERO ROTATING BACKGROUND ── */

function initHero() {
  const layers = Array.from(document.querySelectorAll('.hero__video'));
  if (layers.length < 2) return;

  const playlist = [
    'images/CameraChange_01.mp4', // Heaven Crawler — camera
    'images/RamenAbyss/ramen_06.mp4',        // Ramen Abyss
    'images/Chrimp/chricken_09.mp4',         // Chrimp Desktop Pet
    'images/LAGS2026_GorillaCrawlers_01.mp4', // Heaven Crawler — combat
    'images/RamenAbyss/ramen_11.mp4',
    'images/LAGS2026_Intro_02.mp4',          // Heaven Crawler — intro
  ];

  let idx = 0;
  let active = 0;
  let switching = false;

  // Start the first clip. The other layer stays empty (no src) so nothing
  // can flash before its turn.
  layers[0].src = playlist[0];
  layers[0].classList.add('is-active');
  layers[0].play().catch(() => {});

  function goNext() {
    if (switching) return;
    switching = true;

    const current = layers[active];
    const other = active === 0 ? 1 : 0;
    const otherEl = layers[other];
    const nextIdx = (idx + 1) % playlist.length;

    // Keep the incoming layer hidden and load the correct clip fresh.
    otherEl.classList.remove('is-active');
    otherEl.src = playlist[nextIdx];

    const reveal = () => {
      otherEl.removeEventListener('loadeddata', reveal);
      try { otherEl.currentTime = 0; } catch {}
      otherEl.play().catch(() => {});
      // Only crossfade once the first frame of the correct clip is decoded,
      // so no stale/wrong frame is ever visible.
      requestAnimationFrame(() => {
        otherEl.classList.add('is-active');
        current.classList.remove('is-active');
      });
      active = other;
      idx = nextIdx;
      switching = false;
    };

    otherEl.addEventListener('loadeddata', reveal);
    otherEl.load();
  }

  layers.forEach(l => {
    l.addEventListener('ended', () => {
      if (l.classList.contains('is-active')) goNext();
    });
  });
}

/* ── CAPABILITIES SECTION ── */

function buildCapabilities() {
  const wrap = document.getElementById('capabilitiesList');
  if (!wrap) return;

  CAPABILITIES.forEach((cap, i) => {
    const row = document.createElement('div');
    row.className = 'cap-row fade-in' + (i % 2 === 1 ? ' cap-row--reverse' : '');

    // TEXT
    const text = document.createElement('div');
    text.className = 'cap-text';
    text.innerHTML = `
      <div class="cap-index">${String(i + 1).padStart(2, '0')}</div>
      <h3 class="cap-label">${cap.label}</h3>
      <p class="cap-sub">${cap.sub}</p>
    `;

    // MEDIA
    const mediaWrap = document.createElement('div');
    mediaWrap.className = 'cap-media-wrap';

    const expandIcon = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';

    if (cap.group) {
      const group = document.createElement('div');
      group.className = 'cap-group';
      cap.group.forEach(g => {
        const proj = getProject(g.projectId);
        const violet = proj && proj.category === 'tools';
        const gtags = proj ? proj.stack.slice(0, 2).map(t =>
          `<span class="tag${violet ? ' tag--violet' : ''}">${t}</span>`).join('') : '';
        const gcard = document.createElement('div');
        gcard.className = 'cap-group-card';
        const gm = mediaEl(g.url, proj ? proj.title : '', 'cap-group-media');
        lazyLoad(gm);
        gcard.appendChild(gm);
        gcard.insertAdjacentHTML('beforeend', `
          <div class="cap-media-hint cap-media-hint--icon">${expandIcon}</div>
          <div class="cap-media-gradient"></div>
          <div class="cap-group-overlay">
            <span class="cap-group-title">${proj ? proj.title : ''}</span>
            <div class="cap-media-tags">${gtags}</div>
          </div>
        `);
        gcard.addEventListener('click', () => proj && openModal(proj));
        group.appendChild(gcard);
      });
      mediaWrap.appendChild(group);
    } else {
      const proj = getProject(cap.projectId);
      const violet = proj && proj.category === 'tools';
      const tags = proj ? proj.stack.slice(0, 3).map(t =>
        `<span class="tag${violet ? ' tag--violet' : ''}">${t}</span>`).join('') : '';
      const card = document.createElement('div');
      card.className = 'cap-media';
      const m = mediaEl(cap.media, cap.label, 'cap-media-el', i === 0);
      lazyLoad(m);
      card.appendChild(m);
      card.insertAdjacentHTML('beforeend', `
        <div class="cap-media-hint">${expandIcon}<span>Click to explore</span></div>
        <div class="cap-media-gradient"></div>
        <div class="cap-media-info">
          <div class="cap-media-title">${proj ? proj.title : ''}</div>
          <div class="cap-media-tags">${tags}</div>
        </div>
      `);
      card.addEventListener('click', () => proj && openModal(proj));
      mediaWrap.appendChild(card);
    }

    row.appendChild(text);
    row.appendChild(mediaWrap);
    wrap.appendChild(row);
  });
}

/* ── ALL PROJECTS GRID ── */

function buildProjects() {
  const grid = document.getElementById('projectsGrid');
  const tabs = document.getElementById('filterTabs');
  let activeFilter = 'all';

  function render() {
    grid.innerHTML = '';
    const list = activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter(p => p.category === activeFilter);

    list.forEach((proj, i) => {
      const card = document.createElement('div');
      card.className = 'proj-card fade-in';
      card.style.transitionDelay = `${(i % 3) * 0.06}s`;
      card.setAttribute('data-category', proj.category);

      const media = mediaEl(proj.thumb, proj.title, 'proj-card__media');
      lazyLoad(media);
      card.appendChild(media);

      if (isVideo(proj.thumb)) {
        card.addEventListener('mouseenter', () => {
          if (media.getAttribute('data-src')) {
            media.src = media.getAttribute('data-src');
            media.removeAttribute('data-src');
            media.load();
          }
          media.play().catch(() => {});
        });
        card.addEventListener('mouseleave', () => {
          media.pause();
          try { media.currentTime = 0; } catch {}
        });
      }

      const catLabel = proj.category === 'games' ? 'Game' : 'Tool / Engine';
      const tagsHTML = proj.stack.slice(0, 3).map(t =>
        `<span class="tag${proj.category === 'tools' ? ' tag--violet' : ''}">${t}</span>`
      ).join('');

      card.insertAdjacentHTML('beforeend', `
        <div class="proj-card__overlay"></div>
        <div class="proj-card__body">
          <div class="proj-card__category">${catLabel}</div>
          <div class="proj-card__title">${proj.title}</div>
          <div class="proj-card__role">${proj.role}</div>
          <div class="proj-card__tags">${tagsHTML}</div>
        </div>
      `);

      card.addEventListener('click', () => openModal(proj));
      grid.appendChild(card);
      requestAnimationFrame(() => fadeObserver.observe(card));
    });
  }

  tabs.addEventListener('click', e => {
    const tab = e.target.closest('.filter-tab');
    if (!tab) return;
    tabs.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    activeFilter = tab.dataset.filter;
    render();
  });

  render();
}

/* ── PROJECT MODAL ── */

const modal = document.getElementById('projectModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const modalMainMedia = document.getElementById('modalMainMedia');
const modalThumbs = document.getElementById('modalThumbs');
const modalInfo = document.getElementById('modalInfo');
const modalPanel = modal ? modal.querySelector('.modal__panel') : null;

let activeModalVideo = null;

function openModal(proj) {
  modalMainMedia.innerHTML = '';
  modalThumbs.innerHTML = '';
  activeModalVideo = null;

  function showMedia(item, thumbEl) {
    modalMainMedia.innerHTML = '';
    if (activeModalVideo) {
      try { activeModalVideo.pause(); } catch {}
      activeModalVideo = null;
    }

    if (isYouTube(item)) {
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${item.yt}?autoplay=1&rel=0`;
      iframe.title = item.title || proj.title;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.border = '0';
      modalMainMedia.appendChild(iframe);
    } else if (isVideo(item)) {
      const v = document.createElement('video');
      v.src = item;
      v.autoplay = true; v.muted = true; v.loop = true;
      v.playsInline = true; v.controls = true;
      v.setAttribute('playsinline', '');
      v.style.width = '100%'; v.style.height = '100%'; v.style.objectFit = 'contain';
      modalMainMedia.appendChild(v);
      v.play().catch(() => {});
      activeModalVideo = v;
    } else {
      const img = document.createElement('img');
      img.src = item;
      img.alt = proj.title;
      img.style.width = '100%'; img.style.height = '100%'; img.style.objectFit = 'contain';
      modalMainMedia.appendChild(img);
    }

    modalThumbs.querySelectorAll('.modal__thumb').forEach(t => t.classList.remove('active'));
    if (thumbEl) thumbEl.classList.add('active');
  }

  proj.gallery.forEach((item, i) => {
    const thumb = document.createElement('div');
    thumb.className = 'modal__thumb';
    if (i === 0) thumb.classList.add('active');

    if (isYouTube(item)) {
      const ti = document.createElement('img');
      ti.src = `https://img.youtube.com/vi/${item.yt}/mqdefault.jpg`;
      ti.alt = item.title || '';
      thumb.appendChild(ti);
      thumb.insertAdjacentHTML('beforeend', '<span class="modal__thumb-yt">▶</span>');
    } else if (isVideo(item)) {
      const tv = document.createElement('video');
      tv.src = item; tv.muted = true; tv.loop = true; tv.playsInline = true;
      tv.setAttribute('playsinline', '');
      thumb.appendChild(tv);
      thumb.addEventListener('mouseenter', () => tv.play().catch(() => {}));
      thumb.addEventListener('mouseleave', () => { tv.pause(); try { tv.currentTime = 0; } catch {} });
    } else {
      const ti = document.createElement('img');
      ti.src = item; ti.alt = '';
      thumb.appendChild(ti);
    }

    thumb.addEventListener('click', () => showMedia(item, thumb));
    modalThumbs.appendChild(thumb);
  });

  if (proj.gallery.length > 0) {
    showMedia(proj.gallery[0], modalThumbs.querySelector('.modal__thumb'));
  }

  const catLabel = proj.category === 'games' ? 'Game' : 'Tool / Engine';
  const stackHTML = proj.stack.map(t => `<span class="tag">${t}</span>`).join('');
  const featuresHTML = proj.features.map(f => `<li>${f}</li>`).join('');
  const linksHTML = proj.links.map(l =>
    `<a href="${l.url}" target="_blank" rel="noopener" class="modal__link">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
      ${l.label}
    </a>`
  ).join('');

  modalInfo.innerHTML = `
    <div class="modal__cat">${catLabel}</div>
    <div class="modal__title">${proj.title}</div>
    <div class="modal__role-badge">${proj.role}</div>
    <p class="modal__desc">${proj.description}</p>
    <div class="modal__stack-title">Tech Stack</div>
    <div class="modal__stack">${stackHTML}</div>
    ${proj.features.length ? `
    <div class="modal__features">
      <div class="modal__features-title">Key Features</div>
      <ul>${featuresHTML}</ul>
    </div>` : ''}
    ${linksHTML ? `<div class="modal__links">${linksHTML}</div>` : ''}
  `;

  if (modalPanel) modalPanel.scrollTop = 0;
  document.body.style.overflow = 'hidden';
  modal.classList.add('open');
}

function closeModal() {
  if (activeModalVideo) {
    try { activeModalVideo.pause(); } catch {}
    activeModalVideo = null;
  }
  modal.classList.remove('open');
  document.body.style.overflow = '';
  setTimeout(() => {
    modalMainMedia.innerHTML = '';
    modalThumbs.innerHTML = '';
    modalInfo.innerHTML = '';
  }, 400);
}

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* ── ABOUT ACHIEVEMENTS ── */

function buildAchievements() {
  const el = document.getElementById('achievements');
  el.innerHTML = ACHIEVEMENTS.map(a => `
    <div class="achievement-card fade-in">
      <div class="achievement-card__icon">${a.icon}</div>
      <div class="achievement-card__body">
        <div class="achievement-card__title">${a.title}</div>
        <div class="achievement-card__sub">${a.sub}</div>
      </div>
    </div>
  `).join('');
  el.querySelectorAll('.fade-in').forEach(x => fadeObserver.observe(x));
}

/* ── SKILLS ── */

function buildSkills() {
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((cat, i) => `
    <div class="skill-card fade-in" style="transition-delay:${i * 0.07}s">
      <div class="skill-card__label">${cat.label}</div>
      <div class="skill-card__pills">
        ${cat.pills.map(p => `<span class="skill-pill">${p}</span>`).join('')}
      </div>
    </div>
  `).join('');
  grid.querySelectorAll('.fade-in').forEach(x => fadeObserver.observe(x));
}

/* ── EXPERIENCE TIMELINE ── */

function buildTimeline() {
  const el = document.getElementById('timeline');
  el.innerHTML = EXPERIENCE.map((item) => `
    <div class="timeline-item">
      <div class="timeline-item__period">${item.period}</div>
      <div class="timeline-item__role">${item.role}</div>
      <div class="timeline-item__org">${item.org}</div>
      <div class="timeline-item__desc">${item.desc}</div>
    </div>
  `).join('');
}

/* ── INTERSECTION OBSERVER FOR FADE-IN ── */

const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      fadeObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '-40px 0px', threshold: 0.08 });

function initFadeObserver() {
  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
}

/* ── INSTAGRAM REELS ──
   Paste public Instagram Reel/post URLs below (e.g. https://www.instagram.com/reel/XXXXXXX/).
   The section auto-hides while this list is empty. */
const REELS = [
  'https://www.instagram.com/reel/DTFBA02k7Y0/',
  'https://www.instagram.com/reel/DTNUCdWk44P/',
  'https://www.instagram.com/reel/DTRLiJmE7Hp/',
];

function buildInstagram() {
  const section = document.getElementById('instagram');
  const grid = document.getElementById('instagramGrid');
  if (!section || !grid) return;
  if (!REELS.length) { section.style.display = 'none'; return; }
  grid.innerHTML = REELS.map(url => {
    const clean = url.split('?')[0].replace(/\/+$/, '');
    return `<div class="ig-embed"><iframe src="${clean}/embed" loading="lazy" frameborder="0" scrolling="no" allowtransparency="true" allowfullscreen></iframe></div>`;
  }).join('');
  initInstagramCarousel();
}

/* Coverflow carousel: center reel full-size, sides smaller; draggable slide bar. */
function initInstagramCarousel() {
  const grid = document.getElementById('instagramGrid');
  const slider = document.getElementById('igSlider');
  if (!grid) return;
  const items = Array.from(grid.querySelectorAll('.ig-embed'));
  if (!items.length) return;

  function setPad() {
    const p = Math.max((grid.clientWidth - items[0].clientWidth) / 2, 12);
    grid.style.paddingLeft = grid.style.paddingRight = p + 'px';
  }

  let ticking = false;
  function update() {
    ticking = false;
    const gridRect = grid.getBoundingClientRect();
    const centerX = gridRect.left + gridRect.width / 2;
    let closest = null, closestDist = Infinity;
    items.forEach(it => {
      const r = it.getBoundingClientRect();
      const d = Math.abs((r.left + r.width / 2) - centerX);
      if (d < closestDist) { closestDist = d; closest = it; }
    });
    items.forEach(it => it.classList.toggle('is-center', it === closest));
    const max = grid.scrollWidth - grid.clientWidth;
    if (slider && document.activeElement !== slider) {
      slider.value = max > 0 ? (grid.scrollLeft / max) * 100 : 0;
    }
  }
  function onScroll() {
    if (!ticking) { ticking = true; requestAnimationFrame(update); }
  }

  let userInteracted = false;
  function centerMiddle() {
    if (userInteracted) return;
    setPad();
    const mid = items[Math.floor(items.length / 2)];
    const gridRect = grid.getBoundingClientRect();
    const midRect = mid.getBoundingClientRect();
    grid.scrollLeft += (midRect.left + midRect.width / 2) - (gridRect.left + gridRect.width / 2);
    update();
  }

  function currentIndex() {
    const i = items.findIndex(it => it.classList.contains('is-center'));
    return i < 0 ? Math.floor(items.length / 2) : i;
  }
  function scrollToIndex(i) {
    const it = items[Math.max(0, Math.min(items.length - 1, i))];
    const gridRect = grid.getBoundingClientRect();
    const itRect = it.getBoundingClientRect();
    grid.scrollTo({
      left: grid.scrollLeft + (itRect.left + itRect.width / 2) - (gridRect.left + gridRect.width / 2),
      behavior: 'smooth',
    });
  }

  const prevBtn = document.getElementById('igPrev');
  const nextBtn = document.getElementById('igNext');
  if (prevBtn) prevBtn.addEventListener('click', () => { userInteracted = true; scrollToIndex(currentIndex() - 1); });
  if (nextBtn) nextBtn.addEventListener('click', () => { userInteracted = true; scrollToIndex(currentIndex() + 1); });

  ['pointerdown', 'touchstart', 'wheel', 'keydown'].forEach(ev =>
    grid.addEventListener(ev, () => { userInteracted = true; }, { passive: true }));

  grid.addEventListener('scroll', onScroll, { passive: true });
  if (slider) {
    slider.addEventListener('input', () => {
      userInteracted = true;
      const max = grid.scrollWidth - grid.clientWidth;
      grid.scrollLeft = (slider.value / 100) * max;
    });
  }
  window.addEventListener('resize', () => { setPad(); update(); });
  window.addEventListener('load', centerMiddle);

  // Instagram iframes load async and can scroll the row; re-assert center.
  grid.querySelectorAll('iframe').forEach(f =>
    f.addEventListener('load', () => setTimeout(centerMiddle, 60)));
  [0, 250, 700, 1400].forEach(t => setTimeout(centerMiddle, t));
}

/* ── VIDEO PLAYBACK MANAGER ──
   Pauses autoplaying videos when they scroll out of view so the browser
   isn't decoding a dozen clips at once (major scroll-jank source). */

function initVideoPlayback() {
  const managed = document.querySelectorAll('.mick-photo video, .cap-media-el, .hero__video');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const v = entry.target;
      if (entry.isIntersecting) {
        // For the hero, only play the currently visible (active) layer.
        if (v.classList.contains('hero__video') && !v.classList.contains('is-active')) return;
        if (v.src || v.currentSrc) v.play().catch(() => {});
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { rootMargin: '150px 0px', threshold: 0.01 });
  managed.forEach(v => io.observe(v));
}

/* ── SMOOTH SCROLL ── */

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    });
  });
}

/* ── INIT ── */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHero();
  buildCapabilities();
  buildProjects();
  buildAchievements();
  buildSkills();
  buildTimeline();
  buildInstagram();
  initFadeObserver();
  initSmoothScroll();
  initVideoPlayback();
});
