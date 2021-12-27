// function saveStudent(){
//     if (validateEducation()){
//         let student = {
//           fname: document.getElementById('fname').value,
//           lname: document.getElementById('lname').value,
//           mail: document.getElementById('mail').value,
//           msg: document.getElementById('msg').value
//       }
//       window.localStorage.setItem("student",JSON.stringify(student)); 
//       alert(`The following studen details were saved successfully:\n ${JSON.stringify(student, undefined, 2 )}`);
//       return true;
//     }else{
//       return false;
//     }
// }

function initiateForm(){
    const forms = document.getElementsByTagName("form")
    forms[0].addEventListener("submit", function(e){
        console.log("submit" + e);
        e.preventDefault();
        calc(e);
    })
}

const planA = {messeges:2000, giga:60, sms:200};
    const planB = {messeges:2400, giga:30, sms:350};
    const planC = {messeges:1800, giga:45, sms:800};
    const overprice = {messeges:0.5, giga:20, sms:0.35};
    let planAprice = 0
    let planBprice = 0
    let planCprice = 0
    let plan = 0
    let chosen = ""

function calc(){    
    console.log(document.getElementById("messeges").value + " , " + document.getElementById("giga").value+ " , " +document.getElementById("sms").value);
    if (document.getElementById("messeges").value < 0 || document.getElementById("giga").value < 0 || document.getElementById("sms").value < 0 || isNaN(document.getElementById("messeges").value) || isNaN(document.getElementById("giga").value) || isNaN(document.getElementById("sms").value)){
        return alert("Please use positive numbers")
    }
    
    let useage = {messeges:document.getElementById("messeges").value, giga:document.getElementById("giga").value, sms:document.getElementById("sms").value}

    if (useage.messeges>planA.messeges){
        planAprice += (useage.messeges-planA.messeges)*overprice.messeges
    }

    if (useage.giga>planA.giga){
        planAprice += (useage.giga-planA.giga)*overprice.giga
    }

    if (useage.sms>planA.sms){
        planAprice += (useage.sms-planA.sms)*overprice.sms
    }

    if (useage.messeges>planB.messeges){
        planBprice += (useage.messeges-planB.messeges)*overprice.messeges
    }

    if (useage.giga>planB.giga){
        planBprice += (useage.giga-planB.giga)*overprice.giga
    }

    if (useage.sms>planB.sms){
        planBprice += (useage.sms-planB.sms)*overprice.sms
    }

    if (useage.messeges>planC.messeges){
        planCprice += (useage.messeges-planC.messeges)*overprice.messeges
    }

    if (useage.giga>planC.giga){
        planCprice += (useage.giga-planC.giga)*overprice.giga
    }

    if (useage.sms>planC.sms){
        planCprice += (useage.sms-planC.sms)*overprice.sms
    }

    console.log("planA =" + planAprice + "planB =" + planBprice + "planC =" + planCprice )

    if (planAprice > planBprice){
        chosen = "planB"
        plan = planBprice
    }else {
        chosen = "planA"
        plan = planAprice
    }
    if (plan > planCprice){
        chosen = "planC"
        plan = planCprice
    }
    console.log(plan)
    let element = document.getElementById(chosen);
    element.classList.remove("results");
  element.classList.add("chosen");  
  return alert("The chosen plan would cost " + plan + 49.9)
}

// function getStudentFromLocalStorage(){
//   let studentStr = window.localStorage.getItem("student");
//   if (studentStr != null){
//     console.log(studentStr);
//     let studentObj = JSON.parse(studentStr);
//     document.getElementById('fname').value = studentObj.fname;
//     document.getElementById('lname').value = studentObj.lname;
//     document.getElementById('mail').value = studentObj.mail;
//     document.getElementById('msg').value = studentObj.msg;
    
//     setTimeout(function(){ 
//       document.getElementById('fname').value = "";
//       document.getElementById('lname').value = "";
//       document.getElementById('mail').value = "";
//       document.getElementById('msg').value = "";  
//       window.localStorage.removeItem("student");
//     }, 5000);
    
//   }

// }

// function validateEducation(){
//   let birthDate = new Date(document.getElementById('birthDate').value);
//   console.log("birthDate.getUTCFullYear() = " + birthDate.getUTCFullYear());
//   // diff = now (in ms since 1970) - birthday (in ms since 1970)
//   // diff = age in ms  
//   console.log("Date.now().getUTCFullYear() = " + new Date(Date.now()).getUTCFullYear());
//   var diff_ms = Date.now() - birthDate.getTime();
//   var age_dt = new Date(diff_ms); 
//   console.log("age_dt.getUTCFullYear() = " + age_dt.getUTCFullYear());

//   let age = Math.abs(age_dt.getUTCFullYear() - 1970);
//   console.log("age = " + age);

//   let education = parseInt(document.getElementById('education').value);
//   console.log("education = " + education);
//   let field = document.getElementById("education");
//   let error = document.getElementById("education_err");
//   if (education + 5 < age){
//     field.classList.remove("err");
//     error.innerHTML = "";  
//     return true;  
//   }else{
//     field.classList.add("err");
//     error.innerHTML = "חינוך פורמלי מתחיל מגיל 5";
//     return false;
//   }
// }
// function cleanEducationError(){
//   document.getElementById("education").classList.remove("err");
//   document.getElementById("education_err").innerHTML = "";  
// }

// function setSubmitButton(){
//   let inputElements = document.querySelectorAll("input[required]");
//   document.getElementById("submitForm").disabled = false;
//   inputElements.forEach((inputElement) => {
//     console.log("Checking value of " + inputElement.id)
//     if (inputElement.value == "")
//     {
//       document.getElementById("submitForm").disabled = true;
//     }
//   });
// }

// function initiateForm(){
//     //Limit maximum birth date to be 18 years ago
//     var today = new Date();
//     var dd = today.getDate();
//     var mm = today.getMonth() + 1; //January is 0!
//     var yyyy = today.getFullYear() - 18;

//     if (dd < 10) {
//       dd = '0' + dd;
//     }

//     if (mm < 10) {
//       mm = '0' + mm;
//     } 
      
    // maxBirthDate = yyyy + '-' + mm + '-' + dd;
    // console.log("Maximum birth date is: " + maxBirthDate);       
    //document.getElementById('fname').setAttribute("class","empty");
    //document.getElementById('fname').classList.add("empty");
    //document.getElementById('fname').style.setProperty("background", "#afc2e94d");
    //document.getElementById('fname').style.background = "#afc2e94d";
    
//     document.getElementById("submitForm").disabled = true;
//     let inputElements = document.querySelectorAll("input");
//     inputElements.forEach((inputElement) => {
//       inputElement.addEventListener("change", setSubmitButton);
//     });
// }

