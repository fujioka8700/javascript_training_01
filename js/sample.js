const data = {
    firstName: '田中',
    lastName: '太郎',
    email: 'tarou@example.jp',
};

function getFullName({firstName, lastName}) {
    // return '田中 太郎';
    return firstName + ' ' + lastName;
}

console.log(getFullName(data));

/////////////////////////////////
// 取り出すキーが実引数に、存在しなくてもエラーにはならない
const obj = {
    hello: 'world'
};

const func = ({name}) => console.log(name);

func(obj);