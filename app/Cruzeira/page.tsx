import Image from "next/image";

const textoDescricao = `
Conhecida popularmente como cruzeira ou urutu, é uma serpente peçonhenta, possui porte grande e de cauda curta. A dieta é composta de pequenos mamíferos, são vivíparas, quando ameaçadas acabam se enrolando, vibram a cauda e dão o bote. A peçonha pode causar acidentes fatais ou mutiladores se não forem tratados corretamente com o soro antibotrópico. Fonte: https://www.ufrgs.br/faunadigitalrs/5385-2/

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
            src="/Feed/cruzeira.jpg"
            alt="Descricao da especie"
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Cruzeira
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            (Bothrops alternatus)
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