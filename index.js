$(document).ready(function() {
  createQuote(); //function executes on page load

  $('.newquote').on("click", function() { //funtion for newquote onclick
    createQuote();
  });

  
 
  function createQuote() {

        var quotes = {
          1: ['I take care of my flowers and my cats. And enjoy food. And that’s living.','Ursula Andress '],2: ['I can’t have cats around me because they try to steal my energy.', 'Roseanne Barr'],3: ['A lie is like a cat: You need to stop it before it gets out the door or it’s really hard to catch', 'Charles M. Blow'], 4: ['That’s the great secret of creativity. You treat ideas like cats: you make them follow you.', 'Ray Bradbury '],5: ['Cats and dogs believe politicians are like cemetery caregivers — they are on top of everyone, but nobody listens.', 'Rita Mae Brown '],6: ['My relationships with my cats has saved me from a deadly, pervasive ignorance.', 'William S. Burroughs '],7: ['Meow” means “woof” in cat.', 'George Carlin '],8: ['It is very inconvenient habit of kittens that, whatever you say to them they always purr.', 'Lewis Carroll '],9: ['Cats choose us; we don’t own them', 'Kristin Cast'], 10: ['Those who’ll play with cats must expect to be scratched.', 'Miguel de Cervantes'],11: [' love cats because I enjoy my home; and little by little, they become its visible soul.','ean Cocteau'],12: ['Way down deep, we’re all motivated by the same urges. Cats have the courage to live by them.','Jim Davis '],13: ['What greater gift than the love of a cat?', 'Charles Dickens '],14: ['“A countryman between two lawyers is like a fish between two cats.', 'Benjamin Franklin '],15: ['Cats know how to obtain food without labor, shelter without confinement, and love without penalties','Walter Lionel George '],16: [' cat has absolute emotional honesty: human beings, for one reason or another, may hide their feelings, but a cat does no', 'Ernest Hemingway'],17: ['A cat can be trusted to purr when she is pleased, which is more than can be said for human beings', 'William Ralph Inge '],18: ['Cats have it all — admiration, an endless sleep, and company only when they want it.', 'Rod McKuen']
        };
    
        var quote1 = Math.ceil(Math.random() * Object.keys(quotes).length);

       $('#quote').text(quotes[quote1][0]);
       $('#author').text(quotes[quote1][1]);
                    
  }
});



/*twiiter function*/
 $('.gotweets').on("click", function() {
   goTweet();
  });


 function goTweet() {
  
  
   var q = document.getElementById("quote").innerHTML;
 var a = document.getElementById("author").innerHTML;
  var text = " \" " + q + "\" " + ' - ' + a ;
   
  window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(text));
 
   
}