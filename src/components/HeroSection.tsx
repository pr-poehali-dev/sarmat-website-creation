import Icon from "@/components/ui/icon";

const HERO_IMAGES = [
  "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/ee6a71c0-7de3-40f5-8b7d-d547f239325d.jpg",
  "https://cdn.poehali.dev/projects/c88af05e-5f67-4626-a3d4-202c29f58f06/files/889f845c-8c56-4071-88e9-f0a958aec090.jpg",
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

interface HeroSectionProps {
  heroIdx: number;
  setHeroIdx: (i: number) => void;
  scrollTo: (id: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<{ name: string; phone: string; comment: string; type: string }>>;
}

export default function HeroSection({ heroIdx, setHeroIdx, scrollTo, setFormData }: HeroSectionProps) {
  return (
    <>
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
              <span className="text-ochre text-sm font-medium">Юг · Поволжье · Центр России </span>
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
              >🏭 Для бизнеса</button>
              <button
                onClick={() => scrollTo("b2c")}
                className="flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta/90 text-white font-montserrat font-bold px-8 py-4 rounded-xl text-lg transition-all hover:scale-105 shadow-lg"
              >🏠 Для дома</button>
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
              <h2 className="font-montserrat font-black md:text-4xl text-graphite mb-6 leading-tight text-4xl">"САРМАТ" - ваш надежный партнер в конструкциях</h2>
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
              <h3 className="font-montserrat font-black text-2xl mb-2">Помогаем с дизайном </h3>
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
    </>
  );
}