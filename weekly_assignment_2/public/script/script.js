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
                $('.noteList').append(`<div class="note">
                                            <p>${note}</p>
                                        </div>`)
            })
        }
    })
})