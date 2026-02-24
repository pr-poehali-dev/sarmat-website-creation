import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGES = [
  "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/ee6a71c0-7de3-40f5-8b7d-d547f239325d.jpg",
  "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/889f845c-8c56-4071-88e9-f0a958aec090.jpg",
];

const PORTFOLIO_ITEMS = [
  { id: 1, cat: "industrial", title: "Каркас склада 2400 м²", year: "2024", client: "АО «АгроЮг»", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/7c5b02b4-96dd-4f1c-9046-ad86362ec961.jpg" },
  { id: 2, cat: "industrial", title: "Металлоконструкции цеха", year: "2023", client: "ООО «Волгаметалл»", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/ee6a71c0-7de3-40f5-8b7d-d547f239325d.jpg" },
  { id: 3, cat: "industrial", title: "Стеллажные системы", year: "2024", client: "ТД «Сталь»", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/7c5b02b4-96dd-4f1c-9046-ad86362ec961.jpg" },
  { id: 4, cat: "industrial", title: "Ёмкости для АПК 50 м³", year: "2023", client: "КФХ «Степь»", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/ee6a71c0-7de3-40f5-8b7d-d547f239325d.jpg" },
  { id: 5, cat: "private", title: "Откатные ворота с автоматикой", year: "2024", client: "Частный заказ, Волжский", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/889f845c-8c56-4071-88e9-f0a958aec090.jpg" },
  { id: 6, cat: "private", title: "Навес для двух авто", year: "2024", client: "Частный заказ, Камышин", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/889f845c-8c56-4071-88e9-f0a958aec090.jpg" },
  { id: 7, cat: "private", title: "Мангальная зона с беседкой", year: "2023", client: "Частный заказ, Саратов", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/889f845c-8c56-4071-88e9-f0a958aec090.jpg" },
  { id: 8, cat: "private", title: "Забор из металлоштакетника", year: "2024", client: "Частный заказ, Волгоград", img: "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/889f845c-8c56-4071-88e9-f0a958aec090.jpg" },
];

const ADVANTAGES = [
  { icon: "Award", text: "Опыт более 10 лет" },
  { icon: "Settings", text: "Полный цикл: от чертежа до доставки" },
  { icon: "FileText", text: "Разработка КМД или работа по вашим чертежам" },
  { icon: "Wrench", text: "Собственный парк оборудования" },
  { icon: "CheckCircle", text: "Контроль качества на каждом этапе" },
  { icon: "Truck", text: "Доставка в любой регион России" },
  { icon: "Palette", text: "Помощь в разработке дизайна изделий" },
  { icon: "Users", text: "Индивидуальный подход к каждому заказу" },
];

const PROCESS_STEPS = [
  { num: "01", title: "Заявка", desc: "Звонок или форма на сайте — расскажите о задаче" },
  { num: "02", title: "Консультация", desc: "Расчёт стоимости, подбор материала, разработка чертежа" },
  { num: "03", title: "Согласование", desc: "Утверждаем стоимость и сроки, подписываем договор" },
  { num: "04", title: "Изготовление", desc: "Производство с фотоотчётом по запросу" },
  { num: "05", title: "Доставка", desc: "Отгрузка собственным транспортом или ТК" },
  { num: "06", title: "Поддержка", desc: "Консультации и гарантия после сдачи объекта" },
];

const B2B_SERVICES = [
  { icon: "Building2", title: "Строительные конструкции", desc: "Колонны, фермы, балки, прогоны" },
  { icon: "Layers", title: "Складское оборудование", desc: "Стеллажи, платформы, антресоли" },
  { icon: "Tractor", title: "Изделия для АПК", desc: "Загоны, кормушки, ёмкости, бункеры" },
  { icon: "Copy", title: "Серийное производство", desc: "Тираж по вашим чертежам и ТУ" },
  { icon: "Cpu", title: "Инжиниринг под ключ", desc: "Проектирование КМД с расчётом нагрузок" },
];

const B2C_SERVICES = [
  { icon: "Shield", title: "Заборы и ограждения", desc: "Профнастил, сетка, металлоштакетник" },
  { icon: "DoorOpen", title: "Ворота и калитки", desc: "Распашные, откатные, с автоматикой" },
  { icon: "Car", title: "Навесы и козырьки", desc: "Для авто, над крыльцом, террасой" },
  { icon: "Flame", title: "Мангалы и беседки", desc: "Печи, садовая мебель, барбекю-зоны" },
];

export default function Index() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"industrial" | "private">("industrial");
  const [lightbox, setLightbox] = useState<null | typeof PORTFOLIO_ITEMS[0]>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "", type: "business" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setHeroIdx(i => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", phone: "", comment: "", type: "business" });
  };

  const filtered = PORTFOLIO_ITEMS.filter(p => p.cat === activeTab);

  return (
    <div className="min-h-screen font-golos bg-white">

      {/* HEADER */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-graphite/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none">
            <span className="font-montserrat font-black text-2xl text-white tracking-widest">САРМАТ</span>
            <span className="text-ochre text-[10px] font-medium tracking-[0.3em] uppercase">завод металлоконструкций</span>
          </button>

          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "О компании", id: "about" },
              { label: "Промышленность", id: "b2b" },
              { label: "Частным лицам", id: "b2c" },
              { label: "Портфолио", id: "portfolio" },
              { label: "Как мы работаем", id: "process" },
              { label: "Контакты", id: "contacts" },
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-white/80 hover:text-ochre text-sm font-medium transition-colors duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="tel:+78442000000" className="text-ochre font-montserrat font-semibold text-sm hover:text-white transition-colors">
              +7 (8442) 00-00-00
            </a>
            <button
              onClick={() => scrollTo("contacts")}
              className="bg-terracotta hover:bg-terracotta/90 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all hover:scale-105"
            >
              Заказать звонок
            </button>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-graphite/98 backdrop-blur-md border-t border-white/10">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {[
                { label: "О компании", id: "about" },
                { label: "Промышленность", id: "b2b" },
                { label: "Частным лицам", id: "b2c" },
                { label: "Портфолио", id: "portfolio" },
                { label: "Как мы работаем", id: "process" },
                { label: "Контакты", id: "contacts" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white/80 hover:text-ochre text-left py-2 font-medium border-b border-white/5 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a href="tel:+78442000000" className="text-ochre font-semibold mt-2">+7 (8442) 00-00-00</a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="hero" className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {HERO_IMAGES.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: heroIdx === i ? 1 : 0 }}
          >
            <img src={img} alt="Сармат производство" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/50 to-graphite/80" />
          </div>
        ))}

        <div className="relative container mx-auto px-4 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-ochre/20 border border-ochre/40 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-ochre animate-pulse" />
              <span className="text-ochre text-sm font-medium">Камышин · Юг России · Поволжье</span>
            </div>
            <h1 className="font-montserrat font-black text-4xl md:text-6xl leading-tight mb-4" style={{ textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
              Производство<br />
              <span className="text-ochre">металлоконструкций</span><br />
              полного цикла
            </h1>
            <p className="text-white/80 text-lg md:text-xl mb-8 max-w-xl">
              Более 10 лет опыта. От чертежа до доставки. Промышленность, строительство, АПК и частные заказы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("b2b")}
                className="flex items-center justify-center gap-2 bg-ochre hover:bg-ochre/90 text-white font-montserrat font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
              >
                🏭 Промышленным заказчикам
              </button>
              <button
                onClick={() => scrollTo("b2c")}
                className="flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-montserrat font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
              >
                🏠 Частным лицам
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {HERO_IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => setHeroIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${heroIdx === i ? "bg-ochre w-8" : "bg-white/40 w-2"}`}
            />
          ))}
        </div>
      </section>

      {/* STATS */}
      <div className="bg-graphite text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { val: "10+", label: "лет на рынке" },
              { val: "500+", label: "реализованных объектов" },
              { val: "3", label: "региона присутствия" },
              { val: "100%", label: "собственное производство" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-montserrat font-black text-3xl md:text-4xl text-ochre">{s.val}</div>
                <div className="text-white/60 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* О КОМПАНИИ */}
      <section id="about" className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-ochre font-semibold text-sm uppercase tracking-widest mb-3">О компании</div>
              <h2 className="font-montserrat font-black text-3xl md:text-4xl text-graphite mb-6 leading-tight">
                «САРМАТ» — надёжный партнёр<br />в металле
              </h2>
              <p className="text-graphite/70 text-lg leading-relaxed mb-4">
                Более 10 лет выпускаем сварные конструкции для промышленности, строительства и АПК. Базируемся в Камышине, работаем на Юге, в Поволжье и Центральной России.
              </p>
              <p className="text-graphite/70 leading-relaxed mb-8">
                Полный цикл: закупка металла, разработка КМД, резка, гибка, сварка, покраска, доставка. Инжиниринг под ключ: воплощаем чертежи заказчика или проектируем с нуля с расчётом нагрузок и оптимизацией бюджета.
              </p>
              <div className="flex flex-wrap gap-3">
                {["Качество", "Сроки", "Честность"].map(v => (
                  <span key={v} className="bg-ochre text-white font-montserrat font-semibold px-5 py-2 rounded-full text-sm">
                    {v}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={HERO_IMAGES[0]}
                alt="Производство Сармат"
                className="w-full h-80 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 flex items-center gap-3">
                <div className="w-12 h-12 bg-ochre/10 rounded-lg flex items-center justify-center">
                  <Icon name="MapPin" size={20} className="text-ochre" />
                </div>
                <div>
                  <div className="font-montserrat font-bold text-graphite text-sm">Камышин</div>
                  <div className="text-graphite/60 text-xs">Волгоградская область</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B */}
      <section id="b2b" className="py-20 bg-graphite relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "repeating-linear-gradient(0deg, #B68B40 0, #B68B40 1px, transparent 1px, transparent 50px), repeating-linear-gradient(90deg, #B68B40 0, #B68B40 1px, transparent 1px, transparent 50px)" }} />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🏭</span>
            <span className="text-ochre font-semibold text-sm uppercase tracking-widest">Для бизнеса</span>
          </div>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white mb-3 leading-tight">
            Промышленным заказчикам
          </h2>
          <p className="text-white/60 text-lg mb-12 max-w-xl">
            Строительство, промышленность, АПК — работаем с юрлицами и ИП
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {B2B_SERVICES.map((s, i) => (
              <div key={i} className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-ochre/40 rounded-2xl p-6 transition-all duration-300 group">
                <div className="w-12 h-12 bg-ochre/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-ochre/20 transition-colors">
                  <Icon name={s.icon} fallback="Settings" size={22} className="text-ochre" />
                </div>
                <h3 className="font-montserrat font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
            <div className="bg-ochre rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="font-montserrat font-black text-white text-xl mb-2">Нужен расчёт?</h3>
                <p className="text-white/80 text-sm">Отправьте задание — подготовим КП в течение 24 часов</p>
              </div>
              <button
                onClick={() => { setFormData(f => ({...f, type: "business"})); scrollTo("contacts"); }}
                className="mt-6 bg-white text-ochre font-montserrat font-bold px-5 py-3 rounded-xl hover:bg-white/90 transition-all hover:scale-105 text-sm"
              >
                Запросить КП →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* B2C */}
      <section id="b2c" className="py-20 bg-beige relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-forest/5 rounded-full translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-4 relative">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-4xl">🏠</span>
            <span className="text-forest font-semibold text-sm uppercase tracking-widest">Для частных лиц</span>
          </div>
          <h2 className="font-montserrat font-black text-3xl md:text-4xl text-graphite mb-3 leading-tight">
            Для дома и участка
          </h2>
          <p className="text-graphite/60 text-lg mb-12 max-w-xl">
            Уютные и надёжные изделия из металла для вашего дома и сада
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {B2C_SERVICES.map((s, i) => (
              <div key={i} className="bg-white hover:shadow-xl rounded-2xl p-6 transition-all duration-300 group border border-transparent hover:border-forest/20">
                <div className="w-12 h-12 bg-forest/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-forest/20 transition-colors">
                  <Icon name={s.icon} fallback="Star" size={22} className="text-forest" />
                </div>
                <h3 className="font-montserrat font-bold text-graphite text-lg mb-2">{s.title}</h3>
                <p className="text-graphite/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-forest to-forest/80 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="font-montserrat font-black text-2xl mb-2">Помогаем с дизайном бесплатно</h3>
              <p className="text-white/80">Наши мастера предложат варианты под ваш участок и бюджет</p>
            </div>
            <button
              onClick={() => { setFormData(f => ({...f, type: "private"})); scrollTo("contacts"); }}
              className="flex-shrink-0 bg-white text-forest font-montserrat font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-all hover:scale-105 whitespace-nowrap"
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-ochre font-semibold text-sm uppercase tracking-widest mb-3">Наши работы</div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-graphite">Портфолио</h2>
          </div>
          <div className="flex justify-center gap-2 mb-10">
            <button
              onClick={() => setActiveTab("industrial")}
              className={`font-montserrat font-semibold px-6 py-3 rounded-xl transition-all ${activeTab === "industrial" ? "bg-graphite text-white shadow-lg" : "bg-beige text-graphite hover:bg-graphite/10"}`}
            >
              🏭 Промышленные объекты
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`font-montserrat font-semibold px-6 py-3 rounded-xl transition-all ${activeTab === "private" ? "bg-graphite text-white shadow-lg" : "bg-beige text-graphite hover:bg-graphite/10"}`}
            >
              🏠 Частные заказы
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filtered.map(item => (
              <div
                key={item.id}
                className="group relative cursor-pointer rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                onClick={() => setLightbox(item)}
              >
                <img src={item.img} alt={item.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white font-montserrat font-bold text-sm">{item.title}</p>
                  <p className="text-white/70 text-xs">{item.client} · {item.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-4xl w-full relative" onClick={e => e.stopPropagation()}>
            <img src={lightbox.img} alt={lightbox.title} className="w-full max-h-[70vh] object-cover rounded-2xl" />
            <div className="mt-4 text-center">
              <p className="text-white font-montserrat font-bold text-xl">{lightbox.title}</p>
              <p className="text-white/60">{lightbox.client} · {lightbox.year}</p>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-4 -right-4 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>
        </div>
      )}

      {/* ADVANTAGES */}
      <section className="py-20 bg-beige">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-ochre font-semibold text-sm uppercase tracking-widest mb-3">Почему нас выбирают</div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-graphite">Наши преимущества</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADVANTAGES.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all group">
                <div className="w-10 h-10 bg-ochre/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-ochre group-hover:scale-110 transition-all duration-300">
                  <Icon name={a.icon} fallback="CheckCircle" size={20} className="text-ochre group-hover:text-white transition-colors" />
                </div>
                <p className="font-montserrat font-semibold text-graphite leading-snug">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="py-20 bg-graphite">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-ochre font-semibold text-sm uppercase tracking-widest mb-3">Процесс работы</div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-white">Как мы работаем</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((s, i) => (
              <div key={i} className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all">
                <div className="font-montserrat font-black text-6xl text-white/5 absolute top-4 right-4 leading-none select-none">{s.num}</div>
                <div className="font-montserrat font-black text-ochre text-xl mb-2">{s.num}</div>
                <h3 className="font-montserrat font-bold text-white text-lg mb-2">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="text-ochre font-semibold text-sm uppercase tracking-widest mb-3">Связь с нами</div>
            <h2 className="font-montserrat font-black text-3xl md:text-4xl text-graphite">Контакты</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6 mb-10">
                {[
                  { icon: "MapPin", label: "Адрес производства", val: "Камышин, Волгоградская область" },
                  { icon: "Phone", label: "Телефон", val: "+7 (8442) 00-00-00" },
                  { icon: "Mail", label: "Email", val: "info@sarmat-zm.ru" },
                ].map((c, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-ochre/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={c.icon} fallback="Info" size={20} className="text-ochre" />
                    </div>
                    <div>
                      <div className="text-graphite/50 text-sm mb-0.5">{c.label}</div>
                      <div className="font-montserrat font-semibold text-graphite">{c.val}</div>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-graphite/50 text-sm mb-3">Также пишите нам:</p>
              <div className="flex gap-3">
                <a href="https://wa.me/78442000000" className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm">
                  <Icon name="MessageCircle" size={16} /> WhatsApp
                </a>
                <a href="https://t.me/sarmat_zm" className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-3 rounded-xl transition-all hover:scale-105 text-sm">
                  <Icon name="Send" size={16} /> Telegram
                </a>
              </div>
            </div>

            <div className="bg-beige rounded-2xl p-8">
              <h3 className="font-montserrat font-black text-graphite text-xl mb-6">Оставьте заявку</h3>
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setFormData(f => ({...f, type: "business"}))}
                  className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${formData.type === "business" ? "bg-graphite text-white" : "bg-white text-graphite hover:bg-white/80"}`}
                >
                  🏭 Бизнес / КП
                </button>
                <button
                  onClick={() => setFormData(f => ({...f, type: "private"}))}
                  className={`flex-1 py-2.5 rounded-lg font-semibold text-sm transition-all ${formData.type === "private" ? "bg-graphite text-white" : "bg-white text-graphite hover:bg-white/80"}`}
                >
                  🏠 Частный заказ
                </button>
              </div>

              {submitted ? (
                <div className="bg-forest/10 border border-forest/30 rounded-xl p-6 text-center">
                  <div className="text-4xl mb-3">✅</div>
                  <h4 className="font-montserrat font-bold text-graphite text-lg mb-1">Заявка отправлена!</h4>
                  <p className="text-graphite/60 text-sm">Мы свяжемся с вами в течение 2 часов</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm text-graphite/60 mb-1.5 block">Ваше имя *</label>
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData(f => ({...f, name: e.target.value}))}
                      placeholder="Иван Петров"
                      className="w-full bg-white border border-graphite/15 rounded-xl px-4 py-3 text-graphite placeholder:text-graphite/30 focus:outline-none focus:ring-2 focus:ring-ochre/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-graphite/60 mb-1.5 block">Телефон *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={e => setFormData(f => ({...f, phone: e.target.value}))}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-white border border-graphite/15 rounded-xl px-4 py-3 text-graphite placeholder:text-graphite/30 focus:outline-none focus:ring-2 focus:ring-ochre/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-graphite/60 mb-1.5 block">
                      {formData.type === "business" ? "Опишите задачу или прикрепите ТЗ" : "Что хотите сделать?"}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.comment}
                      onChange={e => setFormData(f => ({...f, comment: e.target.value}))}
                      placeholder={formData.type === "business" ? "Нужны металлоконструкции для склада 500 м²..." : "Хочу ворота откатные, въезд 4 метра..."}
                      className="w-full bg-white border border-graphite/15 rounded-xl px-4 py-3 text-graphite placeholder:text-graphite/30 focus:outline-none focus:ring-2 focus:ring-ochre/40 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-terracotta hover:bg-terracotta/90 text-white font-montserrat font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg text-lg"
                  >
                    {formData.type === "business" ? "Запросить коммерческое предложение" : "Получить консультацию"}
                  </button>
                  <p className="text-graphite/40 text-xs text-center">Нажимая кнопку, вы соглашаетесь на обработку персональных данных</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-graphite text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div>
              <div className="font-montserrat font-black text-2xl tracking-widest">САРМАТ</div>
              <div className="text-ochre text-xs tracking-[0.3em] uppercase mt-1">завод металлоконструкций</div>
            </div>
            <div className="flex flex-wrap gap-4">
              {[
                { label: "О компании", id: "about" },
                { label: "Промышленность", id: "b2b" },
                { label: "Частным лицам", id: "b2c" },
                { label: "Портфолио", id: "portfolio" },
                { label: "Контакты", id: "contacts" },
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-white/50 hover:text-ochre text-sm transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="https://vk.com/sarmat_zm" className="w-10 h-10 bg-white/10 hover:bg-ochre rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <span className="text-white text-sm font-bold">ВК</span>
              </a>
              <a href="https://t.me/sarmat_zm" className="w-10 h-10 bg-white/10 hover:bg-sky-500 rounded-lg flex items-center justify-center transition-all hover:scale-110">
                <Icon name="Send" size={16} className="text-white" />
              </a>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-white/30 text-sm">
            <div>ООО «Сармат-ЗМ» · ИНН: уточняется · ОГРН: уточняется</div>
            <div>© 2025 САРМАТ. Все права защищены</div>
          </div>
        </div>
      </footer>

      {/* FLOATING BUTTONS */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <a
          href="https://wa.me/78442000000"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
          title="WhatsApp"
        >
          <Icon name="MessageCircle" size={24} className="text-white" />
        </a>
        <a
          href="https://t.me/sarmat_zm"
          className="w-14 h-14 bg-sky-500 hover:bg-sky-600 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110"
          title="Telegram"
        >
          <Icon name="Send" size={24} className="text-white" />
        </a>
      </div>
    </div>
  );
}