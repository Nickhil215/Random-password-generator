const upperSet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet="abcdefghijklmnopqrstuvwxyz";
const numberSet="1234567890";
const symbolSet="~!@#$%^&*()_+/";



const uppercase=document.getElementById('upper-case');
const lowercase=document.getElementById('lower-case');
const passlength=document.getElementById('total-char');
const numbers=document.getElementById('number');
const symbols=document.getElementById('symbles');
const textBox=document.getElementById('pass-box');






function getRandomData(dataset){
    return dataset[Math.floor(Math.random() * dataset.length)];
}

// console.log(getRandomData(upperSet));

const generatePass = ( pass="") => {

    if(uppercase.checked){
        pass+=getRandomData(upperSet);
    }
    if(lowercase.checked){
        pass+=getRandomData(lowerSet);
    }

    if(numbers.checked){
        pass+=getRandomData(numberSet);
    }

    if(symbols.checked){
        pass+=getRandomData(symbolSet);
    }

    if(pass.length < passlength.value){
       return generatePass(pass);
    }

    let password=passwaordlength(pass,passlength.value);
    navigator.clipboard.writeText(password);
    textBox.innerText=password;
}


generatePass();

document.getElementById("btn").addEventListener("click",
function(){
    generatePass();
}
// generatePass()
);


function passwaordlength(str, num){
if(str.length > num){
    return str.substring(0,num);
}else{
    return str;
}
}
