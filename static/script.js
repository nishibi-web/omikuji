// HTMLの部品をJavaScriptの変数（箱）に代入する
const resultText = document.getElementById('result-text');
const drawBtn = document.getElementById('draw-btn');

const omikuji=["大吉","中吉","小吉","大凶"];

drawBtn.addEventListener("click",() => {
    const randamIndex=Math.floor(Math.random()*omikuji.length);
    const result=omikuji[randamIndex];
    resultText.textContent=result;
    console.log("結果は"+result);
});
