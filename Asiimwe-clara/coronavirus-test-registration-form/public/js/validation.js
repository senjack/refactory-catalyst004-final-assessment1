function validation(){
    var surName = document.entryForm.surname




    if (surname_validation(surName,1,16)) {}
    return true

}

function surname_validation(surName,mx,my){
    var letters = /^[A-Za-z]+$/;
    if(surName.value.length <=mx || surName.value.length >=my || !surName.value.match(letters)){
        surName.style.border = "2px solid red"
        document.getElementById('error1').style.display = "none"
        document.getElementById('error1').style.display = "block"
        surName.focus()
        return false
    }
    else{ 
        surName.style.border = "2px solid green"
        document.getElementById('error1').style.display = "none"
        return true
     }


     var surName = document.entryForm.surname




     if (givenname_validation(givenname,1,16)) {}
     return true
 
 }
 
 function Givenname_validation(givenname,mx,my){
     var letters = /^[A-Za-z]+$/;
     if(givenname.value.length <=mx || givenname.value.length >=my || !surName.value.match(letters)){
         givenname.style.border = "2px solid red"
         document.getElementById('error1').style.display = "none"
         document.getElementById('error1').style.display = "block"
         givenname.focus()
         return false
     }
     else{ 
         givenname.style.border = "2px solid green"
         document.getElementById('error1').style.display = "none"
         return true
      }
}

















