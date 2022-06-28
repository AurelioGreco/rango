const inputRango = document.getElementById('inputRango');
const visitas = document.getElementById('visitas');
const precio = document.getElementById('precio');
const arrayVisitas = ['10K', '50K', '100K', '500k', '1M'];
const arraycolores = ['#FFFFFF', '#DCDCDC', '#F0FFF0', '#FFEBCD', '#87CEFA'];
inputRango.addEventListener('input', () => {
    console.log('Click!');
    console.log(inputRango.value);
    precio.textContent = inputRango.value;
    visitas.textContent = arrayVisitas[(inputRango.value / 8 - 1)];
    let colore = document.body.style.backgroundColor = arraycolores[(inputRango.value / 8 - 1)];
    console.log('colore:', colore);
})