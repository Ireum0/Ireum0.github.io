// 로컬 스토리지에서 질문 데이터 가져오기
let questions = JSON.parse(localStorage.getItem('questions')) || [];

// 최신 질문 섹션에 질문들을 추가
let latestQuestionsSection = document.getElementById('latest-questions');
let questionList = latestQuestionsSection.querySelector('ul');

questions.forEach((question, index) => {
    let li = document.createElement('li');
    let a = document.createElement('a');
    a.textContent = question.title;
    a.href = '#';
    li.appendChild(a);
    let p = document.createElement('p');
    p.textContent = question.content;
    li.appendChild(p);
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '삭제';
    deleteBtn.onclick = () => deleteQuestion(index);
    li.appendChild(deleteBtn);
    questionList.insertBefore(li, questionList.firstChild);
});

// 새 질문 추가 기능
let questionCount = questions.length;
let addNewQuestionBtn = document.getElementById('add-new-question');
addNewQuestionBtn.addEventListener('click', addNewQuestion);

function addNewQuestion() {
    let newQuestion = document.createElement('li');
    newQuestion.innerHTML = `
        <a href="#">새로운 질문 제목 ${questionCount + 1}</a>
        <p>새로운 질문 내용 ${questionCount + 1}이 여기에 들어갑니다.</p>
        <button class="delete-btn" onclick="deleteQuestion(${questionCount})">삭제</button>
    `;
    questionList.insertBefore(newQuestion, questionList.firstChild);
    questionCount++;

    // 질문 데이터를 로컬 스토리지에 저장
    questions.unshift({
        title: `새로운 질문 제목 ${questionCount}`,
        content: `새로운 질문 내용 ${questionCount}이 여기에 들어갑니다.`
    });
    localStorage.setItem('questions', JSON.stringify(questions));
}

// 질문 삭제 기능
function deleteQuestion(index) {
    // 1. 로컬 스토리지에서 질문 데이터 가져오기
    questions = JSON.parse(localStorage.getItem('questions')) || [];

    // 2. 선택한 질문 삭제
    questions.splice(index, 1);

    // 3. 업데이트된 질문 데이터를 로컬 스토리지에 저장
    localStorage.setItem('questions', JSON.stringify(questions));

    // 4. 페이지 새로고침
    window.location.reload();
}
