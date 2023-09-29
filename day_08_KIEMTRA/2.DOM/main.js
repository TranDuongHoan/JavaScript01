// Vừa vào trang hiển thị danh sách quiz (bao gồm tiêu đề và danh sách các câu trả lời)
const quizContainer = document.querySelector('.quiz-container');

// Khi bấm vào nút “Random Answer” thì random câu trả lời cho từng câu hỏi và tự động được check vào (Mỗi câu hỏi chỉ check 1 câu trả lời)

const randomAnswerButton = document.getElementById('btn');
randomAnswerButton.addEventListener('click', randomizeAnswers);

function randomizeAnswers() {
  const quizItems = document.querySelectorAll('.quiz-item');
  
    quizItems.forEach(item => {
      const radioButtons = item.querySelectorAll('input[type="radio"]');
      const randomIndex = Math.floor(Math.random() * radioButtons.length);       
      radioButtons.forEach(radio => radio.checked = false);      
      radioButtons[randomIndex].checked = true;
    });
}





