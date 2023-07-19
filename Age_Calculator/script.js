const dateRef = document.querySelector('#day');
const monthRef = document.querySelector('#month');
const yearRef = document.querySelector('#year');
const submitBtnRef = document.querySelector('#submitBtn');

const ageYearRef = document.querySelector('#age-year');
const ageMonthRef = document.querySelector('#age-month');
const ageDateRef = document.querySelector('#age-date');

submitBtnRef.addEventListener('click',(e)=>{

    e.preventDefault();

    const birthDate = dateRef.value;
    const birthMonth = monthRef.value;
    const birthYear = yearRef.value;

    calculate(birthDate, birthMonth, birthYear);


})

const calculate = (birthDate, birthMonth, birthYear) => {

    const current = new Date();

    const currentYear = current.getFullYear();
    const yearDiff = currentYear - birthYear;
    ageYearRef.innerText=yearDiff;

    const currentMonth = current.getMonth()+1;
    
    if(currentMonth > birthMonth){
        ageMonthRef.innerText = currentMonth - birthMonth;
    }
    else if(currentMonth < birthMonth){
        ageMonthRef.innerText = birthMonth - currentMonth;
        yearDiff-=1;
    }

    const currentDate = current.getDate();

    if(currentDate >= birthDate){
        ageDateRef.innerText = currentDate - birthDate;
    }else{
        ageMonthRef.innerText = birthMonth - currentMonth - 1;
        ageDateRef.innerText = 31 + currentDate - birthDate;

        if(ageMonthRef.value < 0){
            ageMonthRef.innerText = 11;
            ageYearRef.innerText = ageYearRef.value - 1;
        }
    }
    
}