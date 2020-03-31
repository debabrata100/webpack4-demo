function component(){
    const element = document.createElement('div');
    /*lodash now acts as global variable*/
    element.innerHTML = _.join(['Hello', 'Webpack'], ' ');
    return element;
}
document.body.appendChild(component());