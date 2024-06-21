        // 로컬 스토리지에서 질문 데이터 가져오기
        var questions = JSON.parse(localStorage.getItem('questions')) || [];
    
        // 최신 질문 섹션에 질문들을 추가
var latestQuestionsSection = document.getElementById('latest-questions');
questions.forEach(function(question) {
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = question.title;
    a.href = '#';
    li.appendChild(a);
    var p = document.createElement('p');
    p.textContent = question.content;
    li.appendChild(p);
    // 기존 질문들 앞에 추가
    var existingQuestions = latestQuestionsSection.querySelector('ul').children;
    if (existingQuestions.length > 0) {
        latestQuestionsSection.querySelector('ul').insertBefore(li, existingQuestions[0]);
    } else {
        latestQuestionsSection.querySelector('ul').appendChild(li);
    }
});

// 질문 삭제 기능
function deleteQuestion(index) {
    // 1. 로컬 스토리지에서 질문 데이터 가져오기
    var questions = JSON.parse(localStorage.getItem('questions')) || [];

    // 2. 선택한 질문 삭제
    questions.splice(index, 1);

    // 3. 업데이트된 질문 데이터를 로컬 스토리지에 저장
    localStorage.setItem('questions', JSON.stringify(questions));

    // 4. 페이지 새로고침
    window.location.reload();
}
