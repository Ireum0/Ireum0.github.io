// 질문 목록 업데이트
function updateQuestionList() {
    // 서버에서 질문 목록 가져오기
    fetch('/api/questions')
    .then(response => response.json())
    .then(data => {
        // 질문 목록 업데이트
        const questionList = document.querySelector('.question-list');
        questionList.innerHTML = '';
        data.forEach(question => {
            const questionElement = document.createElement('div');
            questionElement.textContent = question.title;
            questionList.appendChild(questionElement);
        });
    })
    .catch(error => {
        // 질문 목록 가져오기 실패 시 처리
        console.error(error);
    });
}

// 페이지 로드 시 질문 목록 업데이트
window.addEventListener('load', updateQuestionList);
