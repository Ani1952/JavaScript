const count = document.getElementById('count-ele');
const save = document.querySelector('.save-ele');
const addBtn = document.querySelector('.btn-add');
const subBtn = document.querySelector('.btn-sub');
const saveBtn = document.querySelector('.btn-save');
const clearBtn = document.querySelector('.btn-clear');
let savedCounts = [];

addBtn.addEventListener('click', () => {
    const curr = parseInt(count.innerText);
    count.innerText = curr + 1;
});

subBtn.addEventListener('click', () => {
    const curr = parseInt(count.innerText);
    count.innerText = curr - 1;
});

clearBtn.addEventListener('click', () => {
    savedCounts.length=0;
    save.innerHTML='';
    count.innerHTML=0;
});

saveBtn.addEventListener('click', () => {
    const curr = parseInt(count.innerText);
    savedCounts.push(curr);
    updateSavedCounts();
});

function updateSavedCounts() {
    save.innerHTML = savedCounts.join(' ');
}
