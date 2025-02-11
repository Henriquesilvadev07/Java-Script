let idade = 70
console.log(`Voce tem ${idade} anos de idade e voce tem direito de : `)
if (idade < 16) {
    console.log('Não vota') 
}else if (idade < 18 || idade > 67) {
        console.log('Voto opcional')
    }else {
        console.log('Voto obrigatorio')
    
} 