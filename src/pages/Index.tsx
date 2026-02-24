import { useState, useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactsSection from "@/components/ContactsSection";

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

export default function Index() {
  const [heroIdx, setHeroIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"industrial" | "private">("industrial");
  const [lightbox, setLightbox] = useState<null | typeof PORTFOLIO_ITEMS[0]>(null);
  const [formData, setFormData] = useState({ name: "", phone: "", comment: "", type: "business" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setHeroIdx(i => (i + 1) % 2), 6000);
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
      <Header
        scrolled={scrolled}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSection
        heroIdx={heroIdx}
        setHeroIdx={setHeroIdx}
        scrollTo={scrollTo}
        setFormData={setFormData}
      />
      <PortfolioSection
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lightbox={lightbox}
        setLightbox={setLightbox}
        filtered={filtered}
      />
      <ContactsSection
        formData={formData}
        setFormData={setFormData}
        submitted={submitted}
        handleSubmit={handleSubmit}
        scrollTo={scrollTo}
      />
    </div>
  );
}
