import Image from "next/image";

// Texto descritivo
const textoDescricao = `
Conhecido popularmente como Tatu-mulita, possui distribuição desconhecida no RS e apresenta pequeno porte quando comparado aos demais tatus do Estado.Apresenta de 6 à 7 cintas móveis em sua carapaça. Possuem orelhas verticais e inclinadas para trás, lembrando as orelhas de uma Mula, por isso a origem do nome popular “Tatu-mulita”. Alimentam-se principalmente de invertebrados, pequenos vertebrados, tubérculos, frutas e fungos, portanto são considerados onívoros ao invés de insectívoros. Vivem em tocas que eles mesmos escavam, onde características estruturais da toca, como entrada e tamanho variam de espécie para espécie. A caça ilegal, fruto da apreciação da carne do Tatu em práticas culturais no RS, a utilização do rabo e da carapaça do Tatu como adornos, animais vítimas de predação por cães e atropelamentos ameaçam ainda mais estes animais. Fonte: https://www.ufrgs.br/faunadigitalrs/mamiferos/ordem-cingulata/familia-dasypodidae/tatu-mulita-dasypus-hybridus/

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
            src="/Feed/Dasypus_hybridus.jpg"
            alt="Tatu de armadura"
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Tatu molita
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            {/Cola aqui o nome científico do bicho/vegetal/fungo entre parenteses, se nao tiver no arquivo procura no google/}
            (Dasypus hybridus)
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