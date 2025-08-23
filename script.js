document.getElementById("gerar").addEventListener("click", () => {
  const total = parseInt(document.getElementById("total").value);
  const qtdLetras = parseInt(document.getElementById("letras").value);
  const qtdNumeros = parseInt(document.getElementById("numeros").value);
  const qtdSimbolos = parseInt(document.getElementById("simbolos").value);
  const quantidade = parseInt(document.getElementById("quantidade").value);

  const aviso = document.getElementById("aviso");
  const soma = qtdLetras + qtdNumeros + qtdSimbolos;

  // Verificação obrigatória
  if (soma !== total) {
    aviso.textContent = `A soma de letras (${qtdLetras}), números (${qtdNumeros}) e símbolos (${qtdSimbolos}) precisa ser exatamente igual ao total de caracteres (${total}).`;
    aviso.className = "aviso erro";
    aviso.style.display = "block";
    return;
  } else {
    aviso.textContent = `${quantidade} senha(s) gerada(s) com sucesso!`;
    aviso.className = "aviso sucesso";
    aviso.style.display = "block";
  }

  const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeros = "0123456789";
  const simbolos = "!@#$%^&*()-_=+[]{};:,.<>?/";

  const pegarAleatorio = (str) => str[Math.floor(Math.random() * str.length)];

  let senhasGeradas = [];

  for (let q = 0; q < quantidade; q++) {
    let senha = "";

    for (let i = 0; i < qtdLetras; i++) senha += pegarAleatorio(letras);
    for (let i = 0; i < qtdNumeros; i++) senha += pegarAleatorio(numeros);
    for (let i = 0; i < qtdSimbolos; i++) senha += pegarAleatorio(simbolos);

    // embaralha
    senha = senha
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");
    senhasGeradas.push(senha);

    // adiciona ao histórico
    const li = document.createElement("li");
    li.textContent = senha;
    document.getElementById("lista-historico").prepend(li);
  }

  // Mostra todas juntas
  document.getElementById("senha").textContent = senhasGeradas.join(" | ");
});
