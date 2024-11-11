function getQuote() {
  var quotes = [
    "“Be yourself; everyone else is already taken.”",
    "“So many books, so little time.”",
    "“It is better to be hated for what you are than to be loved for what you are not.”",
    "“It is never too late to be what you might have been.”",
  ];
  var author = [
    "― Oscar Wilde",
    "― Frank Zappa",
    "― Andre Gide",
    "― George Eliot",
  ];

  var random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quotes").innerHTML = quotes[random];
  document.getElementById("author").innerHTML = author[random];
}

var unique = {};
unique.push(random);
