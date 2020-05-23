//head
let heads = document.querySelector('head');
//body
let bodys = document.querySelector('body');
//все дочерние элементы body и вывести их вконсоль.
let divFirst = document.body.firstElementChild;
//первый div и все его дочерние узлы
let one = function () {
    if (document.body.children) {
        const children = document.body.children;

        for (var i = 1; i < children.length - 1; ++i) {
            console.log(children[i])
        }
    }
};

console.log(heads);

console.log(bodys);

console.log(divFirst);

console.log(divFirst.childNodes);

one();