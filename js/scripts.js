$(function(){
    $.ajax({
        url: "http://127.0.0.1:8000/book/",
        method: "GET"
    })
    .done(function(response){
        var $titles_list = $('#titles');
        for(var i = 0; i < response.length; i++){
            var $title = $('<li>' + response[i].title + '</li>')
            var author = "<li>Author: " + response[i].author + "</li>"
            var isbn = "<li>ISBN: " + response[i].isbn + "</li>"
            var publisher = "<li>Publisher: " + response[i].publisher + "</li>"
            var genres = {
                1: "Romans",
                2: "Obyczajowa",
                3: "Sci-fi i fantasy",
                4: "Literatura faktu",
                5: "Popularnonaukowa",
                6: "Poradnik",
                7: "Kryminał, sensacja"
            }
            var genre = "<li>Genre: " + genres[response[i].genre] + "</li>"
            var $new_div = $('<div class="info"><ul>Information:' + author + isbn + publisher + genre + '</ul></div>')
            $titles_list.append($title);
            $titles_list.append($new_div);
        }
        var $titles = $titles_list.children()
        $titles.on('click', function(){
            $title = $(this)
            $title.next().toggle('display') 
        })
    });
    var $form = $('#form')
    var $button = $('#submit')
    $button.on('click', function(event){
        event.preventDefault()
        var form_data = {
            author: $form.find('input[name]="author"'),
            publisher: $form.find('input[name]="publisher"'),
            title: $form.find('input[name]="title"'),
            genre: $form.find('select[name]="genre"'),
            isbn: $form.find('input[name]="isbn"')
        }
        $.ajax({
            url: "http://127.0.0.1:8000/book/",
            method: "POST"
        })
        .done(function(response){
            
        })

    })
    
});
