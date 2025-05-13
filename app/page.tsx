import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center">
      <section className="min-h-screen w-full bg-[#B1DABB] flex items-center justify-center px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-green-950 whitespace-nowrap">
            Sobre o Jardim:
          </h1>
          <div className="space-y-4 text-lg text-green-900 leading-relaxed text-justify max-w-3xl">
            <p>
              O Jardim Botânico da UFSM (JBSM) foi fundado em 1981. Seu acervo apresenta 349 espécies
              catalogadas, num total de aproximadamente 2500 indivíduos, distribuídas em 13 hectares. O JBSM
              tem por missão ser um local privilegiado de conservação das espécies florestais nativas do
              Rio Grande do Sul, servindo como base de apoio às atividades de ensino, pesquisa e extensão,
              assim como um centro de lazer para a comunidade em geral. É um espaço aberto para a comunidade
              em geral, com entrada franca.
            </p>
            <p><strong>Simone Messina</strong> – Direção do JBSM</p>
            <p><strong>Viviane de Oliveira Garcia</strong> – Técnica em Laboratório – Área Biologia.</p>
            <p>
              <strong>Herbário: </strong> 
              <strong>Benardete de Fátima Panno</strong> – Técnica de Laboratório – Área Biologia<br />
              <strong>Daniele Rodrigues</strong> – Técnica de Laboratório – Área Biologia.
            </p>
            <p><strong>Administração:</strong> Av. Roraima nº 1000, Prédio 13F, Campus da UFSM</p>
            <p>
              <strong>Horário de funcionamento:</strong> Segunda à sexta, das 8h às 17h. Eventualmente aos domingos, conferir
              programação nas redes sociais.
            </p>
            <hr />
            <p>
              <strong>Agendamentos de visitas escolares ou grupos (durante período letivo) pelo formulário:{" "}</strong>
              <a
                href="https://forms.gle/9GoPeqG27csYxWJ86"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-green-800 hover:text-green-600"
              >
                Clique Aqui.
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="min-h-screen w-full bg-[#4E9860] flex items-center justify-center px-4 md:px-20">
        <div className="flex flex-col md:flex-row items-start gap-8 max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-semibold text-green-950 whitespace-nowrap">
            Regras do Jardim:
          </h1>
          <ul className="list-disc list-inside text-lg text-green-950 leading-relaxed max-w-xl text-justify">
            <li>Não jogar lixo no chão.</li>
            <li>Não fumar.</li>
            <li>Não tomar bebidas alcoólicas, ou quaisquer substâncias ilícitas.</li>
            <li>Para passear com os pets, usar sempre a guia e permanecer nos entornos da sede.</li>
            <li>Não entrar com o carro sem autorização.</li>
            <li>Não portar armas, nem instrumentos destinados ao corte de vegetação, captura, caça, pesca ou quaisquer outras atividades prejudiciais à fauna e flora.</li>
            <li>Jamais abandonar animais, nem plantar em áreas abertas sem autorização.</li>
            <li>Jamais colher plantas, nem as flores, nem os frutos.</li>
            <li>Jamais capturar animais silvestres, insetos, peixes, ou qualquer outro material biológico, ainda que caídos no chão.</li>
            <li>Jamais maltratar animais silvestres, nem depredar e/ou destruir patrimônio público.</li>
            <li>Não utilizar aparelhos sonoros, a menos que utilize fones de ouvido.</li>
            <li>Sempre assinar o livro de visitações quando visitar o JB-UFSM.</li>
            <li>Respeitar as datas e horários de funcionamento.</li>
            <li>Respeitar os colegas e as orientações que são dadas durante a visitação.</li>
            <li>Lembrar sempre que um dos objetivos mais importantes do JB-UFSM é a preservação das espécies.</li>
          </ul>
        </div>
      </section>

      <section className="min-h-screen w-full bg-[#1B582A] flex items-center justify-center px-4 md:px-20">
        <div className="max-w-6xl w-full flex flex-col items-center space-y-8">

          <Link
            href="/feed"
            className="bg-white text-green-900 px-6 py-3 rounded-full shadow-md hover:bg-green-100 font-semibold transition"
          >
            Explorar Biodiversidade do Jardim
          </Link>

          <img
            src="/jardim-drone.jpg"
            alt="Vista aérea do Jardim Botânico da UFSM"
            className="w-[65%] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
          />
        </div>
      </section>
    </div>
  );
}
