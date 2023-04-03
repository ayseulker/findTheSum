
function findSum (a,b){
    let sum = 0;
    for (let number =a; number<=b; number++){
        if(number % 3==0 && number %5 ==0){
            sum += number;
        };
       
     }

 console.log(sum)

}

findSum (0,45)


