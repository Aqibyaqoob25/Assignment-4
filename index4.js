// 1.
let vowel_count = (str) => {
    let regExp = /[aeiou]/gi;
    return str.match(regExp).length;
  };
  let x = "The quick brown fox jumps over the lazy dog";
  console.log(vowel_count(x));
  
  // 2.
  
  let upperCase = (str) => {
    regExp = /^[A-Z]/;
    if (regExp.test(str)) {
      console.log("String's first character is uppercase " + str);
    } else {
      console.log("String's first character is not uppercase " + str);
    }
  };
  upperCase("Aqib");
  upperCase("aqib");
  
  //3.
  let is_creditCard = (str) => {
    regExp =
      /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;
  
    if (regExp.test(str)) {
      return true;
    } else {
      return false;
    }
  };
  console.log(is_creditCard("378282246310006"));
  console.log(is_creditCard("37828224630006"));
  
  // 4.
  let count_words = () => {
    str1 = document.getElementById("Inptxt").value;
    str1 = str1.replace(/(^\s*)|(\s*$)/gi, "");
    str1 = str1.replace(/[ ]{2,}/gi, " ");
    str1 = str1.replace(/\n /, "\n");
    document.getElementById("noofwords").value = str1.split(" ").length;
  };
  
  // 5.
  let valid_email = (str) => {
    let regExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (regExp.test(str)) {
      console.log("Valid email address! "+str);
    } else {
      console.log("You have entered an invalid email address! "+str);
    }
  }
  
  valid_email("me-Aqib@gamil.com");
  
  
  