const xhr = new XMLHttpRequest();

xhr.addEventListener('load',()=>{
    console.log(xhr.response);
});

xhr.open('get', 'https://supersimplebackend.dev/images/apple.jpg');//we want some from backend;
xhr.send();

xhr.response;