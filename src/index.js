function component(){
    const element = document.createElement('div');
    /*join now acts as a global method*/
    element.innerHTML = join(['Hello', 'Webpack'], ' ');
    /* Asume we are in the context of window */
    this.alert("Hmm, this propbaly is\'t a great idea")
    return element;
}
document.body.appendChild(component());