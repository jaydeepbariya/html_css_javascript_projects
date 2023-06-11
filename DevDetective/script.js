const searchBtnRef = document.getElementById("searchBtn");
const usernameInputRef = document.getElementById('search-input');

const profilePicRef = document.getElementById('profile-pic');

const nameRef = document.getElementById('name');
const githubLinkRef = document.getElementById('github-link');
const joinDateRef = document.getElementById('join-date-span');

const infoRef = document.getElementById('info');

const countRef = document.getElementsByClassName('count');

const locationRef = document.getElementById('location');
const websiteLinkRef = document.getElementById('website-link');
const twitterRef = document.getElementById('twitter');
const companyRef = document.getElementById('company');

const darkBtn = document.getElementById('dark-btn');
const lightBtn = document.getElementById('light-btn');

searchBtnRef.addEventListener("click",(event)=>{
    event.preventDefault();
    const data = fetchUserInfo(usernameInputRef.value);
});


const fetchUserInfo = async (username) =>{

    try{
        const response = await fetch(`https://api.github.com/users/${username}`);
        const userInfo = await response.json();
        console.log(userInfo);
        renderProfile(userInfo);
    }
    catch(error){
        
        alert("Invalid Username, Please Try Again..");
        fetchDefaultUserInfo();
    }
}

const renderProfile = (userInfo)=>{
    
    console.log("UserInfo in Render Profile ",userInfo);

    nameRef.innerText= userInfo.name;
    profilePicRef.src=userInfo.avatar_url;
    joinDateRef.innerText = "Joined On "+userInfo.created_at.split('T')[0];
    infoRef.innerText = userInfo.bio;
    countRef[0].innerText = userInfo.public_repos;
    countRef[1].innerText = userInfo.following;
    countRef[2].innerText = userInfo.followers;
    locationRef.innerText = userInfo.location;
    websiteLinkRef.href = userInfo.url;
    websiteLinkRef.innerText = userInfo.url;
    twitterRef.href = "https://www.twitter.com/"+userInfo.twitter_username;
    twitterRef.innerText = "@"+ (userInfo.twitter_username ? userInfo.twitter_username : "Not Available");
    companyRef.innerText = userInfo.company;

}

const fetchDefaultUserInfo = async () =>{

    try{
        const response = await fetch(`https://api.github.com/users/jaydeepbariya59`);
        const userInfo = await response.json();
        console.log(userInfo);
        renderProfile(userInfo);
    }
    catch(error){
        alert("Invalid Username, Please Try Again..");
    }
}

fetchDefaultUserInfo();

// Dark Mode
darkBtn.addEventListener("click",()=>{
    document.getElementsByClassName('wrapper')[0].classList.add('dark-mode');
    document.getElementsByClassName('content')[0].classList.add('dark-mode');
    document.getElementsByClassName('git-info')[0].classList.add('dark-mode');
});


//Light Mode
lightBtn.addEventListener("click", ()=>{
    document.getElementsByClassName('wrapper')[0].classList.remove('dark-mode');
    document.getElementsByClassName('content')[0].classList.remove('dark-mode');
    document.getElementsByClassName('git-info')[0].classList.remove('dark-mode');
})