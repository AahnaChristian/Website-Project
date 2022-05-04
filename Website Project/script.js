// HTML Input Variables
let ans1InEl = document.getElementById('a1');
let ans2InEl = document.getElementById('a2');
let ans3InEl = document.getElementById('a3');
let ans4InEl = document.getElementById('a4');
let ans5InEl = document.getElementById('a5');
let totalMarkEl = document.getElementById('marks');
let percentEl = document.getElementById('per');
let btnEl = document.getElementById('sub_btn');
let responseEl = document.getElementById('resStatement');
let feedback1El = document.getElementById('feedback1');
let feedback2El = document.getElementById('feedback2');
let feedback3El = document.getElementById('feedback3');
let feedback4El = document.getElementById('feedback4');
let feedback5El = document.getElementById('feedback5');

// Global Variables
let totalMar = 0;
let percent = 0;

// Event Listener
btnEl.addEventListener('click', check);

// Event Function
function check() {
    // Case Insensetive
    let ans1In = ans1InEl.value.toLowerCase();
    let ans2In = ans2InEl.value.toLowerCase();
    let ans3In = ans3InEl.value.toLowerCase();
    let ans4In = ans4InEl.value.toLowerCase();
    let ans5In = ans5InEl.value.toLowerCase();

    // Answer check + Marks display
    // Q1
    if (ans1In === '3' || ans1In === 'three') {
        ans1InEl.style.border = '2px solid green';
        totalMar++;
        totalMarkEl.innerHTML = totalMar;
        feedback1El.innerHTML = ' Correct';
    } else if (ans1In !== '3' || ans1In !== 'three') {
        ans1InEl.style.border = '2px solid red';
        feedback1El.innerHTML = ' Incorrect';
    }

    // Q2
    if (ans2In === '3' || ans2In === 'three') {
        ans2InEl.style.border = '2px solid green';
        totalMar++;
        totalMarkEl.innerHTML = totalMar;
        feedback2El.innerHTML = ' Correct';
    } else if (ans2In !== '3' || ans2In !== 'three') {
        ans2InEl.style.border = '2px solid red';
        feedback2El.innerHTML = ' Incorrect';
    }

    // Q3
    if (ans3In === 'leonardo da vinci' || ans3In === 'leonardo') {
        ans3InEl.style.border = '2px solid green';
        totalMar++;
        totalMarkEl.innerHTML = totalMar;
        feedback3El.innerHTML = ' Correct';
    } else if (ans3In !== 'leonardo da vinci' || ans3In !== 'leonardo') {
        ans3InEl.style.border = '2px solid red';
        feedback3El.innerHTML = ' Incorrect';
    }

    // Q4
    if (ans4In === 'a sunday afternoon on the island of la grande jatte' || ans4In === 'sunday afternoon' || ans4In === 'sunday afternoon on the island of la grande jatte' || ans4In === 'sunday afternoon on the island') {
        ans4InEl.style.border = '2px solid green';
        totalMar++;
        totalMarkEl.innerHTML = totalMar;
        feedback4El.innerHTML = ' Correct';
    } else if (ans4In !== 'a sunday afternoon on the island of la grande jatte' || ans4In !== 'sunday afternoon' || ans4In !== 'sunday afternoon on the island of la grande jatte' || ans4In !== 'sunday afternoon on the island') {
        ans4InEl.style.border = '2px solid red';
        feedback4El.innerHTML = ' Incorrect';
    }

    // Q5
    if (ans5In === 'the starry night' || ans5In === 'starry night') {
        ans5InEl.style.border = '2px solid green';
        totalMar++;
        totalMarkEl.innerHTML = totalMar;
        feedback5El.innerHTML = ' Correct';
    } else if (ans5In !== 'the starry night' || ans5In !== 'starry night') {
        ans5InEl.style.border = '2px solid red';
        feedback5El.innerHTML = ' Correct';
    }

    // Percent calculation
    let percent = (totalMar / 5) * 100;
    percentEl.innerHTML = percent;

    if (percent === 100) {
        // Celebrating statement
        responseEl.innerHTML = 'Congratulations!!';
    } else {
        // Encouraging statement
        responseEl.innerHTML = 'Better luck next time!';
    }
}
