console.log('Motivacional quote INITIALIZING...');
const quotes = [
	{id:1, quoteWords:'May the force be with you', author:'Wise Jedi'},
	{id:2, quoteWords:'Be water my friend', author:'Bruce Lee'},
	{id:3, quoteWords:'Express yourself', author:'Bruce Lee'},
	{id:4, quoteWords:'A única coisa que cabe a  nós decidir, é o que fazer com o tempo que nos é dado ', author:'Gandalf'},
	{id:5, quoteWords:'Yesterday you said tomorrow', author:'---'},
	{id:6, quoteWords:'Make yourself hard to kill', author:'---'},
	{id:5, quoteWords:'There is no secret ingredient', author:'Kung Fu Panda'},
	{id:5, quoteWords:`<p>Eles não entendem, não vão descobrir</p> <p>Dominado pela má vontade</p> <p>Tira esse cara de perto de mim</p> <p>Meu compadre, o que tu faz não presta à ninguém</p> <p>Ninguém vai consumir</p> <p>Não se queixe da falta do peixe</p> <p>Não deixe o mar te engolir</p>`, author:'Charlie Brown Jr'}
];
function motivate(){
	console.log('Motive me!');
	var quoteList = document.querySelector('ul.ul-quote-list');
	var newQuote = document.createElement('li');
	newQuote.setAttribute("class", "motivacional-quotes-list-item");
	var idQuote = Number.parseInt(Math.random()* 8);
	var objectQuote = quotes[idQuote];

	newQuote.innerHTML =`<div class="quote"> ${objectQuote.quoteWords}</div>
							<div class="author">- ${objectQuote.author} -</div>`;
	quoteList.appendChild(newQuote);

}
console.log('Motivacional quote INITIALIZED');