console.log('initializating navigation script...');
//========Tabs
var tabOne = document.querySelector('span.tab-1');
var tabTwo = document.querySelector('span.tab-2');
var tabThree = document.querySelector('span.tab-3');

//========Icons
var iconTerminal = document.querySelector('i.icofont-terminal');
var iconTrash = document.querySelector('i.icofont-bin');
var iconLinux = document.querySelector('i.icofont-penguin-linux');

//=======Content
var nativefierScriptGenerator = document.querySelector('div.content');
tabOne.style = 'background-color: white';
iconTerminal.style = 'color: #209f84 !important';

function tab1(){
	
	tabOne.style ='background: #fff'; 
	tabTwo.style = 'background: #209f84'; 
	tabThree.style = 'background: #209f84';
	
	iconTerminal.style = 'color: #209f84 !important'
	iconTrash.style = 'color: #fff !important'
	iconLinux.style = 'color: #fff !important'

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
	<button onclick="clearList();" ><i class="icofont-mop"></i> Clear</button>
	<button onclick="generate()"><i class="icofont-automation"></i> Generate</button>
	</div>
	<button id="download-button" onclick="downloadScript();"><i class="icofont-download"></i> Download</button>
	</div>`;
	console.log('Nativefier script generator selected');
}
function tab2(){
	
	tabOne.style = 'background: #209f84'; 
	tabTwo.style ='background: #fff'; 
	tabThree.style = 'background: #209f84'; 

	iconTerminal.style = 'color: #fff !important'
	iconTrash.style = 'color: #209f84 !important'
	iconLinux.style = 'color: #fff !important'

	
	nativefierScriptGenerator.innerHTML = `<div id="second-page">

	<h1>Application Name</h1>
	<input class="data-field" type="text" id="hated-application-name">

	<div id="buttons">
	<button onclick="clearList();" > <i class="icofont-mop"></i>Clear</button>
	<button onclick="generateRmScript()"><i class="icofont-automation"></i> Generate rm Script</button>
	</div>
	</div>`
	console.log('Tab 2 selected');
}

function tab3(){
	
	tabOne.style = 'background: #209f84'; 
	tabTwo.style = 'background: #209f84'; 
	tabThree.style ='background: #fff'; 

	iconTerminal.style = 'color: #fff !important';
	iconTrash.style = 'color: #fff !important';
	iconLinux.style = 'color: #209f84 !important';

	nativefierScriptGenerator.innerHTML = `<h1>Terceira Pagina</h1>`
	console.log('Tab 3 selected');
}
var menuState = 2;

function openMenu(){
	var menuButton = document.querySelector('span#menu-button');
	var roundedPage = document.querySelector('div#script-list');
	var resumerMotivacional = document.querySelector('div.resumer-motivacional')

	if(menuState%2 === 0){
		roundedPage.style = 'width:50%;transform:translateX(20%)';
		resumerMotivacional.style = 'width:25%;';
		menuButton.style ='transform: rotate(-90deg)';
		menuState++;
		console.log(menuState);
	}else{
		roundedPage.style = 'width:70%;transform:translateX(5%)';
		resumerMotivacional.style = 'width:18%;';
		menuButton.style ='transform: rotate(0deg)';
		menuState++;
		console.log(menuState);
	}


	
}
console.log('Navigation script INITIALIZED');




