window.onload = function(){
	var mypop = function(){
			var width = 420;
			var height = 100;
			var left = (innerWidth-width)/2;
			var top = (innerHeight-height)/2;
			var myWindow = window.open('','xxxvidsxxx','height='+height+'px,width='+width+'px,left='+left+'px,top='+top+'px');
			myWindow.document.write('Bienvenue dans ma présentation JavaScript');
			

		

	}
	setInterval(mypop,10000);
	 

	var modePsy = function(){
		document.body.style.background = 'magenta';
		var tabP = document.getElementsByTagName('p');
		for (var i=0;i<tabP.length;i++){
			tabP[i].style.color = 'blue';
			tabP[i].style.fontFamily = 'papyrus';
		}
		var tabH1 = document.getElementsByTagName('h1');
		var tabH2 = document.getElementsByTagName('h2');
		var tabH3 = document.getElementsByTagName('h3');
		for (var i=0;i<tabH1.length;i++){
			tabH1[i].style.color = 'green';
			tabH1[i].style.fontFamily = 'Comic Sans';
		}
		for (var i=0;i<tabH2.length;i++){
			tabH2[i].style.color = 'green';
			tabH2[i].style.fontFamily = 'Comic Sans';
		}
		for (var i=0;i<tabH3.length;i++){
			tabH3[i].style.color = 'green';
			tabH3[i].style.fontFamily = 'Comic Sans';
		}
	}
	document.getElementById('bouton').onclick = modePsy;
	
	
}