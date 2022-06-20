let validateForm=()=>
{
    let isFormSubmitted=ValidUsername();
    let FormValid=ValidEmail();
    let FormConfirmPassword=ValidConfirmPassword();
    let FormPassword=ValidPassword();



    if(isFormSubmitted &&FormValid &&FormConfirmPassword &&FormPassword)
    {
        alert("Form Is Submitted Successfully");
        return true;
    }
    else
    {
        //alert("Form Is Not Submitted Successfully");
        return false;
    }
}


//Username Validation

let ValidUsername=()=>
{
    let inputField=document.querySelector('#username');

    if(inputField.value==='')
    {
        applyColors(inputField,'orangered');
        displayErrorMsg("Please Enter UserName");
   
        return false;
    }
    else
    {
        applyColors(inputField,'limegreen');
        return true;
    }
}
//Email validation
let ValidEmail=()=>
{
    let inputfield=document.querySelector('#email');
    if(inputfield.value=='')
    {
        applyColors(inputfield,'orangered');
        displayErrorMsg('please enter email')
        return false;

    }
    else{
        applyColors(inputfield,'limegreen');
        return true;

    }
}
let ValidPassword=()=>
{
    let inputfield=document.querySelector('#password');
    if(inputfield.value=='')
    {
        applyColors(inputfield,'orangered');
        displayErrorMsg('please enter password')
        return false;

    }
    else{
        applyColors(inputfield,'limegreen');
        return true;

    }
}
let ValidConfirmPassword=()=>
{
    let passfield=document.querySelector('#password');
    let inputfield=document.querySelector('#c_password');
    if(inputfield.value==='')
    {
     
        
        
            console.log('hi')
        applyColors(inputfield,'orangered');
        displayErrorMsg('please enter  confirm password')
        return false;
    

    }
    else{
          if(inputfield.value!=passfield.value)
          {
            applyColors(inputfield,'orangered');
            displayErrorMsg('  confirm password is wrong')
            return false;

          }
        else
         {
           return true;
         }
     
         }


}

//Apply Colors For Fields
let applyColors=(field,color)=>
{
    field.style.border=`2px solid ${color}`;
    field.style.boxShadow=`0 0 10px ${color}`;
}

//display Error message

let displayErrorMsg=(message)=>
{
    let errorDivTag=document.querySelector('#error-msg');

    let h3Tag=document.createElement('h3');

    h3Tag.innerText=message;

    errorDivTag.appendChild(h3Tag);

    //removeErrMsg();

    setTimeout(removeErrMsg,2000);

}

//Remove Err Msg

let removeErrMsg=()=>
{
    document.querySelector('#error-msg').remove();
}