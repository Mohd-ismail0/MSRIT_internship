let btnFac = document.querySelector('#fac');
let btnPri = document.querySelector('#Pri');
let btnFib = document.querySelector('#fib');
let btnNat = document.querySelector('#nat');
let numInput = document.querySelector('#num');

function f1(){
    document.getElementById("num").style.background="#58b3b8";
}

btnFac.addEventListener("mouseover",b1);
btnFac.addEventListener("click",facto);
function facto(){
    a=parseInt(numInput.value);
    let fact=1;
    for (let i=1; i<=a; i++){
        fact = fact*i;      
    };
    document.getElementById("fa").innerHTML="Factorial is "+ fact;
}

btnPri.addEventListener("mouseover",b2);
btnPri.addEventListener("click",prime);
function prime(){
    a=parseInt(numInput.value);
    let isPrime=true;
    if (a == 1) {
        document.getElementById("pr").innerHTML="1 is neither prime nor composite number.";
    }
    else if (a > 1) {
       for (let i = 2; i < a; i++) {
            if (a % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            document.getElementById("pr").innerHTML=a+" is a PRIME number";
        } else {
            document.getElementById("pr").innerHTML=a+" is NOT a prime number";
        }
    }
}

btnFib.addEventListener("mouseover",b3);
btnFib.addEventListener("click",fibon);
function fibon(){
    let n1=0, n2=1, nextterm=0;
    const series = [];
    a=parseInt(numInput.value);
    for(let i=1;i<=a;i++){
        series[i]=n1;
        nextterm = n1 + n2;
        n1 = n2;
        n2 = nextterm;
    }
    document.getElementById("fi").innerHTML="The fibonacci series: " + series;
}

btnNat.addEventListener("mouseover",b4);
btnNat.addEventListener("click",natu);
function natu(){
    let sum=0;
    a=parseInt(numInput.value);
    for(let i=0;i<=a;i++){
        sum=sum+i;
    }
    document.getElementById("na").innerHTML="The sum of natural numbers upto " +a+" is: " + sum;
}

function b1(){
    document.getElementById("result").innerHTML="Button to find factorial";
}
function b2(){
    document.getElementById("result").innerHTML="Button to check if the number is prime";
}
function b3(){
    document.getElementById("result").innerHTML="Button to get fibonacci series";
}
function b4(){
    document.getElementById("result").innerHTML="Button to find get sum of natural numbers";
}
