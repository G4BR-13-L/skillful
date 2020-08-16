console.log('initializating navigation script...');
var tabOne = document.querySelector('span.tab-1');
var tabTwo = document.querySelector('span.tab-2');
var tabThree = document.querySelector('span.tab-3');
var negativeBorderOne = document.querySelector('span.negative-radius-1');
var negativeBorderTwo = document.querySelector('span.negative-radius-2');
var negativeBorderThree = document.querySelector('span.negative-radius-3');
var negativeBorderFour = document.querySelector('span.negative-radius-4');
var whiteGroundOne = document.querySelector('div.white-ground-1');
var whiteGroundTwo = document.querySelector('div.white-ground-2');
var whiteGroundThree = document.querySelector('div.white-ground-3');
var whiteGroundFour = document.querySelector('div.white-ground-4');

var nativefierScriptGenerator = document.querySelector('div.content');
negativeBorderOne.style.background = '#CCC';
negativeBorderTwo.style.background = '#CCC';
tabOne.style.background = '#CCC';



function tab1(){
	
	tabOne.style.background = '#CCC';
	tabTwo.style.background = '#FFF';
	tabThree.style.background = '#FFF';
	negativeBorderOne.style.background = '#CCC';
	negativeBorderTwo.style.background = '#CCC; ';
	negativeBorderThree.style.background = '#FFF';
	negativeBorderFour.style.background = '#FFF';

	whiteGroundOne.style = 'border-radius: 0 0 10px 0;';
	whiteGroundTwo.style = 'border-radius: 0 10px 0 0;';
	whiteGroundThree.style = 'border-radius: 0 0 0 0;';
	whiteGroundFour.style = 'border-radius: 0 0 0 0;';

	nativefierScriptGenerator.innerHTML = `
				<div id="center">				
					<h1>Username</h1>
					<input class="data-field" type="text" id="username">
					<h1>Site</h1>
					<input class="data-field" type="text" id="site-url">
					<h1>Application Name</h1>
					<input class="data-field" type="text" id="application-name">
					<h1>Icon Image</h1>
					<label for="iconBeforeBase64" id="iconBeforeBase64-label">Browse...</label>
					<input type="file" id="iconBeforeBase64" />
					<div id="buttons">
						<button onclick="clearList();" >Clear</button>
						<button onclick="generate()">Generate</button>
					</div>
				</div>`;
	console.log('Nativefier script generator selected');
}
function tab2(){
	
	tabOne.style.background = '#FFF';
	tabTwo.style.background = '#CCC';
	tabThree.style.background = '#FFF';

	negativeBorderOne.style.background = '#FFF';
	negativeBorderTwo.style.background = '#CCC';
	negativeBorderThree.style.background = '#CCC';
	negativeBorderFour.style.background = '#FFF';

	whiteGroundOne.style = 'border-radius: 0 0 0 0;';
	whiteGroundTwo.style = 'border-radius: 0 0 10px 0;';
	whiteGroundThree.style = 'border-radius: 0 10px 0 0;';
	whiteGroundFour.style = 'border-radius: 0 0 0 0;';

	nativefierScriptGenerator.innerHTML = `<div id="second-page">
						
						<h1>Application Name</h1>
						<input class="data-field" type="text" id="hated-application-name">
						
						<div id="buttons">
							<button onclick="clearList();" >Clear</button>
							<button onclick="generateRmScript()">Generate rm Script</button>
						</div>
					</div>`
	console.log('Tab 2 selected');
}

function tab3(){
	
	tabOne.style.background = '#FFF';
	tabTwo.style.background = '#FFF';
	tabThree.style.background = '#CCC';

	negativeBorderOne.style.background = '#FFF';
	negativeBorderTwo.style.background = '#FFF';
	negativeBorderThree.style.background = '#CCC';
	negativeBorderFour.style.background = '#CCC';

	whiteGroundOne.style = 'border-radius: 0 0 0 0;';
	whiteGroundTwo.style = 'border-radius: 0 0 0 0;';
	whiteGroundThree.style= 'border-radius: 0 0 10px 0;';
	whiteGroundFour.style = 'border-radius: 0 10px 0 0;';

	nativefierScriptGenerator.innerHTML = `<h1>Terceira Pagina</h1>`
	console.log('Tab 3 selected');
}
console.log('Navigation script INITIALIZED');




