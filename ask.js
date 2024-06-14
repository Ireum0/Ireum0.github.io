// 샘플 질문 데이터
var questions = [
  // ...
];

// 질문 등록 처리 함수
function handleQuestionSubmit(event) {
  event.preventDefault();

  var title = document.getElementById('title').value;
  var content = document.getElementById('content').value;
  var category = document.getElementById('category').value;
  var userId = document.getElementById('userId').value;
  var password = document.getElementById('password').value;

  // 질문 데이터 생성
  var newQuestion = {
    id: questions.length + 1,
    title: title,
    content: content,
    category: category,
    userId: userId,
    password: password
  };

  // 질문 데이터 저장
  questions.push(newQuestion);

  // 질문 목록 페이지로 이동
  window.location.href = 'index.html';
}

// 질문 등록 폼 이벤트 리스너 등록
var questionForm = document.getElementById('questionForm');
questionForm.addEventListener('submit', handleQuestionSubmit);
