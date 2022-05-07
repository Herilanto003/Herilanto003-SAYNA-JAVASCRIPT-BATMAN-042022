$(document).ready(function(){

	// appel de toutes les fonctions
	passage_souris();
	location_page();
	scroll_image();
	titre_page();
	home_page();
	video_play();
	popup_box();
	parametre_video();
});


// definition des fonctions
function passage_souris(){

	$("header nav a").hover(
		function (){
			$(this).css({
				"font-weight" : "bold",
				"text-decoration" : "underline" 
			});
		},
		function (){
			$(this).css({
				"font-weight" : "400",
				"text-decoration" : "none" 
			});
		}
	)

	$("i").hover(
		function (){
			$(this).css({
				"color":"#ffff00" 
			});
		},
		function (){
			$(this).css({
				"color":"#ffffff" 
			});
		}
	)


	$(".dezoom_1").hover(
		function (){
			this.style.transform  = "scale(1.2)";
			this.style.transition  = "0.5s";

			this.nextElementSibling.style.opacity = "1";
			this.nextElementSibling.style.transition = "0.5s";
		},
		function (){
			this.style.transform  = "scale(1.0)";
			this.style.transition  = "0.5s";

			this.nextElementSibling.style.opacity = "0";
			this.nextElementSibling.style.transition = "0.5s";
		}
	)


	$(".dezoom_2").hover(
		function (){
			this.style.transform  = "scale(1.2)";
			this.style.transition  = "0.5s";

			this.nextElementSibling.style.opacity = "1";
			this.nextElementSibling.style.transition = "0.5s";
		},
		function (){
			this.style.transform  = "scale(1.0)";
			this.style.transition  = "0.5s";

			this.nextElementSibling.style.opacity = "0";
			this.nextElementSibling.style.transition = "0.5s";
		}
	)

}

function location_page(){
	

}

function scroll_image(){

	$(document).scroll(function(){
		if(scrollY < 300){
			$("div.image_droite").css({
				"z-index" : "22",
				"top": "auto"
			});
		}
		else if(scrollY > 300 && scrollY < 6037)
		{
			$("div.image_droite").css({
				"z-index" : "22",
				"top": scrollY+"px"
			});
		}

		if(scrollY > 1000)
		{
			$(".dezoom_1").css({
				"transition" : "0.5s",
				"transform" : "scale(1.0)"
			})
		}else{
			$(".dezoom_1").css({
				"transition" : "0.5s",
				"transform" : "scale(0.0)"
			})
		}

		if(scrollY > 2600)
		{
			$(".dezoom_2").css({
				"transition" : "0.5s",
				"transform" : "scale(1.0)"
			})
		}else{
			$(".dezoom_2").css({
				"transition" : "0.5s",
				"transform" : "scale(0.0)"
			})
		}

		if(scrollY > 3580)
		{
			$(".dezoom_3").css({
				"transition" : "0.5s",
				"transform" : "scale(1.0)"
			})
		}else{
			$(".dezoom_3").css({
				"transition" : "0.5s",
				"transform" : "scale(0.0)"
			})
		}
	})

}

// fade in de tout le titre
function titre_page(){
	$(".titre").css({
		"margin-left" : "0px",
		"transition" : "0.8s",
		"opacity" : "1"

	});
}


function home_page(){
	$("div.home_page_content").css({
		"opacity" : "1",
		"transition":"0.8s"

	})

}


let marge = {
	mg : 0
};

function slider_action(){

	$("#precedent").click(()=>{
		if(marge.mg == 300)
		{
			marge.mg = 0;
		}

		$(".slider_element").css({
				"margin-left":"-"+marge.mg+"%",
				"animation":"animate 2s forwards"
			});

		marge.mg += 100;
		

	});

}



function video_play(){
	$("div.liste_bande_annonce video").click(function(){
		
	});
}




function popup_box(){

	$("#formulaire form").submit((e)=>{


		e.preventDefault();


		if(!$("#frequence").val() || !$("#email").val() || !$("#message").val() || !check.checked)
		{
			alert("Veuillez completer tous les champs");
		}else{
			$("#popup").css({
				"transition":"0.6s",
				"top":"50%"
			});


		}

		

	});

	$("#fermer_popup").click(()=>{

		$("#popup").css({
			"transition":"0.6s",
			"top":"-150%"
		});


	});

}




function liste_deroulante(){

	$(".list-group").slideToggle(500);

}
function complete_input(texte){
	document.getElementById("frequence").value = texte;
	$(".list-group").slideUp(500);
}


// slide
let state = {
	marge : 0,
	compteur: 0
}

function slide_droite()
{
	
	state.marge+=100;
	

	
	if(state.marge >= 300)
	{
		state.marge = 0;
	}
	$(".slider_element").css({
		"margin-left":"-"+state.marge+"%",
		"transition" : "0.5s"

	})
	parametre_video();

}

function slide_gauche()
{
	if(state.compteur > 2)
	{
		state.compteur = 0;
		state.marge = 0;
	}
	$(".slider_element").css({
		"margin-left":"-"+state.marge+"%",
		"transition" : "0.5s"

	})
	
	state.compteur++;
	parametre_video();
	state.marge += 100;
	// if(state.marge == 0)
	// {
	// 	$(".slider_element").css({
	// 		"margin-left":"-200%",
	// 		"transition" : "0.5s"

	// 	})

	// 	state.marge += 100;
	// 	parametre_video();

	// }else if(state.marge == 100){
	// 	$(".slider_element").css({
	// 		"margin-left":"-100%",
	// 		"transition" : "0.5s"

	// 	})

	// 	parametre_video();
	// 	state.marge += 100;

	// }else if(state.marge == 200){
	// 	$(".slider_element").css({
	// 		"margin-left":"0%",
	// 		"transition" : "0.5s"

	// 	})
	// 	parametre_video();
	// 	state.marge += 100;
	// }else{
	// 	state.marge = 0;
	// 	$(".slider_element").css({
	// 		"margin-left":"-200%",
	// 		"transition" : "0.5s"

	// 	})
	// 	parametre_video();
	// }

}



function parametre_video(){

	if(state.marge == 0)
	{
		$("video").attr("src","./Assets/video/Batman Begins - Bande Annonce Officielle (VF) - Christian Bale _ Christopher Nolan _ Liam Neeson.mp4");

	}else if(state.marge == 100){
		$("video").attr("src","./Assets/video/dark knight.mp4");

	}else{
		$("video").attr("src","./Assets/video/dark rise.mp4");
	}

}


