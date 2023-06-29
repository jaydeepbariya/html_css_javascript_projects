const inputRef = document.getElementById('input-field');
const btnRef = document.getElementById('btn');
const qrCodeImgRef = document.getElementById('qrcode-img');

const QR_API_BASE_URL = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=';

btnRef.addEventListener('click',(e)=>{
    if(inputRef.value === ''){
        alert("Enter URL / Text First...");
    }
    else{
        getQRCode(inputRef.value);
    }
})

async function getQRCode(value){
    const response = await fetch(QR_API_BASE_URL+value);
    const img = document.createElement('img');
    img.src=response.url;
    qrCodeImgRef.appendChild(img);
}