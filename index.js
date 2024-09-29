//Выведите в консоль количество символов в тексте:
const text = document.querySelector('#text').innerText;
console.log(`1. Количество символов в тексте: ${text.length}`);

//Добавьте перенос строки после каждого символа ; и сохраните результат в переменную result:
const result = text.replace(/;/g, '\n');
console.log(`2. Текст с переносами строк: \n ${result}`);

//Удалите все пробелы в переменной result и сохраните результат в переменную substring:
const substring = result.trim();
console.log(`3. Текст с удалёнными пробелами: ${substring}`);

//Извлеките подстроку из переменной result, начиная с 28-го символа и до 50-го символа (не включая), из текста и сохраните в переменную newText:
const newText = substring.substring(25, 50);//заменила на 25, т.к. при 28 выводится "атая цепь на клён том", а так красивенько"
console.log(`4. Извлечение подстроки: ${newText}`);

//Замените в извлеченной подстроке (newText) все вхождения слова клён на дубе и сохраните результат в переменную replacedText:
const replacedText = newText.replace(/клён/g, 'дубе');
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

//Приведите текст в переменной result к верхнему регистру и сохраните результат в переменную replacedText2:
const replacedText2 = result.toUpperCase(); 
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

//Замените все вхождения слова клён на дуб в переменной result и сохраните результат в переменную replacedText3:
const replacedText3 = result.replace(/клён/g, 'дуб');
console.log(`7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`);

//Найдите индекс первого вхождения слова моря в тексте и сохраните в переменную index:
const index = result.indexOf("моря");
console.log(`8. Индекс первого вхождения "моря": ${index}`);

//Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText:
modifiedText = replacedText.charAt(1).toLocaleUpperCase()+replacedText.slice(2);
console.log(`9. Строка с измененной первой буквой: ${modifiedText}`);

//Создать программу, которая генерирует случайное слово из четырёх букв.
//Создай переменную alphabet, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
//Используя объект Math, создай четыре случайных индекса в диапазоне от 0 до длины вашей alphabet.
const alphabet = document.querySelector('#alphabet').innerText;
function createWord() {
    let randonLetter1 = Math.random() * 33+1;
    let roundedLetter1 = Math.floor(randonLetter1);

    let randonLetter2 = Math.random() * 33+1;
    let roundedLetter2 = Math.floor(randonLetter2);

    let randonLetter3 = Math.random() * 33+1;
    let roundedLetter3 = Math.floor(randonLetter3);

    let randonLetter4 = Math.random() * 33+1;
    let roundedLetter4 = Math.floor(randonLetter4);

    let Letter1 = alphabet.substring(roundedLetter1, roundedLetter1+1);
    let Letter2 = alphabet.substring(roundedLetter2, roundedLetter2+1);
    let Letter3 = alphabet.substring(roundedLetter3, roundedLetter3+1);
    let Letter4 = alphabet.substring(roundedLetter4, roundedLetter4+1);

    let word = (Letter1+Letter2+Letter3+Letter4);
    document.querySelector('#createdWord').innerHTML = word;
};


