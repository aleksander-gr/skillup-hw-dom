function isParent(parent, child) {
    let result = parent.contains(child);
    console.log(result);
}

isParent(document.body.children[0], document.querySelector('mark'));
isParent(document.querySelector('ul'), document.querySelector('mark'));



let alls = document.querySelectorAll('a');


for (let i = 0; i <= alls.length - 1; i++) {

    if (alls[i] === document.querySelector('ul')) {

    } else console.log(alls[i]);
}