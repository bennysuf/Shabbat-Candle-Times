// type in your zip
//submit event for #zipCode
//focus event for #zipCode
// returns your zmanim

// events - click, submit? keyboard? focus, mouseover
//need to iterate with filter, forEach, or map..

document.addEventListener('DOMContentLoaded', (e) => {
 document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault()
   
    let txtVal = document.getElementById('zip-input').value 
    // console.log(txtVal.length)
    fetch(`https://cors-anywhere.herokuapp.com/https://hebcal.com/shabbat?cfg=json&a=onb=18&zip=${txtVal}`)
    .then(resp => resp.json())
    .then(data => { 
       const tr = document.getElementById('row1')
       if (tr.querySelector('td')) {
        tr.querySelector('td').remove()
       }
       const td = document.createElement('td')
       const location = data.location.city
       td.innerText = location
       tr.append(td)
      
       let arr = []
   data.items.forEach((e => {
arr.push(e.title)
}))
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith("Candle lighting")) {
            const tr2 = document.getElementById('row2')
            if (tr2.querySelector('td')) {
                tr2.querySelector('td').remove()
               }
               const td2 = document.createElement('td')
               td2.innerText = arr[i]
               tr2.append(td2)
               break;
            }
            }
    }
    )
    .catch((e) => {
        alert('Error, location not found. Please try again.')
 })
})


const test = document.getElementById("search")
test.addEventListener("mouseover", (event) => {
        event.target.style.color = "grey"; 
    setTimeout(() => {event.target.style.color = ""}, 450)
})
}) //DOM content loader closing
