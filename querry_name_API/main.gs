//This project will require you to:
//1. make correctly named sheets for every function and configure headers.   TODO: fix initial sheet creation
//2. Correctly add all needed credentailas to project properties so they can be called from there. https://developers.google.com/apps-script/reference/properties

//*******************************************************************************************************************************************
// Start of code
// Create basic interface for manuall trigering sync ( normally it's expected you will switch on daily sync )
// https://script.google.com/home/triggers

// Menu options
function onOpen() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  var entries = [{
    name : 'PeopleHR',
    functionName : 'PeopleHR'
  }
                ];
  sheet.addMenu('Sync', entries);
}



// Get all tokens and codes from project properties
var scriptProperties = PropertiesService.getScriptProperties()
    peopleHR_key = scriptProperties.getProperty("hr_token")
    querry_name = scriptProperties.getProperty("querry_name");
