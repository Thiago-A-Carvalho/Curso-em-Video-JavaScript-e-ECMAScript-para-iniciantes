let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()

console.log(num)
console.log(`O vetor tem ${num.length} elementos.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

// nomedavariavel[índice] = valor para acrescentar um novo valor em uma posição predifinida
// nomedavariavel.push(valor) para acrescentar um valor na ultima posição
// nomedavariavel.length para saber o comprimento da variável. Corresponde ao número de elementos
// (no javascript não tem parentese para o lenght. Ele é um atributo, não um método)
// nomedavariavel.sort() para organizar os valores em ordem crescente dentro do array
// nomedavariavel.indexOf(valor) retorna a posição/indicie que do valor. Se não existe no array, retorna -1
let pos = num.indexOf(4)
if (pos == -1) {
    console.log(`O valor não foi encontrado.`)
} else {
    console.log(`O valor 8 está na posição ${pos}.`)
}
