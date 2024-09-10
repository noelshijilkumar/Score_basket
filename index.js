let countHome = 0;
let countGuest = 0;
let scoreElHome = document.getElementById("score-el-home")
let scoreElGuest = document.getElementById("score-el-guest")


function addOneHome() {
    
    countHome+= 1;
    scoreElHome.textContent = countHome
    
}

function addTwoHome() {
    
    countHome+= 2;
    scoreElHome.textContent = countHome
    
}

function addThreeHome() {
    countHome+= 3
    scoreElHome.textContent = countHome
}

function addOneGuest() {
    
    countGuest+= 1;
    scoreElGuest.textContent = countGuest
    
}

function addTwoGuest() {
    
    countGuest+= 2;
    scoreElGuest.textContent = countGuest
    
}

function addThreeGuest() {
   countGuest+= 3
    scoreElGuest.textContent = countGuest
}