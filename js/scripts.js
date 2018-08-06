$(function(){
    $.ajax({
        url: "http://127.0.0.1:8000/book/",
        method: "GET"
    })
    .done(function(response){
        var $titles_list = $('#titles');
        for(var i = 0; i < response.length; i++){
            var $title = $('<li>' + response[i].title + '	</li><button class="delete">Delete</button>')
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
        var $titles = $titles_list.first()
        $titles.on('click', function(){ 
            $(this).next('div').toggle('display') 
        })
    });
    var $form = $('#form')
    var $button = $('#submit')
    $button.on('click', function(event){
        event.preventDefault()
        var form_data = {
            author: $form.find('input[name="author"]').val(),
            publisher: $form.find('input[name="publisher"]').val(),
            title: $form.find('input[name="title"]').val(),
            genre: $form.find('select[name="genre"]').val(),
            isbn: $form.find('input[name="isbn"]').val()
        }
        $.ajax({
            url: "http://127.0.0.1:8000/book/",
            method: "POST",
            data: form_data,
            dataType: "json"
        })
        .done(function(response){
            location.reload()
        })

    })
    var $delete = $('.delete')
	$delete.on('click', function(event){
		event.preventDefault()
		$.ajax({
            url: "http://127.0.0.1:8000/book/",
            method: "DELETE",
            data: $(this).prev(),
            dataType: "json"
        })
        .done(function(response){
            location.reload()
        })
	})
});
