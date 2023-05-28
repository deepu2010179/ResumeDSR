let tablinks=document.getElementsByClassName("tab-links");
let tabcontents=document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(tabl of tablinks){
        tabl.classList.remove("active-link");
    }
    for(tabcon of tabcontents){
        tabcon.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

const seterror = (element,message)=>{
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');

};
const setSuccess = element =>{
    const inputControl = element.parentElement.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};
function valid(){
    let fname = document.getElementById("fn");
    let mname = document.getElementById("mn");
    let lname = document.getElementById("ln");
    let title = document.getElementById("tt");
    let address = document.getElementById("ad");
    let mobile = document.getElementById("mo");
    let email = document.getElementById("em");
    let link = document.getElementById("lk1");

    let c = 0;
    let n = /^[A-Za-z]+$/;
    let ad = /^[a-zA-Z0-9\s,'-]*$/;
    let mb = /^\d{10}$/;
    let em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
    if(fname.value == ''|| fname.value == null){
        seterror(fname,'*First Name is required');
    }else if(!n.test(fname.value)){
        seterror(fname,'*Enter alphabets only');
    }
    else{
        setSuccess(fname);
        c++;
    }

    if(mname.value == "" || mname.value == null || n.test(mname.value)){
        setSuccess(mname);
        c++;
    }
    else{
        seterror(mname,'*Enter alphabets only');
    }

    if(lname.value == ''|| lname.value == null){
        seterror(lname,'*Last Name is required');
    }else if(!n.test(lname.value)){
        seterror(lname,'*Enter alphabets only');
    }
    else{
        setSuccess(lname);
        c++;
    }

    if(title.value == ''|| title.value == null){
        seterror(title,'*Title is required');
    }else if(!n.test(title.value)){
        seterror(title,'*Enter alphabets only');
    }
    else{
        setSuccess(title);
        c++;
    }

    if(address.value == ''|| address.value == null){
        seterror(address,'*Address is required');
    }else if(!ad.test(address.value)){
        seterror(address,'*Enter valid Address');
    }
    else{
        setSuccess(address);
        c++;
    }

    if(mobile.value == ''|| mobile.value == null){
        seterror(mobile,'*Mobile No. is required');
    }else if(!mb.test(mobile.value)){
        seterror(mobile,'*Enter valid Mobile No.');
    }
    else{
        setSuccess(mobile);
        c++;
    }

    if(email.value == ''|| email.value == null){
        seterror(email,'*Email is required');
    }else if(!em.test(email.value)){
        seterror(email,'*Enter valid Email');
    }
    else{
        setSuccess(email);
        c++;
    }

    if(link.value == ''|| link.value == null){
        seterror(link,'*Link is required');
    }
    else{
        setSuccess(link);
        c++;
    }
    if(c==8){
        opentab('eductaion');
    }
};