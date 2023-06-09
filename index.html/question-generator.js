// Funzione per generare domande casuali
function generateRandomQuestions(topic, count) {
    var questionStarts = [
        "Cosa sai su " + topic + "?",
        "Qual è il tuo pensiero su " + topic + "?",
        "Cosa ti piace di " + topic + "?",
        "Cosa non ti piace di " + topic + "?",
        "Qual è la tua esperienza con " + topic + "?",
        "Quali sono alcune controversie o dibattiti legati a " + topic + "?",
        "Quali sono le tendenze attuali in " + topic + "?",
        "Come " + topic + " sta influenzando la società?",
        "Quali sono i vantaggi e gli svantaggi di " + topic + "?",
        "Quali sono alcune fonti affidabili per informarsi su " + topic + "?",
        "Come prevedi che " + topic + " evolverà nel prossimo futuro?",
        "Quali sono le principali sfide legate a " + topic + "?"
        // Aggiungi altre frasi di inizio domanda se desideri maggiori opzioni
    ];

    var questions = [];
    for (var i = 0; i < count; i++) {
        var randomIndex = Math.floor(Math.random() * questionStarts.length);
        var question = questionStarts[randomIndex];
        questions.push(question);
        questionStarts.splice(randomIndex, 1); // Rimuove la domanda dall'elenco per evitare duplicati
    }

    return questions;
}

// Funzione per visualizzare le domande generate nell'HTML
function displayQuestions(questions) {
    var questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';

    questions.forEach(function(question) {
        var questionElement = document.createElement('p');
        questionElement.textContent = question;
        questionContainer.appendChild(questionElement);
    });
}

// Funzione per gestire il click sul pulsante "Genera Domande"
function handleGenerateButtonClick() {
    var topic = document.getElementById('topic-input').value;
    var count = document.getElementById('question-count').value;

    var questions = generateRandomQuestions(topic, count);
    displayQuestions(questions);
}

// Aggiungi l'evento click al pulsante "Genera Domande"
document.getElementById('generate-button').addEventListener('click', handleGenerateButtonClick);