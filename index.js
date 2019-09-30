function addingEventListener(par,ev) {
  par.addEventListener(ev,function(event) {
  alert('I was clicked!');
});
}

let input1 = document.querySelector('input#input');
addingEventListener(input1,'click');
