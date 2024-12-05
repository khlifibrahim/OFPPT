const input = document.getElementById('input');
// const btn = document.getElementById('btn');
const output = document.getElementById('output');



function rewrite() {

    output.value = input.value

    input.value = ''
    input.focus()
}