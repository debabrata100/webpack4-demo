import { generateButton, getUsers } from './ui';
function component(){
    const element = document.createElement('div');
    const userListContainer = document.createElement('div');
    element.innerHTML = ['Hello','Webpack'].join('\n\n');
    const btn = generateButton("Fetch Users");
    element.appendChild(btn);
    element.appendChild(userListContainer);
    btn.addEventListener("click",()=>{
        btn.innerHTML = 'loading...';
        userListContainer.innerHTML = '';
        getUsers((users)=>{
            userListContainer.appendChild(users);
            btn.innerHTML = "Fetch User";
        });
    })
    return element;
}
document.body.appendChild(component());