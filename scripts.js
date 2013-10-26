var products = ["Instagram", "Facebook", "LinkedIn", "Tumblr", "Grindr", "Grouper", "Uber", "AirBNB", "Google", "LiveJournal", "quadcopters", "Big Data", "Snapchat", "Lyft", "Instacart", "Venmo", "Walmart", "Amazon", "Twitter", "a mother"];
var markets = ["cats", "inmates", "ex-cons", "sinners", "singles", "losers", "early-adopters", "vegans", "soccer moms", "athiests", "europeans", "chubby-chasers", "small insects", "pandas", "bacteria", "dogs", "billionaires", "Obama", "Mark Zuckerberg", "startups", "Danny Glover", "half-asians", "drones"];

$(document).on('ready', function() {
  console.log("hello");
  $('.product').text(products[Math.floor(Math.random()*products.length)]);
  $('.market').text(markets[Math.floor(Math.random()*markets.length)]);
});
