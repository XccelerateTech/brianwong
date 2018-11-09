let Song = require('../Song')

describe('Song class',()=>{  
    let song;
    let duplicatedSong;
    beforeEach(()=>{
        song = new Song('lemon','Lemon','Kenshi Yonezu')
        duplicatedSong = new Song('lemon','Lemon','Kenshi Yonezu')
    })
    afterEach(()=>{
        song = undefined;
        duplicatedSong = undefined;
    })
    it('Song has name',()=>{
        expect(song.name).toEqual('lemon')
    })
    it('Song has album',()=>{
        expect(song.album).toEqual('Lemon')
    })
    it('Song has author',()=>{
        expect(song.author).toEqual('Kenshi Yonezu')
    })
    it('Song.getDescription() returns abstract',()=>{
        expect(song.getDescription()).toEqual(`The name of this song is lemon and it is from the album Lemon. It is written by Kenshi Yonezu`)
    })

    it('othersong belongs the same album with song',() => {
        expect(song).toBeInTheSameAlbumAs(duplicatedSong);
    })

    it('song shares the same name, album and author',()=>{
        expect(song).toEqual(duplicatedSong);
    })

    it('song and dulplicatedSong are different Song object',()=>{
        expect(song).not.toBe(duplicatedSong);
    })
})