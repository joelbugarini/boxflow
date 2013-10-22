function init(){
	var box = document.getElementById("boxed");
	box.height = window.getComputedStyle(box).getPropertyValue('height');
	box.width = window.getComputedStyle(box).getPropertyValue('width');

	var notes = document.getElementsByClassName('note');
	var array;
	for(i = 0; i < notes.length; i++){
		var item = window.getComputedStyle(notes[i]);
		if(item.getPropertyValue('width')===60){
			array.push('1');
		}else{
			array.push('2');
		}
	}
	                                                                                                                                                    
	for(i = 0; i < notes.length; i++){
		var item = window.getComputedStyle(notes[i]);
		console.log(item.getPropertyValue('width'));


	}

}

setInterval(function(){
	var mywidth = document.getElementById("txtWidth").innerHTML;
	document.getElementById("txtWidth").innerHTML = window.innerWidth;
	document.getElementById("boxed").style.width = (mywidth - 10)+"px";
},100);
