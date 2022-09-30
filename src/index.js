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
      
   return data.items.forEach((e => {
    let arr = []
    arr.push(e.title)
    // console.log(arr)
   console.log(arr.find(e => e.startsWith("Candle lighting")))
 //data.items === array
 //e.title === string
// const check = e.title.startsWith("Candle lighting")
// const str = "Candle"
// const index = e.title.indexOf(str)
// console.log(`${index}`)
const tr2 = document.getElementById('row2')
if (tr2.querySelector('td')) {
    tr2.querySelector('td').remove()
   }
   const td2 = document.createElement('td')
//    location = index
   td2.innerText = //need to get "Candle lighting"
   tr2.append(td2)
    })
    )

    
     

       
    


       //location i can type, candle lighting i can do a find 
    // console.log(data.items)
    // console.log('city', data.location.city),
    // console.log('candele lighting',data.items[0].title),
    // console.log('date', data.items[1].date),
    // console.log('hdate', data.items[1].hdate)
    }
    //forEach to place into the table? 

    //try again after yom tov to see if the array locations are the same place 
    
    //create table row element?, then append each response into the table row element

    //location.city 
    //items[0].title //occasion 
    // items[0].date //en date
    // items[0].hdate //heb date
    // items[0].category //event catagory 
    // items[0].hebrew //name of event in hebrew
    // items[1].title //candle lighting time
    
    // might need to do a .find if Object.value (or items.title) === startsWith("candle lighting").. 
    )
    .catch((e) => console.log(e))
    
})

//add mouseover event here?

// document.addEventListener('focus', (e) => {
    //console.log(e.taget(.value?))
    //console.log(document.getElementsByName("zipInput"))
    // if (e.target === document.getElementsByName("zipInput")) {
//   event.target.style.background = 'pink';
// }, true)
// } //changes the background color of the form youre typing on

}) //DOM content loader closing