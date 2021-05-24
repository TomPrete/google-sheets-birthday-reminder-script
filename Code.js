// Your personal gmail address you wish to send the birthday reminder email to
let myEmail = 'ruthie.cohen@gmail.com'

// Create Trigger that executes readBirthday function everyday at 5 AM
function createTimeTriggerEveryDay() {
  ScriptApp.newTrigger("readBirthday").timeBased().atHour(5).everyDays(1).create();
}

// Get Birthday and Person from Sheet
function readBirthday() {
  let columnRange = SpreadsheetApp.getActiveSheet().getRange('C2:C50').getValues();
  Logger.log("here")
  for (let i = 0; i < columnRange.length; i++) {
    if (columnRange[i][0] !== '') {
      let birthDay = columnRange[i][0];
      let currentDate = new Date();
      let formattedBirthday = Utilities.formatDate(currentDate, 'America/Chicago', 'MM-dd');
      let formattedCurrentDate = Utilities.formatDate(birthDay, 'America/Chicago', 'MM-dd');
      if (formattedCurrentDate == formattedBirthday) {
        let friend = SpreadsheetApp.getActiveSheet().getRange(`A${i + 2}`).getValue();
        sendEmail(friend, formattedBirthday)
      }
    }
  }
}

// Send myself email reminder
function sendEmail(friend) {
  let subject = `BIRTHDAY REMINDER: ${friend}!`
  let message = `Today is ${friend}'s birthday!`;
  MailApp.sendEmail(myEmail, subject, message);
}
