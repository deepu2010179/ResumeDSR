
/*-----------------------------temp1---------------------------------*/

function generatere(){
    document.getElementById("fname").innerHTML=document.getElementById("fn").value;
    document.getElementById("mname").innerHTML=document.getElementById("mn").value;
    document.getElementById("lname").innerHTML=document.getElementById("ln").value;
    document.getElementById("title").innerHTML=document.getElementById("tt").value;
    document.getElementById("pro").innerHTML=document.getElementById("pl").value;
    document.getElementById("lib").innerHTML=document.getElementById("lf").value;
    document.getElementById("tls").innerHTML=document.getElementById("tp").value;
    document.getElementById("db").innerHTML=document.getElementById("dbs").value;
    document.getElementById("mbn").innerHTML=document.getElementById("mo").value;
    document.getElementById("eml").innerHTML=document.getElementById("em").value;
    document.getElementById("adr").innerHTML=document.getElementById("ad").value;
    document.getElementById("links").innerHTML=document.getElementById("lk1").value;

    document.getElementById("dgr").innerHTML=document.getElementById("pr").value;
    document.getElementById("sty").innerHTML=document.getElementById("sm").value;
    document.getElementById("edy").innerHTML=document.getElementById("gy").value;
    document.getElementById("scr").innerHTML=document.getElementById("sc").value;
    document.getElementById("clg").innerHTML=document.getElementById("in").value;
    document.getElementById("lcn").innerHTML=document.getElementById("lc").value;

    document.getElementById("dgr1").innerHTML=document.getElementById("pr1").value;
    document.getElementById("sty1").innerHTML=document.getElementById("sm1").value;
    document.getElementById("edy1").innerHTML=document.getElementById("gy1").value;
    document.getElementById("scr1").innerHTML=document.getElementById("sc1").value;
    document.getElementById("clg1").innerHTML=document.getElementById("in1").value;
    document.getElementById("lcn1").innerHTML=document.getElementById("lc1").value;

    document.getElementById("dgr2").innerHTML=document.getElementById("pr2").value;
    document.getElementById("sty2").innerHTML=document.getElementById("sm2").value;
    document.getElementById("edy2").innerHTML=document.getElementById("gy2").value;
    document.getElementById("scr2").innerHTML=document.getElementById("sc2").value;
    document.getElementById("clg2").innerHTML=document.getElementById("in2").value;
    document.getElementById("lcn2").innerHTML=document.getElementById("lc2").value;
    document.getElementById("brn2").innerHTML=document.getElementById("br2").value;

    document.getElementById("dgr3").innerHTML=document.getElementById("pr3").value;
    document.getElementById("sty3").innerHTML=document.getElementById("sm3").value;
    document.getElementById("edy3").innerHTML=document.getElementById("gy3").value;
    document.getElementById("scr3").innerHTML=document.getElementById("sc3").value;
    document.getElementById("clg3").innerHTML=document.getElementById("in3").value;
    document.getElementById("lcn3").innerHTML=document.getElementById("lc3").value;
    document.getElementById("brn3").innerHTML=document.getElementById("br3").value;

    document.getElementById("ayr").innerHTML=document.getElementById("jtp").value;
    document.getElementById("an").innerHTML=document.getElementById("dpa").value;
    document.getElementById("insn").innerHTML=document.getElementById("pnp").value;

    document.getElementById("ayr1").innerHTML=document.getElementById("jtp1").value;
    document.getElementById("an1").innerHTML=document.getElementById("dpa1").value;
    document.getElementById("insn1").innerHTML=document.getElementById("pnp1").value;

    document.getElementById("ayr2").innerHTML=document.getElementById("jtp2").value;
    document.getElementById("an2").innerHTML=document.getElementById("dpa2").value;
    document.getElementById("insn2").innerHTML=document.getElementById("pnp2").value;

    document.getElementById("exs").innerHTML=document.getElementById("st").value;
    document.getElementById("exd").innerHTML=document.getElementById("ed").value;
    document.getElementById("comp").innerHTML=document.getElementById("cn").value;
    document.getElementById("col").innerHTML=document.getElementById("loc").value;
    document.getElementById("jot").innerHTML=document.getElementById("jt").value;
    document.getElementById("jod").innerHTML=document.getElementById("desc").value;

    document.getElementById("exs1").innerHTML=document.getElementById("st1").value;
    document.getElementById("exd1").innerHTML=document.getElementById("ed1").value;
    document.getElementById("comp1").innerHTML=document.getElementById("cn1").value;
    document.getElementById("col1").innerHTML=document.getElementById("loc1").value;
    document.getElementById("jot1").innerHTML=document.getElementById("jt1").value;
    document.getElementById("jod1").innerHTML=document.getElementById("desc1").value;

    document.getElementById("exs2").innerHTML=document.getElementById("st2").value;
    document.getElementById("exd2").innerHTML=document.getElementById("ed2").value;
    document.getElementById("comp2").innerHTML=document.getElementById("cn2").value;
    document.getElementById("col2").innerHTML=document.getElementById("loc2").value;
    document.getElementById("jot2").innerHTML=document.getElementById("jt2").value;
    document.getElementById("jod2").innerHTML=document.getElementById("desc2").value;

    document.getElementById("pron").innerHTML=document.getElementById("pn").value;
    document.getElementById("tus").innerHTML=document.getElementById("jtt").value;
    document.getElementById("prol").innerHTML=document.getElementById("git").value;
    document.getElementById("prod").innerHTML=document.getElementById("dp").value;

    document.getElementById("pron1").innerHTML=document.getElementById("pn1").value;
    document.getElementById("tus1").innerHTML=document.getElementById("jtt1").value;
    document.getElementById("prol1").innerHTML=document.getElementById("git1").value;
    document.getElementById("prod1").innerHTML=document.getElementById("dp1").value;

    document.getElementById("pron2").innerHTML=document.getElementById("pn2").value;
    document.getElementById("tus2").innerHTML=document.getElementById("jtt2").value;
    document.getElementById("prol2").innerHTML=document.getElementById("git2").value;
    document.getElementById("prod2").innerHTML=document.getElementById("dp2").value;

    document.getElementById("certn").innerHTML=document.getElementById("pnn").value;
    document.getElementById("certc").innerHTML=document.getElementById("dpp").value;
    document.getElementById("certl").innerHTML=document.getElementById("jts").value;

    document.getElementById("certn1").innerHTML=document.getElementById("pnn1").value;
    document.getElementById("certc1").innerHTML=document.getElementById("dpp1").value;
    document.getElementById("certl1").innerHTML=document.getElementById("jts1").value;

    document.getElementById("certn2").innerHTML=document.getElementById("pnn2").value;
    document.getElementById("certc2").innerHTML=document.getElementById("dpp2").value;
    document.getElementById("certl2").innerHTML=document.getElementById("jts2").value;
    document.getElementById("res-form").style.display="none";
    document.getElementById("res-temp").style.display="block";
    document.getElementById("res-form").style.display="none";
    document.getElementById("download").style.display="block";
}

window.onload=function(){
    document.getElementById("download").addEventListener("click",()=>{
        const restemp=this.document.getElementById("res-temp");
        console.log(window);
        console.log(restemp);
        var opt={
            margin: 0,
            filename: 'resume.pdf',
            image: {type: 'jpeg', quality: 0.98},
            html2canvas: {scale: 2},
            jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
        };
        html2pdf().from(restemp).set(opt).save();
    })
}



