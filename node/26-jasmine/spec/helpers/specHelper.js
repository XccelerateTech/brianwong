beforeEach(()=>{
    jasmine.addMatchers({
        toBeInTheSameAlbumAs: ()=>{
            return {
                compare: (actual,expected)=>{
                     let song = actual;
                     return {
                        pass: song.album === expected.album
                    }
                }
            }
        }
    })
})