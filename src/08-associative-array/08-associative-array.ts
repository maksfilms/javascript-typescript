export

let user = {
    name: "Max",
    age: 12,
    address: {
        city: {
            title: "Minsk"
        }
    }
}

// ДОСТУП К СВОЙСТВАМ

user.address.city.title // Minsk
//или
user["address"]["city"]["title"] // Minsk


// Ассоциативный массив

let usersObj = {
    '0': "Max",
    '1': "Alex",
    '2': "Bob",
    '3': 'David'
}
// доступ к свойствам
usersObj.0 // будет ошибка, через точку не сработает

//нужно так
usersObj['0'] // Max
usersObj[3]  // 3 преобразуется в строку
usersObj[null] // преобразует в строку и будет ключ null
usersObj[ {} ] // появиться ключ [object Object]


// создать новый ключ-значение
usersObj['4'] = 'Dima'
usersObj['new key'] = 'text' // создание ключа с пробелами


// Если мы не знаем количество ключей, получить массив со всеми ключами Object.keys(object name)
Object.keys(usersObj) // вернет массив с ключами ['0','1','2','3']

// Получить массив значений
Object.values(usersObj) // ['Max','Alex','Bob','David']

// дальше мы можем работать как с обычным массивом применять или map или filter и т.д.
Object.values(usersObj).map(() => {})


//Объект, который Ассоциативный массив по своему назначению


type UserType = {
    [key: string]: {id: number, name: string}
}

// Храним объекты в ассоциативный массиве
const users: UserType = {
    '101': {id: 101, name: 'Max'},
    '55': {id: 55, name: 'Bob'},
    '33': {id: 33, name: 'Ron'},
    '87': {id: 87, name: 'Zak'},
}

// храним объекты в обычном массиве
let usersArray = [
    {id: 101, name: 'Max'},
    {id: 55, name: 'Bob'},
    {id: 33, name: 'Ron'},
    {id: 87, name: 'Zak'},
]


// ДОСТАТЬ ОБЪЕКТ ИЗ ассоциативного МАССИВА
/*разница в том, как быстро мы можем достать объект из массива зная его ID, если мы максимально быстро хотим доставать
объект, то мы этот ID делаем ключом и тогда мы сможем доставать это - О большое от 1, максимально быстро*/

// для сравнения найти объект по ID если мы не знаем точного индекса:
usersArray.find(u => u.id === 33) // алгоритм O(n),  n - количество элементов в массиве, чем больше элементов тем сложнее доставать их оттуда,
// а в ассоциативный массиве делаем так:
users['33'] // максимально быстрый алгоритм О(1)


//ДОБАВИТЬ ОБЪЕКТ В ассоциативный массив
let member = {id: 123, name: 'Robert'}

// @ts-ignore
users[member.id] = member // преимущество в быстроте этого способа работая с ассоциативным массивом
let usersArrayCopy = [...usersArray.filter((e) => e.id !== member.id), member] // недостаток обычного массива, дольше


// УДАЛЕНИЕ ИЗ ассоциативного МАССИВА
delete users[member.id] // максимально быстро О(1)

// УДАЛЕНИЕ ИЗ обычного МАССИВА
let usersArrayCopy2 = usersArray.filter((e) => e.id !== member.id) // дольше арго ритм O(n)

