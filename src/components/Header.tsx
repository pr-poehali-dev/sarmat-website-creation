import Icon from "@/components/ui/icon";

interface HeaderProps {
  scrolled: boolean;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
  scrollTo: (id: string) => void;
}

const NAV_ITEMS = [
  { label: "О компании", id: "about" },
  { label: "Промышленность", id: "b2b" },
  { label: "Частным лицам", id: "b2c" },
  { label: "Портфолио", id: "portfolio" },
  { label: "Как мы работаем", id: "process" },
  { label: "Контакты", id: "contacts" },
];

export default function Header({ scrolled, menuOpen, setMenuOpen, scrollTo }: HeaderProps) {
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-graphite/95 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex flex-col leading-none">
          <span className="font-montserrat text-white tracking-widest font-black text-4xl">САРМАТ</span>
          <span className="text-ochre text-[10px] font-medium tracking-[0.3em] uppercase">завод металлоконструкций</span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map(item => (
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
            {NAV_ITEMS.map(item => (
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
  );
}