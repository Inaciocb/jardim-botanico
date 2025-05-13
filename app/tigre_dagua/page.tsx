import Image from "next/image";

const textoDescricao = `
Um total de 11 espécies de quelônios ocorrem no Estado do Rio Grande do Sul, sendo cinco marinhas e seis de água doce.Entre as espécies límnicas, Trachemys dorbigni é a mais abundante e a que ocorre no maior número de habitats. Esta espécie é a mais meridional do seu gênero nas Américas e é a espécie mais impactada devido estar sujeita a um grande esforço de coleta de ovos destinados à geração de filhotes para o mercado de animais de estimação.. Os machos são mais escuros devido à melanização, além disto apresentam um grande aumento no tamanho da cauda em relação ao tamanho da carapaça quando comparado a fêmeas de mesmo comprimento da carapaça. Fonte: dissertação de Alex Bager (2003).

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
            src="/Feed/tigre_dagua.jpg"
            alt="tartaruga de agua"
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Tigre-d’água
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            (Trachemys dorbigni)
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