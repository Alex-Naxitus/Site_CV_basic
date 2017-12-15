

function myFunction() {
	
	var li0=document.createElement("li");
	
	var li1; 
	var li2 ;
	var li3 ; 
	
	var t = document.getElementById("title_ex").value;
	li1 = t;

	var d = document.getElementById("date_ex").value;
	li2 = d;
	
	var dt = document.getElementById("details_ex").value;
	li3 = dt;
	
	li0.append(t+" "+"("+d+")"+" : "+dt);
	
	document.getElementById("addform2").append(li0);
    
}

