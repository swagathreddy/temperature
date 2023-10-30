let celsiusinput= document.querySelector('.celsius>input');
let fahreninput= document.querySelector('.fahrenheit>input');
let kelvininput= document.querySelector('.kelvin>input');

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100;
}

celsiusinput.addEventListener('input',()=>{
    let ctemp=parseFloat(celsiusinput.value);
    let ftemp=(ctemp*(9/5))+32;
    let ktemp=ctemp+273.15;

    fahreninput.value=roundNumber(ftemp);
    kelvininput.value=roundNumber(ktemp);
});
fahreninput.addEventListener('input',()=>{
    let ftemp=parseFloat(fahreninput.value);
    let ctemp=(ftemp-32)*(5/9);
    let ktemp=(ftemp-32)*(5/9)+273.15;

    celsiusinput.value=roundNumber(ctemp);
    kelvininput.value=roundNumber(ktemp);
});
kelvininput.addEventListener('input',()=>{
    let ktemp=parseFloat(kelvininput.value);
    let ctemp=(ktemp-273.15);
    let ftemp=(ktemp-273.15)*(9/5)+32;

    celsiusinput.value=roundNumber(ctemp);
    fahreninput.value=roundNumber(ftemp);
});

btn.addEventListener('click',()=>{
    celsiusinput.value='';
    fahreninput.value='';
    kelvininput.value='';
})

function myfunc(){
    var ele=document.body;
    ele.classList.toggle('light-mode');
}