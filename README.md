
# puppeteer translator

Easy translate text or remote file (txt,md,html, or not binary file) to any languages. upto translate 30000 word for single request. 

Clone & instal (uncomment one of function to see results)

       git clone  https://github.com/rahadiana/puppeteer-translator.git
       cd puppeteer-translator
       npm i
       node index.js


in **index.js** you can see an example of how to use it, and for **remote files** it can only be translated if the response header can't have strict origin.

example command

    GetContent((Txt/remote file),Sourcelang,TargetLang).then(console.log).catch(console.error);

FOR

Txt/remote file = are your strings or remote file.

Sourcelang = base language from ***Txt/remote file*** you can set ***auto*** for automatic detect languages.

TargetLang = target languages for translate  ***dont set  auto*** for this.


**REFERENCE CODE LANGUAGES**
| | | 
| --- | --- | 
| CODE| NAME| 
| auto| Automatic detect language|
| af| Afrikans| 
| sq| Albania| 
| am| Amhara| 
| ar| Arab| 
| hy| Armenia| 
| az| Azerbaijan| 
| eu| Basque| 
| nl| Belanda| 
| be| Belarussia| 
| bn| Bengali| 
| bs| Bosnia| 
| bg| Bulgaria| 
| my| Burma| 
| ceb| Cebuano| 
| cs| Ceko| 
| ny| Chichewa| 
| zh-CN| China| 
| da| Denmark| 
| eo| Esperanto| 
| et| Estonia| 
| fa| Farsi| 
| fi| Finlandia| 
| fy| Frisia| 
| ga| Gaelig| 
| gd| Gaelik Skotlandia| 
| gl| Galisia| 
| ka| Georgia| 
| gu| Gujarati| 
| ha| Hausa| 
| haw| Hawaii| 
| hi| Hindi| 
| hmn| Hmong| 
| iw| Ibrani| 
| ig| Igbo| 
| id| Indonesia| 
| en| Inggris| 
| is| Islan| 
| it| Italia| 
| jw| Jawa| 
| ja| Jepang| 
| de| Jerman| 
| kn| Kannada| 
| ca| Katala| 
| kk| Kazak| 
| km| Khmer| 
| ky| Kirghiz| 
| ko| Korea| 
| co| Korsika| 
| ht| Kreol Haiti| 
| hr| Kroat| 
| ku| Kurdi| 
| lo| Laos| 
| la| Latin| 
| lv| Latvia| 
| lt| Lituania| 
| lb| Luksemburg| 
| hu| Magyar| 
| mk| Makedonia| 
| mg| Malagasi| 
| ml| Malayalam| 
| mt| Malta| 
| mi| Maori| 
| mr| Marathi| 
| ms| Melayu| 
| mn| Mongol| 
| ne| Nepal| 
| no| Norsk| 
| ps| Pashto| 
| pl| Polandia| 
| pt| Portugis| 
| fr| Prancis| 
| pa| Punjabi| 
| ro| Rumania| 
| ru| Rusia| 
| sm| Samoa| 
| sr| Serb| 
| st| Sesotho| 
| sn| Shona| 
| sd| Sindhi| 
| si| Sinhala| 
| sk| Slovakia| 
| sl| Slovenia| 
| so| Somali| 
| es| Spanyol| 
| su| Sunda| 
| sw| Swahili| 
| sv| Swensk| 
| tl| Tagalog| 
| tg| Tajik| 
| ta| Tamil| 
| te| Telugu| 
| th| Thai| 
| tr| Turki| 
| uk| Ukraina| 
| ur| Urdu| 
| uz| Uzbek| 
| vi| Vietnam| 
| cy| Wales| 
| xh| Xhosa| 
| yi| Yiddi| 
| yo| Yoruba| 
| el| Yunani| 
| zu| Zulu|
