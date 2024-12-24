function addAssignmentField() {
    const fields = document.getElementById('assignment-fields');
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    const totalInput = document.createElement('input');
    const obtainedInput = document.createElement('input');

    totalInput.type = "number";
    totalInput.className = "assignment_total";
    totalInput.placeholder = "Total Marks";

    obtainedInput.type = "number";
    obtainedInput.className = "assignment_obtained";
    obtainedInput.placeholder = "Obtained Marks";

    inputGroup.appendChild(totalInput);
    inputGroup.appendChild(obtainedInput);

    fields.appendChild(inputGroup);
}

function addQuizField() {
    const fields = document.getElementById('quiz-fields');
    const inputGroup = document.createElement('div');
    inputGroup.className = 'input-group';

    const totalInput = document.createElement('input');
    const obtainedInput = document.createElement('input');

    totalInput.type = "number";
    totalInput.className = "quiz_total";
    totalInput.placeholder = "Total Marks";

    obtainedInput.type = "number";
    obtainedInput.className = "quiz_obtained";
    obtainedInput.placeholder = "Obtained Marks";

    inputGroup.appendChild(totalInput);
    inputGroup.appendChild(obtainedInput);

    fields.appendChild(inputGroup);
}

function calculateGPA() {
    const quizTotals = document.getElementsByClassName('quiz_total');
    const quizObtained = document.getElementsByClassName('quiz_obtained');
    let quizTotalMarks = 0;
    let quizObtainedMarks = 0;
    for (let i = 0; i < quizTotals.length; i++) {
        quizTotalMarks += parseFloat(quizTotals[i].value) || 0;
        quizObtainedMarks += parseFloat(quizObtained[i].value) || 0;
    }
    const quizPercentage = quizObtainedMarks / quizTotalMarks || 0;

    const assignmentTotals = document.getElementsByClassName('assignment_total');
    const assignmentObtained = document.getElementsByClassName('assignment_obtained');
    let assignmentTotalMarks = 0;
    let assignmentObtainedMarks = 0;
    for (let i = 0; i < assignmentTotals.length; i++) {
        assignmentTotalMarks += parseFloat(assignmentTotals[i].value) || 0;
        assignmentObtainedMarks += parseFloat(assignmentObtained[i].value) || 0;
    }
    const assignmentPercentage = assignmentObtainedMarks / assignmentTotalMarks || 0;

    const midtermTotal = parseFloat(document.getElementById('midterm_total').value) || 0;
    const midtermObtained = parseFloat(document.getElementById('midterm_obtained').value) || 0;
    const midtermPercentage = midtermObtained / midtermTotal || 0;

    const finalTotal = parseFloat(document.getElementById('final_total').value) || 0;
    const finalObtained = parseFloat(document.getElementById('final_obtained').value) || 0;
    const finalPercentage = finalObtained / finalTotal || 0;

    const totalScore = (quizPercentage * 10) + (assignmentPercentage * 15) + (midtermPercentage * 25) + (finalPercentage * 50);

    let gpa;
    if (totalScore >= 85) gpa = 4.00;
    else if (totalScore >= 80) gpa = 3.66;
    else if (totalScore >= 75) gpa = 3.33;
    else if (totalScore >= 71) gpa = 3.00;
    else if (totalScore >= 68) gpa = 2.66;
    else if (totalScore >= 64) gpa = 2.33;
    else if (totalScore >= 61) gpa = 2.00;
    else if (totalScore >= 58) gpa = 1.66;
    else if (totalScore >= 54) gpa = 1.30;
    else if (totalScore >= 50) gpa = 1.00;
    else gpa = 0.00;

    document.getElementById('result').textContent = `Your GPA is: ${gpa.toFixed(2)}`;
    document.getElementById('result').style.color = "green";
}
