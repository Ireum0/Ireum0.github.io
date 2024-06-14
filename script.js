// answer_index.js

// 질문 데이터 (실제로는 서버에서 가져오는 데이터일 것입니다)
const questions = [
  { id: 1, title: "질문 1", category: "category1" },
  { id: 2, title: "질문 2", category: "category2" },
  { id: 3, title: "질문 3", category: "category1" },
  { id: 4, title: "질문 4", category: "category3" },
  { id: 5, title: "질문 5", category: "category2" },
];

// 질문 목록 요소
const questionList = document.querySelector(".question-list");

// 카테고리 버튼 요소
const categoryBtns = document.querySelectorAll(".category-btn");

// 현재 선택된 카테고리
let selectedCategory = "all";

// 질문 목록 렌더링 함수
function renderQuestions() {
  questionList.innerHTML = "";

  questions.forEach((question) => {
    if (selectedCategory === "all" || question.category === selectedCategory) {
      const questionItem = document.createElement("div");
      questionItem.classList.add("question-item");
      questionItem.innerHTML = `
        <h3>${question.title}</h3>
        <p>카테고리: ${question.category}</p>
      `;
      questionList.appendChild(questionItem);
    }
  });
}

// 카테고리 버튼 클릭 이벤트 핸들러
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    selectedCategory = category;

    // 활성화된 버튼 스타일 변경
    document.querySelector(".category-btn.active").classList.remove("active");
    btn.classList.add("active");

    renderQuestions();
  });
});

// 초기 렌더링
renderQuestions();
