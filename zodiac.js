/* horoscope() - print out to the user their sign, a picture of their sign, and a horoscope chosen
 * at random from an array of 9 horoscopes I have prepared */
function horoscope() {
  /* Storing variables from form for easier access */
  var formName = document.forms[0];
  var userName = formName.nameInput.value;
  var birthdayMonth = parseInt(formName.birthdayMonthInput.value);
  var birthdayDay = parseInt(formName.birthdayDayInput.value);

  /* For a bit of efficiency, only continue the program if the date entered is valid */
  if(validDate(birthdayMonth, birthdayDay)) {
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
    var article = "";
    /* Accounting for Aquarius and Aries to make sure we use proper English */ 
    if(zodiacSign.charAt(0) == 'A') {
      article = 'an';
    }
    else {
      article = 'a';
    }
    /* Compile results and HTML into a string, write it to horoscopeDiv (see index.html) */
    s = "<h2>Results for " + userName + "</h2><p>You are " + article + " " + zodiacSign + "!<br>"; 
    s += "<img src=\"../../images/zodiac/" + zodiacSign + ".jpg\" width=159px height=160px>"; 
    s += "<br>" + horoscopeArray[Math.floor(Math.random()*8)] + "</p>";
    if(birthdayMonth == 2 && birthdayDay == 29) {
      s += "<br><p>Congrats on being a leap year baby!</p>";
    }
    document.getElementById("horoscopeDiv").innerHTML = s;
  }
  /* If invalid date, make horoscopeDiv blank again (i.e. clear results) */
  else {
    document.getElementById("horoscopeDiv").innerHTML = "&nbsp;";
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
function validDate(birthdayMonth, birthdayDay) {
  var valid = true;
  /* Only need to switch on the months that do not have 31 days */
  switch(birthdayMonth) {
    case 2:
      if(birthdayDay > 29) {
        valid = false;
      }
      break;
    case 4:
      if(birthdayDay > 30) {
        valid = false;
      }
      break;
    case 6:
      if(birthdayDay > 30) {
        valid = false;
      }
      break;
    case 9:
      if(birthdayDay > 30) {
        valid = false;
      }
      break;
    case 11:
      if(birthdayDay > 30) {
        valid = false;
      }
      break;
  }
  return valid;
}

