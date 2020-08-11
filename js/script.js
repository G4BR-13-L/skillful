
/*
 mv teste.txt teste.sql


nativefier --name Amazon www.amazon.com.br && 

sudo mv amazon /opt && sudo ln -sf /opt/amazon/Amazon /usr/bin/amazon && echo -e '[Desktop Entry]\n Version=1.0\n Name=amazon\n Exec=/opt/amazon/Amazon\n Icon=/opt/amazon/resources/app/static/Icon.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/amazon.desktop

sudo mv telegram /opt && sudo ln -sf /opt/telegram/Telegram /usr/bin/telegram && echo -e '[Desktop Entry]\n Version=1.0\n Name=telegram\n Exec=/opt/telegram/Telegram\n Icon=/opt/telegram/static/Icon.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/telegram.desktop*/


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
	nativefier --name ${newApplicationName} ${site} && cd ${newApplicationName}-linux-x64 && mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && cd .. && sudo mv ${applicationName} /opt && sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && echo -e '[Desktop Entry]\n Version=1.0\n Name=${applicationName}\n Exec=/opt/${applicationName}/${newApplicationName}\n Icon=/opt/${applicationName}/resources/app/static/Icon.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop`;
	list.appendChild(item);



	
}

function removeItemFromResume(){

	var select = document.querySelector('select#resume');
	let littleCheck = select.options[select.selectedIndex];
	if( littleCheck == -1){
		window.alert('pop');
	}else{
		var itemId = apps[select.selectedIndex]
		var listOfItems = document.querySelector('ul#list');

	    var item = document.querySelector(`li#${itemId}`);
	    listOfItems.removeChild(item);
	    console.log(apps[select.selectedIndex])
	    apps.splice(apps[select.selectedIndex], 1);
	    window.alert('Item removido: '+ select.selectedIndex);

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






function andAdder(){
	var item = document.createElement('li');
	item.innerText ='&&'
	list.appendChild(item);
}