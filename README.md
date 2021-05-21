# Google Sheets Birthday Reminder Email Script

## Description
 This script automatically sends you an email reminding you of someones birthday.

 The script is used in Google Sheets' **Script editor**, which is located under the **Tools** in a Google Sheet.

## Instructions
1. In your Google Sheet make a header with 4 columns named `Name`, `Email`, `Birthday`, & `Phone Number` (we aren't using the Email or Phone number at this time). Also, the Birthday column values should be a Date type and formatted as  `MM-dd`. You can Title the Google Sheet anything you want.

Example:
| Name | Email | Birthday | Phone Number |
| ---- | ----- | -------- | ------------ |
| Carl Hungus | carl.hungus@gmail.com | 3/16 | 312-555-0018 |
| Charlie Kelly | king.of.rats@gmail.com | 5/18 | 267-555-1234 |

2. Under the **Tools** tab, open up the **Script editor**. You can Title the project anything you want.
3. Copy the code in the `Code.js` into the `Code.gs` file in the **Script editor**.
4. Run/Execute the function `createTimeTriggerEveryDay`. This will create a Time-based Trigger that will run the `readBirthday` function everyday at 5 AM (Note: You can also manually create a Time-based Trigger).
![](https://github.com/TomPrete/google-sheets-birthday-reminder-script/blob/main/images/trigger.png)

5. This script should run daily at 5 AM and email you if it's someones birthday!

![](https://github.com/TomPrete/google-sheets-birthday-reminder-script/blob/main/images/email.png)

## Additional Resources:
* [Googel Scripts Overview](https://developers.google.com/apps-script/overview)
* [Create Triggers Manually or Programmatically](https://developers.google.com/apps-script/guides/triggers/installable)
* [Sending Emails from Google Spreadsheets](https://developers.google.com/apps-script/articles/sending_emails)


