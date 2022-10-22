/**
 * メッセージボタン
 * @constructor
 * @param {HTMLElement} element 対象のボタン要素
 */
function MessageButton(element) {
    /** @member {HTMLElement} target ボタン */
    this.target = element;

    /** @member {string} message メッセージ文言 */
    this.message = element.dataset.message;

    // prototype に追加したメソッドは this 経由で呼び出せる
    this.handleClick();
}

/**
 * クリックイベントのリスナーを登録する
 */
MessageButton.prototype.handleClick = function () {
    this.target.addEventListener('click', this.greeting.bind(this));
};

/**
 * メッセージを出力する
 */
MessageButton.prototype.greeting = function () {
    console.log(this.message);
};

const btn = document.querySelector('button');
console.log(btn)
new MessageButton(btn);