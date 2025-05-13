import Image from "next/image";

// Texto descritivo
const textoDescricao = `
Emitem vocalizações que podem alcançar longas distâncias como mecanismo de manutenção do espaçamento entre os grupos e organização do grupo. Possuem uma dieta rica em folhas e  flores. Utilizam cauda preênsil para locomoção na copa das árvores, raramente são vistos no solo. Esses animais são bem adaptados a ambientes antropizados, sendo o crescimento urbano uma ameaça à espécie em decorrência de atropelamentos, eletrocussões e ataque de cães. Além disso, os bugios são importantes como indicadores da presença do vírus da febre amarela, pois são sensíveis ao vírus, levando a morte de muitos indivíduos. O bugio não transmite a febre amarela! Fonte: https://www.ufrgs.br/faunadigitalrs/mamiferos/ordem-primates/familia-atelidae/bugio-ruivo-alouatta-guariba-clamitans/

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
            src="/Feed/Bugiu_Ruivo.jpg"
            alt="bugio, macaco"
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Bugio
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            {/Cola aqui o nome científico do bicho/vegetal/fungo entre parenteses, se nao tiver no arquivo procura no google/}
            (Allouatta guariba)
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