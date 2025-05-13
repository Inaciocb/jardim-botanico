import Image from "next/image";

const textoDescricao = `
Basidiomas de 4-19 cm de altura, 2-2 -12 cm de largura, finos, flexíveis, coriáceo-membranosos, normalmente infundibuliformes (formato de funil). O píleo de cor palha, marrom-dourado ou enferrujado (às vezes marrom-escuro quando secos), ornamentado com cristas radiantes afiadas em forma de faca, que são frequentemente obscurecidas, exceto em direção à margem, pelo desenvolvimento de um tomento muito espesso, fulvo sujo, semelhante a feltro. Superfície himenial de cor branco-creme, tornando-se creme-ferrugem ou ocre com um tom rosado em espécimes secos. A superfície apresenta dobras obtusas radiantes que tendem a ramificar em direção à margem. Estipe central, frequentemente muito curto ou rudimentar, mas às vezes bem desenvolvido, coberto por um tomento acastanhado e preso ao substrato por um pequeno disco basal.
Habitat: em tocos mortos, troncos, galhos caídos, raízes etc.

`;

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
          <Image
            src="/Feed/cymatoderma_caperatum.jpg"
            alt="Descricao da especie"
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Cymatoderma caperatum
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            (Cymatoderma caperatum)
          </div>
        </div>

        {textoTemMaisDe20Linhas ? (
          <div className="h-[1px] bg-green-900 w-full my-4" />
        ) : (
          <>
            <div className="hidden md:block w-[1px] bg-green-900 self-stretch"></div>
            <div className="block md:hidden h-[1px] bg-green-900 w-full my-4"></div>
          </>
        )}

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