var imgArray = new Array();
var img;
var imgidx = 1;
var tm = 0;
var wa = 1;
var nx = 2;
var sta = 1;

function fExists() {
    imgArray.push(img);
    imgidx++;
    checkimg();
}

function getPos(el) {
    // yay readability
    for (var lx=0, ly=0;
         el != null;
         lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
    return {x: lx,y: ly};
}

function fDoesntExist() {
    //alert("images: "+imgArray.length);
    imgidx = (sta % imgArray.length) + 1;


    tm = 0;
    wa = 1;
    var ss = "";
    for(var i = 1; i <= imgArray.length; i++)
    	ss = ss + "<img id=\"img_"+i+"\" src=\"slideshow/home_"+i+".png\" \>";

    document.getElementById("pres1").innerHTML = ss;
	document.getElementById("img_"+imgidx).style.visibility = 'visible';
	document.getElementById("img_"+imgidx).style.opacity=1;


	setInterval(process, 50);
    //'slideshow/home_' + imgidx + '.png';
}

function process() {

	if (wa == 1)
	{
		tm += 1;
		if (tm > 40) {
			tm = 0;
			wa = 0;
			nx = imgidx + 1;
			if (nx > imgArray.length)
				nx = 1;
		}
	}
	else
	{
		document.getElementById("img_"+imgidx).style.opacity = (1 - tm);
		document.getElementById("img_"+nx).style.opacity = tm;
		tm += 0.02;
		if (tm > 1) {
			document.getElementById("img_"+imgidx).style.opacity = 0;
			document.getElementById("img_"+nx).style.opacity = 1;
			wa = 1;
			tm = 0;
			imgidx ++;
			if (imgidx > imgArray.length)
				imgidx = 1;
		}
	}
}

function checkimg() {
	img = new Image();
    img.onload = fExists;
    img.onerror = fDoesntExist;
    img.src = '../slideshow/home_' + imgidx + '.png';
}

function reposition_footer() {
	var ft = document.getElementById("footer");
	var WY;
	if( window.innerWidth )
	{
	    WY = window.innerHeight;
	} else {
	    WY = document.body.clientHeight;
	}

	//alert(getPos(ft).y + 50);
	//alert(WY);
	if (getPos(ft).y + 50 < WY)
	{
		ft.style.position="fixed";
		ft.style.top = (WY - 50) + "px";
	}
}

function start_slide(startid) {


	reposition_footer();

	imgidx = 1;
	sta = startid;
	checkimg();
}