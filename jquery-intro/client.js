console.log('jquery?', $);

$( document ).ready(onReady);

function onReady(){
    console.log('Im ready now');
    $('body').css('color', 'red');
    
    //add element
    $('body').append('<h2>Another Heading!</h2>');
}

console.log('end of file!');
