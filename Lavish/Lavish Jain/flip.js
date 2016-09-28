(function(){
	
var Array = ['WE INNOVATE IDEAS','WE SHARE INTELLIGENCE','CHISPA FOR NEW TECHNOLOGIES'];
var element = document.getElementsByClassName('text')[0];
var Index=1;

var resetAnimation=function(){
	element.classList.remove('flip');
	
};
setInterval(function(){
	
	switch(Index){
		case 0:
		element.classList.add('flip');
		element.textContent=Array[Index];
	         Index=1;
		setTimeout(resetAnimation,1000);
		break;
		
		case 1:
		element.classList.add('flip');
		element.textContent=Array[Index];
		Index=2;
		setTimeout(resetAnimation,1000);
		break;
		
		case 2:
		
		element.classList.add('flip');
		element.textContent=Array[Index];
		  Index=0;
		setTimeout(resetAnimation,1000);
		break;
		
	}
},2000);
}());