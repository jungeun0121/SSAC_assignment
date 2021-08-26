
// 정답 길이
const answerLen = 3;

// 맞춰야 하는 3자리 수의 배열 생성(정답)
let answerNum = new Array(answerLen);
function makeNumber(){

    let candidate = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];    

    for (let i =0; i<answerLen; i++){

        answerNum[i] = candidate[Math.floor(Math.random() * candidate.length)];
        candidate.splice(answerNum[i],1);
        console.log(candidate); // candidate 요소 삭제 확인
        
    }; 

    return answerNum;

};


// 정답과 입력값 비교
function compareNumber(num1, num2, num3){

    // 유저 입력값 배열로 변환
    const playerNum = [num1, num2, num3];

    let strike = 0;
    let ball = 0;
    let out = 0;

    for (let i =0; i<answerLen; i++){
        if (answerNum[i] == playerNum[i]){
            strike += 1;
        } else if (answerNum.includes(playerNum[i])) {
            ball += 1;
        } else {
            out += 1;
        }        
    }; 
    
    // 비교 결과 확인
    console.log("%sS %sB %sO", strike, ball, out);
    return (s, b, o)

};

console.log("answer = ", makeNumber())
compareNumber(1,2,3)