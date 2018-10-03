function BeeSong(){
    this.verse = function(index){
        switch(index) {
            case 0:
            return 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n';

            case 1:
            return `1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n`;

            case 2:
            return  `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index-1} bottle of beer on the wall.\n`;

            default:
            return  `${index} bottles of beer on the wall, ${index} bottles of beer.\nTake one down and pass it around, ${index-1} bottles of beer on the wall.\n`;
        }
    }

    this.sing = function(start,end=0){
        song = "";
        for(let countdown = start; countdown >= end; countdown--) {
            if(countdown>end){
                song = song + this.verse(countdown)+ "\n";
            }else if (countdown == end){
                song = song + this.verse(countdown);
            }
        }
        return song;
    }
}
module.exports = BeeSong;

