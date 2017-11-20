let problem = {
    numOne: 0,
    numTwo: 0,
    operator: '',
    sum: 0
}
let answer = 0;
let screen = 0;
$(document).ready(function(){
    $('#additionButton').on('click', add);
    $('#subtractionButton').on('click', subtract);
    $('#multiplicationButton').on('click', multiply);
    $('#divisionButton').on('click', divide);
    $('#processButton').on('click', process);
    $('#num').on('click', display)
    $('#clearButton').on('click', clear)
    getCalculations();
});

function display() {
    screen += $(this).value;
};

function add() {
    problem.operator = '+';   
};

function subtract() {
    problem.operator = '-';   
};

function divide() {
    problem.operator = '/';   
};

function multiply() {
    problem.operator = '*';   
};

function clear () {
    $('input').val('');
}

function process() {
    grabber();
    $.ajax({
        method: 'POST',
        url: '/calculate',
        data: {problem_set: problem},
        success: function (response){
            console.log('your answer is ', response);
            $('#total').html('Total: ' + response);
        }
    })
    $.ajax({
        method: 'POST',
        url: '/calculate/new',
        data: {problem_set: problem},
        success: function(response) {
            console.log('new quote post response:', response);  
            getCalculations(); 
        }
    })
    
};

function getCalculations() {
    $.ajax({
        method: 'GET',
        url: '/calculate/all',
        success: function (response) {
            $('ul').html('');
            for (let i = 0; i < response.length; i++) {
                $('ul').append(`<li>${response[i].numOne} ${response[i].operator} ${response[i].numTwo} = ${response[i].sum}`);
                
            }
        }
    })
}


function grabber(){
    problem.numOne = $('#nOne').val()
    problem.numTwo = $('#nTwo').val()   
}