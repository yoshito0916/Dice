'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['一', '二', '三', '四', '五', '六'];
    //本来のフェアな確率

    // const results = ['一', '一', '一', '四', '五', '五'];
    //このようにすると確率を操作できる

    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];
    //上の式を一つにまとめると下のようになる。
    btn.textContent = results[Math.floor(Math.random() * results.length)];

    //さらにif文を使って確率を操作することもできる
    // const n = Math.random();
    // if (n < 0.05) {
    //   btn.textContent = '大吉'; //5%
    // } else if (n < 0.2) {
    //   btn.textContent = '中吉'; //15%
    // } else {
    //   btn.textContent = '凶'; //80%
    // }

    
    //switch文を使って表示する方法
    // switch (n) {
    //   case 0:
    //     btn.textContent = '大吉';
    //     break;
    //   case 1:
    //     btn.textContent = '中吉';
    //     break;
    //   case 2:
    //     btn.textContent = '凶';
    //     break;
    // }
  });
}
