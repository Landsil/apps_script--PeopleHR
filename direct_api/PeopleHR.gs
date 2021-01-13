/**
 * Lists users in PeopleHR
 * Create a spreedsheet, name one sheert "AUTO_HRdata" enable API's as needed.
 */
 
// Pulls data from PeopleHR
function downloadPeopleHR() {
  var URL = 'https://api.peoplehr.net/Employee';
  var payload = {
           'APIKey': peopleHR_key,
           'Action': 'GetAllEmployeeDetail',
           'IncludeLeavers': 'false'};
  var options = {
          "method" : "post",
          "payload" : JSON.stringify(payload),
        };
  var response = UrlFetchApp.fetch(URL, options);

// Assemble data
//  var params = response.getContentText();
//  var data = JSON.parse(params);
  
//  Logger.log(response)
//  var params = JSON.stringify(response);
//  Logger.log(params)
//  var data = JSON.parse(params);

  var dataAll = JSON.parse(response.getContentText());
  var data = dataAll.Result;

  //Logger.log(data)
    
  // Position in sheet
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var AUTO_HRdata = SpreadsheetApp.setActiveSheet(ss.getSheetByName('AUTO_HRdata'));
  
  // Clear content except header all the way to "K" column. TODO make it find cells with content and cleare those.
  AUTO_HRdata.getRange('A2:M').clear();
  
  // This decided where to post. Starts after header.
  var lastRow = Math.max(AUTO_HRdata.getRange(2, 1).getLastRow(),1);
    
  // Populate sheet
  for(var i = 0; i < data.length; i++ )
  {
// This data sit in an array in JSON, you have to specify all steps to get there. Put it in >> (things||"" << to post empty space if there is no data.
    var EmailId = (data[i] && data[i].EmailId && data[i].EmailId && data[i].EmailId.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 1).setValue(EmailId);
    var FirstName = (data[i] && data[i].FirstName && data[i].FirstName && data[i].FirstName.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 2).setValue(FirstName);
    var LastName = (data[i] && data[i].LastName && data[i].LastName && data[i].LastName.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 3).setValue(LastName);
    var JobRole = (data[i] && data[i].JobRole && data[i].JobRole && data[i].JobRole.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 4).setValue(JobRole);
    var Department = (data[i] && data[i].Department && data[i].Department && data[i].Department.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 5).setValue(Department);
    var ReportsToEmailAddress = (data[i] && data[i].ReportsToEmailAddress && data[i].ReportsToEmailAddress && data[i].ReportsToEmailAddress.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 6).setValue(ReportsToEmailAddress);
    var KnownAs = (data[i] && data[i].KnownAs && data[i].KnownAs && data[i].KnownAs.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 7).setValue(KnownAs);
    var OtherName = (data[i] && data[i].OtherName && data[i].OtherName && data[i].OtherName.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 8).setValue(OtherName);
    var EmployeeImage = (data[i] && data[i].EmployeeImage && data[i].EmployeeImage)||""; AUTO_HRdata.getRange(lastRow + i, 9).setValue(EmployeeImage);
    var Location = (data[i] && data[i].Location && data[i].Location && data[i].Location.DisplayValue)||""; AUTO_HRdata.getRange(lastRow + i, 6).setValue(Location);
  }
  
// This actually posts data when it's ready.
  AUTO_HRdata.sort(1);
SpreadsheetApp.flush();
}
