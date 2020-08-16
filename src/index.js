function component() {
  var element = document.createElement('div');

  element.innerHTML = 'Getting Started';

  return element;
}

document.body.appendChild(component());
