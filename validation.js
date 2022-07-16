function validation()
{

var txt=document.getElementsByClassName("txt");
if (txt[0].value=="")
{
    alert("Fadlan Geli Macaamiilka Magaciisa...");
    return false;
}

if (txt[1].value=="")
{
    alert("Fadlan Geli Macaamiilka Numberkiisa...");
    return false;
}

if (isNaN(txt[1].value))
{
    alert("Waxaa Lagu Ogolyahay Number oo Kaliya...");
    txt[1].value="";
    return false;
}
if (txt[2].value=="none")
{
    alert("Fadlan Dooro Degmada...");
    return false;
}
alert("Xogt Ad gelisay Si Sax Ah Ayaa Lo Kaydiyey")
}