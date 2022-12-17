import {a} from './js/a.js';
import {b} from './js/b.js';
import {sum} from './js/sum.js';

let result1 = sum(a,b);

const result = document.querySelector('#result');
let resultDiv = document.createElement('div');
resultDiv.innerHTML = `
Импорт переменной a из файла a.js<br>
Импорт переменной b из файла b.js<br>
Импорт функции sum из файла sum.js<br>
a + b = ${a} + ${b} = ${result1}
`;

result.append(resultDiv);
