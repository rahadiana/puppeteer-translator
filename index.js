const { GetContent } = require('./helpers/GetContent');

const Txt = "kabel laut adalah kabel yang sangat kuat, karena kabel tersebut dirancang untuk bertahan di kondisi extrim di laut dalam"
const Url = "https://www.gutenberg.org/cache/epub/68506/pg68506.txt"
const Sourcelang = 'id' //'auto'
const SourcelangUrl = 'auto'
const TargetLang = 'ru'

//GetContent(Url,SourcelangUrl,TargetLang).then(console.log).catch(console.error);
GetContent(Txt,Sourcelang,TargetLang).then(console.log).catch(console.error);
