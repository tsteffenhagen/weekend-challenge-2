let problem = {
    numOne: 0,
    numTwo: 0,
    operator: ''
}
$(document).ready(function(){
    console.log('JQ sourced');
    $('#additionButton').on('click', add);
    $('#subtractionButton').on('click', subtract);
    $('#multiplicationButton').on('click', multiply);
    $('#divisionButton').on('click', divide);
    $('#processButton').on('click', process);
});

function add() {
    problem.operator = 'add';   
};

function subtract() {
    problem.operator = 'subtract';   
};

function divide() {
    problem.operator = 'divide';   
};

function multiply() {
    problem.operator = 'multiply';   
};

function process() {
    grabber();
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: {max_input: maxNum},
        success: function (response){
            console.log('The random number is', response);
            answer = response;
            $('#maxReminder').html('Your max is set at: ' + maxNum);
        }
    })

};





function grabber(){
    problem.numOne = $('#nOne').val()
    problem.numTwo = $('#nTwo').val()   
}