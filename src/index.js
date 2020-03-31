function component(){
    const element = document.createElement('div');
    /*join now acts as a global method*/
    element.innerHTML = join(['Hello', 'Webpack'], ' ');
    return element;
}
document.body.appendChild(component());