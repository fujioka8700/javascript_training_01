// ハンドラーは foo のスコープ外に定義する
const handleResize = () => {
    console.log('foo')
};

function foo() {
    // 初回実行時はまだハンドラーが登録されていないが、
    // removeEventListener はマッチする関数がなくてもエラーにはならない
    window.removeEventListener('resize', handleResize);
    window.addEventListener('resize', handleResize);
    // ...
}

const btn = document.querySelector('button');

btn.addEventListener('click', foo());
btn.addEventListener('click', foo());
btn.addEventListener('click', foo());