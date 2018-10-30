$(document).ready(function(){
    let count = 0;
    let clicked_list = [];
    let endGame = false;
    $('div.col-4').click(function(){
        if (endGame == false){
            let id = $(this).attr('id').split('');
            if (id[2] == 0){
                if(count%2 == 0){
                    $(this).append('<i class="far fa-circle"></i>');
                    id[2] = '1';
                }else{
                    $(this).append('<i class="fas fa-times"></i>');
                    id[2] = '2';
                }  
            }
            
            $(this).attr('id',id.join(''));
            clicked_list.push(id);
            count++;

            if(count>=5){
                judge(clicked_list);
            }
        }
    })

    function judge(data){
        let p1_steps = data.filter(function(id){
            return id[2] == 1;
        });
      
        let p2_steps = data.filter(function(id){
            return id[2] == 2;
        });


        if(test(p1_steps) == 'win'){
            console.log('player 1 wins')
            endGame = true;
        } else if(test(p2_steps) == 'win'){
            console.log('player 2 wins')
            endGame = true;  
        }


       
    }

    function test(steps){
        for(let i=0; i<3;i++){
            let row = steps.filter(function(a){
                return a[0] == i
            });
            let col = steps.filter(function(a){
                return a[1] == i
            });

            let slide = steps.filter(function(a){
                return a[0] == a[1]
            });
            
            let slide_rev = steps.filter(function(a){
                    return Number(a[i])+Number(a[i+1]) == 2;
            });

            if (row.length == 3 || col.length == 3 ||slide.length == 3 ||slide_rev.length == 3){
                return 'win';
            }
        }  
    }
}) 