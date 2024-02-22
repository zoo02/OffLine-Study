// counterNumber의 초기 숫자는 0이다
// +버튼을 누르면 counterNumber의 숫자가 증가한다
// -버튼을 누르면 counterNumber의 숫자가 감소한다(음수표현가능)
// reset 버튼을 누르면 counterNumber의 숫자가 0으로 초기화된다.


// 초기 숫자, 페이지가 로딩되었을 때
let mainNum = 0

let changeNum = document.getElementById("showNum")
let minusButton = document.getElementById("minusBtn")
let resetButton = document.getElementById("resetBtn")
let plusButton = document.getElementById("plusBtn")


// -버튼을 눌렀을 때 숫자가 감소하는 함수를 만들어준다
const decreaseNum = () => {
    mainNum -= 1
    render()
}

// + 버튼을 눌렀을 때 숫자가 증가하는 함수를 만들어준다
const increaseNum = () => {
    mainNum += 1
    render()
}

// reset버튼을 눌렀을 때 숫자가 0으로 초기화되는 함수를 만들어준다
const resetNum = () => {
    mainNum = 0
    render()
}

// 각 버튼에 클릭 이벤트가 일어났을 때 실행할 함수를 호출해준다
minusButton.addEventListener("click", decreaseNum)
plusButton.addEventListener("click", increaseNum)
resetButton.addEventListener("click", resetNum)



// 화면에 보여줄 숫자를 그리는 함수
const render = () => {
    changeNum.textContent = mainNum
}