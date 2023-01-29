function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}

 var p1 = sleep(1500).then(function() {
    return {
        name: 'Promise 1500'
    }
})

var p2 = sleep(3000).then(function() {
    return {
        name: 'Promise 3000'
    }    
})

Promise.all([p1, p2]).then(function(data) {
    console.log('All')
})

Promise.race([p1, p2]).then(function(data) {
    console.log('Race')
})
