const GetQuery = function(query) {
    let BeforeText = '<body id="content" style="margin-top: 56px;">';
    let AfterText = '<div id="goog-gt-tt"';
    let Text = ' ' + query;
    let This = Text.indexOf(BeforeText);
    if (This == 0) return '';
    This += BeforeText.length;
    RangeText = Text.indexOf(AfterText, This) - This;
    let ResGetQuery = Text.substr(This, RangeText);
 
     return ResGetQuery;
 }
 
 module.exports = {
   GetQuery
 }