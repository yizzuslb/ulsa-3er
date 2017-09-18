$(function() {
	var gui = require('nw.gui');

	var $body = $('body'),
		$galeria = $("#galeria"),
		$3er = $("a[href='main']"),
		$ulsa = $("a[href='ulsa']"),
		btnCerrar = $("#cerrar");

	var backgrounds = [
    		{ src: 'imgs/bkg-1-sm.jpg', valign: 'bottom' },
    		{ src: 'imgs/bkg-2-sm.jpg', valign: 'bottom' },
    		{ src: 'imgs/bkg-3-sm.jpg', valign: 'bottom' }
    	],
    	conf = {
    		home: "https://www.ulsavictoria.edu.mx/ComunicadoUlsa/",
    		ulsa: "http://www.ulsavictoria.edu.mx/"
    	};


	btnCerrar.on('click',function(){
		gui.App.quit();
	});

    $3er.on('click',function(ev){
    	ev.preventDefault();
    	window.location.href = conf.home;
    });
    $ulsa.on('click',function(ev){
    	ev.preventDefault();
    	window.location.href = conf.ulsa;
    });

	$body.vegas({
		preload: true,
		transitionDuration: 4000,
		delay: 10000,
		slides: backgrounds
	});

	if($galeria.length >0)
		$galeria.nanoGallery({
			kind: 'flickr',
			userID: '144110804@N03',
			photoset: '72157688310223665'
		});

});
