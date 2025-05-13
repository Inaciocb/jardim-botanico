import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen pt-5 px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold text-green-900 mb-8">
        Jardim Botânico de Santa Maria
        </h1>

        <div className="space-y-1 text-lg text-green-900 leading-relaxed text-left">
          <p>O Jardim Botânico da UFSM (JBSM) foi fundado em 1981. Seu acervo apresenta 349 espécies catalogadas,
             num total de aproximadamente 2500 indivíduos, distribuídas em 13 hectares. O JBSM tem por missão ser
              um local privilegiado de conservação das espécies florestais nativas do Rio Grande do Sul, servindo como
               base de apoio às atividades de ensino, pesquisa e extensão, assim como um centro de lazer para a comunidade em geral.
               É um espaço aberto para a comunidade em geral, com entrada franca.</p>
        <br></br>
          <p>Simone Messina – Direção do JBSM </p>
        <br></br>
          <p>Viviane de Oliveira Garcia –  Técnica em Laboratório – Área Biologia.</p>
          <br></br>
          <p>
          Herbário: Benardete de Fátima Panno – Técnica de Laboratório – Área Biologia e Daniele Rodrigues – Técnica de Laboratório – Área Biologia.</p>
          <br></br>
          <p>Administração: Av. Roraima nº 1000, Prédio 13F, Campus da UFSM</p>
          <br></br>
          <p>
          – Como chegar no JB: Entrar na avenida Roraima, após passar o CCNE e HUSM dobrar à direita. Seguir reto, passar FATEC, pela estrada de acesso pelos Pains.
          </p>
          <br></br>
          <p>– Horário de funcionamento: Segunda à sexta, das 8h às 17h. Eventualmente aos domingos, conferir programação nas redes sociais.</p>
          <br></br>
          
          <p>Agendamentos de visitas escolares ou grupos (durante período letivo) pelo formulário: https://forms.gle/9GoPeqG27csYxWJ86</p>
          <br></br>
        </div>

      </div>
    </main>
  );
}
