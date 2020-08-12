console.log('Motivacional quote INITIALIZING...');
const quotes = [
	{id:1, quoteWords:'May the force be with you', author:'Wise Jedi'},
	{id:2, quoteWords:'frase2', author:'bruce lee'},
	{id:3, quoteWords:'frase 3', author:'yoda'},
	{id:4, quoteWords:'frase 4', author:'shifu'},
	{id:5, quoteWords:'frase 5', author:'oogoway'},
	{id:6, quoteWords:'frase 6', author:'Obi Wan'},
];
function motivate(){
	console.log('Motive me!');
	var quoteList = document.querySelector('ul.ul-quote-list');
	var newQuote = document.createElement('li');
	newQuote.setAttribute("class", "motivacional-quotes-list-item");
	var idQuote = Number.parseInt(Math.random()* 6);
	var objectQuote = quotes[idQuote];

	newQuote.innerHTML =`<p class="quote"> ${objectQuote.quoteWords}</p>
							<span class="author">${objectQuote.author}</span>`;
	quoteList.appendChild(newQuote);

}
console.log('Motivacional quote INITIALIZED');