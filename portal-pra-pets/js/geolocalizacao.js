const tipoServico = "banho"; // Pode ser alterado para "vacinas", "consultas", etc.

function obterLocalizacao() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(mostrarPosicao, erroAoObterLocalizacao);
    document.getElementById("resultado").innerHTML = "<p>Buscando sua localização...</p>";
  } else {
    document.getElementById("resultado").innerHTML = "<p>Geolocalização não suportada pelo navegador.</p>";
  }
}

function mostrarPosicao(posicao) {
  const locais = {
    banho: ["PetShop Bicho Limpo", "PetShop Peludos & Cia", "Estética Pet Fofuxos"],
    vacinas: ["Clínica Animal+Vacinas", "Pet Saúde Express"],
    consultas: ["Vet Consultas 24h", "Clínica Dr. Pet"],
    hospitais: ["Hospital Pet Vida", "Centro Veterinário São Francisco"]
  };

  const lista = locais[tipoServico] || ["Nenhum local encontrado"];
  const resultado = lista.map(local => `<li>${local} - Próximo de você</li>`).join("");
  document.getElementById("resultado").innerHTML = `<ul>${resultado}</ul>`;
}

function erroAoObterLocalizacao(error) {
  document.getElementById("resultado").innerHTML = `<p>Erro ao localizar: ${error.message}</p>`;
}



