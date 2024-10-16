let inputs = [].slice.call(document.querySelectorAll('.franchise-js')),
  button = document.querySelector('.franchise-button-js');

inputs.forEach(function (el) {
  el.addEventListener('input', checkInputs, false);
});

function checkInputs() {
  let empty = inputs.filter(function (el) {
    return el.value.trim() === '';
  }).length;
  button.disabled = empty !== 0;
}
checkInputs();