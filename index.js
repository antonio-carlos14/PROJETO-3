const nome= "Carlos Eduardo"
const idade= 17
const categoria= "comum"
const matrículaAtiva= "true"
const suspenso= "false"
const valorMensalidade= 120
const valorPago= 120

let situacaoAcesso= "Aguardando"
let situacaoPagamento= "Aguardando"
let situacaoFinal= "Aguardando"

if(idade>= 18) {
    console.log("Idade permitida")
} else {
    console.log("Idade não permitida")
}

if(categoria === "instrutor" || categoria === "coordenador") {
    console.log("Acesso administrativo liberado")
} else {
    console.log("Acesso comum")
}

if(idade >= 18 && matricula === "true" && suspenso === "false") {
    console.log("Acesso à aula liberado")
} else {
    console.log("Acesso à aula negado")
}

if(valorPago >= valorMensalidade) {
    console.log("Pagamento aprovado")
} else {
    console.log("Pagamento insuficiente")
}

const troco = valorPago - valorMensalidade
   
