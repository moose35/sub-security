$(document).ready(readyNow);

function readyNow() {
    console.log('jQuery is ready');
    $('#moreQuotes').on('click', function () {
        $.ajax({
            url: '/new-quote',
            method: 'POST',
            data: {
                quote: $('#thisQuote').val(),
                author: $('#authorQuote').val(),
            }
        }).then(function (response) {
            $.ajax({
                url: '/quotes',
                method: 'GET'
            }).then(function (response) {
                console.log(response);
                $('ul').empty();
                $('#thisQuote').val('');
                $('#authorQuote').val('');
                quotesToPage(response);
            });

        });
    });

    // $.ajax({
    //     url: '/quotes',
    //     method: 'GET'
    // }).then(function (response) {
    //     console.log(response);
    //     quotesToPage(response);
    // });

}

function quotesToPage(array) {
    for (famousQuote of array)
        $('ul').append(
            ` <li>${famousQuote.quote} ${famousQuote.author}</li>`
        );
}

// function clickButton(){
//     $('moreQuotes').on('click',
//     console.log('')
//     );
// }