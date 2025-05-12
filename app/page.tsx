import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-8">
          Regras do Jardim Botânico
        </h1>

        <div className="space-y-1 text-lg text-green-900 leading-relaxed text-left">
          <p>• Não jogar lixo no chão.</p>
          <p>• Não fumar.</p>
          <p>• Não tomar bebidas alcoólicas, ou quaisquer substâncias ilícitas.</p>
          <p>
            • Para passear com os pets, usar sempre a guia e permanecer nos entornos da sede.
          </p>
          <p>• Não entrar com o carro sem autorização.</p>
          <p>
            • Não portar armas, nem instrumentos destinados ao corte de vegetação, captura, caça, pesca ou quaisquer outras atividades prejudiciais à fauna e flora.
          </p>
          <p>• Jamais abandonar animais, nem plantar em áreas abertas sem autorização.</p>
          <p>• Jamais colher plantas, nem as flores, nem os frutos.</p>
          <p>
            • Jamais capturar animais silvestres, insetos, peixes, ou qualquer outro material biológico, ainda que caídos no chão.
          </p>
          <p>
            • Jamais maltratar animais silvestres, nem depredar e/ou destruir patrimônio público.
          </p>
          <p>• Não utilizar aparelhos sonoros, a menos que utilize fones de ouvido.</p>
          <p>• Sempre assinar o livro de visitações quando visitar o JB-UFSM.</p>
          <p>• Respeitar as datas e horários de funcionamento.</p>
          <p>• Respeitar os colegas e as orientações que são dadas durante a visitação.</p>
          <p>
            • Lembrar sempre que um dos objetivos mais importantes do JB-UFSM é a preservação das espécies.
          </p>
        </div>

        <Link
          href="/feed"
          className="inline-block px-10 py-2 m-3 mb-5 bg-green-800 text-white font-bold rounded-xl hover:bg-green-700 transition"
        >
          Feed
        </Link>
      </div>
    </main>
  );
}
