$(function() {
	var gui = require('nw.gui');

	var $body = $('body'),
		$galeria = $("#galeria"),
		$3er = $("a[href='main']"),
		$ulsa = $("a[href='ulsa']"),
		btnCerrar = $("#cerrar"),
		capitulo1 = $("#pdf1"),
		capitulo2 = $("#pdf2"),
		capitulo3 = $("#pdf3"),
		capitulo4 = $("#pdf4"),
		capitulo5 = $("#pdf5");
		capitulo6 = $("#pdf6");

	var backgrounds = [
    		{ src: 'imgs/bkg-1-sm.jpg', valign: 'bottom' },
    		{ src: 'imgs/bkg-2-sm.jpg', valign: 'bottom' },
    		{ src: 'imgs/bkg-3-sm.jpg', valign: 'bottom' }
    	],
    	conf = {
    		home: "https://www.ulsavictoria.edu.mx/ComunicadoUlsa/",
    		ulsa: "http://www.ulsavictoria.edu.mx/"
    	};

capitulo1.on('click',function(){
			gui.Window.open ('pdfs/Revista_3ER_comunicadoRector2017_Digital_seccion1.pdf', {
				position: 'center',
				width: 500,
				height: 500
			});
	});

	capitulo2.on('click',function(){
				gui.Window.open ('pdfs/Revista_3ER_comunicadoRector2017_Digital_seccion2.pdf', {
					position: 'center',
					width: 500,
					height: 500
				});
		});

	capitulo3.on('click',function(){
				gui.Window.open ('pdfs/Revista_3ER_comunicadoRector2017_Digital_seccion3.pdf', {
					position: 'center',
					width: 500,
					height: 500
				});
		});
	capitulo4.on('click',function(){
		gui.Window.open ('pdfs/Revista_3ER_comunicadoRector2017_Digital_seccion4.pdf', {
		position: 'center',
		width: 500,
		height: 500
		});
	});
	capitulo5.on('click',function(){
			gui.Window.open ('pdfs/Revista_3ER_comunicadoRector2017_Digital_seccion5.pdf', {
				position: 'center',
				width: 500,
				height: 500
				});
	});
	capitulo6.on('click',function(){
			gui.Window.open ('pdfs/Revista_3ER_comunicadoRector2017_Digital_seccion6.pdf', {
				position: 'center',
				width: 500,
				height: 500
				});
	});




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

	if($galeria.length>0)
		$galeria.nanoGallery({
	        items: fotos
	    });

		/*
		$galeria.nanoGallery({
			kind: 'flickr',
			userID: '144110804@N03',
			photoset: '72157688310223665'
		});
		*/

});
