
function findSum (a,b){
    let sum = 0;

    if(a<4 || b>99){
        alert("Lütfen 4-99 arasında bir değer giriniz")

    }
    for (let number =a; number<=b; number++){
        if(number % 3==0 && number %5 ==0){
            sum += number;
        };
       
     }

 console.log(sum)

}

findSum (5,100)


