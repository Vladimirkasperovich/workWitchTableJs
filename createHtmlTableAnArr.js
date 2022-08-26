//Не подсматривая в теоретическую часть урока, выведите элементы приведенного массива в виде HTML таблицы table.
/*let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table = document.querySelector('#table');

for (let subArr of arr) {
    let tr = document.createElement('tr');

    for (let elem of subArr) {
        let td = document.createElement('td');
        td.textContent = elem;
        tr.appendChild(td);
    }
    table.appendChild(tr);
}*/



//Модифицируйте предыдущую задачу так, чтобы в таблицу записывались не элементы, а квадраты этих элементов
/*let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
let table = document.querySelector('#table');

for (let subArr of arr){
    let tr = document.createElement('tr');

    for (let elem of subArr){
         let num = elem * elem;
         let td = document.createElement('td');
         td.textContent = num;
         tr.appendChild(td);
    }
    table.appendChild(tr);
}*/



//Дан следующий массив с работниками:Выведите элементы этого массива в виде HTML таблицы.
/*let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');

for (let elem of employees){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = 'name :' + elem.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = 'age :' + elem.age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = 'salary :' + elem.salary;
    tr.appendChild(td3);

    table.appendChild(tr);

}*/


//Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с возрастом ее содержимое увеличивалось на 1.
/*let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];
let table = document.querySelector('#table');

for (let elem of employees){
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent = 'name :' + elem.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent = 'age :' + elem.age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = 'salary :' + elem.salary;
    tr.appendChild(td3);

    table.appendChild(tr);


    td2.addEventListener('click', function(){
     td2.innerHTML = elem.age  + 1;
    })

}*/



//Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с зарплатой ее содержимое увеличивалось на 10%.
/*let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];
let table = document.querySelector('#table');

for (let elem of employees) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.textContent =  elem.name;
    tr.appendChild(td1);

    let td2 = document.createElement('td');
    td2.textContent =  elem.age;
    tr.appendChild(td2);

    let td3 = document.createElement('td');
    td3.textContent = elem.salary;
    tr.appendChild(td3);

    table.appendChild(tr);


    td3.addEventListener('click', function () {
      let salary = Number(td3.textContent);
      let num = 10;
      let result = salary / 100 * num;

       td3.textContent = result + salary;
      

    });
}*/



//Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.
/*let table = document.querySelector('#table');
let btn = document.querySelector('#btn');

btn.addEventListener('click', function () {
    let tr = document.createElement('tr');

    for (let i = 0; i < 1; i++) {
        let td = document.createElement('td');
        tr.appendChild(td);
    }
    table.appendChild(tr);
    console.log(tr);
});*/



//Дана таблица размером 2 на 2:Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица увеличивалась на один ряд и на одну колонку.
/*let btn = document.querySelector('#btn');
let table = document.querySelector('#table');

btn.addEventListener('click', function () {
    for (let i = 0; i < 1; i++) {
        let trs = document.querySelectorAll('#table tr');
        for (let tr of trs) {
            let td = document.createElement('td');
            tr.appendChild(td);
            table.appendChild(tr);
        }

    }
   
});*/



//Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте число в каждой ячейки таблицы в два раза.
/*let button = document.querySelector('#btn');
let table = document.querySelector('#table');

button.addEventListener('click', function(){
    let tds = document.querySelectorAll('#table td');

    for (let td of tds){
        td.innerHTML = Number(td.innerHTML) * 2
    }
});*/



//Дан следующий код:Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
let parent = document.querySelector('#parent');
let button = document.querySelector('#button');

button.addEventListener('click', function () {
   
  
});