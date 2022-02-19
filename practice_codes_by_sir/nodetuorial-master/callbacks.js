// CALLBACK
function waitF(time,cb){
    if(time>15000){
        return cb('sorry, we dont have enough time')
    }
  setTimeout(function(){
    return cb(null,'wait for '+time+' ms')
  },time)
}

// PROMISE
function waitFPromise(time){
    let promise = new Promise(function(resolve,reject){
        if(time>150000){
            reject('rejected');
        }
        setTimeout(function(){
            resolve('wait for '+time+' ms')
        },time)    
    })
    return promise;
}

///////////////





async function executeWithAsyncAwait(){
     await waitFPromise(10000)
     console.log('A');
     await waitFPromise(6000)
     console.log('B')
     await waitFPromise(2000)
     console.log('C')
}

executeWithAsyncAwait()


// waitFPromise(10000)
//     .then(function(data){
//         console.log('A');
//         return waitFPromise(6000)
//     })
//     .then(function(data){
//         console.log('B');
//         return waitFPromise(2000)
//     })
//     .then(function(data){
//         console.log('C');
//     })





//wait for 10 seconds
//a
//wait for 6 seconds
//b
//wait for 2 seconds
//c





//callback hell (nested callbacks)
// waitF(10000,function(err,result){
//     if(err){
//         console.log(err)
//     }else{
//         //console.log(result)
//         console.log('A')
//         waitF(6000,function(err,result){
//             if(err){
//                 console.log(err)
//             }else{
//                 //console.log(result)
//                 console.log('B')
//                 waitF(2000,function(err,result){
//                     if(err){
//                         console.log(err)
//                     }else{
//                         //console.log(result)
//                         console.log('C')                        
//                     }
//                 })                              
//             }
//         })        
//     }
// })
