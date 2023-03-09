
let TextInput = document.querySelector("#task");

const ulDOM = document.querySelector("#list")


function newElement(){


    const deger= TextInput.value.trim() //boşlukları yok sayar

    if(!deger){  
    
        $('.error.toast').toast("show") 
        
    }

    else{

        let liDOM = document.createElement("li")
        liDOM.innerHTML = TextInput.value
        ulDOM.appendChild(liDOM)

        TextInput.value=""   //button a bastıktan sonra input girdisini temizler

        $('.success.toast').toast("show")

        let iDOM = document.createElement("i");
        iDOM.classList.add("fa", "fa-times", "close");
        liDOM.appendChild(iDOM);

        liDOM.addEventListener("click", completed);
        iDOM.addEventListener("click", close);

    }
}

let liAllDOM = document.querySelectorAll("li");

for(let i = 0; i < liAllDOM.length; i++){ 
    liAllDOM[i].addEventListener("click", completed);
}

function completed(){
    if(this.classList.contains("checked"))
        this.classList.remove("checked");
    else
        this.classList.add("checked");
}

let iAllDOM = document.querySelectorAll("i");

for(let i = 0; i < iAllDOM.length; i++){ 
    iAllDOM[i].addEventListener("click", close);
}

function close() {
    this.parentElement.remove();
}
