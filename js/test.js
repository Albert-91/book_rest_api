$(function(){
    function ajax_1(){
        $.ajax({
            url: "http://date.jsontest.com/",
            method: "GET"
        })
        .done(function(response){
            console.log('response', response)
        });
    }

    function to_uppercase(films){
        var $films_list = $('#films');
        for(var i = 0; i < films.length; i++){
            var $el = $('<li>' + films[i].toUpperCase() + '</li>')
            $films_list.append($el);
        }
    }

    function ajax_2(){
        $.ajax({
            url: "https://swapi.co/api/people/4/",
            method: "GET"
        })
        .done(function(response){
            // var data = JSON.parse(response.films)
            to_uppercase(response.films)
        });
    }
    ajax_1()
});