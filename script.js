let input = document.querySelector('[name="input"]'),
    output = document.getElementById('output'),
    add = document.getElementById('add');

function getText(el) {
    let text = el.value;
    el.value = "";
    console.log(text);
    return text;
}

add.addEventListener('click', e => {
    let text = document.createElement('h3');
    text.innerHTML = getText(input);
    let container = document.createElement('div'),
        trash = document.createElement('i');
    trash.classList.add('fas', 'fa-trash-alt');
    trash.addEventListener('click', e => {
        container.remove();
    })
    container.append(text, trash);
    output.append(container);
})
