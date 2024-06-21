        document.getElementById('question-form').addEventListener('submit', function(event) {
            event.preventDefault();
            var title = document.getElementById('question-title').value;
            var content = document.getElementById('question-content').value;
            var question = {
                title: title,
                content: content
            };
            // 저장된 질문 배열 가져오기
            var questions = JSON.parse(localStorage.getItem('questions')) || [];
            // 새 질문 추가
            questions.push(question);
            // 로컬 스토리지에 저장
            localStorage.setItem('questions', JSON.stringify(questions));
            // 홈페이지로 이동
            window.location.href = 'index.html';
        });
