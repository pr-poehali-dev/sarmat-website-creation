import Icon from "@/components/ui/icon";

interface FormData {
  name: string;
  phone: string;
  comment: string;
  type: string;
}

interface ContactsSectionProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  submitted: boolean;
  handleSubmit: (e: React.FormEvent) => void;
  scrollTo: (id: string) => void;
}

export default function ContactsSection({ formData, setFormData, submitted, handleSubmit, scrollTo }: ContactsSectionProps) {
  return (
    <>
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
              <div className="text-ochre text-xs tracking-[0.3em] uppercase mt-1">завод металлоизделий</div>
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
    </>
  );
}