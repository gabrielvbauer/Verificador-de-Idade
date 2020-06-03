function carregar() {

    var data = new Date();
    var ano = data.getFullYear();

    var valorano = document.getElementById('ano');
    var res = document.getElementById('res');

    if (valorano.value.length == 0 || Number(valorano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {

        var sex = document.getElementsByName('radsex');
        var idade = ano - Number(valorano.value);
        var genero = ``;
        var img = document.createElement('div')
        img.setAttribute('id', 'foto')

        if (sex[0].checked) {
            genero = `Homem`
            if (idade >= 0 && idade <= 12) {
                img.style.backgroundImage = "url('images/homem-crianca.png')"
            } else if (idade > 12 && idade <= 20) {
                img.style.backgroundImage = "url('images/homem-jovem.png')"
            } else if (idade > 20 && idade <= 60) {
                img.style.backgroundImage = "url('images/homem-adulto.png')"
            } else if (idade > 60) {
                img.style.backgroundImage = "url('images/homem-idoso.png')"
            }

        } else if (sex[1].checked) {
            genero = `Mulher`
            if (idade >= 0 && idade <= 12) {
                img.style.backgroundImage = "url('images/mulher-crianca.png')"
            } else if (idade > 12 && idade <= 20) {
                img.style.backgroundImage = "url('images/mulher-jovem.png')"
            } else if (idade > 20 && idade <= 60) {
                img.style.backgroundImage = "url('images/mulher-adulta.png')"
            } else if (idade > 60) {
                img.style.backgroundImage = "url('images/mulher-idosa.png')"
            }
        }

        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}