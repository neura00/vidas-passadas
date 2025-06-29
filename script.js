const respostasEncantadoras = [
  "Foste uma sacerdotisa sábia da Atlântida.",
  "Viveste como guerreiro romano destemido.",
  "Foste um curandeiro nas florestas da Gália.",
  "Foste um astrónomo egípcio que lia as estrelas.",
  "Viveste como poeta num templo tibetano.",
  "Foste um navegador perdido em mares místicos.",
  "Viveste em silêncio num mosteiro medieval.",
  "Foste uma inventora revolucionária no século XIX.",
  "Foste uma alma livre numa tribo nómada do deserto.",
  "Foste um guardião de conhecimento na biblioteca de Alexandria."
];

document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');

    if (quizForm) {
        quizForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const scores = {
                erudito: 0,
                naturalista: 0,
                explorador: 0,
                curador: 0,
                artista: 0
            };

            const numberOfQuestions = 5;
            for (let i = 1; i <= numberOfQuestions; i++) {
                const questionName = 'q' + i;
                const selectedOption = quizForm.querySelector(`input[name="${questionName}"]:checked`);
                if (selectedOption) {
                    const value = selectedOption.value;
                    if (scores.hasOwnProperty(value)) {
                        scores[value]++;
                    }
                }
            }

            let maxScore = 0;
            let resultType = '';
            for (const type in scores) {
                if (scores[type] > maxScore) {
                    maxScore = scores[type];
                    resultType = type;
                }
            }
            
            const resultados = {
                erudito: {
                    titulo: "O Eco do Erudito: A Alma Guardiã do Conhecimento",
                    texto: "A sua alma ressoa com o peso silencioso do conhecimento. Numa vida passada, é muito provável que tenha sido uma figura dedicada ao estudo e à preservação da sabedoria. Imagine-se como um escriba numa biblioteca antiga como a de Alexandria, um filósofo a debater sob o sol grego, ou um monge a copiar manuscritos à luz de velas num mosteiro isolado. A sua vida era definida pela busca da verdade, não no mundo exterior, mas nos registos do passado. O seu maior desafio era a frustração de ver o conhecimento ser perdido ou ignorado, e a sua maior lição foi a de que a sabedoria sem partilha é uma chama sem oxigénio. Hoje, talvez sinta um amor profundo por livros, uma sede insaciável por aprender e uma paciência para resolver problemas complexos. A sua alma anseia por ordem, lógica e pelo silêncio que permite o pensamento profundo."
                },
                naturalista: {
                    titulo: "O Eco do Naturalista: A Alma Sintonizada com a Terra",
                    texto: "A sua alma está profundamente entrelaçada com os ritmos do mundo natural. Numa vida anterior, você não via a natureza como algo a ser conquistado, mas como uma extensão de si mesmo. Poderá ter sido um druida nos bosques da antiga Europa, um xamã nas planícies da América, ou simplesmente um eremita que conhecia cada árvore e cada animal pelo nome. A sua vida era guiada pelas estações, pela lua e pelas estrelas. O seu conhecimento não vinha de livros, mas da observação silenciosa e de uma conexão espiritual com a terra. O seu desafio era assistir ao avanço de civilizações que não respeitavam esse equilíbrio, e a sua lição foi a resiliência e a compreensão de que a vida sempre encontra uma forma de se renovar. Hoje, pode sentir-se mais em casa numa floresta do que numa cidade, ter uma forte intuição e uma capacidade inata para cuidar de plantas e animais."
                },
                explorador: {
                    titulo: "O Eco do Explorador: A Alma Impulsionada pelo Horizonte",
                    texto: "A sua alma é uma bússola que aponta sempre para o desconhecido. O conforto da rotina nunca foi suficiente para si. Numa vida passada, o seu coração batia ao ritmo das ondas do oceano ou da poeira de uma nova estrada. Imagine-se como um navegador fenício a traçar rotas pelo Mediterrâneo, um membro de uma caravana na Rota da Seda, ou um pioneiro a mapear territórios inexplorados. A sua vida era uma coleção de despedidas e de primeiras vistas. O seu maior desafio era o medo do desconhecido e a solidão das longas jornadas, mas a sua maior lição foi a de que o lar não é um lugar, mas um sentimento de propósito. Hoje, sente um desejo inquieto de viajar, uma aversão à monotonia e uma curiosidade que o leva a experimentar sempre coisas novas. A sua alma acredita que a maior sabedoria se encontra no caminho, não no destino."
                },
                curador: {
                    titulo: "O Eco do Curador: A Alma que Tece a Comunidade",
                    texto: "A sua alma encontra o seu propósito na ligação com os outros. O seu foco nunca foi o 'eu', mas o 'nós'. Numa vida passada, você era o pilar da sua comunidade. Talvez tenha sido um curandeiro numa aldeia, usando o conhecimento das ervas para aliviar o sofrimento, uma parteira que trazia novas vidas ao mundo, ou um líder tribal que mantinha a paz e a harmonia. A sua vida era dedicada a servir, a ouvir e a cuidar. O seu maior desafio era absorver a dor dos outros sem se quebrar, e a sua lição mais profunda foi a de que a verdadeira força reside na vulnerabilidade e na compaixão. Hoje, as pessoas provavelmente confiam em si naturalmente, procura profissões de ajuda e sente uma profunda satisfação em ver os outros felizes e seguros. A sua alma compreende que estamos todos ligados."
                },
                artista: {
                    titulo: "O Eco do Artista: A Alma que Traduz o Invisível",
                    texto: "A sua alma tem a rara capacidade de ver a beleza e o significado onde outros veem o caos. Você vive para traduzir as emoções e as verdades universais em algo tangível. Numa vida passada, poderá ter sido um pintor de frescos numa capela renascentista, um contador de histórias à volta de uma fogueira, um músico cuja melodia fazia chorar os reis, ou um ator grego por trás de uma máscara trágica. A sua vida não era sobre sobreviver, mas sobre sentir intensamente e expressar essa intensidade. O seu maior desafio era a luta entre a sua visão e a incompreensão do mundo, e a sua maior lição foi a de que a arte é uma necessidade, não um luxo. Hoje, sente o mundo de forma mais profunda que os outros, tem uma imaginação vívida e uma necessidade intrínseca de criar, seja através da pintura, da música, da escrita ou de qualquer outra forma de expressão."
                }
            };

            const resultadoDiv = document.getElementById('quiz-resultado');
            const resultadoTitulo = document.getElementById('resultado-titulo');
            const resultadoTexto = document.getElementById('resultado-texto');

            if (resultados[resultType]) {
                resultadoTitulo.textContent = resultados[resultType].titulo;
                resultadoTexto.textContent = resultados[resultType].texto;
            }
            
            resultadoDiv.style.display = 'block';
            resultadoDiv.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
// --- LÓGICA DA PLAYLIST DE MÚSICA ---

document.addEventListener('DOMContentLoaded', function() {
    
    // Encontra o leitor de áudio e a sua fonte no HTML
    const player = document.getElementById('audio-player');
    
    // Se o player não existir na página, não faz nada
    if (!player) {
        return;
    }
    const source = player.getElementsByTagName('source')[0];

    // CRIE AQUI A SUA LISTA DE MÚSICAS
    // Coloque os nomes exatos dos seus ficheiros de música
    const playlist = [
        'musica/musica-ambiente.mp3',
        'musica/outra-musica-mistica.mp3', // Substitua com os seus nomes de ficheiro
        'musica/terceira-musica.mp3'      // Adicione quantas quiser
    ];

    let musicaAtual = 0; // Começa com a primeira música da lista

    // Define a primeira música no player
    source.src = playlist[musicaAtual];
    player.load(); // Carrega a música

    // Adiciona um "ouvinte" que é ativado QUANDO A MÚSICA TERMINA
    player.addEventListener('ended', function() {
        // Passa para a próxima música na lista
        musicaAtual++;
        
        // Se chegar ao fim da lista, volta para o início
        if (musicaAtual >= playlist.length) {
            musicaAtual = 0;
        }
        
        // Atualiza a fonte do player com a nova música
        source.src = playlist[musicaAtual];
        
        // Carrega e toca a nova música automaticamente
        player.load();
        player.play();
    });

    // --- FIM DA LÓGICA DA PLAYLIST ---


    // A sua lógica do quiz começa aqui...
    const quizForm = document.getElementById('quizForm');
    if (quizForm) {
        // ... (o resto do seu script.js continua igual)
    }
});
