// 정답 길이
const answerLen = 3;
// 맞춰야 하는 3자리 수의 배열 생성(정답)
let answerNum = new Array(answerLen);
// 유저가 입력할 숫자 삽입 배열 생성
let playerNum = new Array(answerLen);

// const $playNum = document.getElementById('#playNum');
const $start = document.getElementById('start');
const $num1 = document.getElementById('#num1');
const $num2 = document.getElementById('#num2');
const $num3 = document.getElementById('#num3');
const $play = document.getElementById('play');


// 정답 생성 함수
const makeNumber = function (){
    let candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];    
    for (let i=0; i<answerLen; i++){
        answerNum[i] = candidate[Math.floor(Math.random() * candidate.length)];
        candidate.splice(answerNum[i],1);
    }; 
    console.log("정답 : ", answerNum)
    return answerNum;
};


// 플레이어 입력값 유효성 검사 1)범위 2)널값 3)중복값
$play.addEventListener("click", () => {
    
    // 숫자의 범위는 input tag에서 확인
    // null 값 확인
    if (num1.value.length ==""||num2.value.length ==""||num3.value.length =="") {
        window.alert("0~9사이 값을 넣어주세요!")
        return false;        
    }

    playerNum = [num1.value, num2.value, num3.value];
    console.log(playerNum)

    // 중복체크
    let checkNum = playerNum.slice()
    for (let i=0; i<answerLen; i++){
        let num = checkNum.pop()
        if (checkNum.includes(num)){
            window.alert("중복되지 않은 숫자 3개를 넣어주세요!")
            return false;
        }
    }; 
    return compareNumber(playerNum)
});




// 정답과 입력값 비교
const compareNumber = function (playerNum3){

    let strike = 0;
    let ball = 0;
    let out = 0;

    for (let i=0; i<answerLen; i++){
        if (answerNum[i] === playerNum[i]){
            strike += 1;
        } else if (answerNum.includes(playerNum[i])) {
            ball += 1;
        } else {
            out += 1;
        }        
    }; 
    // 비교 결과 확인
    console.log("%sS %sB %sO", strike, ball, out);
    return checkResult(strike, ball, out)
};



// 결과 확인하기
const checkResult = function (strike, ball, out){
    if (strike == 3) {
        window.alert("와! 스트라이크에요!")
    } else {
        window.alert(`${strike}S ${ball}B ${out}O\n다시 시도하세요 ㅠㅠ`, strike, ball, out)
        count =+1;
    }
};



// 게임 start!
const playNum = 9;
$start.addEventListener("click", () => {

    // 정답생성
    makeNumber()      
    window.alert("게임 START!\n0~9 사이의 숫자 3개를 입력하세요!")    

});
