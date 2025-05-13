import Image from "next/image";

// Texto descritivo
const textoDescricao = `
O graxaim-do-campo habita o Cone Sul da América do Sul e pode ser encontrado no norte e centro da Argentina, Uruguai, leste da Bolívia, Paraguai e sul do Brasil.Prefere habitats abertos de pampas, muitas vezes perto de terras agrícolas, mas também podem ser encontrados em florestas montanhosas ou chaco, cerrado seco e habitats de pântanos. É mais comum abaixo de 1.000 m (3.300 pés) de elevação, mas pode habitar campos de puna até 3.500 m.Também é comum em cumes, matagais secos, dunas de areia costeiras, florestas abertas e em habitats modificados, como pastagens e áreas cultivadas. Fonte: https://www.biodiversity4all.org/taxa/423656-Lycalopex-gymnocerca

`;

// Conta quantas linhas tem o texto
const textoTemMaisDe20Linhas = textoDescricao.trim().split("\n").length > 20;

export default function AmanitaMuscariaPage() {
  return (
    <div className="min-h-screen w-full bg-[#B1DABB] flex items-center justify-center px-4 md:px-20">
      <div
        className={`max-w-6xl w-full flex ${
          textoTemMaisDe20Linhas ? "flex-col" : "flex-col md:flex-row"
        } items-start md:items-center justify-center gap-12 py-20`}
      >
        <div className="flex flex-col items-center space-y-4 md:w-1/2">
          {/Substitui a ultimar parte pelo nome do arquivo de imagem da espécie. Substitui o Alt também pela descriçao da espécie, isso é importante pra leitura da tela/}
          <Image
            src="/Feed/graxaim.jpg"
            alt="raposa selvagem"
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Graxaim
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            {/Cola aqui o nome científico do bicho/vegetal/fungo entre parenteses, se nao tiver no arquivo procura no google/}
            (Lycalopex gymnocercus)
          </div>
        </div>

        {/* Linha divisória */}
        {textoTemMaisDe20Linhas ? (
          <div className="h-[1px] bg-green-900 w-full my-4" />
        ) : (
          <>
            <div className="hidden md:block w-[1px] bg-green-900 self-stretch"></div>
            <div className="block md:hidden h-[1px] bg-green-900 w-full my-4"></div>
          </>
        )}

        {/* Texto dinâmico */}
        <div className="md:w-1/2 text-lg text-black text-justify leading-relaxed space-y-4 whitespace-pre-line px-4 md:px-0 max-w-[700px] mx-auto">
          {textoDescricao
            .trim()
            .split("\n\n")
            .map((paragrafo, idx) => (
              <p key={idx}>{paragrafo}</p>
            ))}
        </div>
      </div>
    </div>
  );
}