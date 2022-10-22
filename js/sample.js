const arr = [1, 2, 3, 4]

const [one, , three] = arr;

console.log(one) // -> 1
console.log(three) // -> 3

const users = [
    '太郎', '花子', '一郎'
];

const [firstUser] = users;
console.log(firstUser);

////////////////////////////////

const arrOne = [1, 2, 3, 4];
const arrTwo = [9, 8, 7];

const arrThree = [
    ...arrOne,
    ...arrTwo,
    "JavaScript"
];
console.log(arrThree) // -> [1, 2, 3, 9, 8, 7, "JavaScript"]