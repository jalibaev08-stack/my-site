import { GraduationCap, MessageCircle, Star } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">

      {/* HERO */}
      <section className="px-6 py-24 text-center bg-gradient-to-b from-violet-900/30 to-transparent">
        <GraduationCap className="mx-auto mb-6 w-16 h-16 text-violet-400" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Образовательный центр «ЧААРЧЫК»
        </h1>
        <p className="text-gray-300 max-w-xl mx-auto">
          Курсы русского и английского языка для детей и взрослых
        </p>
      </section>

      {/* COURSES */}
      <section className="px-6 py-16 max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        <div className="bg-[#11111a] p-6 rounded-xl border border-violet-500/20">
          <Star className="text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Русский язык</h3>
          <p className="text-gray-400">От 1500 сом в месяц</p>
        </div>

        <div className="bg-[#11111a] p-6 rounded-xl border border-violet-500/20">
          <Star className="text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Английский язык</h3>
          <p className="text-gray-400">От 2000 сом в месяц</p>
        </div>

        <div className="bg-[#11111a] p-6 rounded-xl border border-violet-500/20">
          <Star className="text-violet-400 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Подготовка к школе</h3>
          <p className="text-gray-400">От 1200 сом в месяц</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-6 py-16 text-center">
        <MessageCircle className="mx-auto mb-4 text-violet-400" />
        <h2 className="text-2xl font-bold mb-2">Свяжитесь с нами</h2>
        <p className="text-gray-400">
          WhatsApp: +996 XXX XX XX XX
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} ЧААРЧЫК
      </footer>
    </div>
  );
}
