// JavaScript Document
function toggleNav(){
	var nav=document.getElementById("nav");
	var subNav=document.getElementById("subnav");
	if(nav.style.display== "block"){
		nav.style.display="none";	
	} else{
		nav.style.display="block";	
	}
	if(subNav.style.display== "block"){
		subNav.style.display="none";	
	} else{
		subNav.style.display="block";	
	}
}