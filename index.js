let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v2/all', true)
xhr.onload = function() {
    let names = document.getElementById('name')
    let flag = document.getElementById('flag')
    let country = JSON.parse(this.response)
    let name1 = country.map(x => {
        return x.img
    })
    for (x of name1) {
        flag.innerHTML += `<img src="${x}">` 
    }
}
xhr.send()