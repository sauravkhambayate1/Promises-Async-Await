//query-1
const oneperson =(friend, callback) => {
    console.log(`hii.. ${friend}`);
    callback();
}
const secondperson = () =>{
    console.log(`bye`)
}
oneperson("whats up",secondperson);
 
// //query-2
function calltime(){
    setTimeout(()=>{
        console.log("1");
        setTimeout(()=>{
            console.log("2");
            setTimeout(()=>{
                console.log("3");
                setTimeout(()=>{
                    console.log("4");
                    setTimeout(()=>{
                        console.log("5");
                        setTimeout(()=>{
                            console.log("6");
                            setTimeout(()=>{
                                console.log("7");
                                 },7000)
                            },6000)
                        },5000)
                    },4000)
                },3000)
            },2000)
        },1000)
 }
 calltime()
//query-3
let printNumber =(time, num) =>{
    return new Promise ((resolve, reject)=>{
        if (num){
            setTimeout(()=>{
                resolve(num());
            },time)
        }
        else{
            reject(console.log("failed"))
        }
    })
}
printNumber(0, () =>console.log("Passed")).then(()=>{
    return printNumber(1000,() =>{console.log("1")})
})