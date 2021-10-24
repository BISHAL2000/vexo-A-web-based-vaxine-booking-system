      
      function display()
      {
        var u_name=document.getElementById("username").value;
        var vac_name=document.getElementById("vaccine").value;
        var dos_num=document.getElementById("dose").value;
        var v_date=document.getElementById("Date").value;
        var hos=document.getElementById("hospital").value;
        var v_slot=document.getElementById("slot").value;
        var e_mail=document.getElementById("mail").value;
        var phone_n=document.getElementById("phone").value;
        var Id=document.getElementById("proof").value;
        var Id_n=document.getElementById("idnumber").value;
        document.getElementById("result").innerHTML="Thank you "+u_name+" for using vaxo.You registered for "+vac_name+" dose "+dos_num+" on date "+v_date+" at "+hos+". Your slot is "+v_slot;
         alert("Thank you "+u_name+" for using vaxo.You registered for "+vac_name+" dose "+dos_num+" on date "+v_date+" at "+hos+". Your slot is "+v_slot);
         return false;
         }