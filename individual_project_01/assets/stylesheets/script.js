$(document).ready(function(){
    $('#travel .chapter .column').mouseenter(function(){
        switch($(this).find('div').attr('id')){
            case 'France':
                $('.chapter').removeClass('bg-tokyo bg-tasmania').addClass('bg-france');
                break;
            case 'Tokyo':
                $('.chapter').removeClass('bg-france bg-tasmania').addClass('bg-tokyo');
            break;
            case 'Tasmania':
                $('.chapter').removeClass('bg-france bg-tokyo').addClass('bg-tasmania');
        }
        $(this).find('div').removeClass('inactive');
        $(this).siblings().find('div').addClass('inactive');
    });


    let count = 0;
    let char = ['a','b','c','d','e'];
    char.forEach(function(n){
        $(`#${n}`).slideUp()
    });

  $('#aboutMe .btn').click(function(){
      if(count>4){
        char.forEach(function(n){
            $(`#${n}`).slideUp();
        })
        count = 0;
      }else{
        $(`#${char[count]}`).slideDown();
        count +=1;
      }
  });

  $('.chapter .column > div').click(function(){
      let name = $(this).attr('id');
      $(`.albums .${name}`).addClass('active');
  })

  $('.albums .cross i').click(function(){
      $(this).parent().parent().removeClass('active');
  })
});