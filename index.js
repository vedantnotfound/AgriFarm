showBox();
console.log("Hello World");
// Loader
let loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";
})
let body = document.getElementsByTagName("body");
function sellbtn() {
    let form = document.getElementById("form");
    console.log("You Clicked Into Sell Button");
    if (form.style.display == "none") {
        form.style.display = "block";
        // document.body.style.filter = "blur(10px);"
        // form.style.transition = "all 1.5s ease-in";
    }
    else {
        form.style.display = "none";
        // form.style.transition = "all 1.5s ease-in";
    }
}

let addbtn = document.getElementById("submit");
addbtn.addEventListener("click", function (e) {
    let title = document.getElementById("title");
    let text = document.getElementById("text");
    let call = document.getElementById("phone");
    if ((title == null || title == "") && (text == null || text == "") && (call == null || call == "")) {
        alert("Please Fill Up Full Form");
        return false
    }
    else {
        console.log("Your Form is Submited");
        let form = document.getElementById("form")
        let addTitle = document.getElementById("title");
        let addText = document.getElementById("text");
        let addCall = document.getElementById("phone");
        let box = localStorage.getItem("box");
        if (box == null) {
            boxObj = [];
        }
        else {
            boxObj = JSON.parse(box);
        }
        let myObj = {
            title: addTitle.value,
            text: addText.value
        }
        boxObj.push(myObj)

        localStorage.setItem("box", JSON.stringify(boxObj));
        addTitle.value = "";
        addText.value = "";
        // addcall.value = "";

        console.log(boxObj);
        showBox();
        form.style.display = "none";
    }

})
function showBox() {
    let box = localStorage.getItem("box");
    if (box == null) {
        boxObj = []
    }
    else {
        boxObj = JSON.parse(box);
    }
    let html = "";

    boxObj.forEach(function (element, index) {
        html += `
            <div class="card" id="card-1">
                <img src="cardimg.jpg" alt="">
                <div id="card-c">
                    <div id="info">
                        <h3>#${index + 1} - ${element.title}</h3>
                        <p>${element.text}</p>
                    </div>
                    <div id="buying">
                        <button id="${index}" onclick="viewCard(this.id)">View Card</button>
                        <div id="rate">⭐⭐⭐⭐⭐</div>
                    </div>
                </div>
            </div>
        `;
    })
    let boxEln = document.getElementById('cardbox');
    if (boxObj.lenght != 0) {
        boxEln.innerHTML = html;
    }
    else {
        boxEln.innerHTML = `Nothing to Show! Use " From " to use Card`;
    }
}
// Search Box
let search = document.getElementById('text-input');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();
    console.log("Input Event Fired", inputVal);

    let boxCards = document.getElementsByClassName("card");
    Array.from(boxCards).forEach(function (element) {
        let cardTxt = element.getElementsByTagName("h3")[0].innerText;
        if (cardTxt.includes(inputVal)) {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    })
})
// View Card Function

function viewCard(index){
    window.location.href = "card.html";
    console.log('I am Viewing ', index);
    let box = localStorage.getItem("box");
    if (box == null) {
        boxObj = []
    }
    else {
        boxObj = JSON.parse(box);
    }
    localStorage.setItem("box",JSON.stringify(boxObj));
    showBox();
}