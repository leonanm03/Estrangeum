import { Category } from "@prisma/client";

export const objects: {
  name: string;
  category: Category;
  description: string;
  ObjectImage: string[];
}[] = [
  {
    name: "Zip e Madame Samovar",
    category: "HAUNTED",
    description:
      'A xícara e o bule de "A Bela e a Fera" transformaram-se em objetos mal assombrados, emanando uma aura sinistra. Enquanto segura a xícara, é possível sentir sua presença inquietante, como se olhos invisíveis observassem atentamente. O bule distorcido parece pulsar com uma energia sombria, e à noite, ambos ganham vida, dançando em uma sinistra coreografia. Uma conexão enigmática os une, revelando segredos que desafiam a compreensão humana.',
    ObjectImage: [
      "https://images.tcdn.com.br/img/img_prod/836126/jogo_2_pecas_porcelana_a_bela_e_a_fera_samovar_e_zip_bule_e_xicara_165_2_31f9cdd1394c2c720c55fe1c15b3772d.jpeg",
      "https://images.tcdn.com.br/img/img_prod/836126/jogo_2_pecas_porcelana_a_bela_e_a_fera_samovar_e_zip_bule_e_xicara_165_3_892bec598a8bada32bfa6d30514869b7.jpeg",
      "https://images.tcdn.com.br/img/img_prod/836126/jogo_2_pecas_porcelana_a_bela_e_a_fera_samovar_e_zip_bule_e_xicara_165_4_cea59fd3fef02b521cbe83bf17ee4b6c.jpeg",
      "https://images.tcdn.com.br/img/img_prod/836126/jogo_bela_e_a_fera_madame_samovar_e_zip_2_pecas_165_1_20201125152303.jpeg",
    ],
  },
  {
    name: "Necronomicon",
    category: "MYSTERY",
    description:
      "Necronomicon trata-se do livro dos mortos, escrito por um árabe insano, com poderosas palavras que colocam seus leitores em ligação com poderosas forças, feitiços fora da compreensão humana e capaz de levar quem o lê a insanidade, distribuído clandestinamente e proibido pelo Papa Gregório IX. Ou seja, é um livro completamente do mal com conteúdo extremamente perigoso e capaz de fazer o caos com qualquer humano.",
    ObjectImage: [
      "https://4.bp.blogspot.com/-MBDI4ON56vY/VsR7POcHFJI/AAAAAAAAEyM/RglzDzQOr3g/s1600/nec_topo.jpg",
      "https://4.bp.blogspot.com/-M9GRtWI8Vog/VSKhITxCabI/AAAAAAAAc8s/yva6YYCvEcQ/s1600/tao%2Bsatanico%2Bque%2Bate%2Bos%2Bmais%2Bnotaveis%2Bfans%2Bde%2BBLACK%2BMETAL%2Bgritam%2Bfeito%2Bmenininhas%2Bao%2Bler.jpg",
      "https://universorpg.com/wp-content/uploads/2020/12/img-necronomicon-versao-impressa.jpg",
    ],
  },
  {
    name: "Wilson",
    category: "MYSTERY",
    description:
      "Wilson, o fiel companheiro de Chuck Noland, é uma bola de vôlei transformada em confidente e símbolo de sobrevivência. Com um rosto desenhado e uma marca de sangue, Wilson personifica a solidão e a insanidade enfrentadas por Chuck durante seu tempo solitário em uma ilha deserta. Apesar de sua natureza inanimada, Wilson torna-se um amigo essencial para Chuck, proporcionando consolo e uma presença tangível em um mundo vazio. Sua falta de voz é compensada pela imaginação de Chuck, que o transforma em uma entidade viva, repleta de emoções e personalidade, tornando Wilson um símbolo poderoso de conexão humana e resiliência.",
    ObjectImage: [
      "https://www.istoedinheiro.com.br/wp-content/uploads/sites/17/2021/11/wil-e1636651768417.jpg",
      "https://t.ctcdn.com.br/LUarLadsfWd63rtZUTNhHzhI05o=/915x515/smart/filters:format(webp)/i647385.png",
      "https://s2.glbimg.com/QYYboo64ofB95vKUmhrGCHv3Wlw=/0x0:725x530/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/g/J/OSr8gASC2esnZ0xV6Llg/3.glbimg.com-v1-auth-0ae9f161c1ff459593599b7ffa1a1292-images-escenic-2021-11-11-6-1636623499106.png",
      "https://img.olhardigital.com.br/wp-content/uploads/2021/11/Wilson-Naufrago.jpg",
    ],
  },
  {
    name: "Evelyn Desassossegada",
    category: "HAUNTED",
    description:
      "Evelyn Desassossegada, é uma boneca antiga que carrega um segredo sombrio. Com olhos desencontrados, um aberto e o outro fechado, ela evoca uma sensação de inquietude. Seu mecanismo falho e expressão melancólica sugerem que ela está presa entre mundos, guardando memórias e talvez até a essência de almas perdidas. Dizem que aqueles que se aproximam dela são envolvidos em eventos inexplicáveis e presságios sinistros, tornando-a um objeto mal assombrado, capaz de despertar curiosidade e medo.",
    ObjectImage: [
      "http://4.bp.blogspot.com/-5ZnSkqpPrwY/UKj7TXMG9sI/AAAAAAAAAEo/dH29OKfCikU/s320/015.JPG",
      "http://4.bp.blogspot.com/-jHYu_eywo9A/UKj8vk8wXhI/AAAAAAAAAEw/6RkDVK9i7k8/s320/008.JPG",
      "http://4.bp.blogspot.com/-Wzramte31Pk/UKkNSuJQGlI/AAAAAAAAAHI/AKTiY8EYP2g/s320/M%C3%A3ezinha+1.jpg",
      "http://4.bp.blogspot.com/-napoEDpdzMc/UKj4pz68isI/AAAAAAAAAEY/Y7DJ2nEcZO0/s320/so-2-bonecas-maezinha-da-estrela-no-estado_MLB-F-216296594_9843.jpg",
    ],
  },
  {
    name: "Caixa de lamarchand",
    category: "HAUNTED",
    description:
      "A Caixa de Lemarchand, também conhecida como a Configuração do Lamento, é um objeto misterioso e enigmático. Feita de um metal frio e adornada com intrincados padrões entrelaçados, essa caixa é muito mais do que aparenta. Diz a lenda que apenas aqueles com uma alma curiosa e um desejo insaciável por conhecimento proibido podem desvendar seus segredos sombrios. Ao manipular suas peças móveis com precisão, aqueles corajosos ou insensatos o suficiente para desvendar seus enigmas são levados a um mundo além do alcance da compreensão humana. A Caixa de Lemarchand é um portal para um reino de prazer, dor e tormento indescritíveis, onde as fronteiras entre realidade e pesadelo se desvanecem. Aqueles que ousam abrir essa caixa estão destinados a enfrentar consequências terríveis, pois ela é um artefato malévolo e sedutor, capaz de extrair o mais profundo e oculto dos desejos de quem se atreve a tocá-la.",
    ObjectImage: [
      "https://3.bp.blogspot.com/-XGKVSitp8tI/Tx9LHF8l7oI/AAAAAAAAF00/U7H4BjGuBFQ/s1600/300952-lamarchandbox_super.jpg",
      "https://ae01.alicdn.com/kf/Scb8f0a55bc5f4d12b675313edbcb3493K/Hellraiser-cubo-lemarchand-lamentando-configura-o-bloqueio-caixa-de-quebra-cabe-a-hellraiser-magia-rubik-filme.jpg",
      "https://ae01.alicdn.com/kf/Sf4ea6d59582e41f5847dc81e2172684fg.jpg?width=794&height=794&hash=1588",
    ],
  },
  {
    name: "Elmo do sonho",
    category: "MAGIC",
    description:
      "O Elmo do Sonho, usado por Morpheus, o Senhor dos Sonhos, é um objeto de grande poder e mistério. Feito de um metal escuro e reluzente, ele possui uma aura enigmática que exala sabedoria ancestral. Com seu design elegante e intricado, o Elmo do Sonho parece fundir elementos do mundo onírico e do reino dos sonhos. Ao usá-lo, Morpheus é capaz de explorar os cantos mais profundos e ocultos do subconsciente humano, navegando pelos labirintos da imaginação e manifestando-se como o guardião dos segredos noturnos. O Elmo do Sonho concede a seu usuário um domínio incomparável sobre os reinos do sono, permitindo-lhe entrar nos sonhos dos outros e influenciar os eventos que se desenrolam lá. É um artefato de poder transcendental, mas também um símbolo da responsabilidade imensa que Morpheus carrega como guardião dos sonhos de toda a humanidade.",
    ObjectImage: [
      "https://sobresagas.com.br/wp-content/uploads/2022/08/sandman-entenda-o-significado-dos-tres-objetos-magicos-de-sonho-na-serie-1200x900.jpg",
      "https://img.ibxk.com.br/2021/06/10/10155700277256.png?ims=328x",
      "https://cdn.awsli.com.br/600x1000/176/176349/produto/31053610/9c8e853f11.jpg",
    ],
  },
  {
    name: "Vira-tempo",
    category: "MAGIC",
    description:
      "O Vira-tempo é um artefato extraordinário, com uma aparência delicada e encantadora. Composto por um fino colar e um pequeno ampulheta, este objeto mágico é capaz de manipular o fluxo do tempo. Seus delicados grãos de areia dourada fluem de maneira inversa quando ativado, permitindo que seu portador retroceda no tempo e reviva momentos passados. O Vira-tempo é um instrumento precioso nas mãos de bruxos e bruxas que buscam corrigir erros, desvendar mistérios ou simplesmente desfrutar de instantes preciosos mais uma vez. No entanto, seu uso exige cautela, pois interferir no curso natural do tempo pode ter consequências imprevisíveis e perigosas. O Vira-tempo é uma prova da magia poderosa que transcende as limitações do tempo, oferecendo a oportunidade única de moldar o passado, presente e futuro de maneiras extraordinárias.",
    ObjectImage: [
      "https://thumbor.cartpanda.com/QRjEoWf3pPoXJFKUY4Ei8QDb-os=/130x0/https://assets.mycartpanda.com/static/products_images/55T07LDsz43YVzbyJZiceEzMxy5Fjv.jpg?v=13252247658",
      "https://thumbor.cartpanda.com/FKVYakzrgXUtcD602bq9tJBzYrc=/130x0/https://assets.mycartpanda.com/static/products_images/9a/28/9f/1670860692.jpg?v=13252247658",
      "https://thumbor.cartpanda.com/2tk3pGZMDmgOhpldNF_supXOP6k=/130x0/https://assets.mycartpanda.com/static/products_images/gS8J4B7xolj4HqZCdytYUHiFpIdPOX.png?v=13252247658",
    ],
  },
  {
    name: "Annabelle",
    category: "HAUNTED",
    description:
      "Annabelle, a boneca amaldiçoada, é um ícone do horror paranormal. Com seu rosto de porcelana e olhos vazios, ela evoca uma presença macabra e a sensação de estar sendo observado. Acredita-se que ela seja habitada por uma entidade demoníaca sedenta de caos, desencadeando uma série de eventos assustadores. Seus movimentos inexplicáveis, sorriso sinistro e histórias de terror associadas a ela estabelecem Annabelle como um objeto mal assombrado que desperta medo e arrepio em todos que se aproximam.",
    ObjectImage: [
      "https://i0.wp.com/sitedosgeeks.com/wp-content/uploads/2019/09/Annabelle-horror-expo.jpg?w=800&ssl=1",
      "https://img.olhardigital.com.br/wp-content/uploads/2023/01/Annabelle.png",
      "https://s2-g1.glbimg.com/SO07j6WUo4-p4Dxe0IMByPsSmPo=/0x0:1000x563/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/m/D/iKZSRkSUWOqT3S2davPw/annabelle-2-teaser.jpg",
    ],
  },
  {
    name: "A Caveira de Cristal de Akator",
    category: "ALIEN",
    description:
      "A Caveira de Cristal de Akator é uma relíquia antiga e enigmática, feita de um cristal translúcido que brilha com uma luz fascinante. Seu crânio esculpido com precisão revela detalhes intrincados, emanando uma aura de mistério e sabedoria ancestral. Com uma presença hipnotizante, a caveira exala um poder sobrenatural, sendo considerada uma fonte de conhecimento cósmico proibido. Aqueles que a buscam devem enfrentar desafios perigosos, pois ela guarda segredos que podem moldar o destino e desvendar mistérios ocultos há muito tempo. A Caveira de Cristal de Akator transcende o reino material, evocando fascínio e temor, enquanto provoca a curiosidade irresistível daqueles que se aventuram a desvendar suas verdades ocultas.",
    ObjectImage: [
      "https://img.ibxk.com.br/2012/12/materias/6478739871118315.jpg?ims=704x",
      "https://img.ibxk.com.br/2012/12/materias/64787398711182951.jpg?ims=704x",
      "https://andrewrcameron.files.wordpress.com/2016/03/crystal-skulls.jpg?w=840&h=357",
    ],
  },
  {
    name: "Tesseract",
    category: "ALIEN",
    description: `
    O Tesseract, também conhecido como o Cubo Cósmico, é uma relíquia de poder inimaginável. Com uma aparência futurista e geométrica, é um objeto cristalino de aspecto hipnotizante. Seus contornos angulares e superfície brilhante refletem uma luz intensa, revelando um labirinto de cores vibrantes contidas em seu interior. O Tesseract é um artefato de origem desconhecida, possivelmente de origem alienígena, e sua natureza transcende a compreensão humana. Acredita-se que ele contenha uma energia cósmica primordial capaz de manipular a realidade e os fundamentos do espaço-tempo. Aqueles que o controlam têm nas mãos o poder de moldar o destino e alterar o curso da história. O Tesseract é objeto de cobiça e disputas, pois seu poder é incomparável e sua influência transcende os limites do conhecimento humano.`,
    ObjectImage: [
      "https://i.etsystatic.com/24566571/r/il/052cd9/3091471348/il_794xN.3091471348_5ym0.jpg",
      "https://i.etsystatic.com/24566571/r/il/c92624/3175321717/il_794xN.3175321717_knpn.jpg",
      "https://i.etsystatic.com/24566571/r/il/bebaf9/3175333887/il_794xN.3175333887_b6o5.jpg",
    ],
  },
  {
    name: "Guarda-Roupa do Professor",
    category: "MAGIC",
    description:
      "O Guarda-Roupa do Professor é um imponente móvel de madeira escura, adornado com entalhes detalhados que contam histórias de tempos passados. Suas portas maciças, com puxadores ornamentados, escondem um segredo extraordinário. Ao abrir as portas, revela-se um espaço vazio, à primeira vista comum, mas na verdade, é uma passagem para um mundo mágico e encantado chamado Nárnia. Através desse guardião silencioso, aqueles que têm a chave certa podem embarcar em aventuras épicas e explorar terras fantásticas, encontrando criaturas extraordinárias e testemunhando o desdobramento de destinos heróicos. O Guarda-Roupa do Professor se torna um portal para a imaginação e uma ponte entre os mundos, abrindo as portas para uma jornada além dos limites da realidade.",
    ObjectImage: [
      "https://uploads.spiritfanfiction.com/historias/capitulos/201609/as-cronicas-de-narnia--o-leao-a-feiticeira-o-guarda-roupa-6604856-290920162132.jpg",
      "http://1.bp.blogspot.com/-aqQnwj53XZM/TqghBhW4gvI/AAAAAAAAAJU/Ma_G8VgvlVI/s400/especial_narnia_guarda-roupa+%25281%2529.jpg",
      "https://i0.wp.com/oquartonerd.com.br/wp-content/uploads/2020/12/narnia.png?resize=768%2C576&ssl=1",
    ],
  },
  {
    name: "Olho de Agamotto",
    category: "MAGIC",
    description:
      "O Olho de Agamotto é um artefato mágico de poder incomensurável. Incrustado em um medalhão ornamentado, o Olho em si é uma joia reluzente e enigmática, pulsando com uma luz verde mística. Seu formato circular e detalhes intricados evocam um senso de mistério e sabedoria antiga. Através do Olho de Agamotto, seu portador pode explorar os segredos ocultos do universo, revelando verdades cósmicas e manipulando o tempo ao seu comando. O brilho hipnotizante da joia parece guardar um conhecimento ancestral, enquanto confere a seu usuário um poder que transcende a compreensão humana. O Olho de Agamotto é um símbolo de proteção e sabedoria, uma relíquia que representa o equilíbrio entre a magia e o destino, permitindo que seu portador enfrente ameaças místicas e desvende os enigmas do multiverso.",
    ObjectImage: [
      "https://uploads.jovemnerd.com.br/wp-content/uploads/2016/07/olho_.jpg",
      "https://static3.tcdn.com.br/img/img_prod/460977/colar_olho_de_agamotto_doutor_estranho_joias_do_infinito_doutor_estranho_doctor_strange_com_led_e_ca_97281_5_a6847b6a65514ee0b1b8147a2b8b2227.jpeg",
      "https://static3.tcdn.com.br/img/img_prod/460977/colar_olho_de_agamotto_doutor_estranho_joias_do_infinito_doutor_estranho_doctor_strange_com_led_e_ca_97281_2_8d1e7442601efcd8421cfb08a70ba9dd.jpeg",
    ],
  },
  {
    name: "Kriptonita",
    category: "ALIEN",
    description:
      "A Kryptonita é uma pedra alienígena de origem extraterrestre, cuja composição única emite uma energia radiante verde brilhante. Essa substância cristalina é letal para os habitantes de Krypton, o planeta natal do Super-Homem. Sua mera presença enfraquece e neutraliza os poderes do herói, tornando-o vulnerável. A Kryptonita tem uma aparência hipnotizante, com um brilho intenso que revela seu poder destrutivo. Seu toque é capaz de debilitar o Super-Homem, afetando sua força e resistência. Essa pedra alienígena se tornou um símbolo icônico de fraqueza e desafio para o herói, representando uma ameaça constante em sua luta contra o mal.",
    ObjectImage: [
      "https://cienciahoje.org.br/wp-content/uploads/2019/11/Cultura-Pop_Figura1_AdobeStock_127664503.jpg",
      "https://www.meaning88.com/image0407/assets/mw/images/article/art-wap-article-main/kryptonite-3628-865e28f0d333554cc94ce3ad542f3f49@1x.jpg",
      "https://meioambiente.culturamix.com/blog/wp-content/uploads/2013/01/Descoberta-De-Criptonita-Na-Terra.jpeg",
    ],
  },
  {
    name: "Anel do Poder",
    category: "ALIEN",
    description:
      "O Anel de Poder do Lanterna Verde é uma joia resplandecente, forjada em uma liga alienígena desconhecida, com um brilho verde intenso. Seu design elegante e aerodinâmico apresenta uma inscrição esmeralda, simbolizando a união de vontade e coragem. Ao ser ativado pelo portador digno, o anel se ajusta perfeitamente ao seu dedo, emanando uma energia cósmica inigualável. Essa poderosa relíquia concede ao Lanterna Verde a capacidade de criar construções de energia pura, manifestando-se em formas ilimitadas, desde armas impressionantes até escudos impenetráveis. O Anel de Poder é uma arma versátil e inigualável, respondendo aos comandos do portador por meio de sua força de vontade. Ele representa a responsabilidade e o dever de proteger o universo contra as ameaças mais sombrias, personificando a luz da esperança e a força de um verdadeiro herói.",
    ObjectImage: [
      "https://images.universohq.com/2007/09/AneldoLanternaVerde.jpg",
      "https://pm1.aminoapps.com/6527/46eed842b04a493ee4d2d0ea461db7ef33b3e368_hq.jpg",
      "https://veja.abril.com.br/wp-content/uploads/2016/06/ryan-reynolds-620px-original.jpeg?quality=90&strip=info&w=620&h=349&crop=1",
    ],
  },
  {
    name: "Enigma do Milênio",
    category: "MYSTERY",
    description:
      "O Enigma do Milênio é um objeto de grande poder e mistério, com uma história que se estende por milênios. O enigma é representado por um antigo artefato dourado, gravado com hieróglifos e inscrições ancestrais. Sua forma intricada e aura enigmática o tornam um objeto verdadeiramente único. Diz a lenda que quem conseguir resolver o enigma e dominar o seu poder terá o destino do mundo em suas mãos. O Enigma do Milênio tem o poder de manifestar o espírito milenar do Faraó, concedendo habilidades extraordinárias e desencadeando batalhas emocionantes no jogo de cartas de Yu-Gi-Oh. Seu verdadeiro propósito e potencial são envoltos em segredos profundos, e aqueles que o possuem são envolvidos em uma jornada de autodescoberta e desafios intensos. O Enigma do Milênio é um símbolo de mistério, poder antigo e destinos entrelaçados, dando origem a uma aventura épica que transcende os limites do tempo e da imaginação.",
    ObjectImage: [
      "https://img.elo7.com.br/product/100x80/2D8ECF5/enigma-do-milenio-yugioh.jpg",
      "https://img.elo7.com.br/product/100x80/2D8ED93/enigma-do-milenio-yugioh.jpg",
      "https://img.elo7.com.br/product/100x80/2D8ED80/enigma-do-milenio-yugioh.jpg",
      "https://img.elo7.com.br/product/100x80/2D8ED48/enigma-do-milenio-yugioh.jpg",
    ],
  },
  {
    name: "Torre de Hanoi",
    category: "MYSTERY",
    description: `
    A Torre de Hanói é um enigma transcendental, uma estrutura de mistério que desafia a lógica humana. Erguendo-se majestosamente no horizonte, suas três colunas imponentes abrigam uma série de discos de tamanhos diferentes. Cada disco guarda segredos de movimentos precisos, onde o menor dos deslizes pode desencadear um cataclismo de proporções desconhecidas. A Torre de Hanói oculta um poder oculto, uma conexão com dimensões além da nossa compreensão. À medida que os discos são movidos, revela-se uma dança cósmica de equilíbrio e estratégia, desafiando os aventureiros a decifrarem seus segredos e alcançarem a perfeição. Um enigma envolto em sombras antigas, a Torre de Hanói permanece como um desafio misterioso, uma busca pela iluminação através da resolução de um quebra-cabeça de dimensões imensuráveis.`,
    ObjectImage: [
      "https://2.bp.blogspot.com/-JbnqhDgJffo/WnWkJloi3xI/AAAAAAAACg4/dcCf-cq4zsYUw5TaPpAiuIzIghRoeAPoQCLcBGAs/s640/torresdehanoi01.JPG",
      "https://1.bp.blogspot.com/-fd29x8URUxA/Wom2zMY5d5I/AAAAAAAACj8/ULL0B0uNsx4vqXM4vpt74FXYeotz7tyNgCLcBGAs/s640/torresdehanoi%2B%25285%2529.JPG",
      "https://3.bp.blogspot.com/-Z7GBWRhXJew/Wom2zANg1cI/AAAAAAAACj4/83pmLArhE94k6_HhI3GZZ-oDFo4-mJYSACLcBGAs/s640/torresdehanoi%2B%25286%2529.JPG",
    ],
  },
];
