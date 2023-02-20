
// gunun saat dakika bilgisi : ${new Date().getHours()}  ${new Date().getMinutes()}

// kisa isminiz: ${username[0]}.
// `

// console.log(info)

//String veri türü işlemleri 
// let email ="emrerkilic66@gmail.com"
// let firstname ="emre"
// let lastname = "ERKILIC"

// console.log(email.length)

// console.log(firstname[0])
// console.log(firstname.charAt(0))

// firstname = firstname.toUpperCase()
// console.log(firstname)

// firstname = firstname.toLowerCase()
// console.log(firstname)

// console.log(email.search("@"))
// console.log(email[12])

// let DOMAIN = email.slice( email.search("@") +1 )
// console.log(DOMAIN)

// console.log( DOMAIN.slice( 0 , DOMAIN.indexOf('.') ) )

// //bilgiyi değiştir replace
// email = email.replace('gmail.com' , 'kodluyoruz.org')
// console.log(email)

//Var mı yok mu includes
//  email = email.includes('asfsa') //false  
//  console.log(email)
//  email=email.includes('@') //true
//  console.log(email)

// istediğim bilgiyle başladı mı ? bitti mi? --> startwidth , endwidth
// console.log( email.endsWith('kodluyoruz.org'))

// firstname = "FIRST"
// lastname = "LAST"

// let fullname = `${firstname[0].toUpperCase()}${firstname.slice(1).toLowerCase()}
// ${lastname[0].toUpperCase()}${lastname.slice(1).toLowerCase()}
// `

// console.log(fullname)

// Dışarıdan Bİlgiyi bulup değiştirme
// let title = document.getElementById("title")
// title.innerHTML = "Degisen Bilgi"
// console.log(title.innerHTML)

// let link = document.querySelector("#kodluyoruzLink") // DAHA KOLAY  **queryselector**
// link.innerHTML += " degisti"
// link.style.color ="orange"
// link.classList.add("btn")

// //prompt ile kullanıcıdan bilgi almak
// let dullName = prompt("Lütfen Adinizi Giriniz","ali")

// let greeting =document.querySelector("#greeting")

// greeting.innerHTML = ` ${greeting.innerHTML} <small style ="color:red">${dullName}</small>`

//  //Liste içerisindeki son elemana ulaşmak veya eleman eklemek
// let LastChild =document.querySelector("ul#list>li:last-child")
// LastChild.innerHTML = "son oge degisti"

// let FirstChild =document.querySelector("ul#list>li:first-child")
// FirstChild.innerHTML = "ilk oge degisti"

// let ulDOM =document.querySelector("ul#list")
// let liDOM =document.createElement("li")

// liDOM.innerHTML = "Kendi olusturdugumuz oge"

// // ulDOM.append(liDOM) // sona ekler
// ulDOM.prepend(liDOM) // başa ekler

// let greeting = document.querySelector("#greeting")
// greeting.classList.add("text-primary")
// greeting.classList.add("title")
// greeting.classList.add("new-info" , "second-class" , "third-class") //birden fazla class eklemek

// greeting.classList.remove("title" , "text-primary") // birden fazla class silmek

// console.log(greeting.classList)

// kosul ? dogruysa : yanlıssa

// let kullaniciadi =prompt("Kullanici Adi Giriniz: ")
// let info =document.querySelector("#info")

// info.innerHTML= `${kullaniciadi.length >0 ? kullaniciadi : "Kullanici bilginiz bulunamadi"}`

let userName = prompt("Adınız Nedir?")

function showTime(){


let myName =document.querySelector("#myName")

myName.innerHTML = userName 

let myClock = document.querySelector("#myClock")
var date =new Date()

var gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

myClock.innerHTML = `
${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${gunler[date.getDay()]} 
`
}
setInterval(showTime,1000)