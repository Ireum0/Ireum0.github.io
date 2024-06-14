// 함수가 호출 되었을 때(quesiton 부분이 클릭 되었을 때)
function showAnswerBox(questionElement) {
    // answerBox를 html의 answer-box로 저장
    const answerBox = questionElement.querySelector('.answer-box');

    // answerBox가 보일 떄 호출 되었다면
    if (answerBox.style.display === 'block') {
        // answerBox를 숨긴다
        answerBox.style.display = 'none';
    } else {
        // answerBox를 보이게한다
        answerBox.style.display = 'block';
    }
}

// 답변 제출 버튼을 눌렀을 때
function submitAnswer(buttonElement) {
    // button요소를 answerBox에 저장
    const answerBox = buttonElement.parentElement;

    // html의 textarea 요소를 textarea에 저장
    const textarea = answerBox.querySelector('textarea');

    // textarea의 양쪽 공백을 제거하여 answer에 저장
    const answer = textarea.value.trim();

    // 대답이 입력되었을 때
    if (answer) {
        // 팝업을 띄움
        alert('답변이 제출되었습니다');
        
        // 답변을 저장하여 보여주는 역할
        // 새로운 답변 div 생성
        const answerDiv = document.createElement('div');

        // submitted-answer 클래스를 추가하여 css에서 디자인 값을 받아옴
        answerDiv.classList.add('submitted-answer');

        // 답변을 answerDiv에 저장
        answerDiv.textContent = answer;

        // answerBox 상단에 답변 추가
        answerBox.parentElement.insertBefore(answerDiv, answerBox);

        // 텍스트박스 초기화
        textarea.value = '';

    // 답변을 입력받지 못 했을 때
    } else {
        // 답변을 입력하라는 팝업을 띄움
        alert('답변을 입력하세요.');
    }
}

// answer-box의 class 요소들을 불러와 하나씩 answerboxBox에 저장
// answerBox의 클릭이벤트가 생겼을 때 질문 탭(부모요소)이 반응하는걸 억제
document.querySelectorAll('.answer-box').forEach(answerBox => {
    answerBox.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
