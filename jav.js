const fil = document.getElementById('f').firstElementChild.attributes.values;
const head = document.getElementById('fill');
console.log(fil);

head.addEventListener('click', () => {
    if (fil.value != "0.625, 0.375, 0,   0, 0 0.7,   0.3,   0,   0, 0 0,     0.3,   0.7, 0, 0 0,     0,     0,   1, 0") {
        fil.value = "0.625, 0.375, 0,   0, 0 0.7,   0.3,   0,   0, 0 0,     0.3,   0.7, 0, 0 0,     0,     0,   1, 0";
    } else {
        fil.value = "1, 0, 0, 0, 0 0, 1, 0, 0, 0 0, 0, 1, 0, 0 0, 0, 0, 1, 0";
    }
    
}, false)