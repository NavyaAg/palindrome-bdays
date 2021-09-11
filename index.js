var date=document.querySelector("#date");
var button=document.querySelector(".isBday");

function reverseDate(date){
   /* var inputDate=(date.value.replaceAll('-',''))*/
    var date_dig=date.split('');
    var reversedDate=date_dig.reverse().join('');  
   return reversedDate
}

function checkPalindrome(inputDate){
    
    return(inputDate==reverseDate(inputDate))
   
}

function convertToString(date){
    var dateInStr={day:'',month:'',year:''};

    if(date.day < 10){
        dateInStr.day = '0' + date.day;
       }
      else {
        dateInStr.day = date.day.toString();
      }
      
      if(date.month < 10){
        dateInStr.month = '0' + date.month;
      }
      else {
        dateInStr.month = date.month.toString();
      }
      
      dateInStr.year = date.year.toString();
      return dateInStr;

}
function generateDateFormats(date){
    var ddmmyyyy = date.day + date.month + date.year;
    var mmddyyyy = date.month + date.day + date.year;
    var yyyymmdd = date.year + date.month + date.day;
    var ddmmyy = date.day + date.month + date.year.slice(-2);
    var mmddyy = date.month + date.day + date.year.slice(-2);
    var yyddmm = date.year.slice(-2) + date.day + date.month;
  
    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yyddmm];
  }

    function checkPalindromeAllFormats(date){
    var dateFormatList = generateDateFormats(date);
    var palindromeList = [];

    for (var i = 0; i < dateFormatList.length; i++) {
    var result = checkPalindrome(dateFormatList[i]);
    palindromeList.push(result);
    }
    return palindromeList;
  }

var date={
    day:6,
    month:5,
    year:2023}

    var dateStr=convertToString(date);
console.log(checkPalindromeAllFormats(dateStr))