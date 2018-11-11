$(function(){
    // function update(note){}
     function sanitarize(string) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'":  '&#39;'
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
      }


    $('#addNote').submit(function(event){
        event.preventDefault();
        let note = sanitarize($('textarea#note').val())
        if(note != ""){
            $.ajax({
                method: 'PUT',
                url: '/note',
                data:{note: note}
            })
            .done(()=>{
                if($('.note:last-child').attr('id') !== undefined){
                    var index = Number($('.note:last-child').attr('id'))+1
                }else{
                    var index = 0;
                }
                $('.noteList').append(`<div class="note" id="${index}">
                                            <p>${note}</p>
                                            <div class="bin">delete</div>
                                        </div>`)

                $('.bin').click(function(event){ //reload click event for new bin appended
                    event.preventDefault();
                    let index = $(this).parent().attr('id')
                    $.ajax({
                        method:'DELETE',
                        url: '/note',
                        data:{index: index}
                    })
                    .done(()=>{
                        $(this).parent().remove();
                    })
                })
            })
        }
    })

    $('.bin').click(function(event){
        event.preventDefault();
        let index = $(this).parent().attr('id')
        $.ajax({
            method:'DELETE',
            url: '/note',
            data:{index: index}
        })
        .done(()=>{
            $(this).parent().remove();
        })
    })
})