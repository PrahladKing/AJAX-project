let xhr = new XMLHttpRequest()
xhr.open('GET', 'https://restcountries.com/v2/all', true)
xhr.onload = function() {
    let names = document.getElementById('name')
    let flag = document.getElementById('flag')
    let country = JSON.parse(this.response)
    let name1 = country.map(x => {
        return x.name
    })
    for (x of name1) {
        names.innerHTML += `<option value="${x}"> ${x} </option>` 
    }
    let flag1 = country.filter(y => {
        return (names.value == y.name)
    })
}
xhr.send()