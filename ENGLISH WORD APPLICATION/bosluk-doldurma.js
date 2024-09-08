var currentQuestionIndex = 0;
var questions = [
    { question: "1.Soru.  Teacher kelimesinin anlamı nedir?", options: [
        { text: "Öğretmen", image: "jobs/teacher.png" },
        { text: "Mühendis", image: "jobs/cleaner.png" },
        { text: "Doktor", image: "jobs/astronut.png" },
        { text: "Öğrenci", image: "jobs/policeman.png"}
    ], answerIndex: 0 },
    { question: "2.Soru. Farmer kelimesinin anlamı nedir?", options: [
        { text: "Palyaço", image: "jobs/clown.png" },
        { text: "Çiftçi", image: "jobs/farmer.png" },
        { text: "İtfayeci", image: "jobs/fireman.png" },
        { text: "Terzi", image: "jobs/tailor.png" }
    ], answerIndex: 1 },
    { question: "3.Soru.  Astronaut kelimesinin anlamı nedir?", options: [
        { text: "Öğretmen", image: "jobs/policeman.png" },
        { text: "Uçak Hostesi", image: "jobs/asir-hostes.png" },
        { text: "Astronot", image: "jobs/astronut.png" },
        { text: "Pilot", image: "jobs/pilot.png" }
    ], answerIndex: 2 },
    { question: "4.Soru.  Pilot kelimesinin anlamı nedir?", options: [
        { text: "Hakim", image: "jobs/judge.png" },
        { text: "Denizci", image: "jobs/sailor.png" },
        { text: "Postacı", image: "jobs/postman.png" },
        { text: "Pilot", image: "jobs/pilot.png" }
    ], answerIndex: 3 },
    { question: "5.Soru.  Postman kelimesinin anlamı nedir?", options: [
        { text: "Denizci", image: "jobs/pilot.png" },
        { text: "Aşcı", image: "jobs/cooks.png" },
        { text: "Denizci", image: "jobs/sailor.png" },
        { text: "Postacı", image: "jobs/postman.png" }
    ], answerIndex: 3 },
    { question: "6.Soru.  Sailor kelimesinin anlamı nedir?", options: [
        { text: "Hakim", image: "jobs/judge.png" },
        { text: "itfayeci", image: "jobs/fireman.png" },
        { text: "Denizci", image: "jobs/sailor.png" },
        { text: "Palyaço", image: "jobs/clown.png" }
    ], answerIndex: 2 },
    { question: "7.Soru.  Cook kelimesinin anlamı nedir?", options: [
        { text: "Terzi", image: "jobs/tailor.png" },
        { text: "Aşçı", image: "jobs/cooks.png" },
        { text: "Bel Boy", image: "jobs/bell-boy.png" },
        { text: "Öğretmen", image: "jobs/teacher.png" }
    ], answerIndex: 1 },
    { question: "8.Soru.  Air Hostes kelimesinin anlamı nedir?", options: [
        { text: "Temizlikçi", image: "jobs/cleaner.png" },
        { text: "Judge", image: "jobs/teacher.png" },
        { text: "Uçak Hostesi", image: "jobs/asir-hostes.png" },
        { text: "Astronot", image: "jobs/astronut.png" }
    ], answerIndex: 2 },
    { question: "9.Soru.  Bell Boy kelimesinin anlamı nedir?", options: [
        { text: "Öğretmen", image: "jobs/teacher.png" },
        { text: "Postacı", image: "jobs/postman.png" },
        { text: "Bel Boy", image: "jobs/bell-boy.png" },
        { text: "Terzici", image: "jobs/tailor.png" }
    ], answerIndex: 2 },
    { question: "10.Soru.  Policeman kelimesinin anlamı nedir?", options: [
        { text: "Hakim", image: "jobs/judge.png" },
        { text: "Pilot", image: "jobs/pilot.png" },
        { text: "Polis", image: "jobs/policeman.png" },
        { text: "Çifçi", image: "jobs/farmer.png" }
    ], answerIndex: 2 },
];

function displayQuestion(index) {
    var wordCard = document.getElementById('word-card');
    var optionsContainer = document.getElementById('options');
    var resultElement = document.getElementById('result');

    wordCard.innerHTML = "<span>" + questions[index].question + "</span>  <p>This is a__________ example.</p>";
    resultElement.innerHTML = "";

    for (var i = 0; i < 4; i++) {
        var optionElement = document.getElementById('option' + (i + 1));
        optionElement.innerHTML = "<img src='" + questions[index].options[i].image + "' alt='" + questions[index].options[i].text + "'>" +
                                   "<span>" + questions[index].options[i].text + "</span>";
        optionElement.classList.remove('correct', 'incorrect');
    }
}

function checkAnswer(selectedOption) {
    var resultElement = document.getElementById('result');
    var correctOptionId = 'option' + (questions[currentQuestionIndex].answerIndex + 1);

    var userAnswer = selectedOption.querySelector('span').innerText.toLowerCase();

    if (userAnswer === questions[currentQuestionIndex].options[questions[currentQuestionIndex].answerIndex].text.toLowerCase()) {
        resultElement.innerHTML = 'Tebrikler soruyu doğru bildiniz';
        resultElement.style.color="green";
        resultElement.style.fontSize="18px";
        selectedOption.classList.add('correct');
    } else {
        resultElement.innerHTML = 'Yanlış cevap .Lütfen tekrar gözden geçiriniz';
        resultElement.style.color="red";
        resultElement.style.fontSize="18px";
        selectedOption.classList.add('incorrect');
    }

    // Doğru şıkkın arka planını yeşil yap
    document.getElementById(correctOptionId).classList.add('correct');
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion(currentQuestionIndex);
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        displayQuestion(currentQuestionIndex);
    }
}

// İlk soruyu görüntüle
displayQuestion(currentQuestionIndex);




//Account Event
const account =document.getElementById("account");
const drop_account=document.getElementById("drop_account");
const image =document.getElementById("image");

account.addEventListener("click", ()=>
{
    account.style.top="50px";
    drop_account.style.display="block";

});
// Click Outside
document.addEventListener("click", function (event) {
    if (!event.composedPath().includes(drop_account) && !event.composedPath().includes(account)) {
        drop_account.style.display = "none";
        account.style.top="0px";
        image.style.display="block";
    }
  });