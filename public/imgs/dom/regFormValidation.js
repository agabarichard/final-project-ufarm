const Validate = (event) => {
    let error = 0
    // pick inputs
    let firstName = document.getElementById("fname");
    let lastName = document.getElementById("lname")
    let email = document.getElementById("mail")
    let uniqueno = document.getElementById("uniquenumber")
    let female = document.getElementById("female");
    let male = document.getElementById("male");
    let english = document.getElementById("english");
    let luganda = document.getElementById("luganda");
    let password = document.getElementById("password");
    let role = document.getElementById("role");


    // pick error sections
    let firstNameError = document.getElementById("fnameErr")
    let lastNameError = document.getElementById("lnameErr")
    let mailError = document.getElementById("mailErr")
    let uniquenoError = document.getElementById("uniquenoErr")
    let genderError = document.getElementById("genderErr");
    let langError = document.getElementById("langErr");
    let passError = document.getElementById("passErr");
    let roleError = document.getElementById("roleErr");



    // validating first name input emptiness
    if(firstName.value == ""){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please first name can not be empty"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
     // validating first name for minimum length
    else if(firstName.value.length < 3){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be atleast 3 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    // validating first name for maximum length
    else if(firstName.value.length > 11){
        firstName.style.border = "1px solid red"
        firstNameError.innerHTML = "Please the first name must be less than 11 letters"
        firstNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    } else {
        firstName.style.border = "1px solid green"
        firstNameError.innerHTML = ""
    }


    // validating last name input emptiness
    if(lastName.value == ""){
        lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please last name can not be empty"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
     // validating last name for minimum length
    else if(lastName.value.length < 3){
        lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be atleast 3 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }
    // validating last name for maximum length
    else if(lastName.value.length > 11){
        lastName.style.border = "2px solid red"
        lastNameError.innerHTML = "Please the last name must be less than 11 letters"
        lastNameError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
        error++
    }

     // email validations
     const emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if (email.value == "") {
       email.style.border = "1px solid red"
       mailError.textContent = "Email is required";
       mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       error++
     }else if (!email.value.match(emailregex)) {
       email.style.border = "1px solid red"
       mailError.textContent = "Please put in a correct email address";
       mailError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
       error++
     }else {
       email.style.border = "1px solid green"
       mailError.textContent = "";
     }
     // unique number validations
     const unregex = /^AO-([0-9]{3})+$/;
     const ufregex = /^UF-([0-9]{3})+$/; 
     const foregex = /^FO-([0-9]{3})+$/
    if (uniqueno.value == "") {
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number is required";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else if(!(uniqueno.value.match(unregex) || uniqueno.value.match(ufregex) || uniqueno.value.match(foregex))){
      uniqueno.style.border = "1px solid red"
      uniquenoError.textContent = "Unique number must follow this formart AO-000";
      uniquenoError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else {
      uniqueno.style.border = "1px solid green"
      uniquenoError.textContent = "";
    }

    // gender validations
    // if (female.checked == false && male.checked==false) {
    if(!(female.checked && male.checked)){
        genderError.textContent = "Please select gender";
        genderError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      //   return false;
        error++
      }else {
        genderError.textContent = "";
      }
  
       // language validations
    //   if (english.checked == false && luganda.checked == false) {
    if(!(english.checked && luganda.checked)){
        langError.textContent = "Please select a language";
        langError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      //   return false;
        error++
      }else {
        langError.textContent = "";
    }
    // password validations
    // const passregex = /^[0-9a-zA-Z]+$/;
    const passregex=  /^[A-Za-z]\w{7,14}$/;
    if (password.value == "") {
      password.style.border = "1px solid red"
      passError.textContent = "Password is required";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }
    else if (!(password.value.match(passregex))) {
      password.style.border = "1px solid red"
      passError.textContent = "Password must be alphanumeric";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }
    else if (password.value.length < 5) {
      password.style.border = "1px solid red"
      passError.textContent = "Please the password must be atleast 5 characters";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else if (password.value.length > 15) {
      password.style.border = "1px solid red"
      passError.textContent = "Please the password must not be more than 15 characters";
      passError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }
    else {
      password.style.border = "1px solid green"
      passError.textContent = "";
    }
     // role validations
     if (role.value == "") {
      role.style.border = "1px solid red";
      roleError.textContent = "Please select a role";
      roleError.style = "color: red; font-size:11px; font-family:Arial, Helvetica, sans-serif;";
      error++
    }else {
      role.style.border = "1px solid green"
      roleError.textContent = "";
    }

    if(error > 0){
        event.preventDefault()
    }
}


