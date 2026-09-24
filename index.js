const nome = "Carlos Eduardo"
const idade = 17
const categoria = "comum"
const matriculaAtiva = "true"
const suspenso = "false"
const valorMensalidade = 120
const valorPago = 120

let idadeStatus
let nivelAcesso
let situacaoAcesso
let situacaoPagamento
let troco
let situacaoFinal

if (idade >= 18) {
    idadeStatus = "Idade permitida"
    console.log(idadeStatus)
} else {
    idadeStatus = "Idade não permitida"
    console.log(idadeStatus)
}

if (categoria === "instrutor" || categoria === "coordenador") {
    nivelAcesso = "Acesso administrativo liberado"
    console.log(nivelAcesso)
} else {
    nivelAcesso = "Acesso comum"
    console.log(nivelAcesso)
}

if (idade >= 18 && matriculaAtiva === "true" && suspenso === "false") {
    situacaoAcesso = "Acesso à aula liberado"
    console.log(situacaoAcesso)
} else {
    situacaoAcesso = "Acesso à aula negado"
    console.log(situacaoAcesso)
}

if (valorPago >= valorMensalidade) {
    situacaoPagamento = "Pagamento aprovado"
    console.log(situacaoPagamento)
    troco = valorPago - valorMensalidade
} else {
    situacaoPagamento = "Pagamento insuficiente"
    console.log(situacaoPagamento)
    troco = 0
}

if (situacaoAcesso === "Acesso à aula liberado" && situacaoPagamento === "Pagamento aprovado") {
    situacaoFinal = "Presença na aula confirmada"
    console.log(situacaoFinal)
} else {
    situacaoFinal = "Presença na aula não confirmada"
    console.log(situacaoFinal)
}

const resumo = (`
nome do aluno: ${nome}
qual o nível de acesso: ${nivelAcesso}
valor da mensalidade: ${valorMensalidade}
valor pago: ${valorPago}
troco: ${troco}
do acesso: ${situacaoAcesso}
faça o pagamento: ${situacaoPagamento}
situação final: ${situacaoFinal}
`)

console.log(resumo)

module.exports = {
    nome,
    idade,
    categoria,
    matriculaAtiva,
    suspenso,
    valorMensalidade,
    valorPago,
    idadeStatus,
    nivelAcesso,
    situacaoAcesso,
    situacaoPagamento,
    troco,
    situacaoFinal,
    resumo,
}
