//getting dynamic element references

const displayPasswordRef = document.querySelector('[data-displayPassword]');
const copyBtnRef = document.getElementById('copyBtn');

const displayPasswordLengthRef = document.getElementById('displayLength');
const passwordLengthRef = document.getElementById('length');

const allCheckBoxReg = document.querySelectorAll('input[type="checkbox"]');

const uppercaseCheckRef = document.getElementById('uppercase');
const lowercaseCheckRef = document.getElementById('lowercase');
const numbersCheckRef = document.getElementById('numbers');
const symbolsRef = document.getElementById('symbols');

const passwordStrengthRef = document.getElementById('passwordStrength');
const generateBtnRef = document.getElementById("generatePasswordBtn");



const handleSlider = ()=>{

    displayPasswordLengthRef.innerText = 10;

    passwordLengthRef.addEventListener('mouseup',()=>{
        displayPasswordLengthRef.innerText = passwordLengthRef.value;
    });
    
}

const generateRandomNumber = (min, max) =>{
    return Math.floor(Math.random() * (max-min)+min);
}

const getRandomUppercase = ()=>{
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return uppercaseChars.charAt(generateRandomNumber(0,25));
}
const getRandomLowercase = ()=>{
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    return lowercaseChars.charAt(generateRandomNumber(0,25));
}
const getRandomNumber = ()=>{
    const numbers = "1234567890";
    return numbers.charAt(generateRandomNumber(0,9));
}
const getRandomSymbol = ()=>{
    const symbols = `"!@#$%^&*()_+-=[]\;',./{}|:<>?"`;
    return symbols.charAt(generateRandomNumber(0,26));
}

const generatePassword = (length)=>{

    let generatedPassword = "";

    while(generatedPassword.trim().length < length){

        const randomIndex = Math.random();

        if(uppercaseCheckRef.checked==false && lowercaseCheckRef.checked==false && numbersCheckRef.checked==false && symbolsRef.checked==false){
            alert("Check Any Field First...");
            return ;
        }

        if(uppercaseCheckRef.checked==true && randomIndex>0 && randomIndex<=0.25){
            generatedPassword += getRandomUppercase();
            continue;
        }

        if(lowercaseCheckRef.checked==true  && randomIndex>0.25 &&  randomIndex<=0.50){
            generatedPassword += getRandomLowercase();
            continue;
        }

        if(numbersCheckRef.checked==true  && randomIndex>0.50 &&  randomIndex<=0.75){
            generatedPassword += getRandomNumber();
            continue;
        }

        if(symbolsRef.checked==true  && randomIndex>0.75 &&  randomIndex<=1.0){
            generatedPassword += getRandomSymbol();
            continue;
        }

    }

    console.log(generatedPassword);
    return generatedPassword;
}

generateBtnRef.addEventListener("click",()=>{
    const genPassword = generatePassword(passwordLengthRef.value);
    checkStrengthColor();
    displayPasswordRef.value = genPassword;
});

const checkStrengthColor = ()=>{

    if((uppercaseCheckRef.checked==true || lowercaseCheckRef.checked==true) && numbersCheckRef.checked==true && symbolsRef.checked==true){
        passwordStrengthRef.style.backgroundColor = 'green';
        passwordStrengthRef.style.boxShadow = '0px 0px 5px green';
        passwordStrengthRef.style.borderRadius = '50%';
    }
    else{
        passwordStrengthRef.style.backgroundColor = 'red';
        passwordStrengthRef.style.boxShadow = '0px 0px 5px red';
        passwordStrengthRef.style.borderRadius = '50%';

    }

}

handleSlider();

copyBtnRef.addEventListener("click", ()=>{

    displayPasswordRef.select();
    navigator.clipboard.writeText(displayPasswordRef.value);
})

