function timing(callback,interval) {
    let count = new Date;
    const previous = count.getTime
    if ((count.getTime - previous)%interval== 0 ){
        callback();
    }
}

function hi(){
    console.log("hi");
}
