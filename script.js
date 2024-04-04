var nrA=5
var nrB = 2 
var sum = nrA+nrB


var nrC = 22
var nrD= 231

var sum2 = nrC+nrD


function getSum(a,b) {
    var sumFromFunction = a+b
    console.log(sumFromFunction)
    
}


// getSum(5,1)
// getSum(nrA,nrB)
// getSum(nrC,nrD)

function sayMyName(userName) {
    if (userName=="Heisenberg") {
        console.log("you are : "+ userName )
        
    }else{
        console.log("I dont know you mr:" + userName)
    }

 

    
}

// sayMyName("Heisenberg")
// sayMyName()


function sayHello(){

    alert("hello from this page")

}


function printElement(el) {
    //  el =  <p onclick="printElement(this)"> click me to say hello to your page </p>
    // el.innerHtml or el.innerText  click me to say hello to your page
    el.innerHTML = "you just clicked me "
}

function changeOthers(el,idOtherEl) {
    el.innerHTML = "you changed this button"
document.getElementById(idOtherEl).innerHTML= "you changed me by clicking the button"
   
}


function changeButtons(buttonClass) {
    var arrayOfButtons= document.getElementsByClassName(buttonClass)

    for (let index = 0; index < arrayOfButtons.length; index++) {
        const element = arrayOfButtons[index];
        element.remove()
        
    }

    
}






