console.log('Hello');
console.log($);

$(document).ready(readyNow);


function readyNow(){
    console.log('in readyNow');
    $('body').addClass('kiwi');
    $('#welcomeMessage').text('Hello World');
    $('#welcomeMessage').text('Yum, tacos');
    $('#welcomeMessage').remove('Hellow World');
    $('button').on('click', function(){
        console.log('I was clicked!');
        let currentCount = $('#clickCounter').text();
        console.log(currentCount);
        currentCount = Number(currentCount) +1;
        $('#clickCounter').text(currentCount);
    
});
}

