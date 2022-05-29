var Clicks=0;
function openAlert(){

	var Overlay=document.getElementById("overlay");
	var Alert=document.getElementById("alert");
	Overlay.style.display="block";
	Alert.style.display="block";
	Clicks +=1;
	if(Clicks==5){document.getElementById("alertContent").innerHTML='You have clicked more than <b>'+Clicks+' Times</b> to related button. <div class="button" onclick="resetCounter();">Reset your counter</div>';
	Clicks=0;}
	else{document.getElementById("alertContent").innerHTML="You have clicked <b>"+Clicks+" Times</b> to related button";}
}
function closeAlert(){

	var Overlay=document.getElementById("overlay");
	var Alert=document.getElementById("alert");
	Overlay.style.display="none";
	Alert.style.display="none";

}
function resetCounter(){

	Clicks=0;
	document.getElementById("alertContent").innerHTML="You are clicked 0 Times to related button. You have reset your counter correctly";

}