import Image from "next/image";

// Texto descritivo
const textoDescricao = `
Ciclo de vida: quando um cogumelo está maduro, os esporos são liberado das lamelas do píleo e caem no solo. Os esporos germinam e formam hifas finas, que juntasm formam o micélio. Os micelios se agrupam e todo o conjunto forma um jovem e pequenino coguemelo.Em volta do pequeno cogumelo, forma-se uma capa protetora chamada véu universal, que o recobre enquanto cresce. Durante o crescimento, o cogumelo irá precisar de nutrientes e água. Conforme o cogumelo cresce, o véu universal se rompe e vai deixando resquícios de si no topo do píleo. Estes resquícios será chamados de escamas e, geralmente persistem no fungo maduro.
Existem mitos sobre a coleta, preparação e uso de Amanita muscaria, que estão relacionados ao período pré-cristão. Seu uso era importante em muitas celebrações e cerimônias do solstício de inverno de povos do norte da Europa e da Ásia.
 
Nos dias que antecedem o solstício de inverno, o cogumelo aparece sob as árvores, principalmente abetos e abetos vermelhos. O chapéu do cogumelo (píleo) é vermelho escuro a laranja-avermelhado com pequenas manchas branco-creme pontilhando o chapéu em um padrão irregular.
Na Ásia Central, os xamãs usavam vestimentas especiais para coletar estes cogumelos e seus casacos e calças eram vermelhos com a gola e os punhos enfeitados com pele branca e finalizados com botas pretas. O xamã coletava os cogumelos em um saco especial. Após coletar os cogumelos, o xamã retornava à sua aldeia e entrava na yurt (uma tenda portátil) pelo buraco de fumaça no telhado. isso lhe parece familiar?
Amanita muscaria é nativa de florestas coníferas e decíduas em todo o hemisfério norte temperado, mas também é encontrada em outras regiões do hemisfério sul, onde foi introduzida inadvertidamente através de pinheiros e outras plantações.
Ele existe em simbiose com as raízes de coníferas, incluindo pinheiro, abeto, abeto, bétula e cedro, mas as associações micorrízicas podem ser tripartidas, envolvendo também outras espécies de fungos. Foi relatado que rizomorfos de Boletus edulis Bull. foram frequentemente observados intimamente entrelaçados com Amanita, formando micorrizas compostas que podem facilitar o fluxo de nutrientes entre as duas espécies. Os ecossistemas florestais têm uma alta diversidade de associações micorrízicas e estão sujeitos a complexas redes de cadeias alimentares multiespécies (Luo et al. 2014; Van der Heijden et al. 2015).
Fonte: https://www.fs.usda.gov/wildflowers/ethnobotany/Mind_and_Spirit/flyagaric.shtml

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
          {/*Substitui a ultimar parte pelo nome do arquivo de imagem da espécie. Substitui o Alt também pela descriçao da espécie, isso é importante pra leitura da tela*/}
          <Image
            src="/Feed/Amanita_muscaria.jpg"
            alt="Imagem de cogumelo de corpo branco e cabeça vermelha com pontos brancos."
            width={1200}
            height={800}
            className="w-full max-w-[700px] h-auto rounded-[36px] drop-shadow-[0_8px_16px_rgba(0,0,0,0.3)]"
            priority
          />
          <div className="text-4xl md:text-5xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            Mata-moscas
          </div>
          <div className="text-3xl font-semibold text-black drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)] text-center">
            {/*Cola aqui o nome científico do bicho/vegetal/fungo entre parenteses, se nao tiver no arquivo procura no google*/}
            (Amanita Muscaria)
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
