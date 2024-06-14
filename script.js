// 질문 목록 업데이트
function updateQuestionList() {
    // 서버에서 질문 목록 가져오기
    fetch('/api/questions')
    .then(response => response.json())
    .then(data => {
        // 질문 목록 업데이트
        const questionList = document.querySelector('.question-list');
        questionList.innerHTML = '';

        // 카테고리별로 질문 목록 표시
        const categoryMap = new Map();
        data.forEach(question => {
            if (!categoryMap.has(question.category)) {
                categoryMap.set(question.category, []);
            }
            categoryMap.get(question.category).push(question);
        });

        categoryMap.forEach((questions, category) => {
            const categoryElement = document.createElement('div');
            categoryElement.classList.add('category');

            const categoryTitle = document.createElement('h2');
            categoryTitle.textContent = category;
            categoryElement.appendChild(categoryTitle);

            const questionElements = document.createElement('div');
            questionElements.classList.add('question-elements');
            questions.forEach(question => {
                const questionElement = document.createElement('a');
                questionElement.classList.add('question-element');
                questionElement.href = `/question/${question.id}`;
                questionElement.textContent = question.title;
                questionElements.appendChild(questionElement);
            });
            categoryElement.appendChild(questionElements);

            questionList.appendChild(categoryElement);
        });
    })
    .catch(error => {
        // 질문 목록 가져오기 실패 시 처리
        console.error(error);
    });
}

// 페이지 로드 시 질문 목록 업데이트
window.addEventListener('load', updateQuestionList);
