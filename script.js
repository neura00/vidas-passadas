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
