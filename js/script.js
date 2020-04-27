//"use strict";

console.log('Script is online');


let tabA = document.querySelectorAll('.tab-a');

for (let i of tabA){
	i.addEventListener('mouseover',function(event){
		let r = event.target.closest('div').querySelector('.after');
		r.style.height = `${15}px`;
		r.style.top = `${-9}px`;
	});
	i.addEventListener('mouseout',function(event){
		let r = event.target.closest('div').querySelector('.after');
		r.style.height = `${6}px`;
		r.style.top = `${1}px`;
	});
}
let fstA = document.querySelectorAll('.tab-window-block-a');

for(let i of fstA){
	i.addEventListener('mouseover', function (event) {
		i.classList.add('fstA-hovered')
	});
	i.addEventListener('mouseout', function (event) {
		i.classList.remove('fstA-hovered')
	});
}


let tabs = document.querySelectorAll('.tab-tab');
let tabWindow1 = document.querySelector('.tab-window1');
let tabWindow2 = document.querySelector('.tab-window2');
let tabWindow3 = document.querySelector('.tab-window3');
for (let i of tabs){
	i.addEventListener('click', function(event){
		for(let i of tabs){
			i.classList.remove('active-tab');
		}
		event.target.closest('div').classList.add('active-tab');

		if (event.target.closest('div').classList.contains('tab1')){
			
			tabWindow2.classList.remove('active-window');
			tabWindow3.classList.remove('active-window');
			tabWindow1.classList.add('active-window');
		}
		if (event.target.closest('div').classList.contains('tab2')){
			tabWindow1.classList.remove('active-window');
			tabWindow3.classList.remove('active-window');
			tabWindow2.classList.add('active-window');
		}
		if (event.target.closest('div').classList.contains('tab3')){
			tabWindow1.classList.remove('active-window');
			tabWindow2.classList.remove('active-window');
			tabWindow3.classList.add('active-window');
		}
	})
}

let tabWindowBlock = document.querySelectorAll('.tab-window-block');
for (let i of tabWindowBlock){
	i.addEventListener('mouseover', function(event){
		event.target.closest('.tab-window-block').classList.add('tab-window-block-active');
	});
	i.addEventListener('mouseout', function(event){
		event.target.closest('.tab-window-block').classList.remove('tab-window-block-active');
	});
}
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################

let lfst = 0;

let button2 = document.querySelector('.bt1');
let button1 = document.querySelector('.bt2');
let slider = document.querySelector('.imges');
let lastMove = '';



slider.style.left = `${0}px`;

button1.addEventListener('click', function(event){
	slider.classList.add('trans');
	lfst = lfst - 300;
	slider.style.left = `${lfst}px`;
	lastMove = 'left';
	setTimeout(transitioned, 500);
});

button2.addEventListener('click', function(event){
	slider.classList.add('trans');
	lfst = lfst + 300;
	slider.style.left = `${lfst}px`;
	lastMove = 'right';	
	setTimeout(transitioned, 500);
});
function transitioned(){
	let col = slider.childNodes;
	let g = 0;
	for (let i of col){
		if (i.nodeType == 3){
			i.remove()
			g--;
		}
		g++;
	}
	slider.classList.remove('trans');
	if (lastMove == 'right'){
		lfst = lfst - 300;
		slider.style.left = `${lfst}px`;
		slider.prepend(col[col.length - 1]);
//		slider.prepend(col[col.length - 2]);
	}else{
		lfst = lfst + 300;
		slider.style.left = `${lfst}px`;
		slider.append(col[0]);
//		slider.append(col[1]);
	}
};

let button1Event = new Event('click');
setInterval(function(){
	button1.dispatchEvent(button1Event)
}, 3000);

// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################

/*


*/

let twelweSlider = document.querySelector('.slider-container');
let twelweButton2 = document.querySelector('.twelve-fst-slider-fst-button');
let twelweButton1 = document.querySelector('.twelve-fst-slider-snd-button');

let twelweLfst = -700;

let twelweLastMove = '';

twelweSlider.style.left = `${-700}px`;

twelweButton1.addEventListener('click', function(event){
	twelweSlider.classList.add('trans');
	twelweLfst = twelweLfst - 350;
	twelweSlider.style.left = `${twelweLfst}px`;
	twelweLastMove = 'left';
	setTimeout(twelweTransitioned, 500);
});

twelweButton2.addEventListener('click', function(event){
	twelweSlider.classList.add('trans');
	twelweLfst = twelweLfst + 350;
	twelweSlider.style.left = `${twelweLfst}px`;
	twelweLastMove = 'right';	
	setTimeout(twelweTransitioned, 500);
});
function twelweTransitioned(){
	let col = twelweSlider.childNodes;
	let g = 0;
	for (let i of col){
		if (i.nodeType == 3){
			i.remove()
			g--;
		}
		g++;
	}
	twelweSlider.classList.remove('trans');
	if (twelweLastMove == 'right'){
		twelweLfst = twelweLfst - 350;
		twelweSlider.style.left = `${twelweLfst}px`;
		twelweSlider.prepend(col[col.length - 1]);
//		slider.prepend(col[col.length - 2]);
	}else{
		twelweLfst = twelweLfst + 350;
		twelweSlider.style.left = `${twelweLfst}px`;
		twelweSlider.append(col[0]);
//		slider.append(col[1]);
	}
};

let button1Event222 = new Event('click');
setInterval(function(){
	twelweButton1.dispatchEvent(button1Event222)
}, 5000);

// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################


let twelweSlider2 = document.querySelector('.container2');
let twelweButton22 = document.querySelector('.fst-button2');
let twelweButton12 = document.querySelector('.fst-button3');

let twelweLfst2 = -350;

let twelweLastMove2 = '';

twelweSlider2.style.left = `${-350}px`;

twelweButton12.addEventListener('click', function(event){
	twelweSlider2.classList.add('trans');
	twelweLfst2 = twelweLfst2 - 350;
	twelweSlider2.style.left = `${twelweLfst2}px`;
	twelweLastMove2 = 'left';
	setTimeout(twelweTransitioned2, 500);
});

twelweButton22.addEventListener('click', function(event){
	twelweSlider2.classList.add('trans');
	twelweLfst2 = twelweLfst2 + 350;
	twelweSlider2.style.left = `${twelweLfst2}px`;
	twelweLastMove2 = 'right';	
	setTimeout(twelweTransitioned2, 500);
});
function twelweTransitioned2(){
	let col = twelweSlider2.childNodes;
	let g = 0;
	for (let i of col){
		if (i.nodeType == 3){
			i.remove()
			g--;
		}
		g++;
	}
	twelweSlider2.classList.remove('trans');
	if (twelweLastMove2 == 'right'){
		twelweLfst2 = twelweLfst2 - 350;
		twelweSlider2.style.left = `${twelweLfst2}px`;
		twelweSlider2.prepend(col[col.length - 1]);
//		slider.prepend(col[col.length - 2]);
	}else{
		twelweLfst2 = twelweLfst2 + 350;
		twelweSlider2.style.left = `${twelweLfst2}px`;
		twelweSlider2.append(col[0]);
//		slider.append(col[1]);
	}
};

setInterval(function(){
	twelweButton12.dispatchEvent(button1Event222)
}, 5500);



// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################
// #####################

let windowPopupBg = document.querySelector('.window-popup-bg');
let windowPopup = document.querySelector('.window-popup');
let imgWindow = document.querySelectorAll('.img-window');

for (let i of imgWindow){
	i.addEventListener('click',function(event){
		windowPopup.classList.remove('window-none');
		windowPopupBg.classList.remove('window-none');
	});
}

windowPopupBg.addEventListener('click', function(event){
		windowPopup.classList.add('window-none');
		windowPopupBg.classList.add('window-none');
})

document.addEventListener('keydown', function(event){
	event.preventDefault();
	if (event.keyCode == 27){
		windowPopup.classList.add('window-none');
		windowPopupBg.classList.add('window-none');
	}
})
