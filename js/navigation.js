console.log('initializating navigation script...');
var tabOne = document.querySelector('span.tab-1');
var tabTwo = document.querySelector('span.tab-2');
var tabThree = document.querySelector('span.tab-3');

var nativefierScriptGenerator = document.querySelector('div.content');
tabOne.style = 'background-color: blue; color: #209f84';



function tab1(){
	
	tabOne.style ='background: #fff; color: #209f84';
	tabTwo.style = 'background: #209f84; color: #fff';
	tabThree.style = 'background: #209f84; color: #fff';
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
				</div>`;
	console.log('Nativefier script generator selected');
}
function tab2(){
	
	tabOne.style = 'background: #209f84; color: #fff';
	tabTwo.style ='background: #fff; color: #209f84';
	tabThree.style = 'background: #209f84; color: #fff';

	
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
	
	tabOne.style = 'background: #209f84; color: #fff';
	tabTwo.style = 'background: #209f84; color: #fff';
	tabThree.style ='background: #fff; color: #209f84';

	nativefierScriptGenerator.innerHTML = `<h1>Terceira Pagina</h1>`
	console.log('Tab 3 selected');
}
var menuState = 2;

function openMenu(){
	var roundedPage = document.querySelector('div#script-list');
	var resumerMotivacional = document.querySelector('div.resumer-motivacional')

	if(menuState%2 === 0){
		roundedPage.style = 'width:50%;transform:translateX(20%)';
		resumerMotivacional.style = 'width:25%;';
		menuState++;
		console.log(menuState);
	}else{
		roundedPage.style = 'width:70%;transform:translateX(5%)';
		resumerMotivacional.style = 'width:18%;';
		menuState++;
		console.log(menuState);
	}


	
}
console.log('Navigation script INITIALIZED');




