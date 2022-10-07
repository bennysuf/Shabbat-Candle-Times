# phase-1-project
<img width="580" src="https://user-images.githubusercontent.com/109253075/194643989-7ad70be6-03fa-42b8-ae64-bf29a545a216.png">

## Who its for 
In the Jewish world, one is supposed to light candles at sunset on friday afternoon.
With just a zipcode, this project will tell you the location searched and what time candle lighting is.

## Usage
In the search bar, type your zipcode and click the "Search" button

<img width="411" src="https://user-images.githubusercontent.com/109253075/194392800-44f25d69-0f4a-43a8-ab7e-543afe9afb32.png">

Once you click Search, you should get your location and candle lighting time.

<img width="364" src="https://user-images.githubusercontent.com/109253075/194644536-c3af0790-9c0a-4653-9df5-a9ebbe6b9ed6.png">

## Hidden features

## Key details

This project only works on American cities and zipcodes.

Due to a CORS error unable to be fixed. I added a proxy website which gives the project access to the API.
If an error shows up after having entered a valid zipcode, you may have to go on here https://cors-anywhere.herokuapp.com/corsdemo
click on the button that says "Request tempurary access to the demo server" then reload your page on the project and it should work. 

## Source

API source: https://www.hebcal.com/
IMG source: https://www.chabad.org/

Finding the candle lighting time in your area is just a short click away. 

Simplifying it to just a zipcode and a click, the candle lighting time and location will be displayed. 
Place any zipcode to an American city in the search bar and click "Search"

Through the API I can grab many different pieces of data from that zipcode, I chose to stick with displaying the area and candle lighting time however there are more pieces of information that can be selected and displayed. 
