'use strict';

radios.forEach(function (radio) {
  return radio.root_.addEventListener('change', function () {
    return radioChange(radio);
  });
});

function radioChange(radio) {
  console.log(radio.value);
}
