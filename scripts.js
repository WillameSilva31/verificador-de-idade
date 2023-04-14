
function verificar() {
    const data = new Date();
    const ano = data.getFullYear()
    const nasc = document.getElementById('ano')
    const resposta = document.getElementById('resposta')
    const img = document.getElementById('foto')
    if(nasc.value.length == 0 || nasc > ano) {
        alert('TENTE DE NOVO POR FAVOR')
    }else {
        const sexo = document.getElementsByName('radsex')
        const idade = ano - Number(nasc.value)
        let genero = ''
        if(sexo[0].checked) {
            genero = ' Homem'
            if(idade >= 0 && idade < 11){
                img.src = '/Verificador de Idade/images/cHomem.jpg'
            }else if(idade < 20){
                img.src = '/Verificador de Idade/images/jHomem.jpg'
            }else if(idade <50){
                img.src = '/Verificador de Idade/images/aHomem.jpg'
            }
            else {
                img.src = '/Verificador de Idade/images/iHomem.jpg'
            }
           
        }
        else if (sexo[1].checked) {
            genero = 'a Mulher'
            if(idade >= 0 && idade < 11){
                img.src = 'criança- mulher.jpg'
            }else if(idade > 20){
                img.src = 'mulher-jovem.jpg'
            }else if(idade >50){
                img.src = 'mulher- adulta.jpg'
            }
            else {
                img.src = 'mulher-idosa.jpg' 
            }
        }
        resposta.innerHTML = `Você é um${genero} com ${idade} anos `
        resposta.appendChild(img)
    }

}