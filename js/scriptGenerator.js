console.log('Initializing nativefier generator script...')
var apps = [];
//var x = eue.join(';');
var content = [];
console.log('Content was setted')
//==========================================
//	IMAGE TO BASE64
function encodeImageFileAsURL(element) {
	var file = element.files[0];
	var reader = new FileReader();
	var base64icon;
	reader.onloadend = function() {
		var trueBase64 = reader.result.replace('data:image/png;base64,', '')
		console.log('RESULT', trueBase64)
		window.alert(trueBase64);
		base64icon = trueBase64;
	}
	reader.readAsDataURL(file);
	window.alert(base64icon);
	return(base64icon);
}

//==========================================
function generate(){

	var list = document.querySelector('ul#list');
	var username = document.querySelector('input#username').value;
	var site = document.querySelector('input#site-url').value;
	var applicationName = document.querySelector('input#application-name').value;
	var falseBase64Icon = document.querySelector('input#iconBeforeBase64')
	var trueBase64Icon;
	var contentRepresentation;
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
	item.setAttribute("class", newApplicationName)

	trueBase64Icon = encodeImageFileAsURL(falseBase64Icon);
	content.push(`cd ~ && nativefier --name ${newApplicationName} ${site} && cd /home/${username}/${newApplicationName}-linux-x64 && cd resources/app && mkdir static && cd static && echo '${trueBase64Icon}' > image.txt && base64 --decode image.txt > Icon.png && cd ../../.. && mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && cd .. && sudo mv ${applicationName} /opt && sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && echo -e '[Desktop Entry]\n Version=1.0\n Name=${applicationName}\n Exec=/opt/${applicationName}\n /${newApplicationName} Icon=/opt/${applicationName}/resources/app/static/Icon.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop ;`);
	console.log(content);
	
	contentRepresentation = `#! /bin/bash cd ~ && nativefier --name ${newApplicationName} ${site} && cd /home/${username}/${newApplicationName}-linux-x64 && cd resources/app && mkdir static && cd static && echo '/**Base64Icon**/' > image.txt && base64 --decode image.txt > Icon.png && cd ../../.. && mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && cd .. && sudo mv ${applicationName} /opt && sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && echo -e '[Desktop Entry] Version=1.0 Name=${applicationName} Exec=/opt/${applicationName} /${newApplicationName} Icon=/opt/${applicationName}/resources/app/static/Icon.png Type=Application Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop ;`
	item.innerText = contentRepresentation;
	list.appendChild(item);

}

function downloadScript(){
	content.unshift('#! /bin/bash\n');
	var downloadedContent = content.join('');
	var filename = "scriptGenerated.sh";
	var blob = new Blob([downloadedContent], {
		type: "sh/plain;charset=utf-8"
	});
	console.log(downloadedContent)
	saveAs(blob, filename);
}
function generateRmScript(){
	var list = document.querySelector('ul#list');
	var hatedApplicationName = document.querySelector('input#hated-application-name').value;
	var hatedId;
	var item = document.createElement('li');
	var resume = document.querySelector('select#resume');
	var itemResumed = document.createElement('option');
	hatedApplicationName = hatedApplicationName.trim();
	if(hatedApplicationName==''){
		console.log("Empty input")
	}else{
		hatedApplicationName.toLowerCase();
		hatedId = `hated${hatedApplicationName}`;
		console.log(hatedId)
		apps.push(hatedId);
		item.setAttribute("class", hatedId);
		itemResumed.setAttribute("id", hatedId);
		itemResumed.innerText = hatedApplicationName;
		resume.appendChild(itemResumed)
		item.innerText = `sudo rm -Rf /opt/${hatedApplicationName}* && sudo rm -Rf /usr/bin/${hatedApplicationName} && sudo rm -Rf /usr/share/applications/${hatedApplicationName}.desktop`;
		list.appendChild(item);
	}
	

}

function removeItemFromResume(){

	var select = document.querySelector('select#resume');
	let littleCheck = select.options[select.selectedIndex];
	if( littleCheck == -1){
		window.alert('Target unselected');
	}else{
		var itemId = apps[select.selectedIndex]
		var listOfItems = document.querySelector('ul#list');

		var item = document.querySelector(`li.${itemId}`);
		listOfItems.removeChild(item);
		console.log(apps[select.selectedIndex])
		window.alert('Removed item: '+ select.selectedIndex +'->'+apps[select.selectedIndex]);
		console.log('Removed item: '+ select.selectedIndex +'->'+apps[select.selectedIndex]);
		content.splice(apps[select.selectedIndex], 1);
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
	apps = [];
	console.log(apps);
	content = [];

}
console.log('nativefier generator script INITIALIZED')