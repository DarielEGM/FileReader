"use strict";

const file = document.getElementById('file');

file.addEventListener("change", (e)=>{
    readFile(file.files);
});

const readFile = fi =>{
    for(let i = 0; i < fi.length; i++){
        const reader = new FileReader();
        reader.readAsText(fi[i]);
        reader.addEventListener("load", (e)=>{
        console.log(JSON.parse(e.currentTarget.result));
    });
    }
}

