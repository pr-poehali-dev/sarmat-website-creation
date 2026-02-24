import Icon from "@/components/ui/icon";

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

interface PortfolioItem {
  id: number;
  cat: string;
  title: string;
  year: string;
  client: string;
  img: string;
}

interface PortfolioSectionProps {
  activeTab: "industrial" | "private";
  setActiveTab: (tab: "industrial" | "private") => void;
  lightbox: PortfolioItem | null;
  setLightbox: (item: PortfolioItem | null) => void;
  filtered: PortfolioItem[];
}

export default function PortfolioSection({ activeTab, setActiveTab, lightbox, setLightbox, filtered }: PortfolioSectionProps) {
  return (
    <>
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
    </>
  );
}
