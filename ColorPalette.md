
#4270A6

#34538B

#649AB9

#88C6C2

#F79E4D

#F85079


 mv teste.txt teste.sql


nativefier --name Amazon www.amazon.com.br && 

sudo mv amazon /opt && sudo ln -sf /opt/amazon/Amazon /usr/bin/amazon && echo -e '[Desktop Entry]\n Version=1.0\n Name=amazon\n Exec=/opt/amazon/Amazon\n Icon=/opt/amazon/resources/app/static/Icon.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/amazon.desktop

sudo mv telegram /opt && sudo ln -sf /opt/telegram/Telegram /usr/bin/telegram && echo -e '[Desktop Entry]\n Version=1.0\n Name=telegram\n Exec=/opt/telegram/Telegram\n Icon=/opt/telegram/static/Icon.png\n Type=Application\n Categories=Application' | sudo tee /usr/share/applications/telegram.desktop


cd ~ && nativefier --name ${newApplicationName} ${site} && cd ${newApplicationName}-linux-x64 && cd resources/app && mkdir static && cd static && echo '${trueBase64Icon}' > image.txt && base64 --decode image.txt > Icon.png && cd ../../.. && mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && // renomeia a pasta do app && cd .. && sudo mv ${applicationName} /opt && sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && echo -e '[Desktop Entry] Version=1.0 Name=${applicationName} Exec=/opt/${applicationName}/${newApplicationName} Icon=/opt/${applicationName}/resources/app/static/Icon.png Type=Application Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop &&
***

cd ~ && // Volta para a pasta pessoal do usuário--

nativefier --name ${newApplicationName} ${site} && // cria o app--

cd ${newApplicationName}-linux-x64 &&  // entra na pasta do app--

cd resources/app && //entra no diretorio app--

mkdir static && cd static && // cria e entra no diretório static--

echo '${trueBase64Icon}' > image.txt && // coloca o base64 em um arquivo de texto--

base64 --decode image.txt > Icon.png && // decodifica a imagem;--

cd ../../.. && // volta para o diretorio principal do app;--


mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && // renomeia a pasta do app --

cd .. && sudo mv ${applicationName} /opt && // move a pasta do app para o diretório opt--

sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && cra uma variavel de ambiente para o app--

echo -e '[Desktop Entry] Version=1.0 Name=${applicationName} Exec=/opt/${applicationName}/${newApplicationName} Icon=/opt/${applicationName}/resources/app/static/Icon.png Type=Application Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop && //cria um lançador de desktop



`
	cd ~ && nativefier --name ${newApplicationName} ${site} && cd ${newApplicationName}-linux-x64 && mv /home/${username}/${newApplicationName}-linux-x64 /home/${username}/${applicationName} && cd .. && sudo mv ${applicationName} /opt && sudo ln -sf /opt/${applicationName}/${newApplicationName} /usr/bin/${applicationName} && echo -e '[Desktop Entry] Version=1.0 Name=${applicationName} Exec=/opt/${applicationName}/${newApplicationName} Icon=/opt/${applicationName}/resources/app/static/Icon.png Type=Application Categories=Application' | sudo tee /usr/share/applications/${applicationName}.desktop &&`


`
