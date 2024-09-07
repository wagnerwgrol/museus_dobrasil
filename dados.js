let museus = [
    // Norte
    {
        capital: "Manaus",
        nome: "Museu do Amazonas",
        localizacao: "Manaus - AM",
        horario: "Ter a Dom 10h às 17h",
        descricao: "O Museu do Amazonas, fundado em 1861, oferece um vasto acervo que retrata a riqueza da história, cultura e natureza da Amazônia, com destaque para coleções etnográficas indígenas, fauna e flora locais, além de exposições que revelam as transformações históricas e sociais da região amazônica ao longo dos séculos.",
        link: "https://museudaamazonia.org.br/",
        imagem: "imagens/manaus.png" // Caminho da imagem
    },
    {
        capital: "Belém",
        nome: "Museu Paraense Emílio Goeldi",
        localizacao: "Belém - PA",
        horario: "Ter a Dom 9h às 16h",
        descricao: "O Museu Paraense Emílio Goeldi é um dos mais renomados da América Latina, especializado em história natural, antropologia e etnologia, com um acervo impressionante que preserva a biodiversidade amazônica, artefatos culturais de populações indígenas e estudos científicos sobre o ecossistema da região, sendo um centro de referência mundial em pesquisa amazônica.",
        link: "https://antigo.museu-goeldi.br/",
        imagem: "imagens/belem.png"
    },
    {
        capital: "Rio Branco",
        nome: "Museu da Borracha",
        localizacao: "Rio Branco - AC",
        horario: "Seg a Sex 8h às 18h",
        descricao: "Dedicado à história da borracha e à cultura da região amazônica, com exposições sobre a economia, sociedade e história do Acre.",
        link: "https://www.femcultura.ac.gov.br/sobre-o-museu-da-borracha/",
        imagem: "imagens/rio-branco.png" // Caminho da imagem
    },
    {
        capital: "Macapá",
        nome: "Museu Fortaleza de São José de Macapá",
        localizacao: "Macapá - AP",
        horario: "Ter a Dom 9h às 18h",
        descricao: "Fortaleza histórica que abriga exposições sobre a colonização portuguesa, cultura indígena e história militar da região.",
        link: "https://secult.portal.ap.gov.br/conteudo/vinculadas/museu-fortaleza-de-sao-jose-de-macapa",
        imagem: "imagens/macapa.png"
    },
    {
        capital: "Porto Velho",
        nome: "Museu da Memória Rondoniense",
        localizacao: "Porto Velho - RO",
        horario: "Ter a Dom 8h às 17h",
        descricao: "Apresenta a história do estado de Rondônia e sua colonização, com ênfase na construção da Estrada de Ferro Madeira-Mamoré.",
        link: "https://www.rondonia.ro.gov.br/museu/",
        imagem: "imagens/porto-velho.png"
    },
    {
        capital: "Boa Vista",
        nome: "Museu Integrado de Roraima",
        localizacao: "Boa Vista - RR",
        horario: "Seg a Sex 8h às 18h",
        descricao: "Com exposições que retratam a cultura indígena, arqueologia e biodiversidade da região de Roraima.",
        link: "https://www.guiadasartes.com.br/roraima/boa-vista/museus/museu-integrado-de-roraima",
        imagem: "imagens/boa-vista.png"
    },
    {
        capital: "Palmas",
        nome: "Museu Histórico do Tocantins (Palacinho)",
        localizacao: "Palmas - TO",
        horario: "Ter a Dom 9h às 17h",
        descricao: "Preserva a história da criação do estado do Tocantins, com destaque para o acervo de objetos históricos e fotografias.",
        link: "https://museupalacinho.com//",
        imagem: "imagens/palmas.png"
    },
    // Nordeste
    {
        capital: "São Luís",
        nome: "Palácio dos Leões",
        localizacao: "São Luís - MA",
        horario: "Seg a Sex 9h às 18h",
        descricao: "O Palácio dos Leões é um importante símbolo histórico e cultural de São Luís, abrigando a sede do governo do estado do Maranhão. Construído no século XVII, o palácio mistura estilos arquitetônicos coloniais e neoclássicos e oferece visitas guiadas que exploram sua rica história, artefatos e mobiliário, além de uma vista privilegiada para a Baía de São Marcos.",
        link: "https://turismosaoluis.com.br/eu-sou-historia/palacio-dos-leoes/",
        imagem: "imagens/sao-luis.png"
    },
    {
        capital: "Fortaleza",
        nome: "Centro Dragão do Mar de Arte e Cultura",
        localizacao: "Fortaleza - CE",
        horario: "Seg a Sex 8h às 22h",
        descricao: "O Centro Dragão do Mar de Arte e Cultura é um dos principais complexos culturais do Ceará, abrigando museus, teatros, cinemas e galerias. Oferece uma programação diversificada, com exposições de arte contemporânea, espetáculos de teatro e dança, além de debates culturais e oficinas educativas, sendo um espaço fundamental para a difusão das artes na região Nordeste.",
        link:  "http://www.dragaodomar.org.br",
        imagem: "imagens/fortaleza.png"
    },
    {
        capital: "Recife",
        nome: "Instituto Ricardo Brennand",
        localizacao: "Recife - PE",
        horario: "Ter a Dom 13h às 17h",
        descricao: "O Instituto Ricardo Brennand é um vasto complexo cultural, conhecido por seu castelo medieval e um acervo diversificado que inclui armas, armaduras, tapeçarias e obras de arte, além de uma extensa coleção de arte sacra e colonial. O instituto promove exposições temporárias, eventos culturais e é reconhecido como um dos principais museus da América Latina.",
        link: "https://www.institutoricardobrennand.org.br/",
        imagem: "imagens/recife.png"
    },
    {
        capital: "Maceió",
        nome: "Museu Théo Brandão",
        localizacao: "Maceió - AL",
        horario: "Ter a Sex 9h às 17h",
        descricao: "O Museu Théo Brandão, localizado às margens da Lagoa Mundaú, é um centro de referência da cultura popular alagoana. Seu acervo inclui peças de artesanato, arte sacra, objetos do folclore local, fotografias e documentos históricos que retratam o desenvolvimento cultural e as tradições populares de Alagoas.",
        link: "https://www.historiadealagoas.com.br/museu-theo-brandao-e-o-palacete-boaventura-de-amorim.html",
        imagem: "imagens/maceio.png"
    },
    {
        capital: "Salvador",
        nome: "Museu Afro-Brasileiro",
        localizacao: "Salvador - BA",
        horario: "Seg a Sex 9h às 17h",
        descricao: "Localizado no coração do Pelourinho, o Museu Afro-Brasileiro é dedicado à preservação da cultura e história afro-brasileira. Seu acervo inclui artefatos religiosos, esculturas, instrumentos musicais e painéis de cerâmica, destacando a herança africana no Brasil, desde os tempos da escravidão até a contemporaneidade.",
        link: "https://mafro.ceao.ufba.br/",
        imagem: "imagens/salvador.png"
    },
    {
        capital: "Aracaju",
        nome: "Museu da Gente Sergipana",
        localizacao: "Aracaju - SE",
        horario: "Ter a Sex 10h às 17h",
        descricao: "O Museu da Gente Sergipana oferece uma experiência interativa e moderna, com exposições que retratam as tradições, o folclore e a cultura do povo sergipano. Utilizando tecnologia audiovisual, o museu convida os visitantes a explorarem as histórias, os costumes e o patrimônio cultural de Sergipe de forma dinâmica e envolvente.",
        link: "https://www.museudagentesergipana.com.br/",
        imagem: "imagens/aracaju.png"
    },
    {
        capital: "João Pessoa",
        nome: "Museu José Lins do Rego",
        localizacao: "João Pessoa - PB",
        horario: "Ter a Dom 9h às 17h",
        descricao: "Homenageia o escritor José Lins do Rego, com acervo de manuscritos, objetos pessoais e exposições literárias.",
        link: "https://funesc.pb.gov.br/museu-jose-lins-do-rego",
        imagem: "imagens/joao-pessoa.png"
    },
    {
        capital: "Teresina",
        nome: "Museu do Piauí",
        localizacao: "Teresina - PI",
        horario: "Ter a Dom 8h às 18h",
        descricao: "Com exposições que abordam a história do Piauí, desde a pré-história até a contemporaneidade, com artefatos arqueológicos e culturais.",
        link: "https://www.ipatrimonio.org/teresina-museu-do-piaui/#!/map=38329&loc=-5.086861914532425,-42.82088756561279,15",
        imagem: "imagens/teresina.png"
    },
    {
        capital: "Natal",
        nome: "Museu Câmara Cascudo",
        localizacao: "Natal - RN",
        horario: "Ter a Dom 8h às 17h",
        descricao: "O principal museu do Rio Grande do Norte, com exposições que retratam a cultura popular, arqueologia, paleontologia e história natural da região.",
        link: "https://www.mcc.ufrn.br/",
        imagem: "imagens/natal.png"
    },    
    // Centro-Oeste
    {
        capital: "Brasília",
        nome: "Museu Nacional",
        localizacao: "Brasília - DF",
        horario: "Ter a Dom 9h às 18h",
        descricao: "Localizado na Esplanada dos Ministérios, o Museu Nacional é um dos principais espaços culturais de Brasília, com exposições que abordam a história do Brasil, desde a pré-história até os dias atuais. O museu também sedia exposições de arte contemporânea e eventos culturais que celebram a diversidade artística e histórica do país.",
        link: "https://www.cultura.df.gov.br/museu-nacional-republica/",
        imagem: "imagens/brasilia.png"
    },
    {
        capital: "Goiânia",
        nome: "Museu de Arte de Goiânia",
        localizacao: "Goiânia - GO",
        horario: "Ter a Dom 9h às 17h",
        descricao: "O Museu de Arte de Goiânia abriga um vasto acervo de arte moderna e contemporânea, com obras de artistas locais, nacionais e internacionais. Além de exposições permanentes, o museu promove oficinas de arte, palestras e eventos culturais, sendo um dos principais pontos de encontro da cena artística goiana.",
        link: "https://www.goiania.go.gov.br/sobre-goiania/museus/",
        imagem: "imagens/goiania.png"
    },
    {
        capital: "Campo Grande",
        nome: "Museu do Homem do Pantanal",
        localizacao: "Campo Grande - MS",
        horario: "Ter a Dom 8h às 16h",
        descricao: "O Museu do Homem do Pantanal é dedicado à preservação da cultura, história e biodiversidade da região pantaneira. O acervo inclui artefatos arqueológicos, objetos históricos, e exposições que destacam a relação entre o homem e o meio ambiente no Pantanal, além de promover a educação ambiental.",
        link: "https://institutohomempantaneiro.org.br/",
        imagem: "imagens/campo-grande.png"
    },
    {
        capital: "Cuiabá",
        nome: "Museu Histórico de Mato Grosso",
        localizacao: "Cuiabá - MT",
        horario: "Ter a Dom 8h às 18h",
        descricao: "Focado na história de Mato Grosso, com exposições sobre a colonização, cultura indígena e desenvolvimento econômico do estado.",
        link: "https://portalmatogrosso.com.br/museu-historico-de-mt/",
        imagem: "imagens/cuiaba.png"
    },
    // Sudeste
    {
        capital: "São Paulo",
        nome: "Museu de Arte de São Paulo (MASP)",
        localizacao: "São Paulo - SP",
        horario: "Ter a Dom 10h às 18h",
        descricao: "O Museu de Arte de São Paulo (MASP) é um dos mais importantes museus da América Latina, famoso por seu acervo de obras de arte europeias, como de Van Gogh e Monet, além de artistas brasileiros icônicos. O MASP se destaca pela sua arquitetura moderna e seu pioneirismo na exibição de obras em painéis de vidro.",
        link: "https://masp.org.br/",
        imagem: "imagens/sao-paulo.png"
    },
    {
        capital: "Rio de Janeiro",
        nome: "Museu do Amanhã",
        localizacao: "Rio de Janeiro - RJ",
        horario: "Ter a Dom 10h às 18h",
        descricao: "O Museu do Amanhã é um museu de ciências inovador que explora temas como a sustentabilidade, o futuro da humanidade e as mudanças climáticas. Com sua arquitetura futurista assinada por Santiago Calatrava, o museu é um dos mais visitados do Rio de Janeiro e promove exposições interativas e educativas.",
        link: "https://museudoamanha.org.br/",
        imagem: "imagens/rio-de-janeiro.png"
    },
    {
        capital: "Belo Horizonte",
        nome: "Palácio da Liberdade",
        localizacao: "Belo Horizonte - MG",
        horario: "Ter a Dom 9h às 17h",
        descricao: "O Palácio da Liberdade é um dos mais importantes marcos históricos de Belo Horizonte. Construído no final do século XIX, o palácio serviu como sede do governo de Minas Gerais por muitos anos. Sua arquitetura eclética, com elementos neoclássicos e art nouveau, reflete o estilo da época. Atualmente, o local é aberto para visitação, oferecendo uma imersão na história política e cultural do estado.",
        link: "https://palaciodaliberdade.com.br/",
        imagem: "imagens/belo-horizonte.png"
    },
    
    {
        capital: "Vitória",
        nome: "Museu de Arte do Espírito Santo (MAES)",
        localizacao: "Vitória - ES",
        horario: "Ter a Dom 9h às 17h",
        descricao: "O Museu de Arte do Espírito Santo (MAES) abriga um acervo representativo de obras de arte brasileira desde o século XIX até a contemporaneidade, com ênfase em artistas locais. O MAES também promove exposições temporárias de arte moderna, oficinas e eventos culturais, sendo um dos mais importantes espaços de difusão artística do estado.",
        link:  "https://secult.es.gov.br/museu-de-arte-do-espirito-santo-dionisio-del-santo",
        imagem: "imagens/vitoria.png"
    },
    // Sul
    {
        capital: "Curitiba",
        nome: "Museu Oscar Niemeyer (MON)",
        localizacao: "Curitiba - PR",
        horario: "Ter a Dom 10h às 18h",
        descricao: "Conhecido popularmente como 'Museu do Olho' devido à sua arquitetura marcante, o Museu Oscar Niemeyer (MON) é um dos maiores museus de arte da América Latina. Ele abriga exposições de artes visuais, arquitetura e design, com um acervo que inclui obras de grandes nomes da arte mundial e brasileira, além de uma vasta programação cultural.",
        link: "http://www.museuoscarniemeyer.org.br/",
        imagem: "imagens/curitiba.png"
    },
    {
        capital: "Florianópolis",
        nome: "Museu Histórico de Santa Catarina",
        localizacao: "Florianópolis - SC",
        horario: "Ter a Dom 10h às 18h",
        descricao: "Instalado no Palácio Cruz e Sousa, o Museu Histórico de Santa Catarina é um importante espaço cultural dedicado à preservação da memória e história catarinense. Seu acervo inclui documentos históricos, móveis, objetos de arte e uma coleção que ilustra a vida política, social e cultural de Santa Catarina desde o período colonial até os dias atuais.",
        link: "https://cultura.sc.gov.br/espacos/mhsc",
        imagem: "imagens/florianopolis.png"
    },
    {
        capital: "Porto Alegre",
        nome: "Museu de Arte do Rio Grande do Sul (MARGS)",
        localizacao: "Porto Alegre - RS",
        horario: "Ter a Dom 9h às 19h",
        descricao: "O Museu de Arte do Rio Grande do Sul (MARGS) é um dos mais tradicionais museus do sul do Brasil, com um acervo que inclui obras de arte brasileira e internacional, abrangendo desde o século XIX até a arte contemporânea. O MARGS promove exposições permanentes e temporárias, além de atividades educativas e culturais voltadas para o público em geral.",
        link: "https://www.margs.rs.gov.br/",
        imagem: "imagens/porto-alegre.png"
    }
];
