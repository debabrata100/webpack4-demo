export const generateButton = function(name){
    const button = document.createElement('button');
    button.innerHTML = name;
    return button;
}
async function fetchData(url){
    const data = await fetch(url);
    return data.json();
}
function createUserdata(data){
    const container = document.createElement('div');
    let list = [];
    data.forEach(element => {
        const li = document.createElement('li');
        li.innerHTML = `Name: ${element.name} Email: ${element.email}`;
        container.appendChild(li);
    });
    return container;
}
export const getUsers = function(cb){
    fetchData('http://jsonplaceholder.typicode.com/users')
    .then(data=>{
        console.log("data",data);
        cb(createUserdata(data));
    })
}