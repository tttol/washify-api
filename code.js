function doGet() {
    // return "plain text return!" // ←スクリプトが完了しましたが、返された値はサポートされている戻り値の型ではありませんでした。
    const allowedUsers = [
        ScriptProperties.getProperty("ALLOWED_USER_01"),
        ScriptProperties.getProperty("ALLOWED_USER_02"), 
        ScriptProperties.getProperty("ALLOWED_USER_03")
      ];
    const executor = Session.getActiveUser().getEmail();
    if (!allowedUsers.includes(executor)) {
        return ContentService.createTextOutput("You are not allowed to execute API. [" + executor + "]");
    }
    return ContentService.createTextOutput("Hello washify-api!!");
}