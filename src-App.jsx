import {
  GraduationCap,
  MessageCircle,
  Star
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* HERO */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-violet-900/30 to-transparent">
        <GraduationCap className="mx-auto w-14 h-14 text-violet-400 mb-6" />

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          Образовательный центр <br />
          <span className="bg-gradient-to-r from-violet-400 to-purple-600 bg-clip-text text-transparent">
            ЧААРЧЫК
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-white/70 text-lg">
          Английский • Русский • Турецкий • Математика • IQ • Активные мероприятия
        </p>

        <a
          href="https://wa.me/996990158157"
          target="_blank"
          className="inline-flex gap-3 mt-10 px-8 py-4 rounded-2xl
          bg-gradient-to-r from-violet-500 to-purple-700
          font-semibold text-lg hover:scale-105 transition"
        >
          <MessageCircle /> Записаться в WhatsApp
        </a>
      </section>

      {/* ENGLISH */}
      <PriceSection title="English (20 часов)">
        <PriceItem name="Let’s Go 1–3" price="3500 сом / 4 недели" />
        <PriceItem name="Starter" price="3500 сом / 4 недели" />
        <PriceItem name="Beginner" price="5000 сом / 6 недель" />
        <PriceItem name="Elementary" price="7000 сом / 8 недель" />
        <PriceItem name="Pre-Intermediate" price="7000 сом / 8 недель" />
        <PriceItem name="Intermediate" price="7000 сом / 8 недель" />
        <PriceItem name="Intermediate Plus" price="7000 сом / 8 недель" />
        <PriceItem name="Upper-Intermediate" price="8000 сом / 8 недель" />
        <PriceItem name="Advanced" price="8000 сом / 8 недель" />
      </PriceSection>

      {/* RUSSIAN */}
      <PriceSection title="Русский язык">
        <PriceItem name="Элементарный (20 ч)" price="3500 сом / 4 недели" />
        <PriceItem name="Начинающий (55 ч)" price="5000 сом / 8 недель" />
        <PriceItem name="Продолжающий (55 ч)" price="5000 сом / 8 недель" />
      </PriceSection>

      {/* TURKISH */}
      <PriceSection title="Türkçe">
        <PriceItem name="Temel (20 ч)" price="3500 сом / 4 недели" />
        <PriceItem name="Orta (55 ч)" price="5000 сом / 8 недель" />
        <PriceItem name="İleri (55 ч)" price="5000 сом / 8 недель" />
      </PriceSection>

      {/* MATH */}
      <PriceSection title="Математика и развитие">
        <PriceItem name="Математика" price="3500 сом" />
        <PriceItem name="Ментальная арифметика" price="3500 сом" />
        <PriceItem name="Скорочтение (Shar Okuу)" price="3500 сом" />
      </PriceSection>

      {/* PACKAGE */}
      <PriceSection title="Пакет (всё вместе)">
        <PriceItem name="Математика + Русский + Английский + Интерактив" price="6000 сом" />
      </PriceSection>

      {/* SCHOOL */}
      <PriceSection title="Мектепке даярдоо">
        <PriceItem name="Туура жазуу" price="включено" />
        <PriceItem name="Окуу" price="включено" />
        <PriceItem name="Математика" price="включено" />
        <PriceItem name="Сөз чеберчилиги" price="включено" />
        <PriceItem name="Интерактивдүү сабактар" price="5000 сом" />
      </PriceSection>

      {/* INDIVIDUAL */}
      <section className="px-6 py-16 text-center bg-gradient-to-r from-violet-600 to-purple-700">
        <h2 className="text-3xl font-bold mb-4">
          Индивидуальные занятия
        </h2>
        <p className="text-xl font-semibold">
          1 час — <span className="text-black">400 сом</span>
        </p>
      </section>

      {/* REVIEWS */}
      <section className="px-6 py-20 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Отзывы родителей
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Review text="Ребёнок начал говорить и петь на английском!" />
          <Review text="Очень сильная программа и тёплая атмосфера." />
          <Review text="Лучший центр в районе, результат виден быстро." />
        </div>
      </section>

      <footer className="py-8 text-center text-white/50">
        © {new Date().getFullYear()} Образовательный центр ЧААРЧЫК
      </footer>
    </div>
  );
}

/* COMPONENTS */

const PriceSection = ({ title, children }) => (
  <section className="px-6 py-16 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-8 text-center">{title}</h2>
    <div className="grid md:grid-cols-3 gap-6">{children}</div>
  </section>
);

const PriceItem = ({ name, price }) => (
  <div className="p-6 bg-white/5 rounded-2xl hover:scale-105 transition">
    <h3 className="font-semibold mb-2">{name}</h3>
    <p className="text-violet-400 font-bold">{price}</p>
    <a
      href="https://wa.me/996990158157"
      target="_blank"
      className="block mt-4 text-center py-2 rounded-xl
      bg-gradient-to-r from-violet-500 to-purple-700"
    >
      Записаться
    </a>
  </div>
);

const Review = ({ text }) => (
  <div className="p-6 bg-white/5 rounded-2xl">
    <div className="flex gap-1 text-yellow-400 mb-3">
      <Star /><Star /><Star /><Star /><Star />
    </div>
    <p className="text-white/70">“{text}”</p>
  </div>
);
