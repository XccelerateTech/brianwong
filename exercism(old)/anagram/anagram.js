function anagram(word){
    this.matches = function (list){
        match_list = [];
        word = word.toLowerCase();
        // convert argument(s) into a list
        if (arguments.length == 1 && typeof arguments[0] == "string"){
            list = [list];
        }else if(arguments.length >1){
            array = [];
            for(let i of arguments){
                array.push(i);
            }
            list = array;
        }
        // comparison
        for (precandidate of list){
            candidate = precandidate.toLowerCase();
                if (candidate.length == word.length){
                    candidate_char_list = candidate.split("");
                    count = word.length;
                    for (word_char of word){
                        for(index in candidate_char_list){
                            if (word_char == candidate_char_list[index]){
                                delete candidate_char_list[index];
                                count--;
                                break;
                            }
                        }
                    }
                    if (count == 0 && word != candidate){
                        match_list.push(precandidate);
                    }
                }
            

        }   
        return match_list;
    }
}
module.exports = anagram;
