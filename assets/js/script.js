const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')
const semana = document.getElementById('semana')
const dia = document.getElementById('dia')
const mes = document.getElementById('mes')
const ano = document.getElementById('ano')
const container = document.getElementById('container')


const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    let date = dateToday.getDate();
    let m = dateToday.getMonth() + 1;
    let y = dateToday.getFullYear();
    let ds = dateToday.getDay();

    const daysOfWeek = {
        1: 'Segunda-Feira',
        2: 'Terça-Feira',
        3: 'Quarta-Feira',
        4: 'Quinta-Feira',
        5: 'Sexta-Feira',
        6: 'Sábado',
        7: 'Domingo'
    };
    
    if (ds >= 1 && ds <= 7) {
        ds = daysOfWeek[ds];
    }
    
    if(hr < 10) hr = '0' + hr;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;
    if(m < 10) m = '0' + m;
    if(date < 10) date = '0' + date;

    var data = date+'/'+m+'/'+y;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sec;
    semana.textContent = ds;
    dia.textContent = data;
})