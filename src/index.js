
document.addEventListener('DOMContentLoaded', (e) => {

 document.querySelector('#search').addEventListener('click', (e) => {
    e.preventDefault()

    //Gets the zipcode input by user 
    let txtVal = document.getElementById('zip-input').value 

    //Takes zipcode input and places in URL to get the information from that location
    fetch(`https://cors-anywhere.herokuapp.com/https://hebcal.com/shabbat?cfg=json&a=onb=18&zip=${txtVal}`)
    .then(resp => resp.json())
    .then(data => { 
        //Gets the data for the City 
       const tr = document.getElementById('row1')
       if (tr.querySelector('td')) { //Checks if theres a td element input already
        tr.querySelector('td').remove() //If it does then it removes it 
          }
       const td = document.createElement('td') //If not then it adds a td element with the City location
       const location = data.location.city
       td.innerText = location
       tr.append(td)
      
       let arr = []

   data.items.forEach((e => { //Gets the data for the Candle lighting time
    arr.push(e.title) //Takes all the data and places it in an array
        }))

    for (let i = 0; i < arr.length; i++) { //For loop to go through the array of data to find the Candle lighting string
        if (arr[i].startsWith("Candle lighting")) {
            const tr2 = document.getElementById('row2')
            if (tr2.querySelector('td')) { //Checks if theres is a td input already and removes it if so
                tr2.querySelector('td').remove()
                  }
               const td2 = document.createElement('td')
               td2.innerText = arr[i]
               tr2.append(td2)
               break; //Stops the loop once it gets the data
               }
            }
        })
    .catch((e) => {
        alert('Error, location not found. Please try again.')
     })
  })

//Changes the color of the Search button when the mouse hovers over it
document.getElementById("search").addEventListener("mouseover", (event) => {
        event.target.style.color = "grey"; 
    setTimeout(() => {event.target.style.color = ""}, 450) //Changes the color back after a certain period of time
})
}) //DOM content loader closing
