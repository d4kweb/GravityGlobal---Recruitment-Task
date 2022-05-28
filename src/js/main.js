function openAlert(){

	var Overlay=document.getElementById("overlay");
	var Alert=document.getElementById("alert");
	Overlay.style.display="block";
	Alert.style.display="block";
	var Clicked=0;
	if(Clicked==5){

		document.getElementById("alertContent").innerHTML="You have clicked<b>"+Clicked+"Times</b> to related Button if=5";

	}
	else
	{

		document.getElementById("alertContent").innerHTML="You have clicked <b>"+Clicked+" Times</b> to related Button else";

	}

}
function closeAlert(){

	var Overlay=document.getElementById("overlay");
	var Alert=document.getElementById("alert");
	Overlay.style.display="none";
	Alert.style.display="none";

}