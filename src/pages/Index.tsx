import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white border-b border-black">
        <div className="container mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold tracking-tighter">
            SEO / ЛАПТЕВ
          </a>
          <div className="flex space-x-8">
            <a href="#services" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Услуги
            </a>
            <a href="#about" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              О специалисте
            </a>
            <a href="#contact" className="text-sm uppercase tracking-widest hover:text-red-600 transition-colors">
              Связаться
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 md:px-8 container mx-auto">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 mb-8 md:mb-0">
            <p className="text-sm uppercase tracking-widest text-red-600 mb-4">Спецпредложение · Только 5 мест</p>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-none mb-6">
              SEO
              <br />
              ЗА 3
              <br />
              МЕС.
            </h1>
            <p className="text-xl max-w-xl mb-8">
              Комплексное продвижение сайта: от технической оптимизации до роста трафика. Фиксированная цена — 15 000 ₽/мес. Без скрытых платежей.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-white text-sm uppercase tracking-widest px-8 py-4 hover:bg-red-600 transition-colors"
            >
              Занять место
            </a>
          </div>
          <div className="col-span-12 md:col-span-5 flex items-end justify-center">
            <div className="relative w-full">
              <div className="bg-red-600 p-8 text-white">
                <p className="text-sm uppercase tracking-widest mb-2">Стоимость за 3 месяца</p>
                <p className="text-6xl font-bold tracking-tighter">45 000 ₽</p>
                <p className="mt-2 text-white/70 line-through text-xl">от 150 000 ₽ на рынке</p>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-black flex items-center justify-center">
                <span className="text-white text-xs uppercase tracking-widest text-center leading-tight">5<br/>мест</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 md:px-8 bg-black text-white">
        <div className="container mx-auto">
          <h2 className="text-6xl font-bold tracking-tighter mb-4">ЧТО ВХОДИТ</h2>
          <p className="text-neutral-400 mb-12 text-lg max-w-xl">Четыре блока работ за 3 месяца — всё, что нужно для роста позиций в поиске.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-neutral-800">
            {/* Block 1 */}
            <div className="border-r border-b border-neutral-800 p-8 group hover:bg-red-600 transition-colors duration-300">
              <span className="text-5xl font-bold text-neutral-700 group-hover:text-white/30 transition-colors">01</span>
              <h3 className="text-xl font-bold mt-6 mb-4">Технический фундамент</h3>
              <ul className="space-y-2 text-neutral-400 group-hover:text-white/80 transition-colors text-sm">
                <li>Sitemap.xml и robots.txt</li>
                <li>Микроразметка страниц</li>
                <li>Оптимизация скорости</li>
                <li>Исправление ошибок индексации</li>
              </ul>
              <p className="mt-4 text-xs text-neutral-600 group-hover:text-white/50 uppercase tracking-widest">Навсегда</p>
            </div>

            {/* Block 2 */}
            <div className="border-r border-b border-neutral-800 p-8 group hover:bg-red-600 transition-colors duration-300">
              <span className="text-5xl font-bold text-neutral-700 group-hover:text-white/30 transition-colors">02</span>
              <h3 className="text-xl font-bold mt-6 mb-4">Адаптированный контент</h3>
              <ul className="space-y-2 text-neutral-400 group-hover:text-white/80 transition-colors text-sm">
                <li>Оптимизация Title и Description</li>
                <li>Заголовки H1–H3 под запросы</li>
                <li>Работа с текстами сайта</li>
                <li>Настройка перелинковки</li>
              </ul>
              <p className="mt-4 text-xs text-neutral-600 group-hover:text-white/50 uppercase tracking-widest">Трафик</p>
            </div>

            {/* Block 3 */}
            <div className="border-r border-b border-neutral-800 p-8 group hover:bg-red-600 transition-colors duration-300">
              <span className="text-5xl font-bold text-neutral-700 group-hover:text-white/30 transition-colors">03</span>
              <h3 className="text-xl font-bold mt-6 mb-4">Аналитика и видимость</h3>
              <ul className="space-y-2 text-neutral-400 group-hover:text-white/80 transition-colors text-sm">
                <li>Яндекс.Метрика и Google Analytics</li>
                <li>Настройка целей (заявки, звонки)</li>
                <li>Яндекс.Вебмастер и Search Console</li>
                <li>Google My Business / Яндекс.Бизнес</li>
              </ul>
              <p className="mt-4 text-xs text-neutral-600 group-hover:text-white/50 uppercase tracking-widest">Видимость</p>
            </div>

            {/* Block 4 */}
            <div className="border-r border-b border-neutral-800 p-8 group hover:bg-red-600 transition-colors duration-300">
              <span className="text-5xl font-bold text-neutral-700 group-hover:text-white/30 transition-colors">04</span>
              <h3 className="text-xl font-bold mt-6 mb-4">Отчётность и рост</h3>
              <ul className="space-y-2 text-neutral-400 group-hover:text-white/80 transition-colors text-sm">
                <li>Ежемесячный отчёт по позициям</li>
                <li>Динамика трафика и заявок</li>
                <li>Семантическое ядро</li>
                <li>Фиксация и улучшение позиций</li>
              </ul>
              <p className="mt-4 text-xs text-neutral-600 group-hover:text-white/50 uppercase tracking-widest">Контроль</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-5">
              <h2 className="text-6xl font-bold tracking-tighter mb-8">О СПЕЦИ&shy;АЛИСТЕ</h2>
              <div className="aspect-[4/5] bg-neutral-100 relative mb-8 md:mb-0 flex items-center justify-center">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-black"></div>
                <span className="text-8xl font-bold tracking-tighter text-neutral-200 select-none z-10">СЛ</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-7 md:pt-24">
              <p className="text-xl mb-6">
                Лаптев Сергей Алексеевич — разработчик и технический специалист, который знает ваш сайт изнутри. Именно поэтому SEO-правки внедряются быстро, без лишних затрат на сторонних программистов.
              </p>
              <p className="mb-6">
                Сейчас я прохожу сертифицированное обучение по SEO-продвижению и запускаю ограниченный спецпроект — всего 5 компаний получат полное сопровождение по продвижению на особых условиях.
              </p>
              <p className="mb-6">
                Даже если вы решите не продолжать продвижение после 3 месяцев, оптимизированный сайт останется с вами и продолжит приносить трафик. Это актив, который работает вечно.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Преимущества</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><Icon name="Check" size={16} className="mt-0.5 text-red-600 shrink-0" />Знаю ваш сайт изнутри</li>
                    <li className="flex items-start gap-2"><Icon name="Check" size={16} className="mt-0.5 text-red-600 shrink-0" />Сам вношу правки в код</li>
                    <li className="flex items-start gap-2"><Icon name="Check" size={16} className="mt-0.5 text-red-600 shrink-0" />Фиксированная цена</li>
                    <li className="flex items-start gap-2"><Icon name="Check" size={16} className="mt-0.5 text-red-600 shrink-0" />Результат остаётся навсегда</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-2">Условия</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2"><Icon name="CircleDot" size={16} className="mt-0.5 shrink-0" />Всего 5 мест</li>
                    <li className="flex items-start gap-2"><Icon name="CircleDot" size={16} className="mt-0.5 shrink-0" />Срок — 3 месяца</li>
                    <li className="flex items-start gap-2"><Icon name="CircleDot" size={16} className="mt-0.5 shrink-0" />45 000 ₽ или 15 000/мес.</li>
                    <li className="flex items-start gap-2"><Icon name="CircleDot" size={16} className="mt-0.5 shrink-0" />После набора — 120 000 ₽</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 md:px-8 bg-red-600 text-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-6xl font-bold tracking-tighter mb-8">ЗАНЯТЬ МЕСТО</h2>
              <p className="text-xl mb-8">
                Осталось мест: <strong>5 из 5</strong>. Напишите или позвоните — обсудим ваш сайт и начнём работу.
              </p>
              <div className="space-y-4">
                <p className="flex items-center gap-4">
                  <span className="w-24 text-sm uppercase tracking-widest opacity-70">Телефон</span>
                  <a href="tel:+79109497915" className="hover:underline font-bold text-lg">
                    +7 (910) 949-79-15
                  </a>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-24 text-sm uppercase tracking-widest opacity-70">Цена</span>
                  <span className="font-bold text-lg">15 000 ₽/мес. · Фикс</span>
                </p>
                <p className="flex items-center gap-4">
                  <span className="w-24 text-sm uppercase tracking-widest opacity-70">Срок</span>
                  <span className="font-bold text-lg">3 месяца интенсивной работы</span>
                </p>
              </div>
              <div className="mt-10 pt-10 border-t border-white/30">
                <p className="text-sm opacity-70">После набора 5 клиентов стоимость аналогичного пакета вырастет до 120 000 ₽.</p>
              </div>
            </div>
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm uppercase tracking-widest mb-2">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm uppercase tracking-widest mb-2">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label htmlFor="site" className="block text-sm uppercase tracking-widest mb-2">
                    Адрес сайта
                  </label>
                  <input
                    type="text"
                    id="site"
                    className="w-full bg-transparent border-b-2 border-white py-2 px-0 focus:outline-none focus:border-black placeholder-white/50"
                    placeholder="https://ваш-сайт.ru"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-black text-white text-sm uppercase tracking-widest py-4 hover:bg-white hover:text-black transition-colors"
                >
                  Отправить заявку
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 md:px-8 border-t border-black">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <span className="font-bold tracking-tighter">SEO / ЛАПТЕВ</span>
          <span className="text-sm text-neutral-500">Лаптев Сергей Алексеевич · +7 (910) 949-79-15</span>
          <span className="text-sm text-neutral-400">Спецпредложение действует до закрытия 5 мест</span>
        </div>
      </footer>
    </main>
  );
}
