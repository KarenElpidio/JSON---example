const user = {
    name: "Korbo",
    lastName: "Korbito",
    age: 25,
    nickname: "Korbito123",
     hobbies: ["correr", "codear", "ear"],
     address: {
        street: "Calle falsa 123",
        city: "Buenos Aires"
     }, 
     
     merried: false,
     greet() {
        return 'Holaa'
     }
}


const friends = [
    {
        name: "Blanco",
        nickname: "Blanco123" 
    }, 
    {
        name: "Negro",
        nickname: "Negro123" 
    }, 
    {
        name: "Lilo",
        nickname: "Lilo123" 
    }, 
    {
        name: "Samuel",
        nickname: "Samuel123" 
    }
]

user.friends = friends

let output = ''

for(let i = 0; i < friends.length; i++){
    output = output + `<li>${friends[i].name} - ${friends[i].nickname}</li>`
}

document.getElementById('people').innerHTML = output

console.log(JSON.stringify(user))

