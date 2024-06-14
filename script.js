// 샘플 질문 데이터
const questions = [
    { title: '질문 제목 1', content: '질문 내용 1...' },
    { title: '질문 제목 2', content: '질문 내용 2...' },
    { title: '질문 제목 3', content: '질문 내용 3...' },
    { title: '질문 제목 4', content: '질문 내용 4...' },
    { title: '질문 제목 5', content: '질문 내용 5...' }
];

// 질문 목록 생성 함수
function renderQuestionList() {
    const questionList = document.getElementById('questionList');

    questions.forEach(question => {
        const questionItem = document.createElement('li');
        questionItem.classList.add('question-item');

        const questionTitle = document.createElement('h3');
        questionTitle.classList.add('question-title');
        questionTitle.textContent = question.title;

        const questionContent = document.createElement('p');
        questionContent.classList.add('question-content');
        questionContent.textContent = question.content;

        questionItem.appendChild(questionTitle);
        questionItem.appendChild(questionContent);
        questionList.appendChild(questionItem);
    });
}

// 페이지 로드 시 질문 목록 렌더링
window.addEventListener('DOMContentLoaded', renderQuestionList);
