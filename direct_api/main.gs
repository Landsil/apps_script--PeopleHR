// Menu options
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : 'PeopleHR',
    functionName : 'downloadPeopleHR'
  }];
  sheet.addMenu('Download', entries);
}

// Get PeopleHR token from properties
var scriptProperties = PropertiesService.getScriptProperties()
var peopleHR_key = scriptProperties.getProperty('hr_token');
