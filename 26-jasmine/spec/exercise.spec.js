describe('calling it block',()=>{
    let count = 0;
    it('block',()=>{
        count++;
        console.log(`I am the it block ${count}!`)
    })
    it('block',()=>{
        count++;
        console.log(`I am the it block ${count}!`)
    })
    it('block',()=>{
        count++;
        console.log(`I am the it block ${count}!`)
    })
    it('block',()=>{
        count++;
        console.log(`I am the it block ${count}!`)
    })
    it('block',()=>{
        count++;
        console.log(`I am the it block ${count} but I fail`)
    })
})