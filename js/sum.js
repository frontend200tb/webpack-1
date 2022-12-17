export function sum(...args) {
  let result = 0;
  for(const arg of args) {
    result += arg;
  }
  return result;
}

//Функция sum вычисляет сумму пришедших в нее аргументов