"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import Image from "next/image";

type IconName =
  | "water"
  | "leaf"
  | "road"
  | "heart"
  | "book"
  | "store"
  | "eye"
  | "people"
  | "vote"
  | "phone"
  | "arrow"
  | "check"
  | "download"
  | "menu"
  | "close"
  | "home"
  | "external";

function Icon({ name, size = 22 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  const paths: Record<IconName, React.ReactNode> = {
    water: <><path d="M12 3S6 9.2 6 14a6 6 0 0 0 12 0c0-4.8-6-11-6-11Z"/><path d="M9 15.2c.4 1.4 1.4 2.2 3 2.5"/></>,
    leaf: <><path d="M20 4c-8 0-14 3.4-14 9.5A5.5 5.5 0 0 0 11.5 19C17.6 19 20 12 20 4Z"/><path d="M4 21c2.2-5 6.2-8.5 12-11"/></>,
    road: <><path d="m7 21 3-18"/><path d="m17 21-3-18"/><path d="M12 5v3M12 12v3M12 19v2"/></>,
    heart: <><path d="M20.8 5.7a5.2 5.2 0 0 0-7.4 0L12 7.1l-1.4-1.4a5.2 5.2 0 1 0-7.4 7.4L12 22l8.8-8.9a5.2 5.2 0 0 0 0-7.4Z"/><path d="M8 12h2l1-2 2 5 1-3h2"/></>,
    book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></>,
    store: <><path d="M3 10h18l-2-6H5l-2 6Z"/><path d="M5 10v10h14V10M9 20v-6h6v6"/><path d="M3 10c0 1.3 1 2 2 2s2-.7 2-2c0 1.3 1 2 2 2s2-.7 2-2c0 1.3 1 2 2 2s2-.7 2-2c0 1.3 1 2 2 2s2-.7 2-2c0 1.3 1 2 2 2s2-.7 2-2"/></>,
    eye: <><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/></>,
    people: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></>,
    vote: <><path d="m9 11 2 2 4-5"/><path d="M5 3h14v6l2 3v9H3v-9l2-3V3Z"/><path d="M3 13h18"/></>,
    phone: <><rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/></>,
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16"/></>,
    close: <><path d="m6 6 12 12M18 6 6 18"/></>,
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v11h14V10M9 21v-7h6v7"/></>,
    external: <><path d="M15 3h6v6M10 14 21 3"/><path d="M18 13v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const WHATSAPP_URL = `https://wa.me/51922282679?text=${encodeURIComponent("Hola Arturo, quiero participar como personero del candidato o voluntario en Mochumí.")}`;
const OFFICIAL_FORM_URL = "https://forms.office.com/Pages/ResponsePage.aspx?id=DQSIkWdsW0yxEjajBLZtrQAAAAAAAAAAAANAAqIKWlRUNDhNNUU1Q1ZJVzBWU09COE4zSlo4NVRDNy4u";
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61591472536087";
const ALLIANCE_PDF_URL = "/docs/8111093-alianza-electoral-nacional-renovacion-popular-peru-nacional.pdf";

const proposals = [
  {
    id: "agua",
    n: "01",
    icon: "water" as IconName,
    title: "Agua segura y saneamiento",
    lead: "Del reparto de emergencia a un sistema que informa, previene y cumple.",
    diagnosis:
      "En junio de 2025 la municipalidad declaró emergencia por déficit hídrico. La reactivación del pozo Tepo N.° 1 recuperó progresivamente el servicio para más de 4 mil vecinos, pero la vulnerabilidad continúa.",
    actions: [
      "Mapa público de pozos, redes, cortes, calidad y proyectos por caserío.",
      "Plan de continuidad con cisternas, reservorios y protocolo de respuesta para escuelas y centros poblados.",
      "Destrabe técnico del proyecto de San Antonio y convenios con OTASS, GORE y Vivienda.",
    ],
    metrics: ["Diagnóstico de 100% de sectores en 100 días", "Reporte mensual de continuidad y calidad", "Alertas atendidas en menos de 24 h"],
    source: "Municipalidad de Mochumí + OTASS",
    sourceUrl: "https://www.gob.pe/institucion/munimochumi/normas-legales/7401635-279-2025-mdm-a",
  },
  {
    id: "agro",
    n: "02",
    icon: "leaf" as IconName,
    title: "Agro, riego y drenaje",
    lead: "Cuidar el agua productiva y hacer que la maquinaria llegue con reglas claras.",
    diagnosis:
      "Mochumí es territorio mayoritariamente rural y agrícola. En 2026 el PEOT y la municipalidad acordaron recuperar y mantener el drenaje agrícola, una base concreta para avanzar.",
    actions: [
      "Calendario público de maquinaria y mantenimiento de drenes, canales y caminos de cosecha.",
      "Mesa técnica del agua con juntas de usuarios y productores para priorizar puntos críticos.",
      "Asistencia para asociatividad, compras públicas y valor agregado en legumbres y cultivos locales.",
    ],
    metrics: ["100% de drenes principales georreferenciados", "Dos campañas preventivas por año", "Bitácora abierta de horas-máquina"],
    source: "PEOT, junio de 2026",
    sourceUrl: "https://www.gob.pe/institucion/peot/noticias/1412322-peot-firma-acuerdo-con-municipalidad-de-mochumi-para-proteger-sistemas-de-drenaje-agricola",
  },
  {
    id: "caminos",
    n: "03",
    icon: "road" as IconName,
    title: "Caminos y Mochumí conectado",
    lead: "Prioridad a las rutas que mueven personas, cosechas, salud y educación.",
    diagnosis:
      "El Censo 2017 registró 10,651 habitantes rurales de un total de 18,401. La dispersión territorial obliga a planificar conectividad por rutas de servicio, no por anuncios aislados.",
    actions: [
      "Mapa vecinal de puntos críticos en vías, puentes, alcantarillas y paraderos.",
      "Mantenimiento por corredores: escuela–salud–mercado–chacra, con programación estacional.",
      "Puntos municipales de conectividad digital y capacitación en centros poblados priorizados.",
    ],
    metrics: ["Inventario vial en 120 días", "Cronograma trimestral publicado", "Avance con fotos y geolocalización"],
    source: "INEI, Censos 2017",
    sourceUrl: "https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1560/14TOMO_01.pdf",
  },
  {
    id: "salud",
    n: "04",
    icon: "heart" as IconName,
    title: "Salud y cuidados cerca",
    lead: "Municipio articulador: prevención que llega al caserío y acompaña a la familia.",
    diagnosis:
      "La ruralidad hace costoso llegar a servicios preventivos. El municipio no reemplaza al sector Salud, pero sí puede organizar territorio, movilidad, información y convenios.",
    actions: [
      "Brigadas coordinadas para anemia, salud materna, adulto mayor y enfermedades crónicas.",
      "Ruta de transporte solidario para citas prioritarias y campañas descentralizadas.",
      "DEMUNA y red comunitaria contra violencia, abandono y consumo problemático.",
    ],
    metrics: ["Agenda trimestral por centro poblado", "Tablero anónimo de atenciones", "Derivaciones con seguimiento"],
    source: "Competencias municipales y articulación territorial",
    sourceUrl: "https://www.gob.pe/institucion/munimochumi/colecciones/18418-normas-y-documentos-legales-de-la-municipalidad-distrital-de-mochumi",
  },
  {
    id: "educacion",
    n: "05",
    icon: "book" as IconName,
    title: "Educación y juventud con futuro",
    lead: "Lectura, habilidades digitales y oportunidades para quedarse y crecer.",
    diagnosis:
      "En 2017, 1,047 personas de 14 a más años declararon no saber leer ni escribir; la incidencia era mayor entre mujeres y en el área rural.",
    actions: [
      "Mochumí Aprende: refuerzo lector, alfabetización digital y acompañamiento escolar.",
      "Convenios para certificación técnica en agro, comercio, turismo y servicios digitales.",
      "Fondo concursable transparente para iniciativas juveniles, culturales y deportivas.",
    ],
    metrics: ["Línea base actualizada el primer año", "Sedes y horarios por sector", "Resultados semestrales publicados"],
    source: "INEI, Censos 2017 – Tomo III",
    sourceUrl: "https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1560/14TOMO_03.pdf",
  },
  {
    id: "economia",
    n: "06",
    icon: "store" as IconName,
    title: "Economía local, cultura y turismo",
    lead: "Que las fiestas, la gastronomía y la producción local generen ventas todo el año.",
    diagnosis:
      "Mochumí tiene producción agraria y un calendario cultural reconocible. Falta convertir esa identidad en circuitos, servicios y vitrinas comerciales sostenibles.",
    actions: [
      "Marca Mochumí y catálogo digital de productores, artesanos, cocineras y emprendedores.",
      "Ruta anual de ferias vinculada a las festividades locales, con condiciones claras de acceso.",
      "Licencias y orientación al emprendedor con trámites simples y seguimiento en línea.",
    ],
    metrics: ["Directorio abierto y actualizado", "Calendario anual de ferias", "Plazos de trámite publicados"],
    source: "INEI, Directorio Nacional de Festividades",
    sourceUrl: "https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1107/Libro.pdf",
  },
  {
    id: "gestion",
    n: "07",
    icon: "eye" as IconName,
    title: "Municipio abierto y que rinde cuentas",
    lead: "Cada obra con costo, responsable, plazo, fotografía y estado visible desde el celular.",
    diagnosis:
      "La participación vecinal ya forma parte del presupuesto participativo. El siguiente paso es mostrar qué se priorizó, cuánto avanza y por qué una decisión cambia.",
    actions: [
      "Mochumí en Claro: tablero de obras, compras, maquinaria y compromisos de 100 días.",
      "Audiencias por sector con actas, acuerdos y respuesta municipal trazable.",
      "Canal de alertas con código de seguimiento, plazos y protección del denunciante.",
    ],
    metrics: ["100% de obras activas en el tablero", "Reporte de avance cada 30 días", "Respuesta inicial en 5 días hábiles"],
    source: "Presupuesto participativo municipal 2026",
    sourceUrl: "https://www.gob.pe/institucion/munimochumi/normas-legales/6850404-04-2025-mdm-cm",
  },
];

const sources = [
  { label: "Nombramiento oficial de Arturo Santisteban como gerente municipal (2024)", url: "https://www.gob.pe/institucion/munimochumi/normas-legales/6048147-02-2024-mdm-a", tag: "Trayectoria" },
  { label: "Listado oficial de primarias ERM 2026: Renovación Popular – Mochumí (corte 08/05/2026)", url: ALLIANCE_PDF_URL, tag: "PDF · Primarias" },
  { label: "Emergencia por déficit hídrico en Mochumí (2025)", url: "https://www.gob.pe/institucion/munimochumi/normas-legales/7401635-279-2025-mdm-a", tag: "Agua" },
  { label: "Reactivación del pozo Tepo N.° 1 para más de 4 mil pobladores", url: "https://www.gob.pe/institucion/otass/noticias/1193006-mochumi-recuperan-servicio-progresivo-de-agua-potable-con-activacion-de-pozo-en-beneficio-de-mas-de-4-mil-pobladores", tag: "Agua" },
  { label: "Acuerdo PEOT–Mochumí para proteger el drenaje agrícola (2026)", url: "https://www.gob.pe/institucion/peot/noticias/1412322-peot-firma-acuerdo-con-municipalidad-de-mochumi-para-proteger-sistemas-de-drenaje-agricola", tag: "Agro" },
  { label: "Censos Nacionales 2017: Lambayeque, Tomos I y III", url: "https://www.inei.gob.pe/media/MenuRecursivo/publicaciones_digitales/Est/Lib1560/14TOMO_01.pdf", tag: "Población" },
  { label: "Elecciones Regionales y Municipales 2026 – ONPE", url: "https://www.gob.pe/institucion/onpe/campa%C3%B1as/143000-elecciones-regionales-y-municipales-2026", tag: "Elecciones" },
  { label: "Consulta de candidatos y planes – Plataforma Electoral JNE", url: "https://plataformaelectoral.jne.gob.pe/", tag: "Verificación" },
];

type DeferredPrompt = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
};

export function CampaignSite() {
  const [activeProposal, setActiveProposal] = useState("agua");
  const [menuOpen, setMenuOpen] = useState(false);
  const [installOpen, setInstallOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<DeferredPrompt | null>(null);
  const [formState, setFormState] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formMessage, setFormMessage] = useState("");

  const active = useMemo(
    () => proposals.find((proposal) => proposal.id === activeProposal) ?? proposals[0],
    [activeProposal]
  );

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }
    const handleInstall = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as DeferredPrompt);
    };
    window.addEventListener("beforeinstallprompt", handleInstall);
    return () => window.removeEventListener("beforeinstallprompt", handleInstall);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      await deferredPrompt.prompt();
      const choice = await deferredPrompt.userChoice;
      if (choice.outcome === "accepted") setDeferredPrompt(null);
      return;
    }
    setInstallOpen(true);
  };

  const submitParticipation = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormState("sending");
    setFormMessage("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/participations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, consent: formData.get("consent") === "on" }),
      });
      const result = (await response.json()) as { message?: string; error?: string };
      if (!response.ok) throw new Error(result.error ?? "No pudimos registrar tus datos.");
      setFormState("success");
      setFormMessage(result.message ?? "Registro recibido. El equipo se pondrá en contacto contigo.");
      form.reset();
    } catch (error) {
      setFormState("error");
      setFormMessage(error instanceof Error ? error.message : "Ocurrió un error. Intenta nuevamente.");
    }
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Arturo Santisteban, inicio">
          <span className="brand-mark">R</span>
          <span className="brand-copy"><b>ARTURO</b><small>MOCHUMÍ 2027–2030</small></span>
        </a>
        <nav className={menuOpen ? "desktop-nav open" : "desktop-nav"} aria-label="Navegación principal">
          <button onClick={() => scrollTo("propuestas")}>Propuestas</button>
          <button onClick={() => scrollTo("primeros-100")}>100 días</button>
          <button onClick={() => scrollTo("participa")}>Participa</button>
          <button onClick={() => scrollTo("verifica")}>Verifica</button>
        </nav>
        <a className="header-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="phone" size={17}/> <span>WhatsApp</span><b>922 282 679</b></a>
        <button className="install-mini" onClick={handleInstall}><Icon name="download" size={18}/> Instalar</button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}>
          <Icon name={menuOpen ? "close" : "menu"}/>
        </button>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span></span> Mochumí merece avanzar</div>
            <h1>Trabajo que se ve.<br/><em>Gobierno que se mide.</em></h1>
            <p className="hero-lead">Una propuesta municipal construida desde las urgencias reales del distrito: agua, agro, caminos, oportunidades y cuentas claras.</p>
            <div className="hero-actions">
              <button className="button primary" onClick={() => scrollTo("propuestas")}>Conoce las propuestas <Icon name="arrow"/></button>
              <button className="button secondary" onClick={() => scrollTo("participa")}><Icon name="people"/> Quiero participar</button>
            </div>
            <a className="hero-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="phone" size={17}/> Habla por WhatsApp <b>922 282 679</b></a>
            <div className="election-date">
              <div><strong>04</strong><span>OCT<br/>2026</span></div>
              <p>Elecciones Regionales y Municipales<br/><a href="https://www.gob.pe/institucion/onpe/campa%C3%B1as/143000-elecciones-regionales-y-municipales-2026" target="_blank" rel="noreferrer">Fecha oficial ONPE <Icon name="external" size={14}/></a></p>
            </div>
          </div>
          <div className="hero-visual">
            <div className="sun-disc"></div>
            <Image
              src="/arturo-campaign.png"
              alt="Arturo Santisteban, propuesta para la alcaldía distrital de Mochumí"
              fill
              priority
              sizes="(max-width: 820px) 100vw, 48vw"
            />
            <div className="candidate-card">
              <span>Candidato por Renovación Popular Perú</span>
              <strong>CPC Arturo Santisteban Santisteban</strong>
              <p>Alcaldía distrital de Mochumí, Lambayeque. Experiencia como gerente municipal documentada.</p>
              <a href="https://www.gob.pe/institucion/munimochumi/normas-legales/6048147-02-2024-mdm-a" target="_blank" rel="noreferrer">Ver resolución oficial <Icon name="external" size={14}/></a>
            </div>
          </div>
        </div>
        <div className="hero-ticker" aria-label="Principios de la propuesta">
          <span>HONESTIDAD</span><i></i><span>TRABAJO DURO</span><i></i><span>RESULTADOS MEDIBLES</span><i></i><span>MOCHUMÍ PRIMERO</span>
        </div>
      </section>

      <section className="truth-strip" aria-label="Nota de transparencia electoral">
        <Icon name="eye"/>
        <div><strong>Identidad electoral informada por la organización.</strong><p>Arturo Santisteban Santisteban es presentado como candidato de Renovación Popular para Mochumí. La ficha vigente y el plan oficial deben confirmarse en el JNE.</p></div>
        <a href="https://plataformaelectoral.jne.gob.pe/" target="_blank" rel="noreferrer">Consultar JNE <Icon name="external" size={16}/></a>
      </section>

      <section className="candidate-note" aria-label="Nota sobre el documento electoral">
        <div><span className="section-kicker">Documento primario</span><strong>La lista oficial de primarias tiene corte 08/05/2026.</strong><p>En la ficha de Mochumí el cargo de alcalde aparece como “designado”; por eso este PDF se muestra como antecedente verificable y no reemplaza la consulta vigente del JNE.</p></div>
        <a className="text-link" href={ALLIANCE_PDF_URL} target="_blank" rel="noreferrer">Abrir PDF oficial <Icon name="external" size={16}/></a>
      </section>

      <section className="facts section-pad" id="diagnostico">
        <div className="section-kicker">Mochumí en datos</div>
        <div className="section-heading split-heading">
          <h2>Primero entender.<br/><span>Luego prometer.</span></h2>
          <p>Las prioridades nacen de cifras y hechos oficiales. Cada dato tiene fuente abierta para que cualquier vecino pueda revisarlo.</p>
        </div>
        <div className="fact-grid">
          <article className="fact-card featured"><span className="fact-source">INEI · 2017</span><strong>57.9%</strong><h3>de la población vivía en el área rural</h3><p>10,651 de 18,401 habitantes. La gestión debe llegar a los caseríos, no quedarse en la capital distrital.</p></article>
          <article className="fact-card"><span className="fact-icon"><Icon name="water"/></span><span className="fact-source">MDM · 2025</span><strong>Emergencia</strong><h3>por déficit hídrico</h3><p>La municipalidad declaró peligro inminente de desabastecimiento de agua potable.</p></article>
          <article className="fact-card"><span className="fact-icon"><Icon name="leaf"/></span><span className="fact-source">PEOT · 2026</span><strong>Drenaje</strong><h3>agrícola en recuperación</h3><p>Existe un acuerdo vigente para proteger y mantener la infraestructura de drenaje.</p></article>
          <article className="fact-card dark"><span className="fact-source">INEI · 2017</span><strong>1,047</strong><h3>personas de 14+ no sabían leer ni escribir</h3><p>La incidencia registrada era mayor entre mujeres y en el área rural.</p></article>
        </div>
      </section>

      <section className="proposals section-pad" id="propuestas">
        <div className="section-kicker light">Plan de gobierno ciudadano</div>
        <div className="section-heading split-heading light">
          <h2>Siete frentes.<br/><span>Una sola meta.</span></h2>
          <p>Resolver lo urgente mientras se construye capacidad municipal. Propuestas concretas, responsables y abiertas a mejora vecinal.</p>
        </div>
        <div className="proposal-shell">
          <div className="proposal-tabs" role="tablist" aria-label="Ejes de propuesta">
            {proposals.map((proposal) => (
              <button key={proposal.id} className={activeProposal === proposal.id ? "active" : ""} onClick={() => setActiveProposal(proposal.id)} role="tab" aria-selected={activeProposal === proposal.id}>
                <span>{proposal.n}</span><Icon name={proposal.icon}/><b>{proposal.title}</b>
              </button>
            ))}
          </div>
          <article className="proposal-detail" role="tabpanel" key={active.id}>
            <div className="proposal-topline"><span>EJE {active.n}</span><Icon name={active.icon} size={34}/></div>
            <h3>{active.title}</h3>
            <p className="proposal-lead">{active.lead}</p>
            <div className="proposal-columns">
              <div><h4>El reto</h4><p>{active.diagnosis}</p><a href={active.sourceUrl} target="_blank" rel="noreferrer">{active.source} <Icon name="external" size={14}/></a></div>
              <div><h4>Qué haremos</h4><ul>{active.actions.map((action) => <li key={action}><Icon name="check" size={17}/><span>{action}</span></li>)}</ul></div>
            </div>
            <div className="measure-box"><span>Cómo se medirá</span>{active.metrics.map((metric) => <b key={metric}>{metric}</b>)}</div>
          </article>
        </div>
      </section>

      <section className="hundred section-pad" id="primeros-100">
        <div className="hundred-intro"><div className="section-kicker">El arranque</div><h2>Los primeros<br/><span>100 días</span></h2><p>Ordenar, escuchar y publicar la línea base antes de ofrecer resultados sin sustento.</p></div>
        <div className="timeline">
          <article><span>01–30</span><h3>Diagnóstico abierto</h3><p>Inventario de agua, drenes, vías, maquinaria, obras y contratos. Protocolo inmediato para alertas de agua.</p><i>01</i></article>
          <article><span>31–60</span><h3>Prioridad por territorio</h3><p>Mesas en centros poblados para validar puntos críticos y publicar el orden de intervención.</p><i>02</i></article>
          <article><span>61–100</span><h3>Cuentas visibles</h3><p>Lanzamiento de Mochumí en Claro, cronograma de maquinaria y primer reporte de compromisos.</p><i>03</i></article>
        </div>
      </section>

      <section className="participate section-pad" id="participa">
        <div className="participate-copy">
          <div className="section-kicker light">Tu rol cuenta</div>
          <h2>No mires la campaña<br/>desde lejos. <span>Súmate.</span></h2>
          <p>Buscamos ciudadanos responsables para defender la transparencia, recoger propuestas y organizar cada sector de Mochumí.</p>
          <div className="role-list">
            <div><Icon name="vote"/><span><b>Personero/a del candidato</b><small>Representa a Arturo y a Renovación Popular, observa la jornada y cuida el voto. No es miembro de mesa ni personal de la ONPE.</small></span></div>
            <div><Icon name="people"/><span><b>Voluntariado territorial</b><small>Conecta barrios, caseríos y centros poblados.</small></span></div>
            <div><Icon name="phone"/><span><b>Promotor/a digital</b><small>Comparte información verificada desde el celular.</small></span></div>
            <div><Icon name="book"/><span><b>Equipo técnico</b><small>Mejora propuestas con evidencia y experiencia local.</small></span></div>
          </div>
        </div>
        <form className="join-form" onSubmit={submitParticipation}>
          <span className="form-label">FORMULARIO DE PARTICIPACIÓN</span>
          <h3>Quiero ser parte</h3>
          <p>Completa tus datos y el equipo de organización te contactará.</p>
          <a className="official-form-link" href={OFFICIAL_FORM_URL} target="_blank" rel="noreferrer"><Icon name="external" size={15}/> También puedes registrarte en el formulario oficial</a>
          <label>Nombre y apellidos<input name="fullName" type="text" autoComplete="name" maxLength={100} required placeholder="Escribe tu nombre"/></label>
          <div className="form-row"><label>Celular<input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={20} required placeholder="999 999 999"/></label><label>Sector o centro poblado<input name="sector" type="text" maxLength={100} required placeholder="Ej. San Antonio"/></label></div>
          <label>¿Cómo deseas participar?<select name="role" required defaultValue=""><option value="" disabled>Selecciona una opción</option><option value="personero">Personero/a del candidato (cuida el voto)</option><option value="voluntariado">Voluntariado territorial</option><option value="digital">Promotor/a digital</option><option value="tecnico">Equipo técnico</option></select></label>
          <label>Disponibilidad (opcional)<textarea name="availability" maxLength={280} rows={3} placeholder="Días, horarios o cómo te gustaría apoyar"/></label>
          <label className="honeypot" aria-hidden="true">Sitio web<input name="website" tabIndex={-1} autoComplete="off"/></label>
          <label className="consent"><input type="checkbox" name="consent" required/><span>Autorizo que el equipo me contacte solo para actividades de participación y capacitación electoral. Mis datos no se publicarán.</span></label>
          <button className="button primary wide" type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Enviando…" : "Enviar mi registro"}<Icon name="arrow"/></button>
          {formMessage && <p className={`form-message ${formState}`} role="status">{formMessage}</p>}
        </form>
      </section>

      <section className="verify section-pad" id="verifica">
        <div className="verify-head"><div className="section-kicker">Información electoral segura</div><h2>Verifica siempre<br/><span>en la fuente oficial.</span></h2></div>
        <div className="verify-alert"><Icon name="vote" size={32}/><div><strong>El personero representa al candidato y cuida el voto.</strong><p>Observa la instalación, el sufragio y el escrutinio en representación de Arturo y de su organización política. La ONPE sortea y designa a los miembros de mesa; esta web no los designa ni reemplaza la acreditación formal.</p></div></div>
        <div className="official-links">
          <a href="https://www.gob.pe/institucion/onpe/campa%C3%B1as/143000-elecciones-regionales-y-municipales-2026" target="_blank" rel="noreferrer"><span><Icon name="vote"/><b>ERM 2026</b></span><p>Fechas, noticias y servicios oficiales del proceso electoral.</p><em>Ir a ONPE <Icon name="external" size={15}/></em></a>
          <a href="https://plataformaelectoral.jne.gob.pe/" target="_blank" rel="noreferrer"><span><Icon name="eye"/><b>Candidatura y plan</b></span><p>Consulta estado, hoja de vida y plan cuando el JNE los habilite.</p><em>Ir al JNE <Icon name="external" size={15}/></em></a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><span><Icon name="people"/><b>Personero del candidato</b></span><p>Registra tu interés para representar a Arturo y cuidar el voto. La acreditación formal la realiza la organización.</p><em>Escribir por WhatsApp <Icon name="external" size={15}/></em></a>
          <a href={OFFICIAL_FORM_URL} target="_blank" rel="noreferrer"><span><Icon name="book"/><b>Formulario oficial</b></span><p>Completa el formulario externo para sumarte a la organización y recibir coordinación.</p><em>Abrir formulario <Icon name="external" size={15}/></em></a>
        </div>
      </section>

      <section className="install-banner section-pad">
        <div><div className="app-mark">R</div><span><small>LLÉVANOS CONTIGO</small><h2>Instala la aplicación.</h2><p>Android puede instalar un APK cuando exista una versión nativa. iPhone no usa APK: agrega esta web a inicio desde Safari.</p></span></div>
        <button className="button cream" onClick={handleInstall}><Icon name="download"/> Ver cómo instalarla</button>
      </section>

      <section className="sources section-pad" id="fuentes">
        <div className="section-kicker">Trazabilidad</div>
        <div className="section-heading split-heading"><h2>Fuentes abiertas.<br/><span>Propuestas revisables.</span></h2><p>Investigación actualizada al 16 de julio de 2026. No se mezclan datos de campaña con registros oficiales.</p></div>
        <div className="source-list">{sources.map((source, index) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><span>{String(index + 1).padStart(2, "0")}</span><b>{source.label}</b><em>{source.tag}</em><Icon name="external" size={17}/></a>)}</div>
      </section>

      <footer>
        <div className="footer-brand"><span className="brand-mark">R</span><div><b>ARTURO SANTISTEBAN</b><small>MOCHUMÍ 2027–2030</small></div></div>
        <p>Con honestidad y trabajo duro, renovaremos Mochumí.</p>
        <div className="footer-actions"><a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><Icon name="phone" size={16}/> WhatsApp 922 282 679</a><a href={FACEBOOK_URL} target="_blank" rel="noreferrer"><Icon name="external" size={16}/> Facebook</a><a href={OFFICIAL_FORM_URL} target="_blank" rel="noreferrer"><Icon name="external" size={16}/> Formulario oficial</a></div>
        <div className="footer-note">Sitio informativo en etapa de revisión. La condición de candidatura y el plan oficial deben verificarse en el JNE. No afiliado a ONPE, JNE ni a la Municipalidad Distrital de Mochumí.</div>
      </footer>

      <nav className="mobile-dock" aria-label="Navegación móvil">
        <button onClick={() => scrollTo("inicio")}><Icon name="home"/><span>Inicio</span></button>
        <button onClick={() => scrollTo("propuestas")}><Icon name="vote"/><span>Propuestas</span></button>
        <button className="dock-main" onClick={() => scrollTo("participa")}><Icon name="people"/><span>Súmate</span></button>
        <button onClick={() => scrollTo("verifica")}><Icon name="eye"/><span>Verifica</span></button>
      </nav>

      {installOpen && <div className="modal-backdrop" role="presentation" onMouseDown={() => setInstallOpen(false)}><div className="install-modal" role="dialog" aria-modal="true" aria-labelledby="install-title" onMouseDown={(event) => event.stopPropagation()}><button className="modal-close" onClick={() => setInstallOpen(false)} aria-label="Cerrar"><Icon name="close"/></button><div className="app-mark">R</div><h2 id="install-title">Instala la aplicación correcta</h2><p className="install-note">Un APK solo funciona en Android. En iPhone la instalación correcta es una PWA desde Safari, sin APK.</p><div className="install-steps"><article><span>ANDROID · CHROME</span><b>1. Si recibes un APK, ábrelo en Android y autoriza su instalación.</b><b>2. Para esta web, abre el menú ⋮ y pulsa “Instalar app” o “Agregar a pantalla principal”.</b></article><article><span>IPHONE · SAFARI</span><b>1. Pulsa Compartir.</b><b>2. Elige “Agregar a inicio”.</b></article></div><button className="button primary wide" onClick={() => setInstallOpen(false)}>Entendido</button></div></div>}
    </main>
  );
}
