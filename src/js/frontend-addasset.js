radios.forEach(radio => radio.root_.addEventListener('change', () => radioChange(radio)));
function radioChange(radio) {
    console.log(radio.value);
}