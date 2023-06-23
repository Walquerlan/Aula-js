//ARRAY COM A QUANTIDADES DE DIAS DE CADA MÊS
let diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//LAÇO QUE INCREMENTA OS DIAS
for(let i = 1; i <= diasDosMeses[0]; i++){
    dias.innerHTML += `<option value="${i}">${i}</option>`;
}

meses.onchange = function(){
    dias.innerHTML = '';
    for(let i = 1; i <= diasDosMeses[meses.value]; i++){
        dias.innerHTML += `<option value="${i}">${i}</option>`;}
}

//ARRAY COM O NOME DOS MESES
let nomeDosMeses = [
    'Janeiro🎆',
    'Fevereiro🎉',
    'Março🌧️',
    'Abril🐇',
    'Maio💼',
    'Junho🌽',
    'Julho🪁',
    'Agosto📸',
    'Setembro📝',
    'Outubro🎃',
    'Novembro🍂',
    'Dezembro🎄',
];

//LAÇO QUE INCREMENTA OS MESES
for(let i = 0; i < nomeDosMeses.length; i++){
    meses.innerHTML += `<option value="${i}">${nomeDosMeses[i]}</option>`;
}

//PEGA O OBJETO DATA, PARA CONSEGUIR AS INFORMAÇÕES (DATA, MÊS, DIA, FUSOHORÁRIO)
let data = new Date();

//LAÇO QUE DECREMENTA OS ANOS
for(let i = data.getFullYear(); i >= data.getFullYear() -100; i--){
    anos.innerHTML += `<option value="${i}">${i}</option>`;
}
