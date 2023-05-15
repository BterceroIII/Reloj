const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const dias = document.getElementById('dia');
const mes = document.getElementById('mes');
const anio = document.getElementById('anio');

const reloj = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) hr = '0' + min;
    if (s < 10) hr = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;
})

const fecha = setInterval(function () {
    let dateToday = new Date();
    let ds = dateToday.getDate();
    let ms = dateToday.getMonth() + 1;
    let an = dateToday.getFullYear();

    dias.textContent = ds;
    mes.textContent = ms;
    anio.textContent = an;
}, 1000)