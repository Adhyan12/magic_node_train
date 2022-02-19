let first = (arg1, arg2)=>{

    setTimeout(() => {

        arg1()

        setTimeout(() => {

            arg2()

        }, 3000);

    }, 2000);

    console.log('First')
}
let second = ()=>{
    console.log('Second')
}

let third = ()=>{
    console.log('Third')
}

first(second, third)




function first(arg){
    console.log('First')
    arg()
    console.log('third')
}

function second(){
    console.log('second')
}

first(second)