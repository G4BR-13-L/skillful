console.log('Initializing nativefier generator script...')
var apps = [];
function generate(){

	var list = document.querySelector('ul#list');
	var username = document.querySelector('input#username').value;
	var site = document.querySelector('input#site-url').value;
	var applicationName = document.querySelector('input#application-name').value;
	
	var upperCaseLetter = applicationName[0].toUpperCase();
	var newApplicationName = applicationName.replace(applicationName[0], upperCaseLetter);
	var resume = document.querySelector('select#resume');


	apps.push(newApplicationName)
	var itemResumed = document.createElement('option');
	itemResumed.innerText = newApplicationName;
	itemResumed.setAttribute("id", newApplicationName)
	resume.appendChild(itemResumed)
	//window.alert(newApplicationName)
	var item = document.createElement('li');
	item.setAttribute("id", newApplicationName)

	item.innerText = `
	nativefier --name ${newApplicationName} ${site} && cd ${newApplicationName}-linux-x64 && mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && cd .. && sudo mv ${applicationName} /opt && sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && echo -e '[Desktop Entry] Version=1.0 Name=${applicationName} Exec=/opt/${applicationName}/${newApplicationName} Icon=/opt/${applicationName}/resources/app/static/Icon.png Type=Application Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop &&`;
	list.appendChild(item);



	
}

function removeItemFromResume(){

	var select = document.querySelector('select#resume');
	let littleCheck = select.options[select.selectedIndex];
	if( littleCheck == -1){
		window.alert('Target unselected');
	}else{
		var itemId = apps[select.selectedIndex]
		var listOfItems = document.querySelector('ul#list');

	    var item = document.querySelector(`li#${itemId}`);
	    listOfItems.removeChild(item);
	    console.log(apps[select.selectedIndex])
	    window.alert('Removed item: '+ select.selectedIndex +'->'+apps[select.selectedIndex]);
	    console.log('Removed item: '+ select.selectedIndex +'->'+apps[select.selectedIndex]);
	    apps.splice(apps[select.selectedIndex], 1);
	    select.options[select.selectedIndex] = null;
	}


}

function clearList(){
	window.alert("Cleaning")
	var select = document.querySelector('select#resume');
	select.innerText = '';
	var lista = document.querySelector('ul#list');
	lista.innerText = '';
}
/*
function andAdder(){
	var item = document.createElement('li');
	item.innerText ='&&'
	list.appendChild(item);
}
*/
console.log('nativefier generator script INITIALIZED')