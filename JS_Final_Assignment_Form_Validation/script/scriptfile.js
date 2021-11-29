function nameValidation()
{
    var pname = document.getElementById("name").value;
    if(pname == "")
    {
        document.getElementById("req").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-Z]+$/
        if(regx.test(pname))
        {
            document.getElementById("req").style.visibility="hidden";
        }
        else
        {
            document.getElementById("req").style.visibility="visible";
            document.getElementById("req").innerHTML="Invalid"
        }
    }
}
function fnameValidation()
{
    var fathername = document.getElementById("fname").value;
    if(fathername == "")
    {
        document.getElementById("reqfname").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-Z]+$/
        if(regx.test(fathername))
        {
            document.getElementById("reqfname").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqfname").style.visibility="visible";
            document.getElementById("reqfname").innerHTML="Invalid"
        }
    }
}
function emailValidation()
{
    var mail = document.getElementById("email").value;
    if(mail == "")
    {
        document.getElementById("reqmail").style.visibility="visible";
    }
    else
    {
        var regx= /^([a-zA-z0-9/.-])+@([a-zA-Z0-9])+.([a-z]{2,5})(.[a-z]{2,5})?$/
        if(regx.test(mail))
        {
            document.getElementById("reqmail").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqmail").style.visibility="visible";
            document.getElementById("reqmail").innerHTML="Invalid"
        }
    }
}
function mobNumValidation()
{
    var num = document.getElementById("mobno").value;
    if(num == "")
    {
        document.getElementById("reqnum").style.visibility="visible";
    }
    else
    {
        var regx= /^[6-9][0-9]{9}$/
        if(regx.test(num))
        {
            document.getElementById("reqnum").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqnum").style.visibility="visible";
            document.getElementById("reqnum").innerHTML="Invalid"
        }
    }
}
function caddressLineOneValidation()
{
    var caddresslineone = document.getElementById("caddressLineOne").value;
    if(caddresslineone == "")
    {
        document.getElementById("reqcaddresslineone").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(caddresslineone))
        {
            document.getElementById("reqcaddresslineone").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcaddresslineone").style.visibility="visible";
            document.getElementById("reqcaddresslineone").innerHTML="Invalid"
        }
    }
}
function caddressLineTwoValidation()
{
    var caddresslineTwo = document.getElementById("caddressLineTwo").value;
    if(caddresslineTwo == "")
    {
        document.getElementById("reqcaddresslinetwo").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(caddresslineTwo))
        {
            document.getElementById("reqcaddresslinetwo").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcaddresslinetwo").style.visibility="visible";
            document.getElementById("reqcaddresslinetwo").innerHTML="Invalid"
        }
    }
}
function cdistrictValidation()
{
    var cdistrict = document.getElementById("cdistrict").value;
    if(cdistrict == "")
    {
        document.getElementById("reqcdistrict").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(cdistrict))
        {
            document.getElementById("reqcdistrict").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcdistrict").style.visibility="visible";
            document.getElementById("reqcdistrict").innerHTML="Invalid"
        }
    }
}
function cpincodeValidation()
{
    var cpincode = document.getElementById("cpincode").value;
    if(cpincode == "")
    {
        document.getElementById("reqcpincode").style.visibility="visible";
    }
    else
    {
        var regx= /^6[0-9]{5}$/
        if(regx.test(cpincode))
        {
            document.getElementById("reqcpincode").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqcpincode").style.visibility="visible";
            document.getElementById("reqcpincode").innerHTML="Invalid"
        }
    }
}
function copy()
{
    document.getElementById("paddressLineOne").value = document.getElementById("caddressLineOne").value;
    document.getElementById("paddressLineTwo").value = document.getElementById("caddressLineTwo").value;
    document.getElementById("pdistrict").value = document.getElementById("cdistrict").value;
    document.getElementById("pstate").value = document.getElementById("cstate").value;
    document.getElementById("ppincode").value = document.getElementById("cpincode").value;
}
function paddressLineOneValidation()
{
    var paddresslineone = document.getElementById("paddressLineOne").value;
    if(paddresslineone == "")
    {
        document.getElementById("reqpaddresslineone").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(paddresslineone))
        {
            document.getElementById("reqpaddresslineone").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqpaddresslineone").style.visibility="visible";
            document.getElementById("reqpaddresslineone").innerHTML="Invalid"
        }
    }
}
function paddressLineTwoValidation()
{
    var paddresslineTwo = document.getElementById("paddressLineTwo").value;
    if(paddresslineTwo == "")
    {
        document.getElementById("reqpaddresslinetwo").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(paddresslineTwo))
        {
            document.getElementById("reqpaddresslinetwo").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqpaddresslinetwo").style.visibility="visible";
            document.getElementById("reqpaddresslinetwo").innerHTML="Invalid"
        }
    }
}
function pdistrictValidation()
{
    var pdistrict = document.getElementById("pdistrict").value;
    if(pdistrict == "")
    {
        document.getElementById("reqpdistrict").style.visibility="visible";
    }
    else
    {
        var regx= /^[a-zA-z]+$/
        if(regx.test(pdistrict))
        {
            document.getElementById("reqpdistrict").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqpdistrict").style.visibility="visible";
            document.getElementById("reqpdistrict").innerHTML="Invalid"
        }
    }
}
function ppincodeValidation()
{
    var ppincode = document.getElementById("ppincode").value;
    if(ppincode == "")
    {
        document.getElementById("reqppincode").style.visibility="visible";
    }
    else
    {
        var regx= /^6[0-9]{5}$/
        if(regx.test(ppincode))
        {
            document.getElementById("reqppincode").style.visibility="hidden";
        }
        else
        {
            document.getElementById("reqppincode").style.visibility="visible";
            document.getElementById("reqppincode").innerHTML="Invalid"
        }
    }
}
function dobValidation()
{
    var dob = document.getElementById("dob").value;
    if(dob == "")
    {
        document.getElementById("reqdob").style.visibility="visible";
    }
    else
    {
        var dobarr = dob.split('-');
        if(dobarr[0] == '01' || dobarr[0] == '03' || dobarr[0] == '05' || dobarr[0] == '07' || dobarr[0] == '08' || dobarr[0] == '10' || dobarr[0] == '12' || dobarr[0] == '1' || dobarr[0] == '3' || dobarr[0] == '5' || dobarr[0] == '7' || dobarr[0] == '8')
        {
            var regx= /^(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|3[0-1])-[0-9]{4}$/;  
            if(regx.test(dob))
            {
                document.getElementById("reqdob").style.visibility="hidden";
            }
            else
            {
                document.getElementById("reqdob").style.visibility="visible";
                document.getElementById("reqdob").innerHTML="Invalid"
            }
        }
        else if(dobarr[0] == '04' || dobarr[0] == '06' || dobarr[0] == '09' || dobarr[0] == '11' || dobarr[0] == '4' || dobarr[0] == '6' || dobarr[0] == '9')
        {
            var regx= /^(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9]|30)-[0-9]{4}$/;  
            if(regx.test(dob))
            {
                document.getElementById("reqdob").style.visibility="hidden";
            }
            else
            {
                document.getElementById("reqdob").style.visibility="visible";
                document.getElementById("reqdob").innerHTML="Invalid"
            }
        }
        else if(dobarr[0] == '02' || dobarr[0] == '2')
        {
            var regx= /^(0?[1-9]|1[0-2])-(0?[1-9]|[1-2][0-9])-[0-9]{4}$/;  
            if(regx.test(dob))
            {
                document.getElementById("reqdob").style.visibility="hidden";
            }
            else
            {
                document.getElementById("reqdob").style.visibility="visible";
                document.getElementById("reqdob").innerHTML="Invalid"
            }
        }
        else
        {
            document.getElementById("reqdob").style.visibility="visible";
            document.getElementById("reqdob").innerHTML="Invalid Format Try (MM-DD-YYYY)"
        }
    }
}
function uploadfile()
{
    if(!document.getElementById("upload").value)
    {
        document.getElementById("reqfile").style.visibility="visible";
    }
    else
    {
        document.getElementById("reqfile").style.visibility="hidden";
    }
}