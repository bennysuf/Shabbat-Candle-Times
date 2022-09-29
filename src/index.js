// type in your zip
//submit event for #zipCode
//focus event for #zipCode
// returns your zmanim


// events - click, submit? keyboard? focus, mouseover

document.addEventListener('DOMContentLoaded', (e) => {
    const form = document.querySelector('#search')
form.addEventListener('click', (e) => {
    e.preventDefault()
    // if (e.target.name === 'zipInput') {
        
        let txtVal = document.getElementById('zip-input').value 
        fetch(`https://cors-anywhere.herokuapp.com/https://hebcal.com/shabbat?cfg=json&a=onb=18&zip=${txtVal}`)
        .then(resp => resp.json())
        .then(data => console.log(data))
      
})
              
                    // if (e.target.name === 'zipSearch') {

            //add mouseover event here?
    
            //try again after yom tov to see if the array locations are the same place 
            
            //create table row element?, then append each response into the table row element
        //location.city 
        //items[0].title //occasion 
        // items[0].date //en date
        // items[0].hdate //heb date
        // items[0].category //event catagory 
        // items[0].hebrew //name of event in hebrew
        // items[1].title //candle lighting time

        //.catch((e) =>
        //console.log(e))

        //need to iterate with filter, forEach, or map..

//     }
// })


// document.addEventListener('focus', (e) => {
    //console.log(e.taget(.value?))
    //console.log(document.getElementsByName("zipInput"))
    // if (e.target === document.getElementsByName("zipInput")) {
//   event.target.style.background = 'pink';
// }, true)
// } //changes the background color of the form youre typing on

}) //DOM content loader closing