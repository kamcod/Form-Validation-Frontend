$("#alerts").hide();
$("#alertf").hide();
///// Qualification Check
document.getElementById("qualification").addEventListener("click", myFunction);

function myFunction() {
    if(this.value=="Other"){
        document.getElementById("othershow").style.display= "block";
        
    }
    else{
        document.getElementById("othershow").style.display= "none";
    }
  
}

//////////////  Check date of birth
function checkDate(){
    var d = document.getElementById("day").value;
    var m = document.getElementById("month").value;
    var y = document.getElementById("year").value;
    
    
    
    var today = new Date();
    
    var todayDate = today.getDate();
    var todayMonth = today.getMonth() + 1;
    var todayYear = today.getFullYear();
    
    var age_y = todayYear - y;
    var age_m = todayMonth - m;
    var age_d = todayDate - d;
    
    
    if(age_d < 0){
    age_m -=1;
    age_d +=30;
    }
    if(age_m < 0){
    age_y -=1;
    age_m +=12;
    }
    
    if(age_y <18){
    document.getElementById("doberror").innerHTML = "* You are under age (age=" + age_y + ")";
    return false;
    }
    else{
        document.getElementById("doberror").innerHTML = "";
        return true;
    }
}

///////////// Uploading File Check
function fileValidation(){
    const doc = document.getElementById('doc');
  

    var docPath = document.getElementById("doc").value;
    var docFormat = /(\.pdf)$/i;
    var check = docPath.match(docFormat);
    if(!check){
        document.getElementById('docerror').innerHTML = "* Only PDF is allowed";
        document.getElementById("doc").value = "";
        return false;
    }else{
        if (doc.files.length > 0) {
            for (const i = 0; i <= doc.files.length - 1; i++) {
  
                const docsize = doc.files.item(i).size;
                const file = Math.round((docsize / 1024));
                // The size of the file.
                if (file > 2048) {
                    document.getElementById('docerror').innerHTML = "* Please enter a valid file. (maximum file size limit is 2MB)";
                    document.getElementById("doc").value = "";
                } else {
                    document.getElementById('docerror').innerHTML = "";
                    
                    document.getElementById('filesize').innerHTML = ' (File size = '
                    + file + ' KB)';
                    return true;
                    
                }
            }
         }
        }

}

//////////// On Submit Validation
function validation(){
    
    var name = document.getElementById('fname').value ;
    var email = document.getElementById('email').value ;
    var cnic = document.getElementById('cnic').value ;
    var cnumber = document.getElementById('cnumber').value ;


    var nameFormat = /^[A-Za-z ]+$/;
    var emailFormat = /^[A-Za-z._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
    var cnicFormat = /^[0-9]{13}$/;
    var cnumberFormat = /^[0-9]{7,20}$/;

    var check1 = name.match(nameFormat);
    var check2 = email.match(emailFormat);
    var check3 = cnic.match(cnicFormat);
    var check4 = cnumber.match(cnumberFormat);
    var check5 = document.getElementById("othershow").style.display;
    var checkmale = (document.getElementById("male").checked);
    var checkfmale = (document.getElementById("fmale").checked);

    var city = document.getElementById("city").value;
    var address = document.getElementById("address").value;
    var file = document.getElementById("doc").value;
    var other = document.getElementById("othershow").value;

 


            //////////////  When Everything works fine //////////////
    if(check1 && check2 && check3 && check4 && city && address && file && checkDate() && fileValidation() && (checkmale || checkfmale)){
        document.getElementById('nameerror').innerHTML = "";
        document.getElementById('emailerror').innerHTML = "";
        document.getElementById('cnicerror').innerHTML = "";
        document.getElementById('cnumbererror').innerHTML = "";
        document.getElementById('othererror').innerHTML = "";
        document.getElementById('cityerror').innerHTML = "";
        document.getElementById('adderror').innerHTML = "";
        document.getElementById('docerror').innerHTML = "";
        document.getElementById('gendererror').innerHTML = "";

        if(check5=="block"){
            if(other==""){
                document.getElementById('othererror').innerHTML = "* Please enter valid qualification";
                return false;
            }else{document.getElementById('othererror').innerHTML = "";}
            
            
        }
        
        setForm();

        //
        $("#alerts").show();
        $("#alertf").hide();
        window.open('formdata.htm', '_blank');
        
        
    }
    else{
        checkDate();
        if(!check1){
            document.getElementById('nameerror').innerHTML = "* Only alphabets are allowed";
        }else{document.getElementById('nameerror').innerHTML = "";}

        if(!check2){
            document.getElementById('emailerror').innerHTML = "* Please enter invalid Email";
        }else{document.getElementById('emailerror').innerHTML = "";}

        if(!check3){
            document.getElementById('cnicerror').innerHTML = "* Please enter 13-digit cnic without dashes (-)";
        }else{document.getElementById('cnicerror').innerHTML = "";}

        if(!check4){
            document.getElementById('cnumbererror').innerHTML = "* Please enter between (7-20) digits";
        }else{document.getElementById('cnumbererror').innerHTML = "";}

        if(check5=="block"){
            if(other==""){
                document.getElementById('othererror').innerHTML = "* Please enter valid qualification";
            }else{document.getElementById('othererror').innerHTML = "";}
            
        }
        if(city==""){
            document.getElementById('cityerror').innerHTML = "* Please enter city name";
        }else{document.getElementById('cityerror').innerHTML = "";}

        if(address==""){
            document.getElementById('adderror').innerHTML = "* Please enter your address";
        }else{document.getElementById('adderror').innerHTML = "";}

        if(file==""){
            document.getElementById('docerror').innerHTML = "* Please choose a file";
        }else{document.getElementById('docerror').innerHTML = "";}

        if(!checkmale && !checkfmale){
            document.getElementById('gendererror').innerHTML = "* Please specify gender"
        }else{document.getElementById('gendererror').innerHTML = "";}
        


        $("#alerts").hide();
        $("#alertf").show();
        //clear_all();
    return false;
    }
    

    
}


//////////////// Set Values

function setForm(){
    var inputName= document.getElementById("fname");
    localStorage.setItem("fname", inputName.value);

    var inputDay = document.getElementById("day");
    var inputMonth = document.getElementById("month");
    var inputYear = document.getElementById("year");
    localStorage.setItem("day", inputDay.value);
    localStorage.setItem("month", inputMonth.value);
    localStorage.setItem("year", inputYear.value);

    //////// Gender
    if(document.getElementById("male").checked){
        var inputGender = document.getElementById("male").value;
    }else if(document.getElementById("fmale").checked){
        var inputGender = document.getElementById("fmale").value;
    }
    localStorage.setItem("gender", inputGender);

    //////
    var inputEmail= document.getElementById("email");
    localStorage.setItem("email", inputEmail.value);

    var inputCnic= document.getElementById("cnic");
    localStorage.setItem("cnic", inputCnic.value);

    var inputContact= document.getElementById("cnumber");
    localStorage.setItem("cnumber", inputContact.value);

    var inputAddress= document.getElementById("address");
    localStorage.setItem("address", inputAddress.value);

    var inputCity= document.getElementById("city");
    localStorage.setItem("city", inputCity.value);

    //////// Extracting File Name
    var fullPath = document.getElementById('doc').value;

    if (fullPath) {
    var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
    var filename = fullPath.substring(startIndex);
    if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
    }
    
    localStorage.setItem("doc", filename);
    }

    /////////////
    var inputQuali = document.getElementById("qualification");
    localStorage.setItem("qualification", inputQuali.value);
    var inputOther = document.getElementById("othershow");
    localStorage.setItem("othershow", inputOther.value);

    




return true;
}

function getForm(){
    ///////Name
    var storedName = localStorage.getItem("fname");
    document.getElementById("storedname").innerHTML = storedName;

    ///////// Date of Birth
    var storedDay = localStorage.getItem("day");
    var storedMonth = localStorage.getItem("month");
    var storedYear = localStorage.getItem("year");
    document.getElementById("storeddob").innerHTML = storedDay + "/" + storedMonth + "/" + storedYear;

    ////////// Gender
    var storedGender = localStorage.getItem("gender");
    document.getElementById("storedgender").innerHTML = storedGender;


    //////// Email
    var storedEmail = localStorage.getItem("email");
    document.getElementById("storedemail").innerHTML = storedEmail;

    //////// CNIC
    var storedCnic = localStorage.getItem("cnic");
    document.getElementById("storedcnic").innerHTML = storedCnic;

    //////// Contact 
    var storedContact = localStorage.getItem("cnumber");
    document.getElementById("storedcontact").innerHTML = storedContact;

    //////// Address
    var storedAddress = localStorage.getItem("address");
    document.getElementById("storedaddress").innerHTML = storedAddress;

    ////////// City
    var storedCity = localStorage.getItem("city");
    document.getElementById("storedcity").innerHTML = storedCity;

    ////////// File
    var storedFile = localStorage.getItem("doc");
    document.getElementById("storedfile").innerHTML = storedFile;

    /////////// Qualification
    var storedQuali = localStorage.getItem("qualification");
    var storedOther = localStorage.getItem("othershow");
    if(storedQuali=="Other"){
        document.getElementById("storedquali").innerHTML = storedOther;
    }else{document.getElementById("storedquali").innerHTML = storedQuali;}


    
}


////////////////////////


 



