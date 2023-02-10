# Тестовое задание

## Задачи:

1. Разработайте на React небольшое приложение-чат.

## Установка и запуск

- склонировать репозиторий - git clone https://github.com/godninoff/expertise-chat.git
- перейти в папку с проектом - cd expertise-chat
- npm i - установить зависимости
- npm run dev - для совместного запуска приложения вместе с сервером
- перейти по url в терминале

2. Изучая причину неправильно работающего приложения, стажёр Маша
   нашла код, который возвращает не совсем ожидаемый результат.

```
var arr = [];
var k = 5;
for (var index = 0; index < 5; index++) {
arr.push(() => console.log(k + index));
k++;
}
arr.forEach(element => {
element.call();
});
```

После исполнения в консоль будут выведены 5 строчек с числом «15».
Маша ожидает, что для правильной работы программы, в консоли должны
быть выведены числа 5, 7, 9, 11, 13 Помогите Маше исправить код.

Решение:

```
let arr = [];
let k = 5;
for (let index = 0; index < 5; index++) {
  arr.push(() => console.log(k + index - 1));
}
arr.forEach((element) => {
  element.call(k++);
});
```

3. Дана БД, имеющая две таблицы: сотрудники и подразделение.  
   Необходимо написать 5 запросов.  
   Напишите запросы, которые выведут:

- 1. Сотрудника с максимальной заработной платой.

```
select * from employee
where salary > 0
order by salary desc limit 1
```

- 2.  Отдел с самой высокой заработной платой между сотрудниками.

```
select d.name, avg(salary) as salary_avg from employee e
join department d on d.id = e.department_id
where salary > 0
group by e.department_id, d.name
order by salary_avg desc
limit 1
```

- 3. Отдел с максимальной суммарной зарплатой сотрудников.

```
select d.name, max(salary) as salary_max from employee e
join department d on d.id = e.department_id
where salary > 0
group by e.department_id, d.name
order by salary_max desc
limit 1
```

- 4. Сотрудника, чье имя начинается на «М» и заканчивается на «а».

```
select employee.name from employee
where name like 'M%a'
```

4.  Маша пришла в спортивный зал и хочет позаниматься на тренажёре
    с нагрузкой в 16 килограммов. Рядом лежит груда чугунных блинов.
    Девушка видит, что пудовых грузов в наборе сейчас нет, значит, одним
    блином не обойтись, а больше двух на тренажёр не установить.  
     Маше нужно найти два блина (или один, если такой будет иметься в
    наличии), которые в сумме дают 16 килограммов, и при этом не потратить на
    поиск всё отведённое на тренировку время. Гарантируется, что это
    выполнимая задача и такие два блина точно есть: об этом Маше рассказал её
    друг, который занимался на этом же тренажёре с той же нагрузкой.  
    Составьте на JS или TS алгоритм, по которому Маша сможет получить
    необходимый для тренажёра вес. Так как девушка купила премиум
    абонемент, подразумевается, что в зале могут встречаться блины
    всевозможных размеров.

Решение:

```
const weights = [4, 3, 20, 25, 1.25, 2.5, 8, 10, 12, 5, 13];
const weightResulting = 16;
const result = [];

for (let index = 0; index < weights.length; index++) {
  for (let j = 0; j < weights.length; j++) {
    weights[index] + weights[j] === weightResulting
      ? result.push(weights[index], weights[j])
      : null;
  }
}

console.log(result.slice(0, 2));
```

### Технологии:

- [JavaScript](https://www.javascript.com/)
- [React](https://reactjs.org/)
- [Next JS](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [JSON Server](https://www.npmjs.com/package/json-server)
- [Axios](https://axios-http.com/)
