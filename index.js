function addingEventListener(ev) {
  let input1 = document.querySelector('input#input');
  input1.addEventListener(ev,function(event) {
  alert('I was clicked!');
});
}


addingEventListener('click');
