
// Access element by ID
const demoId = document.getElementById("demo")
demoId.style.border = '3px dotted green'; 

// Access elements by class name
let demoClass = document.getElementsByClassName("demo")

for(element=0; element<demoClass.length; element++){
    console.log("xxxxxxxxxxxxxxxxxxxxxxxx", demoClass.length)
    demoClass[element].style.border = "2px solid blue"
}
// If you want to style an individual element
demoClass[0].style.border = "2px dotted red"
demoClass[1].style.border = "2px dotted purple"
demoClass[2].style.border = "2px dotted orange"

// Access elements by Tag name
let articleTag = document.getElementsByTagName("section")
for(i=0; i<articleTag.length; i++){
    articleTag[i].style.border = "2px dotted purple"
}

// articleTag[0].style.border = "2px dotted purple"
// articleTag[1].style.border = "2px dotted orange"


// Access element by query selector
let demoQuery = document.querySelector('#demo-query')
demoQuery.style.border = "3px dotted maroon"

// Access elements by query selector all
let demoQueryAll = document.querySelectorAll(".demo-query-all")
//either use for loop
for(i=0; i<demoQueryAll.length; i++){
    demoQueryAll[i].style.border = "2px solid green"
}
//or forEach
demoQueryAll.forEach(i =>{
    i.style.border = "5px solid blue"
})

function changeMe(){
    let p = document.querySelector("p")
    // p.textContent = "I changed because of inline event handler"
    p.innerHTML = "Please write into p with js"
    p.style.border = "2px dotted blue"
    // console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx", p.parentNode)
}

function changeMe2(){
    let k = document.getElementById("opp")
    k.textContent = "I changed because of an event handler"
    k.style.border = "2px dotted red"
    alert("You changed me!")
}

const butt = document.querySelector("#pop")
butt.onclick=changeMe2
// We don't explicitly call this function like below because 
// as long as the page loads its action will be applied without waiting for the click
// butt.onclick=changeMe2() 