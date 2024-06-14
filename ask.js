// 질문 등록 폼 처리
const questionForm = document.getElementById('questionForm');
questionForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // 폼 데이터 수집
    const formData = new FormData(questionForm);

    // 서버로 질문 등록 요청
    fetch('/api/questions', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // 질문 등록 성공 시 처리
        console.log(data);
        questionForm.reset();
        updateQuestionList();
    })
    .catch(error => {
        // 질문 등록 실패 시 처리
        console.error(error);
    });
});
