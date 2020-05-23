var y=['','']; 
var yc=['',''];
var x='';	
 var ct=0;
var tmp='';
var ctr=0;


function inputbox()
{  
	
	
	document.getElementById('ibox').style.backgroundColor=document.getElementById('colorselector').value;
	yc[ct]=document.getElementById('colorselector').value;



}

function clearibox(x)
{ ctr++;
	if ( ctr==1)
	{
		x.innerHTML="";
	}
}

var pin=0;
function store(z)
{	
	
	
	if(z==true)

	{   
		
		x+="<label><textarea class='others' rows=20 cols=100 Id='tmp"+ct+"'"+">"+y[ct]+"</textarea><br><br>";
		x+="<input type='button' value='edit' class='b' vibility='hidden'>"
		console.log(x);
		console.log(ct);
		pin++;
		document.getElementById('generate').innerHTML=x;
		for (var i=0;i<=ct;i++)
		{
			document.getElementById('tmp'+i).style.backgroundColor=yc[i];
		}
		document.getElementById('colorselector').value="#FFFFFF";
		document.getElementById('ibox').style.backgroundColor="#FFFFFF";
		document.getElementById('ibox').value="Type text here....";
		ctr=0;

		z=false;
		ct++;
		

		//create the new text neeche 
	}
	else 
	{
		y[ct]=document.getElementById('ibox').value;
		console.log(yc[ct]);
	}
	
}
