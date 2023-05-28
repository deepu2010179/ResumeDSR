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
function evalidate(){
    let inst = document.getElementById("in");
    let board = document.getElementById("pr");
    let per = document.getElementById("sc");
    let sy = document.getElementById("sm");
    let address = document.getElementById("lc");
    let cy = document.getElementById("gy");

    let instt = document.getElementById("in1");
    let boardd = document.getElementById("pr1");
    let perr = document.getElementById("sc1");
    let syy = document.getElementById("sm1");
    let addresss = document.getElementById("lc1");
    let cyy = document.getElementById("gy1");

    let inst1 = document.getElementById("in2");
    let board1 = document.getElementById("pr2");
    let brn1 = document.getElementById("br2");
    let per1 = document.getElementById("sc2");
    let sy1 = document.getElementById("sm2");
    let address1 = document.getElementById("lc2");
    let cy1 = document.getElementById("gy2");

    let inst2 = document.getElementById("in3");
    let board2 = document.getElementById("pr3");
    let brn2 = document.getElementById("br3");
    let per2 = document.getElementById("sc3");
    let sy2 = document.getElementById("sm3");
    let address2 = document.getElementById("lc3");
    let cy2 = document.getElementById("gy3");

    let ad = /^[a-zA-Z0-9\s,'-]*$/;
    let pr = /^(0*100{1,1}\.?((?<=\.)0*)?%?$)|(^0*\d{0,2}\.?((?<=\.)\d*)?%?)$/;
    let n = /^[A-Za-z]+$/;
    let n1 = /^[A-Za-z\s.]+$/;
    let mb = /^\d{4}$/;
    let c1=0;
    if(inst.value == ''|| inst.value == null){
        seterror(inst,'*Institute Name is required');
    }else if(!n.test(inst.value)){
        seterror(inst,'*Enter alphabets only');
    }
    else{
        setSuccess(inst);
        c1++;
    }
    if(address.value == ''|| address.value == null){
        seterror(address,'*Location is required');
    }else if(!ad.test(address.value)){
        seterror(address,'*Enter valid Location');
    }
    else{
        setSuccess(address);
        c1++;
    }
    if(board.value == ''|| board.value == null){
        seterror(board,'*Board Name is required');
    }else if(!n.test(board.value)){
        seterror(board,'*Enter alphabets only');
    }
    else{
        setSuccess(board);
        c1++;
    }
    if(per.value == ''|| per.value == null){
        seterror(per,'*Percentage is required');
    }else if(!pr.test(per.value)){
        seterror(per,'*Enter valid percentage');
    }
    else{
        setSuccess(per);
        c1++;
    }
    if(sy.value == ''|| sy.value == null){
        seterror(sy,'*Start Year is required');
    }else if(!mb.test(sy.value)){
        seterror(sy,'*Enter valid Year');
    }
    else{
        setSuccess(sy);
        c1++;
    }
    if(cy.value == ''|| cy.value == null){
        seterror(cy,'*Completion Year is required');
    }else if(!mb.test(cy.value)){
        seterror(cy,'*Enter valid Year');
    }
    else{
        setSuccess(cy);
        c1++;
    }

    if(instt.value == ''|| instt.value == null){
        seterror(instt,'*Institute Name is required');
    }else if(!n.test(instt.value)){
        seterror(instt,'*Enter alphabets only');
    }
    else{
        setSuccess(instt);
        c1++;
    }
    if(addresss.value == ''|| addresss.value == null){
        seterror(addresss,'*Location is required');
    }else if(!ad.test(addresss.value)){
        seterror(addresss,'*Enter valid Location');
    }
    else{
        setSuccess(addresss);
        c1++;
    }
    if(boardd.value == ''|| boardd.value == null){
        seterror(boardd,'*Board Name is required');
    }else if(!n.test(boardd.value)){
        seterror(boardd,'*Enter alphabets only');
    }
    else{
        setSuccess(boardd);
        c1++;
    }
    if(perr.value == ''|| perr.value == null){
        seterror(perr,'*Percentage is required');
    }else if(!pr.test(perr.value)){
        seterror(perr,'*Enter valid percentage');
    }
    else{
        setSuccess(perr);
        c1++;
    }
    if(syy.value == ''|| syy.value == null){
        seterror(syy,'*Start Year is required');
    }else if(!mb.test(syy.value)){
        seterror(syy,'*Enter valid Year');
    }
    else{
        setSuccess(syy);
        c1++;
    }
    if(cyy.value == ''|| cyy.value == null){
        seterror(cyy,'*Completion Year is required');
    }else if(!mb.test(cyy.value)){
        seterror(cyy,'*Enter valid Year');
    }
    else{
        setSuccess(cyy);
        c1++;
    }



    
    if(inst1.value == ''|| inst1.value == null){
        seterror(inst1,'*Institute Name is required');
    }else if(!n.test(inst1.value)){
        seterror(inst1,'*Enter alphabets only');
    }
    else{
        setSuccess(inst1);
        c1++;
    }
    if(address1.value == ''|| address1.value == null){
        seterror(address1,'*Location is required');
    }else if(!ad.test(address1.value)){
        seterror(address1,'*Enter valid Location');
    }
    else{
        setSuccess(address1);
        c1++;
    }
    if(board1.value == ''|| board1.value == null){
        seterror(board1,'*Cource Name is required');
    }else if(!n1.test(board1.value)){
        seterror(board1,'*Enter alphabets only');
    }
    else{
        setSuccess(board1);
        c1++;
    }
    if(per1.value == ''|| per1.value == null){
        seterror(per1,'*Percentage is required');
    }else if(!pr.test(per1.value)){
        seterror(per1,'*Enter valid percentage');
    }
    else{
        setSuccess(per1);
        c1++;
    }
    if(sy1.value == ''|| sy1.value == null){
        seterror(sy1,'*Start Year is required');
    }else if(!mb.test(sy1.value)){
        seterror(sy1,'*Enter valid Year');
    }
    else{
        setSuccess(sy1);
        c1++;
    }
    if(cy1.value == ''|| cy1.value == null){
        seterror(cy1,'*Completion Year is required');
    }else if(!mb.test(cy1.value)){
        seterror(cy1,'*Enter valid Year');
    }
    else{
        setSuccess(cy1);
        c1++;
    }
    if(brn1.value == ''|| brn1.value == null){
        seterror(brn1,'*Branch is required');
    }else if(!n.test(brn1.value)){
        seterror(brn1,'*Enter alphabets only');
    }
    else{
        setSuccess(brn1);
        c1++;
    }

    if(inst2.value == "" || inst2.value == null || n.test(inst2.value)){
        setSuccess(inst2);
        c1++;
    }
    else{
        seterror(inst2,'*Enter alphabets only');
    }
    if(address2.value == "" || address2.value == null || ad.test(address2.value)){
        setSuccess(address2);
        c1++;
    }
    else{
        seterror(address2,'*Enter valid location');
    }
    if(board2.value == "" || board2.value == null || n1.test(board2.value)){
        setSuccess(board2);
        c1++;
    }
    else{
        seterror(board2,'*Enter alphabets only');
    }
    if(per2.value == "" || per2.value == null || pr.test(per2.value)){
        setSuccess(per2);
        c1++;
    }
    else{
        seterror(per2,'*Enter valid percentage');
    }
    if(sy2.value == "" || sy2.value == null || mb.test(sy2.value)){
        setSuccess(sy2);
        c1++;
    }
    else{
        seterror(sy2,'*Enter valid year');
    }
    if(cy2.value == "" || cy2.value == null || mb.test(cy2.value)){
        setSuccess(cy2);
        c1++;
    }
    else{
        seterror(cy2,'*Enter valid year');
    }
    if(brn2.value == "" || brn2.value == null || n.test(brn2.value)){
        setSuccess(brn2);
        c1++;
    }
    else{
        seterror(brn2,'*Enter alphabets only');
    }
    if(c1==26){
        opentab('experience');
    }
};

function exvalidate(){
    let cn = document.getElementById("cn");
    let cl = document.getElementById("loc");
    let jt = document.getElementById("jt");
    let ds = document.getElementById("desc");
    let sd = document.getElementById("st");
    let ed = document.getElementById("ed");

    let cn1 = document.getElementById("cn1");
    let cl1 = document.getElementById("loc1");
    let jt1 = document.getElementById("jt1");
    let ds1 = document.getElementById("desc1");
    let sd1 = document.getElementById("st1");
    let ed1 = document.getElementById("ed1");

    let cn2 = document.getElementById("cn2");
    let cl2 = document.getElementById("loc2");
    let jt2 = document.getElementById("jt2");
    let ds2 = document.getElementById("desc2");
    let sd2 = document.getElementById("st2");
    let ed2 = document.getElementById("ed2");

    let c2=0;
    let n = /^[A-Za-z]+$/;
    let ad = /^[a-zA-Z0-9\s,'-]*$/;
    let d = /^(3[01]|[12][0-9]|0?[1-9])(\/|-)(1[0-2]|0?[1-9])\2([0-9]{2})?[0-9]{2}$/;
    let dsc = /^[a-zA-Z0-9\s,'-./]*$/;

    if(cn.value == ''|| cn.value == null){
        seterror(cn,'*Company Name is required');
    }else if(!n.test(cn.value)){
        seterror(cn,'*Enter alphabets only');
    }
    else{
        setSuccess(cn);
        c2++;
    }

    if(cl.value == ''|| cl.value == null){
        seterror(cl,'*Location is required');
    }else if(!ad.test(cl.value)){
        seterror(cl,'*Enter valid Location');
    }
    else{
        setSuccess(cl);
        c2++;
    }
    if(jt.value == ''|| jt.value == null){
        seterror(jt,'*Title is required');
    }else if(!n.test(jt.value)){
        seterror(jt,'*Enter alphabets only');
    }
    else{
        setSuccess(jt);
        c2++;
    }

    if(ds.value == ''|| ds.value == null){
        seterror(ds,'*Description is required');
    }else if(!dsc.test(ds.value)){
        seterror(ds,'*Enter valid Description');
    }
    else{
        setSuccess(ds);
        c2++;
    }

    if(sd.value == ''|| sd.value == null){
        seterror(sd,'*Date is required');
    }else if(!d.test(sd.value)){
        seterror(sd,'*Enter valid Date');
    }
    else{
        setSuccess(sd);
        c2++;
    }

    if(ed.value == ''|| ed.value == null){
        seterror(ed,'*Date is required');
    }else if(!d.test(ed.value)){
        seterror(ed,'*Enter valid date');
    }
    else{
        setSuccess(ed);
        c2++;
    }  



    if(cn1.value == ''|| cn1.value == null || n.test(cn1.value) ){
        setSuccess(cn1);
        c2++;
    }else{
        seterror(cn1,'*Enter alphabets only');
    }
    

    if(cl1.value == ''|| cl1.value == null || ad.test(cl1.value)){
        setSuccess(cl1);
        c2++;
    }   
    else{
        seterror(cl1,'*Enter valid Location');
    }
    if(jt1.value == ''|| jt1.value == null || n.test(jt1.value)){
        setSuccess(jt1);
        c2++;
    }
    else{
        seterror(jt1,'*Enter alphabets only');   
    }

    if(ds1.value == ''|| ds1.value == null || dsc.test(ds1.value) ){
        setSuccess(ds1);
        c2++;
    }
    else{
        seterror(ds1,'*Enter valid Description');  
    }

    if(sd1.value == ''|| sd1.value == null || d.test(sd1.value)){
        setSuccess(sd1);
        c2++;

    }
    else{
        seterror(sd1,'*Enter valid Date');
    }

    if(ed1.value == ''|| ed1.value == null || d.test(ed1.value)){
        setSuccess(ed1);
        c2++;
    }
    else{
        seterror(ed1,'*Enter valid date');
    }

    if(cn2.value == ''|| cn2.value == null || n.test(cn2.value) ){
        setSuccess(cn2);
        c2++;
    }else{
        seterror(cn2,'*Enter alphabets only');
    }
    

    if(cl2.value == ''|| cl2.value == null || ad.test(cl2.value)){
        setSuccess(cl2);
        c2++;
    }   
    else{
        seterror(cl2,'*Enter valid Location');
    }
    if(jt2.value == ''|| jt2.value == null || n.test(jt2.value)){
        setSuccess(jt2);
        c2++;
    }
    else{
        seterror(jt2,'*Enter alphabets only');   
    }

    if(ds2.value == ''|| ds2.value == null || dsc.test(ds2.value) ){
        setSuccess(ds2);
        c2++;
    }
    else{
        seterror(ds2,'*Enter valid Description');  
    }

    if(sd2.value == ''|| sd2.value == null || d.test(sd2.value)){
        setSuccess(sd2);
        c2++;

    }
    else{
        seterror(sd2,'*Enter valid Date');
    }

    if(ed2.value == ''|| ed2.value == null || d.test(ed2.value)){
        setSuccess(ed2);
        c2++;
    }
    else{
        seterror(ed2,'*Enter valid date');
    }
    if(c2==18){
        opentab('skillsets');
    }
};

