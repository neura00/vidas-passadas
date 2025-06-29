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

document.getElementById("questionnaire-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value.trim();
  const idade = parseInt(document.getElementById("idade").value.trim());
  const email = document.getElementById("email").value.trim();

  if (!nome || !idade || !email) {
    alert("Por favor, preenche todos os campos.");
    return;
  }

  const indice = (nome.length + idade) % respostasEncantadoras.length;
  const resposta = respostasEncantadoras[indice];

  document.getElementById("mensagem").textContent = resposta;
  document.getElementById("resultado").style.display = "block";

  // Scroll suave até ao resultado
  document.getElementById("resultado").scrollIntoView({ behavior: "smooth" });
});
// Espera que todo o conteúdo da página HTML seja carregado antes de executar o script
document.addEventListener('DOMContentLoaded', function() {

    // Encontra o formulário do quiz no documento
    const quizForm = document.getElementById('quizForm');

    // Verifica se o formulário do quiz existe na página atual para evitar erros
    if (quizForm) {
        
        // Adiciona um "ouvinte" para o evento de submissão do formulário
        quizForm.addEventListener('submit', function(event) {
            // Previne o comportamento padrão do formulário (que seria recarregar a página)
            event.preventDefault();

            // Objeto para armazenar as pontuações de cada arquétipo
            const scores = {
                erudito: 0,
                naturalista: 0,
                explorador: 0,
                curador: 0
            };

            // Recolhe as respostas do formulário
            const q1 = quizForm.querySelector('input[name="q1"]:checked').value;
            const q2 = quizForm.querySelector('input[name="q2"]:checked').value;
            const q3 = quizForm.querySelector('input[name="q3"]:checked').value;

            // Atribui pontos com base na resposta da questão 1
            if (q1 === 'a') scores.erudito++;
            else if (q1 === 'b') scores.naturalista++;
            else if (q1 === 'c') scores.explorador++;
            else if (q1 === 'd') scores.curador++;

            // Atribui pontos com base na resposta da questão 2
            if (q2 === 'a') scores.erudito++;
            else if (q2 === 'b') scores.naturalista++;
            else if (q2 === 'c') scores.explorador++;
            else if (q2 === 'd') scores.curador++;
            
            // Atribui pontos com base na resposta da questão 3
            if (q3 === 'a') scores.erudito++;
            else if (q3 === 'b') scores.naturalista++;
            else if (q3 === 'c') scores.explorador++;
            else if (q3 === 'd') scores.curador++;

            // Encontra o arquétipo com a maior pontuação
            let maxScore = 0;
            let resultType = '';
            for (const type in scores) {
                if (scores[type] > maxScore) {
                    maxScore = scores[type];
                    resultType = type;
                }
            }
            
            // Define os textos dos resultados
            const resultados = {
                erudito: {
                    titulo: "O Eco do Erudito",
                    texto: "A sua alma ressoa com o conhecimento, a lógica e o estudo. Em vidas passadas, pode ter sido um filósofo, escriba, cientista ou um guardião de bibliotecas antigas, sempre em busca da verdade através da palavra escrita e do pensamento."
                },
                naturalista: {
                    titulo: "O Eco do Naturalista",
                    texto: "A sua alma tem uma ligação profunda com a terra e as suas criaturas. Pode ter vivido como um caçador, um druida, um eremita ou alguém que compreendia os segredos das florestas e montanhas, vivendo em harmonia com os ciclos da natureza."
                },
                explorador: {
                    titulo: "O Eco do Explorador",
                    texto: "A sua alma anseia pelo desconhecido e pela aventura. É provável que tenha sido um navegador, um cartógrafo, um mercador em rotas distantes ou um pioneiro, sempre a olhar para o horizonte em busca de novos mundos e novas experiências."
                },
                curador: {
                    titulo: "O Eco do Curador",
                    texto: "A sua alma vibra com a empatia, o cuidado e a comunidade. Em vidas passadas, pode ter sido um curandeiro, uma parteira, um líder comunitário ou um artista que trazia conforto e união ao seu povo através da compaixão e da sabedoria."
                }
            };

            // Mostra o resultado na página
            const resultadoDiv = document.getElementById('quiz-resultado');
            const resultadoTitulo = document.getElementById('resultado-titulo');
            const resultadoTexto = document.getElementById('resultado-texto');

            resultadoTitulo.textContent = resultados[resultType].titulo;
            resultadoTexto.textContent = resultados[resultType].texto;
            
            resultadoDiv.style.display = 'block'; // Torna a div do resultado visível
        });
    }
});
