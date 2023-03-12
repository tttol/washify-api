function doGet() {
    if (!canExecuteApi(Session.getActiveUser().getEmail())) {
        return ContentService.createTextOutput("You are not allowed to execute API. [" + executor + "]");
    }
    const spreadSheet = SpreadsheetApp.openByUrl(ScriptProperties.getProperty("SPREAD_SHEET_URL"));
    const sheet = spreadSheet.getSheetByName(ScriptProperties.getProperty("SHEET_NAME"));
    const data = sheet.getDataRange().getValues();

    return ContentService.createTextOutput(data);
}

const canExecuteApi = (executor) => {
    const allowedUsers = [
        ScriptProperties.getProperty("ALLOWED_USER_01"),
        ScriptProperties.getProperty("ALLOWED_USER_02"), 
        ScriptProperties.getProperty("ALLOWED_USER_03")
      ];
    return allowedUsers.includes(executor);
}