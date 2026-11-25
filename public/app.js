
/* ======================================================================
   Taha Abdelhady — portfolio
   Content lives in content.json (edited from the admin dashboard at #admin).
   ====================================================================== */
const T = {
  ar: {
    nav: { home:"الرئيسية", about:"عنّي", experience:"الخبرة", skills:"المهارات", projects:"المشاريع", services:"الخدمات", cv:"السيرة الذاتية", contact:"تواصل", admin:"لوحة التحكم" },
    hello:"أهلاً، أنا", explore:"استكشف أعمالي", downloadCv:"حمّل السيرة الذاتية", contactMe:"تواصل معي", scroll:"انزل لتحت",
    drag:"اسحب لتلف الموديل", loading3d:"تحميل الموديل", basedIn:"مقيم في", years:"سنوات خبرة",
    whatIDo:"اللي بقدّمه", highlightsTitle:"خبرة عملية مع تفكير تقني", latestWork:"من مشاريعي", allProjects:"كل المشاريع",
    aboutEyebrow:"عنّي", aboutTitle:"خبرة في الأعمال، وشغف بالتكنولوجيا",
    education:"التعليم", languages:"اللغات", spec:"التخصص", graduation:"سنة التخرج",
    expEyebrow:"المسيرة المهنية", expTitle:"الخبرة العملية", expLede:"المحطات اللي اشتغلت فيها وأهم مسؤولياتي.",
    skillsEyebrow:"المهارات والخبرات", skillsTitle:"اللي بعرف أعمله", skillsLede:"مهاراتي مقسّمة حسب المجال.", all:"الكل", level:"المستوى",
    projEyebrow:"المشاريع والأعمال", projTitle:"مشاريعي", projLede:"أمثلة من المجالات اللي بشتغل عليها. حالة كل مشروع مكتوبة عليه لما تكون محددة.",
    status:{ completed:"مكتمل", progress:"قيد التنفيذ", prototype:"نموذج أولي" }, anyStatus:"كل الحالات",
    viewProject:"تفاصيل المشروع", backProjects:"كل المشاريع", category:"المجال", statusL:"الحالة", tech:"التقنيات", liveDemo:"شوف المشروع", source:"الكود المصدري", gallery:"صور المشروع", noProjects:"مفيش مشاريع في الفلتر ده.", notSet:"غير محدد",
    svcEyebrow:"الخدمات", svcTitle:"خدمات أقدر أساعدك فيها", svcLede:"من تنظيم البيانات لحد الأنظمة الكاملة والمحتوى المرئي.",
    cvEyebrow:"السيرة الذاتية", cvTitle:"سيرتي الذاتية", cvLede:"نسخة أونلاين كاملة، ونسخة PDF بالعربي والإنجليزي جاهزة للتحميل.",
    dlAr:"حمّل السيرة بالعربي", dlEn:"حمّل السيرة بالإنجليزي", openPrint:"افتح PDF للطباعة",
    profile:"نبذة", experience:"الخبرة العملية", skills:"المهارات", projects:"المشاريع",
    contactEyebrow:"تواصل معي", contactTitle:"خلّينا نتكلم",
    fullName:"الاسم الكامل", email:"الإيميل", company:"الشركة", subject:"الموضوع", message:"الرسالة", optional:"اختياري",
    send:"ابعت الرسالة", sending:"جاري الإرسال…", sentOk:"وصلت رسالتك، هرد عليك قريب.", sendFail:"الرسالة ماوصلتش. جرّب تاني، أو استخدم بيانات التواصل اللي جنب الفورم.", sendWa:"أو ابعت على واتساب", sendNote:"رسالتك بتوصل مباشرة لصاحب الموقع.", printCv:"اطبع السيرة",
    noChannels:"قنوات التواصل بتتجهز حالياً.", copy:"نسخ", copied:"اتنسخ",
    eName:"اكتب اسمك", eEmail:"الإيميل ده مش مكتوب صح، اتأكد منه", eMsg:"اكتب رسالتك", eSubject:"اكتب الموضوع",
    opened:"فتحنالك التطبيق. لو مافتحش، استخدم بيانات التواصل اللي جنب الفورم",
    dlStarted:"الملف جاهز للحفظ", dlFail:"التحميل مش متاح هنا، فتحنالك الملف في تبويب جديد",
    rights:"كل الحقوق محفوظة", location:"الموقع", phone:"الهاتف", whatsapp:"واتساب",
    adminLocked:"المنطقة دي لصاحب الموقع بس.", adminLockedSub:"لو إنت صاحب الموقع، افتحه وإنت مسجّل دخول على حسابك."
  },
  en: {
    nav: { home:"Home", about:"About", experience:"Experience", skills:"Skills", projects:"Projects", services:"Services", cv:"CV", contact:"Contact", admin:"Dashboard" },
    hello:"Hello, I'm", explore:"Explore My Work", downloadCv:"Download My CV", contactMe:"Contact Me", scroll:"Scroll",
    drag:"Drag to rotate", loading3d:"Loading model", basedIn:"Based in", years:"Years of experience",
    whatIDo:"What I bring", highlightsTitle:"Practical experience, technical thinking", latestWork:"Selected projects", allProjects:"All projects",
    aboutEyebrow:"About me", aboutTitle:"Business experience, driven by technology",
    education:"Education", languages:"Languages", spec:"Specialization", graduation:"Graduation",
    expEyebrow:"Career", expTitle:"Professional experience", expLede:"Where I've worked and what I was responsible for.",
    skillsEyebrow:"Skills & expertise", skillsTitle:"What I can do", skillsLede:"My skills, grouped by area.", all:"All", level:"Level",
    projEyebrow:"Projects & portfolio", projTitle:"My projects", projLede:"Examples from the areas I work in. Each project shows its status once it has been set.",
    status:{ completed:"Completed", progress:"In progress", prototype:"Prototype" }, anyStatus:"Any status",
    viewProject:"View details", backProjects:"All projects", category:"Category", statusL:"Status", tech:"Technologies", liveDemo:"Live demo", source:"Source code", gallery:"Gallery", noProjects:"No projects match this filter.", notSet:"Not set",
    svcEyebrow:"Services", svcTitle:"Services I offer", svcLede:"From organizing data to complete systems and visual content.",
    cvEyebrow:"Curriculum vitae", cvTitle:"My CV", cvLede:"A complete online version, plus Arabic and English PDFs ready to download.",
    dlAr:"Download Arabic CV", dlEn:"Download English CV", openPrint:"Open PDF to print",
    profile:"Profile", experience:"Experience", skills:"Skills", projects:"Projects",
    contactEyebrow:"Contact", contactTitle:"Let's talk",
    fullName:"Full name", email:"Email", company:"Company", subject:"Subject", message:"Message", optional:"optional",
    send:"Send message", sending:"Sending…", sentOk:"Your message arrived. I'll get back to you soon.", sendFail:"Your message didn't go through. Try again, or use the contact details beside the form.", sendWa:"Or send via WhatsApp", sendNote:"Your message goes straight to the site owner.", printCv:"Print CV",
    noChannels:"Contact channels are being set up.", copy:"Copy", copied:"Copied",
    eName:"Add your name", eEmail:"That email doesn't look right. Check it and try again", eMsg:"Write your message", eSubject:"Add a subject",
    opened:"The app should open now. If it doesn't, use the contact details beside the form",
    dlStarted:"Your file is ready to save", dlFail:"Downloads aren't available here, so the file opened in a new tab",
    rights:"All rights reserved", location:"Location", phone:"Phone", whatsapp:"WhatsApp",
    adminLocked:"This area is for the site owner.", adminLockedSub:"If you own this site, open it while signed in to your account."
  }
};

const ROUTES = ["home","about","experience","skills","projects","services","cv","contact","admin"];
const NAV = ["home","about","experience","skills","projects","services","cv","contact"];
const SLOT_PAGES = { home:"big", about:"compact", experience:"compact", contact:"compact" };
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

let C = null;              // site content
let lang = "ar";
let current = null, busy = false, canEdit = false;
let skillFilter = "all", projCat = "all", projStatus = "all", adminTab = "messages", dirty = false;
try { lang = localStorage.getItem("lang") || "ar"; } catch(e) {}

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const tx = v => v == null ? "" : (typeof v === "object" && !Array.isArray(v) ? (v[lang] ?? v.en ?? "") : v);
const L = () => T[lang];
const ic = (name, cls="") => `<i data-lucide="${esc(name)}" class="${cls}"></i>`;
const safeUrl = u => { u = String(u||"").trim(); return /^(https?:|mailto:|tel:)/i.test(u) || /^[\w\-./]+$/.test(u) ? u : ""; };
const icons = () => { try { window.lucide && lucide.createIcons({ attrs:{ "stroke-width":1.75 } }); } catch(e) {} };
const visibleProjects = () => (C.projects||[]).filter(p => p.visible !== false);
const catOf = id => (C.projectCats||[]).find(c => c.id === id) || { icon:"folder", name:{ar:id,en:id} };

function toast(msg){ const t = $("#toast"); t.textContent = msg; t.hidden = false; clearTimeout(toast.h); toast.h = setTimeout(() => t.hidden = true, 3400); }
function setProgress(p){ $("#load-bar").style.width = p + "%"; $("#load-pct").textContent = Math.round(p) + "%"; }

/* ---------------- views ---------------- */
function slotHTML(kind){
  const p = C.profile;
  return `<div class="slot ${kind==="compact"?"compact":""}" data-slot>
    <div class="slot-inner">
      <div class="halo"></div><div class="ring"></div><div class="floor"></div>
      <div class="fallback"><div class="float" style="--photo:url('${esc(safeUrl(p.photo))}')"><img src="${esc(safeUrl(p.photo))}" alt="${esc(tx(p.name))}"></div></div>
      <span class="load-pct" data-load-pct>${esc(L().loading3d)}</span>
      <span class="hint3d">${ic("move-3d")}${esc(L().drag)}</span>
    </div>
  </div>`;
}

function viewHome(){
  const p = C.profile, t = L();
  const ids = tx(p.identity) || [];
  const track = `<div class="track">${ids.map(s=>`<span>${esc(s)}</span>`).join("")}</div>`;
  const feat = visibleProjects().slice(0,3);
  return `
  <div class="hero">
    <div>
      <div class="hello rv" style="--i:0"><span class="dot"></span>${esc(t.hello)}</div>
      <h1 class="rv" style="--i:1">${esc(tx(p.short)).split(" ").map((w,i)=>`<span class="l2 ${i?"grad-text":""}">${esc(w)}</span>`).join("")}</h1>
      <div class="ar-name rv" style="--i:2">${esc(lang==="ar" ? p.name.en : p.name.ar)}</div>
      <div class="role-line rv" style="--i:3"><span id="typed"></span><span class="cursor"></span></div>
      <p class="lede rv" style="--i:4">${esc(tx(p.intro))}</p>
      <div class="ctas rv" style="--i:5">
        <a class="btn primary" href="#projects">${esc(t.explore)}${ic("arrow-right","flip")}</a>
        <a class="btn" href="#cv">${ic("download")}${esc(t.downloadCv)}</a>
        <a class="btn" href="#contact">${ic("message-circle")}${esc(t.contactMe)}</a>
      </div>
      <a class="scroll-ind rv" style="--i:6" href="#home-more" data-scroll><span class="mouse"></span>${esc(t.scroll)}</a>
    </div>
    <div class="hero-stage" style="position:relative">
      ${slotHTML("big")}
      <div class="tag3d glass t1 rv" style="--i:7"><span class="ic">${ic("map-pin")}</span><span><small>${esc(t.basedIn)}</small>${esc(tx(p.location))}</span></div>
      <div class="tag3d glass t2 rv" style="--i:8"><span class="ic">${ic("briefcase")}</span><span><small>${esc(t.years)}</small>${esc(yearsExp())}+</span></div>
    </div>
  </div>
  <div class="identity" aria-hidden="true">${track}${track}</div>

  <section class="section" id="home-more">
    <div class="section-head reveal"><div><span class="eyebrow">${esc(t.whatIDo)}</span><h2>${esc(t.highlightsTitle)}</h2></div></div>
    <div class="cards">${(C.highlights||[]).map(h => `
      <div class="card hl reveal"><span class="ic">${ic(h.icon||"star")}</span><h3>${esc(tx(h.title))}</h3><p>${esc(tx(h.text))}</p></div>`).join("")}
    </div>
  </section>

  ${feat.length ? `<section class="section">
    <div class="section-head reveal"><div><span class="eyebrow">${esc(t.latestWork)}</span><h2>${esc(t.projTitle)}</h2></div><a class="btn small" href="#projects">${esc(t.allProjects)}${ic("arrow-right","flip")}</a></div>
    <div class="pgrid">${feat.map((pr,i)=>projCard(pr,i)).join("")}</div>
  </section>` : ""}

  <section class="section"><div class="glass recruit reveal">
    <div><span class="eyebrow">${esc(t.contactEyebrow)}</span><h2 style="margin-top:12px">${esc(tx(C.recruit))}</h2></div>
    <div class="ctas" style="margin-top:0"><a class="btn primary" href="#contact">${esc(t.contactMe)}${ic("arrow-right","flip")}</a><a class="btn" href="#cv">${ic("file-text")}${esc(t.nav.cv)}</a></div>
  </div></section>`;
}

function yearsExp(){
  let y = 0; (C.experience||[]).forEach(e => { const a = parseInt(e.from), b = parseInt(e.to) || new Date().getFullYear(); if (a && b >= a) y += b - a; });
  return y || "";
}

function pageHead(eyebrow, title, lede, slot){
  const text = `<div><span class="eyebrow rv" style="--i:0">${esc(eyebrow)}</span><h1 class="page-title rv" style="--i:1">${esc(title)}</h1>${lede?`<p class="lede rv" style="--i:2">${esc(lede)}</p>`:""}</div>`;
  if (!slot) return `<div style="max-width:760px;margin-bottom:40px">${text}</div>`;
  return `<div class="hero" style="min-height:0;margin-bottom:40px">${text}${slotHTML(slot)}</div>`;
}

function viewAbout(){
  const t = L();
  return `${pageHead(t.aboutEyebrow, t.aboutTitle, "", "compact")}
  <div class="about-grid">
    <div class="about-text reveal">${(tx(C.about)||[]).map(p=>`<p>${esc(p)}</p>`).join("")}</div>
    <div>
      <div class="cards" style="grid-template-columns:repeat(2,1fr)">${(C.highlights||[]).map(h=>`<div class="card hl reveal"><span class="ic">${ic(h.icon||"star")}</span><h3>${esc(tx(h.title))}</h3><p>${esc(tx(h.text))}</p></div>`).join("")}</div>
    </div>
  </div>
  <div class="info-row">
    ${(C.education||[]).map(e=>`<div class="card info reveal"><h3>${ic("graduation-cap")}${esc(t.education)}</h3><strong>${esc(tx(e.title))}</strong><p>${esc(tx(e.school))}</p><div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:6px"><span class="chip">${esc(t.spec)}: ${esc(tx(e.spec))}</span><span class="chip">${esc(t.graduation)}: ${esc(e.year)}</span></div></div>`).join("")}
    <div class="card info reveal"><h3>${ic("languages")}${esc(t.languages)}</h3><div class="lang-row">${(C.languages||[]).map(l=>`<div class="lang-item"><strong>${esc(tx(l.name))}</strong><span class="muted">${esc(tx(l.level))}</span></div>`).join("")}</div></div>
  </div>`;
}

function viewExperience(){
  const t = L();
  return `${pageHead(t.expEyebrow, t.expTitle, t.expLede, "compact")}
  <div class="timeline">${(C.experience||[]).map(e=>`
    <article class="card tl reveal">
      <div class="tl-head"><div><h3>${esc(tx(e.role))}</h3><div class="co">${esc(tx(e.company))}</div></div><span class="period">${esc(e.from)} – ${esc(e.to)}</span></div>
      <ul>${(tx(e.points)||[]).map(x=>`<li>${ic("check")}<span>${esc(x)}</span></li>`).join("")}</ul>
    </article>`).join("")}
  </div>`;
}

function viewSkills(){
  const t = L();
  const cats = C.skillCats||[];
  return `${pageHead(t.skillsEyebrow, t.skillsTitle, t.skillsLede)}
  <div class="tabs rv" style="--i:3" id="skill-tabs">
    <button class="tab" type="button" data-sf="all" aria-pressed="${skillFilter==="all"}">${ic("layers")}${esc(t.all)}</button>
    ${cats.map(c=>`<button class="tab" type="button" data-sf="${esc(c.id)}" aria-pressed="${skillFilter===c.id}">${ic(c.icon)}${esc(tx(c.name))}</button>`).join("")}
  </div>
  <div class="skill-grid" id="skill-grid">${skillCards()}</div>`;
}
function skillCards(){
  const cats = Object.fromEntries((C.skillCats||[]).map(c=>[c.id,c]));
  return (C.skills||[]).filter(s=>skillFilter==="all"||s.cat===skillFilter).map((s,i)=>{
    const lv = Number.isFinite(+s.level) && s.level !== null && s.level !== "" ? Math.max(0,Math.min(100,+s.level)) : null;
    return `<div class="card skill" style="--i:${i}"><div class="top"><span>${esc(tx(s.name))}</span><span class="cat-ic">${ic(cats[s.cat]?.icon||"circle")}</span></div>
      ${lv!==null?`<div class="meter"><b data-w="${lv}"></b></div><span class="lv">${esc(L().level)} ${lv}%</span>`:""}</div>`;
  }).join("");
}

function projCard(p,i){
  const t = L(), cat = catOf(p.cat);
  const cover = p.cover ? `<img src="${esc(safeUrl(p.cover))}" alt="" loading="lazy">` : `<div class="gridlines"></div><div class="big-ic">${ic(cat.icon)}</div>`;
  return `<a class="card proj" style="--i:${i}" href="#project-${esc(p.id)}">
    <div class="pcover">${cover}<div class="badges"><span class="chip">${esc(tx(cat.name))}</span>${p.status?`<span class="status ${esc(p.status)}">${esc(t.status[p.status]||"")}</span>`:""}</div></div>
    <div class="pbody"><h3>${esc(tx(p.title))}</h3><p>${esc(tx(p.desc))}</p>
    ${(p.tech||[]).length?`<div style="display:flex;flex-wrap:wrap;gap:6px">${p.tech.map(x=>`<span class="chip">${esc(x)}</span>`).join("")}</div>`:""}
    <div class="pfoot"><span>${esc(t.viewProject)}</span>${ic("arrow-up-right","flip")}</div></div></a>`;
}

function viewProjects(){
  const t = L();
  const cats = C.projectCats||[];
  return `${pageHead(t.projEyebrow, t.projTitle, t.projLede)}
  <div class="filters-row rv" style="--i:3">
    <div class="tabs" id="proj-tabs">
      <button class="tab" type="button" data-pc="all" aria-pressed="${projCat==="all"}">${ic("layers")}${esc(t.all)}</button>
      ${cats.map(c=>`<button class="tab" type="button" data-pc="${esc(c.id)}" aria-pressed="${projCat===c.id}">${ic(c.icon)}${esc(tx(c.name))}</button>`).join("")}
    </div>
    <select class="inp" id="proj-status" style="width:auto" aria-label="${esc(t.statusL)}">
      <option value="all">${esc(t.anyStatus)}</option>
      ${Object.entries(t.status).map(([k,v])=>`<option value="${k}" ${projStatus===k?"selected":""}>${esc(v)}</option>`).join("")}
    </select>
  </div>
  <div class="pgrid" id="proj-grid">${projGrid()}</div>`;
}
function projGrid(){
  const list = visibleProjects().filter(p=>(projCat==="all"||p.cat===projCat)&&(projStatus==="all"||p.status===projStatus));
  return list.length ? list.map((p,i)=>projCard(p,i)).join("") : `<div class="card empty" style="grid-column:1/-1">${esc(L().noProjects)}</div>`;
}

function viewProject(id){
  const t = L(), p = (C.projects||[]).find(x=>x.id===id && x.visible!==false);
  if (!p) return viewProjects();
  const cat = catOf(p.cat);
  const demo = safeUrl(p.demo), src = safeUrl(p.source);
  return `<a class="back rv" style="--i:0" href="#projects">${ic("arrow-left","flip")}${esc(t.backProjects)}</a>
  <div class="detail">
    <div class="rv" style="--i:1">
      <div class="pcover">${p.cover?`<img src="${esc(safeUrl(p.cover))}" alt="">`:`<div class="gridlines"></div><div class="big-ic">${ic(cat.icon)}</div>`}</div>
      ${(p.gallery||[]).length?`<h3 style="margin:24px 0 4px;font-size:18px">${esc(t.gallery)}</h3><div class="gallery">${p.gallery.map(g=>`<img src="${esc(safeUrl(g))}" alt="" loading="lazy">`).join("")}</div>`:""}
    </div>
    <div class="rv" style="--i:2">
      <span class="eyebrow">${esc(tx(cat.name))}</span>
      <h1 class="page-title" style="font-size:clamp(32px,4.4vw,52px)">${esc(tx(p.title))}</h1>
      <p class="lede">${esc(tx(p.desc))}</p>
      <div class="card meta-list" style="margin-top:24px">
        <div class="row"><span>${esc(t.category)}</span><span>${esc(tx(cat.name))}</span></div>
        <div class="row"><span>${esc(t.statusL)}</span><span>${p.status?`<span class="status ${esc(p.status)}">${esc(t.status[p.status])}</span>`:esc(t.notSet)}</span></div>
        ${(p.tech||[]).length?`<div class="row"><span>${esc(t.tech)}</span><span style="display:flex;flex-wrap:wrap;gap:6px;justify-content:flex-end">${p.tech.map(x=>`<span class="chip">${esc(x)}</span>`).join("")}</span></div>`:""}
        ${demo||src?`<div class="ctas" style="margin-top:6px">${demo?`<a class="btn primary small" href="${esc(demo)}" target="_blank" rel="noopener">${ic("external-link")}${esc(t.liveDemo)}</a>`:""}${src?`<a class="btn small" href="${esc(src)}" target="_blank" rel="noopener">${ic("code-xml")}${esc(t.source)}</a>`:""}</div>`:""}
      </div>
    </div>
  </div>`;
}

function viewServices(){
  const t = L();
  return `${pageHead(t.svcEyebrow, t.svcTitle, t.svcLede)}
  <div class="svc-grid">${(C.services||[]).map((s,i)=>`<div class="card svc" style="--i:${i}"><span class="n">${String(i+1).padStart(2,"0")}</span><span class="ic">${ic(s.icon||"star")}</span><h3>${esc(tx(s.title))}</h3><p>${esc(tx(s.desc))}</p></div>`).join("")}</div>`;
}

function contactLines(){
  const p = C.profile, t = L(), out = [];
  if (p.email) out.push([ "mail", t.email, p.email ]);
  if (p.phone) out.push([ "phone", t.phone, p.phone ]);
  if (p.whatsapp) out.push([ "message-circle", t.whatsapp, p.whatsapp ]);
  if (p.linkedin) out.push([ "linkedin", "LinkedIn", p.linkedin.replace(/^https?:\/\/(www\.)?/,"") ]);
  if (p.github) out.push([ "github", "GitHub", p.github.replace(/^https?:\/\/(www\.)?/,"") ]);
  out.push([ "map-pin", t.location, tx(p.location) ]);
  return out;
}

function viewCV(){
  const t = L(), p = C.profile;
  const cats = C.skillCats||[];
  return `${pageHead(t.cvEyebrow, t.cvTitle, t.cvLede)}
  <div class="cv-actions rv" style="--i:3">
    ${C.cv?.ar?`<a class="btn primary" href="${esc(safeUrl(C.cv.ar))}" download="Taha-Abdelhady-CV-AR.pdf">${ic("download")}${esc(t.dlAr)}</a>`:""}
    ${C.cv?.en?`<a class="btn primary" href="${esc(safeUrl(C.cv.en))}" download="Taha-Abdelhady-CV-EN.pdf">${ic("download")}${esc(t.dlEn)}</a>`:""}
    <button class="btn" type="button" data-print>${ic("printer")}${esc(t.printCv)}</button>
  </div>
  <article class="sheet rv" style="--i:4">
    <div class="head"><img src="${esc(safeUrl(p.photoHd||p.photo))}" alt="">
      <div><h2>${esc(tx(p.name))}</h2><div class="sub">${esc(tx(p.title))}</div>
      <div class="contacts">${contactLines().map(([i,,v])=>`<span>${ic(i)}${esc(v)}</span>`).join("")}</div></div></div>
    <h3>${esc(t.profile)}</h3><p>${esc((tx(C.about)||[]).join(" "))}</p>
    <h3>${esc(t.experience)}</h3>
    ${(C.experience||[]).map(e=>`<div class="job"><span>${esc(tx(e.role))} — ${esc(tx(e.company))}</span><span style="direction:ltr">${esc(e.from)} – ${esc(e.to)}</span></div><ul>${(tx(e.points)||[]).map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`).join("")}
    <h3>${esc(t.education)}</h3>
    ${(C.education||[]).map(e=>`<div class="job"><span>${esc(tx(e.title))}</span><span>${esc(e.year)}</span></div><p>${esc(tx(e.school))} · ${esc(t.spec)}: ${esc(tx(e.spec))}</p>`).join("")}
    <h3>${esc(t.skills)}</h3>
    <div class="two">${cats.map(c=>`<div><b>${esc(tx(c.name))}</b><div class="tags" style="margin-top:6px">${(C.skills||[]).filter(s=>s.cat===c.id).map(s=>`<span>${esc(tx(s.name))}</span>`).join("")}</div></div>`).join("")}</div>
    <h3>${esc(t.projects)}</h3>
    <div class="two">${(C.projectCats||[]).map(c=>`<div><b>${esc(tx(c.name))}</b><p>${visibleProjects().filter(x=>x.cat===c.id).map(x=>esc(tx(x.title))).join(lang==="ar"?"، ":", ")}</p></div>`).join("")}</div>
    <h3>${esc(t.languages)}</h3>
    <div class="tags">${(C.languages||[]).map(l=>`<span>${esc(tx(l.name))}: ${esc(tx(l.level))}</span>`).join("")}</div>
  </article>`;
}

function viewContact(){
  const t = L(), p = C.profile;
  const links = [];
  if (p.email) links.push({ i:"mail", l:t.email, v:p.email, copy:p.email });
  if (p.whatsapp) links.push({ i:"message-circle", l:t.whatsapp, v:p.whatsapp, href:`https://wa.me/${p.whatsapp.replace(/\D/g,"")}` });
  if (p.phone) links.push({ i:"phone", l:t.phone, v:p.phone, copy:p.phone });
  if (p.linkedin) links.push({ i:"linkedin", l:"LinkedIn", v:p.linkedin.replace(/^https?:\/\/(www\.)?/,""), href:safeUrl(p.linkedin) });
  if (p.github) links.push({ i:"github", l:"GitHub", v:p.github.replace(/^https?:\/\/(www\.)?/,""), href:safeUrl(p.github) });
    return `${pageHead(t.contactEyebrow, t.contactTitle, tx(C.recruit), "compact")}
  <div class="contact-grid">
    <div>
      <div class="channels">
        ${links.map(k => k.href
          ? `<a class="card channel reveal" href="${esc(k.href)}" target="_blank" rel="noopener"><span class="ic">${ic(k.i)}</span><span style="min-width:0"><small>${esc(k.l)}</small><b>${esc(k.v)}</b></span>${ic("arrow-up-right","flip")}</a>`
          : `<div class="card channel reveal"><span class="ic">${ic(k.i)}</span><span style="min-width:0"><small>${esc(k.l)}</small><b style="user-select:all;direction:ltr;display:inline-block">${esc(k.v)}</b></span><button class="btn small copy" type="button" data-copy="${esc(k.copy)}">${esc(t.copy)}</button></div>`).join("")}
        <div class="card channel reveal"><span class="ic">${ic("map-pin")}</span><span><small>${esc(t.location)}</small><b>${esc(tx(p.location))}</b></span></div>
        ${!links.length?`<p class="note">${esc(t.noChannels)}</p>`:""}
      </div>
    </div>
    <form class="glass cf reveal" id="cf" novalidate>
      <label class="f" for="cf-name">${esc(t.fullName)}<input id="cf-name" autocomplete="name"><span class="err" id="cf-name-e" hidden></span></label>
      <label class="f" for="cf-email">${esc(t.email)}<input id="cf-email" type="email" autocomplete="email" dir="ltr"><span class="err" id="cf-email-e" hidden></span></label>
      <label class="f" for="cf-company">${esc(t.company)} <span class="note">(${esc(t.optional)})</span><input id="cf-company" autocomplete="organization"></label>
      <label class="f" for="cf-subject">${esc(t.subject)}<input id="cf-subject"><span class="err" id="cf-subject-e" hidden></span></label>
      <label class="f full" for="cf-msg">${esc(t.message)}<textarea id="cf-msg"></textarea><span class="err" id="cf-msg-e" hidden></span></label>
      <input type="text" id="cf-hp" name="website" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;width:1px;height:1px">
      <div class="full send-row">
        <button class="btn primary" type="submit" id="cf-send">${ic("send")}${esc(t.send)}</button>
        ${p.whatsapp?`<button class="btn" type="button" id="cf-wa">${ic("message-circle")}${esc(t.sendWa)}</button>`:""}
      </div>
      <p class="note full" id="cf-status" role="status">${esc(t.sendNote)}</p>
    </form>
  </div>`;
}

/* ---------------- router ---------------- */
function parseHash(){
  const h = location.hash.slice(1);
  if (h.startsWith("project-")) return { page:"projects", project:h.slice(8) };
  return { page: ROUTES.includes(h) ? h : "home" };
}

function renderView(r){
  const m = $("#main");
  let html;
  switch (r.page) {
    case "about": html = viewAbout(); break;
    case "experience": html = viewExperience(); break;
    case "skills": html = viewSkills(); break;
    case "projects": html = r.project ? viewProject(r.project) : viewProjects(); break;
    case "services": html = viewServices(); break;
    case "cv": html = viewCV(); break;
    case "contact": html = viewContact(); break;
    case "admin": html = viewAdmin(); break;
    default: html = viewHome();
  }
  m.innerHTML = `<section class="page wrap enter">${html}</section>`;
  icons();
  wirePage(r);
  setNav(r.page);
  const t = L();
  const name = tx(C.profile.name);
  document.title = r.page === "home" ? name : `${t.nav[r.page]} · ${name}`;
  attach3D();
  observeReveals();
  if (r.page === "home") startTyping();
}

function go(r, animate=true){
  if (busy) return;
  if (!animate || reduced || current === null) { renderView(r); current = r; window.scrollTo(0,0); return; }
  busy = true;
  setNav(r.page);
  const w = $("#wipe"); w.className = "wipe on";
  setTimeout(() => {
    window.scrollTo(0,0); renderView(r); current = r;
    w.className = "wipe off";
    setTimeout(() => { w.className = "wipe"; busy = false; const n = parseHash(); if (n.page !== current.page || n.project !== current.project) go(n); }, 700);
  }, 560);
}

function buildNav(){
  const t = L();
  const pages = NAV.concat(canEdit ? ["admin"] : []);
  $("#nav").innerHTML = `<span class="pill" id="pill"></span>` + pages.map(p=>`<a href="#${p}" data-page="${p}">${esc(t.nav[p])}</a>`).join("");
  $("#drawer-links").innerHTML = pages.map((p,i)=>`<a href="#${p}" data-page="${p}" style="--i:${i}">${esc(t.nav[p])}</a>`).join("");
}
function setNav(page){
  $$("[data-page]").forEach(a => a.dataset.page === page ? a.setAttribute("aria-current","page") : a.removeAttribute("aria-current"));
  const a = $(`#nav a[aria-current="page"]`), pill = $("#pill");
  if (a && pill) { pill.style.opacity = 1; pill.style.left = a.offsetLeft + "px"; pill.style.width = a.offsetWidth + "px"; }
  else if (pill) pill.style.opacity = 0;
}

function applyChrome(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  $("#lang-btn").textContent = lang === "ar" ? "EN" : "ع";
  $("#brand-name").textContent = tx(C.profile.short);
  const a = C.appearance || {};
  if (a.accent) document.documentElement.style.setProperty("--accent", a.accent);
  if (a.accent2) document.documentElement.style.setProperty("--accent2", a.accent2);
  $("#foot-left").textContent = `© ${new Date().getFullYear()} ${tx(C.profile.name)} · ${L().rights}`;
  $("#foot-right").innerHTML = `<a href="#cv">${esc(L().nav.cv)}</a> · <a href="#contact">${esc(L().nav.contact)}</a>`;
  buildNav();
}

/* ---------------- page wiring ---------------- */
function startTyping(){
  const el = $("#typed"); if (!el) return;
  const roles = [tx(C.profile.title)].concat(tx(C.profile.identity)||[]);
  if (reduced) { el.textContent = roles[0]; return; }
  let i = 0, j = 0, del = false; clearTimeout(startTyping.h);
  const step = () => {
    if (!document.body.contains(el)) return;
    const w = roles[i % roles.length];
    j += del ? -1 : 1; el.textContent = w.slice(0, j);
    let d = del ? 28 : 55;
    if (!del && j >= w.length) { del = true; d = i === 0 ? 2600 : 1500; }
    else if (del && j <= 0) { del = false; i++; d = 300; }
    startTyping.h = setTimeout(step, d);
  };
  step();
}

let revealObs;
function observeReveals(){
  revealObs && revealObs.disconnect();
  if (reduced || !("IntersectionObserver" in window)) { $$(".reveal").forEach(e=>e.classList.add("seen")); return; }
  revealObs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("seen"); revealObs.unobserve(e.target); } }), { rootMargin:"0px 0px -8% 0px" });
  $$(".reveal").forEach((e,i) => { e.style.transitionDelay = (i%3)*80 + "ms"; revealObs.observe(e); });
  // anything already on screen shows immediately
  requestAnimationFrame(() => $$(".reveal").forEach(e => { const r = e.getBoundingClientRect(); if (r.top < innerHeight) e.classList.add("seen"); }));
}

function animateMeters(){ requestAnimationFrame(() => $$(".meter b").forEach(b => b.style.width = b.dataset.w + "%")); }

function wirePage(r){
  $$("[data-scroll]").forEach(a => a.addEventListener("click", e => { e.preventDefault(); const tgt = $(a.getAttribute("href")); tgt && tgt.scrollIntoView({ behavior: reduced ? "auto" : "smooth" }); }));
  $$(".hl").forEach(c => c.addEventListener("pointermove", e => { const b = c.getBoundingClientRect(); c.style.setProperty("--x", (e.clientX-b.left)+"px"); c.style.setProperty("--y", (e.clientY-b.top)+"px"); }));
  if (r.page === "skills") {
    animateMeters();
    $("#skill-tabs").addEventListener("click", e => { const b = e.target.closest("[data-sf]"); if (!b) return; skillFilter = b.dataset.sf; $$("#skill-tabs .tab").forEach(x=>x.setAttribute("aria-pressed", x===b)); $("#skill-grid").innerHTML = skillCards(); icons(); animateMeters(); });
  }
  if (r.page === "projects" && !r.project) {
    $("#proj-tabs").addEventListener("click", e => { const b = e.target.closest("[data-pc]"); if (!b) return; projCat = b.dataset.pc; $$("#proj-tabs .tab").forEach(x=>x.setAttribute("aria-pressed", x===b)); $("#proj-grid").innerHTML = projGrid(); icons(); });
    $("#proj-status").addEventListener("change", e => { projStatus = e.target.value; $("#proj-grid").innerHTML = projGrid(); icons(); });
  }
  if (r.page === "cv") $$("[data-print]").forEach(b => b.addEventListener("click", () => window.print()));
  if (r.page === "contact") wireContact();
  if (r.page === "admin") wireAdmin();
  $$("[data-copy]").forEach(b => b.addEventListener("click", () => copyText(b.dataset.copy, b)));
}

function copyText(v, btn){
  const ok = () => { toast(L().copied); };
  const sel = () => { const el = btn.parentElement.querySelector("b"); if (!el) return; const r = document.createRange(); r.selectNodeContents(el); const s = getSelection(); s.removeAllRanges(); s.addRange(r); };
  if (navigator.clipboard) navigator.clipboard.writeText(v).then(ok, sel); else sel();
}


function wireContact(){
  const f = $("#cf"); if (!f) return;
  const t = L();
  const checks = {
    name: [ "#cf-name", v => v.length > 1, t.eName ],
    email: [ "#cf-email", v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), t.eEmail ],
    subject: [ "#cf-subject", v => v.length > 1, t.eSubject ],
    msg: [ "#cf-msg", v => v.length > 2, t.eMsg ]
  };
  const check = k => { const [sel, fn, m] = checks[k]; const v = $(sel).value.trim(); const ok = fn(v); const e = $(sel + "-e"); e.textContent = m; e.hidden = ok; return ok; };
  Object.keys(checks).forEach(k => { const el = $(checks[k][0]); el.addEventListener("blur", () => el.value && check(k)); el.addEventListener("input", () => $(checks[k][0] + "-e").hidden = true); });
  const vals = () => { const v = id => $(id).value.trim(); return { name:v("#cf-name"), email:v("#cf-email"), company:v("#cf-company"), subject:v("#cf-subject"), message:v("#cf-msg"), website:v("#cf-hp"), lang }; };
  const wa = $("#cf-wa");
  wa && wa.addEventListener("click", () => {
    if (!Object.keys(checks).map(check).every(Boolean)) return;
    const d = vals(), a = document.createElement("a");
    a.href = `https://wa.me/${C.profile.whatsapp.replace(/\D/g,"")}?text=${encodeURIComponent(`${d.subject}\n\n${d.message}\n\n— ${d.name}${d.company ? " · " + d.company : ""}\n${d.email}`)}`;
    a.target = "_blank"; a.rel = "noopener"; a.click();
  });
  f.addEventListener("submit", async e => {
    e.preventDefault();
    if (!Object.keys(checks).map(check).every(Boolean)) return;
    const btn = $("#cf-send"), st = $("#cf-status");
    btn.disabled = true; st.textContent = t.sending;
    try {
      const r = await fetch("/api/contact", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(vals()) });
      if (!r.ok) throw 0;
      f.reset(); st.textContent = t.sentOk; toast(t.sentOk);
    } catch { st.textContent = t.sendFail; }
    btn.disabled = false;
  });
}

/* ---------------- 3D character ---------------- */
const photoMode = () => (C.profile.heroMode || "photo") !== "3d";
const S = { renderer:null, scene:null, camera:null, model:null, particles:null, lights:{}, loaded:false, failed:false, progress:0,
            mx:0, my:0, drag:0, dragging:false, lastX:0, start:0, visible:true, slot:null, sp:0 };

function init3D(){
  addEventListener("pointermove", e => { S.mx = (e.clientX/innerWidth - .5)*2; S.my = (e.clientY/innerHeight - .5)*2; if (S.slot && S.photo) { S.slot.style.setProperty("--mx", S.mx.toFixed(3)); S.slot.style.setProperty("--my", S.my.toFixed(3)); } });
  if (photoMode()) S.photo = true;
  if (!window.THREE || !THREE.GLTFLoader) { S.failed = true; return; }
  try {
    const r = new THREE.WebGLRenderer({ antialias:true, alpha:true, powerPreference:"high-performance" });
    r.setPixelRatio(Math.min(devicePixelRatio, 2));
    r.outputEncoding = THREE.sRGBEncoding;
    r.toneMapping = THREE.ACESFilmicToneMapping; r.toneMappingExposure = 1.05;
    S.renderer = r;
  } catch(e) { S.failed = true; return; }
  const scene = S.scene = new THREE.Scene();
  const pm = new THREE.PMREMGenerator(S.renderer);
  scene.environment = pm.fromScene(new THREE.RoomEnvironment(), 0.04).texture;
  S.camera = new THREE.PerspectiveCamera(30, 1, 0.1, 50);

  const key = new THREE.DirectionalLight(0xffffff, 1.4); key.position.set(2, 3, 4); scene.add(key);
  const rimA = new THREE.PointLight(new THREE.Color(C.appearance?.accent || "#287BFF"), 6, 8); rimA.position.set(-2, 1.5, -1.2); scene.add(rimA);
  const rimB = new THREE.PointLight(new THREE.Color(C.appearance?.accent2 || "#36D9FF"), 4, 8); rimB.position.set(2, 0.5, -1); scene.add(rimB);
  const follow = new THREE.PointLight(0x9fd8ff, 1.6, 6); follow.position.set(0, 1, 2); scene.add(follow);
  scene.add(new THREE.AmbientLight(0x8899bb, 0.35));
  S.lights = { key, rimA, rimB, follow };

  // particles
  const n = reduced ? 120 : 420, pos = new Float32Array(n*3);
  for (let i=0;i<n;i++){ const a = Math.random()*Math.PI*2, rr = 0.6 + Math.random()*1.6; pos[i*3] = Math.cos(a)*rr; pos[i*3+1] = (Math.random()-0.5)*2.6; pos[i*3+2] = Math.sin(a)*rr - 0.4; }
  const g = new THREE.BufferGeometry(); g.setAttribute("position", new THREE.BufferAttribute(pos,3));
  const cv = document.createElement("canvas"); cv.width = cv.height = 64; const cx = cv.getContext("2d");
  const grd = cx.createRadialGradient(32,32,0,32,32,32); grd.addColorStop(0,"rgba(255,255,255,1)"); grd.addColorStop(.3,"rgba(120,200,255,.6)"); grd.addColorStop(1,"rgba(0,0,0,0)"); cx.fillStyle = grd; cx.fillRect(0,0,64,64);
  const mat = new THREE.PointsMaterial({ size:0.035, map:new THREE.CanvasTexture(cv), transparent:true, depthWrite:false, blending:THREE.AdditiveBlending, color:new THREE.Color(C.appearance?.accent2 || "#36D9FF") });
  S.particles = new THREE.Points(g, mat); scene.add(S.particles);

  if (photoMode()) { S.photo = true; S.start = performance.now(); }
  else new THREE.GLTFLoader().load(safeUrl(C.profile.model), gltf => {
    const m = gltf.scene;
    const box = new THREE.Box3().setFromObject(m), size = box.getSize(new THREE.Vector3()), ctr = box.getCenter(new THREE.Vector3());
    const s = 1.9 / size.y; m.scale.setScalar(s); m.position.sub(ctr.multiplyScalar(s));
    m.traverse(o => { if (o.isMesh && o.material) { o.material.envMapIntensity = 0.9; if (o.material.metalness !== undefined) o.material.metalness = Math.min(o.material.metalness, 0.35); } });
    const pivot = new THREE.Group(); pivot.add(m); scene.add(pivot);
    S.model = pivot; S.loaded = true; S.start = performance.now();
    $$("[data-slot]").forEach(x => x.classList.add("has3d"));
    resize3D();
  }, xhr => {
    if (xhr.total) { S.progress = xhr.loaded / xhr.total; const el = $("[data-load-pct]"); if (el) el.textContent = `${L().loading3d} ${Math.round(S.progress*100)}%`; setProgress(30 + S.progress*70); }
  }, () => { S.failed = true; });

  const c = S.renderer.domElement;
  c.addEventListener("pointerdown", e => { S.dragging = true; S.lastX = e.clientX; c.setPointerCapture(e.pointerId); });
  c.addEventListener("pointermove", e => { if (!S.dragging) return; S.drag += (e.clientX - S.lastX) * 0.01; S.lastX = e.clientX; });
  c.addEventListener("pointerup", () => S.dragging = false);
  c.addEventListener("pointercancel", () => S.dragging = false);
  document.addEventListener("visibilitychange", () => S.visible = !document.hidden);
  addEventListener("resize", resize3D);
  addEventListener("scroll", onScroll, { passive:true });
  requestAnimationFrame(loop);
}

function attach3D(){
  const slot = $("[data-slot]");
  S.slot = slot;
  if (slot && S.photo) slot.classList.add("photo-mode");
  if (!slot || !S.renderer) return;
  $(".slot-inner", slot).appendChild(S.renderer.domElement);
  if (S.loaded) { slot.classList.add("has3d"); S.start = performance.now(); }
  resize3D(); onScroll();
}

function resize3D(){
  if (!S.renderer || !S.slot) return;
  const r = S.slot.getBoundingClientRect(); const w = Math.max(1, r.width), h = Math.max(1, r.height);
  S.renderer.setSize(w, h, false);
  S.camera.aspect = w / h;
  // fit the full figure (height 1.9) with a margin, also when the slot is narrow
  const fitH = 2.1, vfov = S.camera.fov * Math.PI/180;
  let dist = (fitH/2) / Math.tan(vfov/2);
  const hfov = 2*Math.atan(Math.tan(vfov/2)*S.camera.aspect);
  dist = Math.max(dist, (0.9/2) / Math.tan(hfov/2));
  S.camera.position.set(0, 0.05, dist); S.camera.lookAt(0, 0, 0);
  S.camera.updateProjectionMatrix();
}

function onScroll(){
  if (!S.slot) return;
  const sp = Math.max(0, Math.min(1, scrollY / (innerHeight * 0.9)));
  S.slot.style.setProperty("--sp", reduced ? 0 : sp.toFixed(3));
  S.sp = sp;
}

const easeOut = x => 1 - Math.pow(1 - x, 3);
function loop(now){
  requestAnimationFrame(loop);
  if (!S.visible || !S.slot || !document.body.contains(S.slot)) return;
  const t = now / 1000;
  if (S.model) {
    const k = reduced ? 1 : Math.min(1, (now - S.start) / 1600), e = easeOut(k);
    const targetY = S.mx * 0.45 + S.drag;
    S.model.rotation.y += ((-0.9 * (1-e) + targetY) - S.model.rotation.y) * 0.08;
    S.model.rotation.x += ((S.my * 0.06) - S.model.rotation.x) * 0.06;
    S.model.position.y = (reduced ? 0 : Math.sin(t * 1.2) * 0.03) - (1-e) * 0.35;
    S.model.scale.setScalar(0.86 + 0.14 * e);
    if (!S.dragging) S.drag *= 0.97;
  }
  if (S.particles && !reduced) { S.particles.rotation.y = t * 0.05; S.particles.position.y = Math.sin(t*0.5)*0.05; }
  S.lights.follow && S.lights.follow.position.set(S.mx * 2.2, 1 - S.my * 1.5, 2);
  S.renderer.render(S.scene, S.camera);
}

/* ---------------- admin dashboard ---------------- */
const ST_OPTS = [["", "—"], ["completed","Completed / مكتمل"], ["progress","In progress / قيد التنفيذ"], ["prototype","Prototype / نموذج أولي"]];
const SCHEMAS = {
  projects: { title:p=>tx(p.title)||p.id, blank:()=>({ id:"project-"+Date.now().toString(36), cat:(C.projectCats[0]||{}).id, visible:true, status:"", title:{ar:"",en:""}, desc:{ar:"",en:""}, tech:[], cover:"", gallery:[], demo:"", source:"" }),
    fields:[["title","i18n","Title / العنوان"],["desc","i18nText","Description / الوصف"],["id","slug","Link id"],["cat","select","Category / المجال",()=>C.projectCats.map(c=>[c.id,tx(c.name)])],["status","select","Status / الحالة",()=>ST_OPTS],["visible","check","Visible on site / ظاهر في الموقع"],["tech","list","Technologies (comma separated)"],["demo","text","Live demo URL"],["source","text","Source code URL"],["cover","image","Cover image / صورة الغلاف"],["gallery","images","Gallery / صور إضافية"]] },
  experience: { title:e=>`${tx(e.role)} — ${tx(e.company)}`, blank:()=>({ company:{ar:"",en:""}, role:{ar:"",en:""}, from:"", to:"", points:{ar:[],en:[]} }),
    fields:[["role","i18n","Position / المسمى"],["company","i18n","Company / الشركة"],["from","text","From / من"],["to","text","To / إلى"],["points","i18nList","Responsibilities, one per line / المسؤوليات، كل واحدة في سطر"]] },
  skills: { title:s=>tx(s.name), blank:()=>({ cat:(C.skillCats[0]||{}).id, name:{ar:"",en:""}, level:null }),
    fields:[["name","i18n","Skill / المهارة"],["cat","select","Category / الفئة",()=>C.skillCats.map(c=>[c.id,tx(c.name)])],["level","level","Level 0–100 (leave empty to hide the bar)"]] },
  services: { title:s=>tx(s.title), blank:()=>({ icon:"star", title:{ar:"",en:""}, desc:{ar:"",en:""} }),
    fields:[["title","i18n","Title / العنوان"],["desc","i18nText","Description / الوصف"],["icon","text","Icon name (lucide.dev)"]] },
  highlights: { title:h=>tx(h.title), blank:()=>({ icon:"star", title:{ar:"",en:""}, text:{ar:"",en:""} }),
    fields:[["title","i18n","Title / العنوان"],["text","i18nText","Text / النص"],["icon","text","Icon name (lucide.dev)"]] },
  education: { title:e=>tx(e.title), blank:()=>({ title:{ar:"",en:""}, school:{ar:"",en:""}, spec:{ar:"",en:""}, year:"" }),
    fields:[["title","i18n","Qualification / المؤهل"],["school","i18n","School / المدرسة"],["spec","i18n","Specialization / التخصص"],["year","text","Year / السنة"]] },
  languages: { title:l=>tx(l.name), blank:()=>({ name:{ar:"",en:""}, level:{ar:"",en:""} }),
    fields:[["name","i18n","Language / اللغة"],["level","i18n","Level / المستوى"]] }
};
const PROFILE_FIELDS = [["profile.heroMode","select","Hero visual / شكل الواجهة",()=>[["photo","Photo / صورة"],["3d","3D model / مجسم 3D"]]],["profile.name","i18n","Full name / الاسم"],["profile.short","i18n","Short name (hero) / الاسم المختصر"],["profile.title","i18n","Professional title / المسمى"],["profile.intro","i18nText","Introduction / المقدمة"],["profile.identity","i18nList","Identity keywords, one per line / الكلمات المميزة"],["profile.location","i18n","Location / الموقع"],["about","i18nList","About paragraphs, one per line / فقرات عنّي"],["recruit","i18nText","Recruitment message / رسالة التوظيف"],["profile.photo","image","Hero photo, transparent background / صورة الواجهة بخلفية شفافة"],["profile.photoHd","image","Profile photo (CV) / صورة السيرة الذاتية"]];
const CONTACT_FIELDS = [["profile.email","text","Email"],["profile.phone","text","Phone"],["profile.whatsapp","text","WhatsApp number with country code (e.g. 9665…)"],["profile.linkedin","text","LinkedIn URL"],["profile.github","text","GitHub URL"]];
const ADMIN_TABS = [["messages","inbox","Messages / الرسايل"],["profile","user","Profile / الملف"],["contact","phone","Contact / التواصل"],["projects","folder-kanban","Projects / المشاريع"],["experience","briefcase","Experience / الخبرة"],["skills","sparkles","Skills / المهارات"],["services","layers","Services / الخدمات"],["highlights","layout-grid","Highlights / البطاقات"],["education","graduation-cap","Education & languages"],["cv","file-text","CV files / ملفات السيرة"],["appearance","palette","Appearance / الشكل"],["data","database","Backup / نسخة احتياطية"]];

const getP = (obj, path) => path.split(".").reduce((o,k) => o == null ? o : o[k], obj);
const setP = (obj, path, val) => { const ks = path.split("."); const last = ks.pop(); const o = ks.reduce((o,k) => (o[k] ??= (isNaN(k)?{}:[])), obj); o[last] = val; };

function fieldHTML(path, kind, label, opts){
  const v = getP(C, path);
  const id = "a-" + path.replace(/\./g,"-");
  const both = (inner) => `<div class="full" style="display:flex;flex-direction:column;gap:6px"><span style="font-size:14px;font-weight:600">${esc(label)}</span><div class="fields">${inner}</div></div>`;
  switch (kind) {
    case "i18n": return both(["ar","en"].map(l=>`<label class="f" for="${id}-${l}"><span class="note">${l==="ar"?"عربي":"English"}</span><input id="${id}-${l}" data-path="${path}.${l}" dir="${l==="ar"?"rtl":"ltr"}" value="${esc(v?.[l])}"></label>`).join(""));
    case "i18nText": return both(["ar","en"].map(l=>`<label class="f" for="${id}-${l}"><span class="note">${l==="ar"?"عربي":"English"}</span><textarea id="${id}-${l}" data-path="${path}.${l}" dir="${l==="ar"?"rtl":"ltr"}" style="min-height:90px">${esc(v?.[l])}</textarea></label>`).join(""));
    case "i18nList": return both(["ar","en"].map(l=>`<label class="f" for="${id}-${l}"><span class="note">${l==="ar"?"عربي":"English"}</span><textarea id="${id}-${l}" data-path="${path}.${l}" data-kind="lines" dir="${l==="ar"?"rtl":"ltr"}">${esc((v?.[l]||[]).join("\n"))}</textarea></label>`).join(""));
    case "text": case "slug": return `<label class="f" for="${id}">${esc(label)}<input id="${id}" data-path="${path}" ${kind==="slug"?'data-kind="slug"':""} dir="ltr" value="${esc(v)}"></label>`;
    case "level": return `<label class="f" for="${id}">${esc(label)}<input id="${id}" data-path="${path}" data-kind="level" type="number" min="0" max="100" value="${v ?? ""}"></label>`;
    case "list": return `<label class="f" for="${id}">${esc(label)}<input id="${id}" data-path="${path}" data-kind="list" dir="ltr" value="${esc((v||[]).join(", "))}"></label>`;
    case "check": return `<label class="f" for="${id}" style="flex-direction:row;align-items:center;gap:10px"><input id="${id}" type="checkbox" data-path="${path}" data-kind="check" style="width:auto" ${v!==false?"checked":""}>${esc(label)}</label>`;
    case "select": return `<label class="f" for="${id}">${esc(label)}<select id="${id}" data-path="${path}">${opts().map(([k,n])=>`<option value="${esc(k)}" ${k===v?"selected":""}>${esc(n)}</option>`).join("")}</select></label>`;
    case "image": return `<div class="f" style="display:flex;flex-direction:column;gap:8px"><span style="font-size:14px;font-weight:600">${esc(label)}</span><div class="thumbs">${v?`<figure><img src="${esc(safeUrl(v))}" alt=""><button type="button" data-clear="${path}" aria-label="Remove">×</button></figure>`:""}</div><label class="btn small" style="align-self:flex-start">${ic("upload")}Upload<input type="file" accept="image/*" data-upload="${path}" hidden></label></div>`;
    case "images": return `<div class="f full" style="display:flex;flex-direction:column;gap:8px"><span style="font-size:14px;font-weight:600">${esc(label)}</span><div class="thumbs">${(v||[]).map((u,i)=>`<figure><img src="${esc(safeUrl(u))}" alt=""><button type="button" data-unlist="${path}" data-i="${i}" aria-label="Remove">×</button></figure>`).join("")}</div><label class="btn small" style="align-self:flex-start">${ic("image-plus")}Add images<input type="file" accept="image/*" multiple data-upload-many="${path}" hidden></label></div>`;
  }
  return "";
}

function listEditor(key){
  const sc = SCHEMAS[key], arr = C[key] || [];
  return `<div class="panel card"><div class="item-head"><h3>${esc(ADMIN_TABS.find(x=>x[0]===key)?.[2] || key)}</h3><button class="btn small primary" type="button" data-add="${key}">${ic("plus")}Add / إضافة</button></div>
    ${arr.map((it,i)=>`<div class="item"><div class="item-head"><b>${esc(sc.title(it) || "—")}</b><div class="item-tools">
      <button class="icon-btn" type="button" data-move="${key}" data-i="${i}" data-d="-1" aria-label="Move up" ${i===0?"disabled":""}>${ic("arrow-up")}</button>
      <button class="icon-btn" type="button" data-move="${key}" data-i="${i}" data-d="1" aria-label="Move down" ${i===arr.length-1?"disabled":""}>${ic("arrow-down")}</button>
      <button class="btn small danger" type="button" data-del="${key}" data-i="${i}">${ic("trash-2")}Delete</button></div></div>
      <div class="fields">${sc.fields.map(([f,k,l,o])=>fieldHTML(`${key}.${i}.${f}`,k,l,o)).join("")}</div></div>`).join("")}
  </div>`;
}

function adminPanel(){
  switch (adminTab) {
    case "profile": return `<div class="panel card"><h3>Profile / الملف الشخصي</h3><div class="fields">${PROFILE_FIELDS.map(f=>fieldHTML(...f)).join("")}</div></div>`;
    case "contact": return `<div class="panel card"><h3>Contact / بيانات التواصل</h3><p class="note">Empty fields are hidden on the site. / الحقول الفاضية مش بتظهر في الموقع.</p><div class="fields">${CONTACT_FIELDS.map(f=>fieldHTML(...f)).join("")}</div></div>`;
    case "education": return listEditor("education") + listEditor("languages");
    case "cv": return `<div class="panel card"><h3>CV files / ملفات السيرة الذاتية (PDF)</h3><div class="fields">
      ${["ar","en"].map(l=>`<div class="f" style="display:flex;flex-direction:column;gap:8px"><span style="font-weight:600">${l==="ar"?"Arabic CV / السيرة بالعربي":"English CV"}</span><span class="note" style="overflow-wrap:anywhere">${esc(C.cv?.[l]||"—")}</span><label class="btn small" style="align-self:flex-start">${ic("upload")}Upload PDF<input type="file" accept="application/pdf" data-upload="cv.${l}" hidden></label></div>`).join("")}</div></div>`;
    case "appearance": {
      const presets = [["#287BFF","#36D9FF"],["#7B61FF","#36D9FF"],["#00B37E","#7CF5C4"],["#E0A458","#FFE1A8"],["#FF4D8D","#FFB86B"]];
      return `<div class="panel card"><h3>Appearance / الألوان</h3><div class="swatches">${presets.map(([a,b])=>`<button type="button" class="swatch" data-preset="${a},${b}" aria-pressed="${C.appearance?.accent===a}" style="background:linear-gradient(135deg,${a},${b})" aria-label="${a}"></button>`).join("")}</div>
        <div class="fields"><label class="f" for="a-acc">Main accent<input id="a-acc" type="color" data-path="appearance.accent" value="${esc(C.appearance?.accent||"#287BFF")}"></label><label class="f" for="a-acc2">Second accent<input id="a-acc2" type="color" data-path="appearance.accent2" value="${esc(C.appearance?.accent2||"#36D9FF")}"></label></div></div>`;
    }
    case "messages": return `<div class="panel card"><div class="item-head"><h3>Messages / الرسايل</h3><button class="btn small" type="button" id="msg-refresh">${ic("refresh-cw")}Refresh</button></div><div id="msg-list" style="display:flex;flex-direction:column;gap:12px"><p class="note">Loading… / جاري التحميل</p></div></div>`;
    case "data": return `<div class="panel card"><h3>Backup / نسخة احتياطية</h3><p class="note">Export all site content as a JSON file, or import one. / صدّر كل محتوى الموقع كملف، أو ارفع ملف.</p>
      <div class="send-row"><button class="btn" type="button" id="a-export">${ic("download")}Export content.json</button><label class="btn">${ic("upload")}Import<input type="file" accept="application/json" id="a-import" hidden></label></div></div>`;
    default: return listEditor(adminTab);
  }
}

function viewAdmin(){
  if (!canEdit) { setTimeout(() => location.href = "/admin", 0); return `<div class="glass lock"><span class="ic">${ic("lock")}</span><h2>${esc(L().adminLocked)}</h2><p class="muted">${esc(L().adminLockedSub)}</p><a class="btn" href="#home">${esc(L().nav.home)}</a></div>`; }
  return `<div style="margin-bottom:28px"><span class="eyebrow rv">${esc(L().nav.admin)}</span><h1 class="page-title rv" style="--i:1;font-size:clamp(30px,4vw,44px)">Admin dashboard / لوحة التحكم</h1></div>
  <div class="admin">
    <div class="admin-nav card" id="admin-nav">${ADMIN_TABS.map(([k,i,n])=>`<button type="button" data-tab="${k}" aria-pressed="${adminTab===k}">${ic(i)}${esc(n)}</button>`).join("")}</div>
    <div class="admin-body">
      <div id="admin-panel" style="display:flex;flex-direction:column;gap:16px">${adminPanel()}</div>
      <div class="savebar glass"><span class="msg" id="save-msg">${dirty ? "Unsaved changes / تعديلات لم تُحفظ" : "All changes saved / كل التعديلات محفوظة"}</span><a class="btn small" href="#home">Preview / معاينة</a><form method="post" action="/api/logout" style="display:contents"><button class="btn small" type="submit">${ic("log-out")}Logout</button></form><button class="btn primary" type="button" id="a-save" ${dirty?"":"disabled"}>${ic("save")}Save & publish / احفظ وانشر</button></div>
    </div>
  </div>`;
}

function markDirty(){ dirty = true; const m = $("#save-msg"); if (m) m.textContent = "Unsaved changes / تعديلات لم تُحفظ"; const b = $("#a-save"); if (b) b.disabled = false; }
function rerenderPanel(){ $("#admin-panel").innerHTML = adminPanel(); icons(); if (adminTab === "messages") loadMessages(); }

async function uploadFile(file){
  const fd = new FormData(); fd.append("file", file);
  const r = await fetch("/api/upload", { method:"POST", body:fd });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) throw { message: j.error || "Upload failed / الرفع فشل" };
  return j.url;
}

function wireAdmin(){
  if (!canEdit) return;
  $("#admin-nav").addEventListener("click", e => { const b = e.target.closest("[data-tab]"); if (!b) return; adminTab = b.dataset.tab; $$("#admin-nav button").forEach(x=>x.setAttribute("aria-pressed", x===b)); rerenderPanel(); });
  const panel = $("#admin-panel");
  panel.addEventListener("input", e => {
    const el = e.target, path = el.dataset.path; if (!path) return;
    let v = el.value;
    switch (el.dataset.kind) {
      case "lines": v = v.split("\n").map(s=>s.trim()).filter(Boolean); break;
      case "list": v = v.split(",").map(s=>s.trim()).filter(Boolean); break;
      case "level": v = v === "" ? null : Math.max(0, Math.min(100, +v)); break;
      case "check": v = el.checked; break;
      case "slug": v = v.toLowerCase().replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,""); break;
    }
    setP(C, path, v); markDirty();
    if (path.startsWith("appearance")) applyChrome(), setNav("admin");
  });
  panel.addEventListener("change", async e => {
    const el = e.target;
    if (el.type === "checkbox" && el.dataset.path) { setP(C, el.dataset.path, el.checked); markDirty(); }
    if (el.tagName === "SELECT" && el.dataset.path) { setP(C, el.dataset.path, el.value); markDirty(); }
    const one = el.dataset.upload, many = el.dataset.uploadMany;
    if ((one || many) && el.files.length) {
      toast("Uploading… / جاري الرفع");
      try {
        if (one) setP(C, one, await uploadFile(el.files[0]));
        else { const arr = getP(C, many) || []; for (const f of el.files) arr.push(await uploadFile(f)); setP(C, many, arr); }
        markDirty(); rerenderPanel(); toast("Uploaded / اترفع");
      } catch(err) { toast((err && err.message) || "Upload failed / الرفع فشل"); }
    }
    if (el.id === "a-import" && el.files[0]) {
      try { const j = JSON.parse(await el.files[0].text()); if (!j.profile) throw 0; C = j; markDirty(); applyChrome(); setNav("admin"); rerenderPanel(); toast("Imported. Review, then save / اتستورد، راجع واحفظ"); }
      catch { toast("That file isn't a valid content file / الملف ده مش ملف محتوى صحيح"); }
    }
  });
  panel.addEventListener("click", async e => {
    const b = e.target.closest("button"); if (!b) return;
    if (b.dataset.add) { const k = b.dataset.add; (C[k] ??= []).push(SCHEMAS[k].blank()); markDirty(); rerenderPanel(); }
    if (b.dataset.del) { const k = b.dataset.del, i = +b.dataset.i;
      if (b.dataset.confirm !== "1") { b.dataset.confirm = "1"; b.innerHTML = `${ic("trash-2")}Confirm delete / تأكيد الحذف`; icons(); return; }
      C[k].splice(i,1); markDirty(); rerenderPanel(); }
    if (b.dataset.move) { const k = b.dataset.move, i = +b.dataset.i, d = +b.dataset.d, a = C[k]; [a[i], a[i+d]] = [a[i+d], a[i]]; markDirty(); rerenderPanel(); }
    if (b.dataset.clear) { setP(C, b.dataset.clear, ""); markDirty(); rerenderPanel(); }
    if (b.dataset.unlist) { getP(C, b.dataset.unlist).splice(+b.dataset.i, 1); markDirty(); rerenderPanel(); }
    if (b.dataset.preset) { const [a1,a2] = b.dataset.preset.split(","); C.appearance = { accent:a1, accent2:a2 }; markDirty(); applyChrome(); setNav("admin"); rerenderPanel(); }
    if (b.id === "a-export") exportContent();
    if (b.id === "msg-refresh") loadMessages();
    if (b.dataset.delmsg) {
      if (b.dataset.confirm !== "1") { b.dataset.confirm = "1"; b.innerHTML = `${ic("trash-2")}Confirm / تأكيد`; icons(); return; }
      await fetch("/api/messages?id=" + encodeURIComponent(b.dataset.delmsg), { method:"DELETE" }); loadMessages();
    }
  });
  $("#a-save").addEventListener("click", saveContent);
  if (adminTab === "messages") loadMessages();
}

function exportContent(){
  const url = URL.createObjectURL(new Blob([JSON.stringify(C, null, 2)], { type:"application/json" }));
  const a = document.createElement("a"); a.href = url; a.download = "content.json"; a.click();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

async function saveContent(){
  const btn = $("#a-save"), msg = $("#save-msg");
  btn.disabled = true; msg.textContent = "Saving… / جاري الحفظ";
  try {
    const r = await fetch("/api/content", { method:"PUT", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(C) });
    const j = await r.json().catch(() => ({}));
    if (r.status === 401) { location.href = "/admin"; return; }
    if (!r.ok) throw j;
    dirty = false; msg.textContent = "Saved and published / اتحفظ واتنشر"; toast("Published / اتنشر");
  } catch(e) {
    btn.disabled = false;
    msg.textContent = (e && e.error) || "Saving failed. Export a backup so nothing is lost. / الحفظ فشل، صدّر نسخة احتياطية.";
  }
}

async function loadMessages(){
  const box = $("#msg-list"); if (!box) return;
  try {
    const r = await fetch("/api/messages"); const j = await r.json();
    if (!r.ok) throw j;
    box.innerHTML = j.messages.length ? j.messages.map(m => `<div class="item"><div class="item-head"><b dir="auto">${esc(m.subject)}</b><span class="note" style="direction:ltr">${esc(new Date(m.createdAt).toLocaleString())}</span></div>
      <div class="note">${esc(m.name)}${m.company ? " · " + esc(m.company) : ""} · <span style="user-select:all">${esc(m.email)}</span></div>
      <p style="white-space:pre-wrap" dir="auto">${esc(m.message)}</p>
      <div class="item-tools"><a class="btn small" href="mailto:${esc(m.email)}?subject=${encodeURIComponent("Re: " + m.subject)}">${ic("reply")}Reply / رد</a><button class="btn small danger" type="button" data-delmsg="${esc(m.id)}">${ic("trash-2")}Delete</button></div></div>`).join("")
      : `<p class="note">No messages yet. / مفيش رسايل لسه.</p>`;
    icons();
  } catch(e) { box.innerHTML = `<p class="note">${esc((e && e.error) || "Couldn't load messages. / الرسايل ماتحمّلتش.")}</p>`; }
}

/* ---------------- boot ---------------- */
async function boot(){
  setProgress(8);
  try { C = JSON.parse(document.getElementById("site-content").textContent); }
  catch(e) { $("#load-pct").textContent = "Couldn't load the site content. Reload the page to try again."; return; }
  canEdit = !!window.__ADMIN__;
  if (canEdit && !location.hash) history.replaceState(null, "", "#admin");
  setProgress(30);
  applyChrome();
  init3D();
  go(parseHash(), false);
  const finish = () => { setProgress(100); setTimeout(() => $("#loader").classList.add("done"), 250); };
  // reveal once the model is in, or after 2.5 s at most
  const t0 = performance.now();
  (function wait(){ if (S.loaded || S.failed || S.photo || performance.now() - t0 > 2500) finish(); else requestAnimationFrame(wait); })();

  window.addEventListener("hashchange", () => { $("#drawer").hidden = true; go(parseHash()); });
  window.addEventListener("resize", () => setNav(current?.page));
  document.fonts && document.fonts.ready.then(() => setNav(current?.page));
  $("#lang-btn").addEventListener("click", () => { lang = lang === "ar" ? "en" : "ar"; try { localStorage.setItem("lang", lang); } catch(e) {} applyChrome(); renderView(current); });
  $("#menu-btn").addEventListener("click", () => { $("#drawer").hidden = false; icons(); });
  $("#drawer-close").addEventListener("click", () => $("#drawer").hidden = true);
  window.addEventListener("beforeunload", e => { if (dirty) { e.preventDefault(); e.returnValue = ""; } });

}
boot();
