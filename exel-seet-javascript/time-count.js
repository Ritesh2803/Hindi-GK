// Set the date we're counting down to
var countDownDate = new Date("june 21, 2024 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = "वीडियो अपलोड होने में "+ hours +" घंटा "
  + minutes + " मिनट  " + seconds + " सेकंड बचा है";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "(पेज को रिफ्रेश करें)  अगर अभी भी वीडियो नहीं दिख रहा है तो वीडियो अपलोड होने में कोई समस्या आ गई है. (कुछ समय और दीजिये वीडियो अपलोड हो जाएगा)";
  }
}, 1000);