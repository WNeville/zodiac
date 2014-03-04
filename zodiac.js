/* horoscope() - print out to the user their sign, a picture of their sign, and a horoscope chosen
 * at random from an array of 9 horoscopes I have prepared */
function horoscope() {
  /* Storing variables from form for easier access */
  var formName = document.forms[0];
  var userName = formName.nameInput.value;
  var birthdayMonth = parseInt(formName.birthdayMonthInput.value);
  var birthdayDay = parseInt(formName.birthdayDayInput.value);
  var birthdayYear = parseInt(formName.birthdayYearInput.value);

  /* For a bit of efficiency, only continue the program if the date entered is valid */
  if(validDate(birthdayMonth, birthdayDay, birthdayYear)) {
    var horoscopeArray = new Array("Watch out for black cats today.",
                                   "Don't take the L train today.",
                                   "Today is a day to eat lots of pineapples.",
                                   "Be kind to those around you, the debt will be repayed.",
                                   "Pursue one of your hobbies today, work can wait.",
                                   "Don't forget to drink your Ovaltine.",
                                   "When in doubt, wear more deodorant.",
                                   "Today is a good day to learn JavaScript.",
                                   "You should consider a career in horoscope writing." 
                                  );
    /* Determine what sign they are */
    var zodiacSign = sign(birthdayMonth, birthdayDay);
    var age = calcAge(birthdayMonth, birthdayDay, birthdayYear);
    var article = "";
    /* Accounting for Aquarius and Aries to make sure we use proper English */ 
    if(zodiacSign.charAt(0) == 'A') {
      article = 'an';
    }
    else {
      article = 'a';
    }
    /* Compile results and HTML into a string, write it to horoscopeDiv (see index.html) */
    var s = "<h2>Results for " + userName + "</h2><p>You are " + age + " years old!<br>";
    s += "You are " + article + " " + zodiacSign + "!<br>"; 
    s += "<img src=\"../../images/zodiac/" + zodiacSign + ".jpg\" width=159px height=160px>"; 
    s += "<br>" + horoscopeArray[Math.floor(Math.random()*8)] + "</p>";
    if(birthdayMonth == 2 && birthdayDay == 29) {
      s += "<br><p>Congrats on being a leap year baby!</p>";
    }
    document.getElementById("horoscopeDiv").innerHTML = s;
  }
  /* If invalid date, display error message */
  else {
    var s1 = "<h2 class=\"text-muted\">Invalid date, please try again.</h2>";
    document.getElementById("horoscopeDiv").innerHTML = s1; 
  }
}

/* sign(birthdayMonth, birthdayDay) - Given month and day, determine sign of the Zodiac and return
 * as a String */
function sign(birthdayMonth, birthdayDay) {
  /* Switch statement by month, then if-else block in each case */ 
  switch(birthdayMonth) {
    case 1:
      if(birthdayDay < 21) {
        return "Capricorn";
      }
      else {
        return "Aquarius";
      }
      break;
    case 2:
      if(birthdayDay < 20) {
        return "Aquarius";
      }
      else {
        return "Pisces"; 
      }
      break;
    case 3:
      if(birthdayDay < 21) {
        return "Pisces";
      }
      else {
        return "Aries";
      }
      break;
    case 4:
      if(birthdayDay < 21) {
        return "Aries";
      }
      else {
        return "Taurus";
      }
      break;
    case 5:
      if(birthdayDay < 22) {
        return "Taurus";
      }
      else {
        return "Gemini";
      }
      break;
    case 6:
      if(birthdayDay < 22) {
        return "Gemini";
      }
      else {
        return "Cancer";
      }
      break;
    case 7:
      if(birthdayDay < 23) {
        return "Cancer";
      }
      else {
        return "Leo";
      }
      break;
    case 8:
      if(birthdayDay < 23) {
        return "Leo";
      }
      else {
        return "Virgo";
      }
      break;
    case 9:
      if(birthdayDay < 22) {
        return "Virgo";
      }
      else {
        return "Libra";
      }
      break;
    case 10:
      if(birthdayDay < 23) {
        return "Libra";
      }
      else {
        return "Scorpio";
      }
      break;
    case 11:
      if(birthdayDay < 22) {
        return "Scorpio";
      }
      else {
        return "Sagittarius";
      }
      break;
    case 12:
      if(birthdayDay < 22) {
        return "Sagittarius";
      }
      else {
        return "Capricorn";
      }
      break;
    default:
      return "Something went wrong...";
  }
}

/* validDate(birthdayMonth, birthdayDay) - given a birthday month and day, determine whether or not
* this is a valid date (i.e. February 31st returns false) */
function validDate(birthdayMonth, birthdayDay, birthdayYear) {

/* Not allowing negative years at all, giving benefit of the doubt for unreasonable years */ 
  if(birthdayYear < 1) {
    return false;
  }

  /* Special condition to check for leap year baby */
  if(birthdayMonth == 2 && birthdayDay == 29) {
    /* Leap years are divisible by 4 but not 100, OR they are divisible by 400 */
    if((birthdayYear % 4 == 0 && birthdayYear % 100 != 0) || birthdayYear % 400 == 0) {
      return true;
    }
    else {
      return false;
    }
  }

  var valid = true;

  /* Switch on valid months, make sure day is within acceptable range */
  switch(birthdayMonth) {
    case 1:
      if(birthdayDay > 31 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 2:
      if(birthdayDay > 29 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 3:
      if(birthdayDay > 31 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 4:
      if(birthdayDay > 30 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 5:
      if(birthdayDay > 31 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 6:
      if(birthdayDay > 30 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 7:
      if(birthdayDay > 31 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 8:
      if(birthdayDay > 31 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 9:
      if(birthdayDay > 30 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 10:
      if(birthdayDay > 31 || birhtdayDay < 1) {
        valid = false;
      }
      break;
    case 11:
      if(birthdayDay > 30 || birthdayDay < 1) {
        valid = false;
      }
      break;
    case 12:
      if(birthdayDay > 31 || birthdayDay < 1) {
        valid = false;
      }
      break;
    default:
      valid = false;
  }
  return valid;
}

/* calcAge(birthdayMonth, birthdayDay, birthdayYear) - given someone's DOB, calculate their
 * current age by comparing it to today using the Date class */
function calcAge(birthdayMonth, birthdayDay, birthdayYear) {
  var today = new Date();
  var currentDay = today.getDate();
  var currentMonth = (today.getMonth()) + 1;
  var currentYear = today.getFullYear();
  if(currentMonth > birthdayMonth) {
    return (currentYear - birthdayYear);  
  }
  else if(currentMonth == birthdayMonth) {
    if(currentDay >= birthdayDay) {
      return (currentYear - birthdayYear); 
    }
    else {
      return (currentYear - birthdayYear) - 1; 
    }
  }
  else {
    return (currentYear - birthdayYear) - 1;
  }
}
