export function loadCurrentUser(){
    return fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => json.length)
}