// type in your zip
//submit event for #zipCode
//focus event for #zipCode
// returns your zmanim


// events - click, submit? keyboard? focus, mouseover

document.addEventListener('DOMContentLoaded', (e) => {
    
    
    // document.addEventListener('submit', (e) => {
        //     console.log(e.target)
        //     console.log(document.getElementsByName('zipSubmit'))
        
        // e.preventDefault?
        
        //     if (e.target === document.getElementsByName('zipSubmit')) {

            //add mouseover event here?
            // figure out how to take text submitted and make it an argument
            //try making a function in the event listner and either the submittion would become the argument or give e.target.value a value and use that value to log
            
            // fetch(`https://www.hebcal.com/shabbat?cfg=json&a=onb=18geozip=${zipCode}`)
            // .then(resp => resp.json())
            // .then(data => console.log(data))

            //try again after yom tov to see if the array locations are the same place 

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