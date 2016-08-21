/*function to load content on home page beofre page show*/
$(document).on("pagebeforeshow","#home", function() {
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#header").html($(mxml).find("Document > name").text().bold());
		$("#imgIcon").html("<img src="+$(mxml).find("Document > Style > IconStyle > Icon > href").text()+ "width='150' height='150'/>");
		var n=1;
		$(mxml).find("Folder > name").each(function(){
		$(".m"+n).text($(this).text());
		n++;	
		});		
	}	
});
/*function to load content on GTA page beofre page show*/
$(document).on("pagebeforeshow","#gta", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){		
		var n=1;
		$(mxml).find("Document > Folder:contains('GTA') > Placemark").each(function(){
		$(".n"+n).text($(this).find("description").text());
		n++;			
		});		
	}	
});
/*function to load content on Burlington page beofre page show*/
$(document).on("pagebeforeshow","#burl", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){		
		var n=1;		
		$(mxml).find("Document > Folder:contains('Burlington') > Placemark").each(function(){
		$(".o"+n).text($(this).find("description").text());
		n++;		
		});			
	}	
});
/*function to load content on Niagara page beofre page show*/
$(document).on("pagebeforeshow","#niagara", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){		
		var n=1;		
		$(mxml).find("Document > Folder:contains('Niagara') > Placemark").each(function(){
		$(".q"+n).text($(this).find("description").text());
		n++;		
		});			
	}		
});
/*function to load content on gta1 page beofre page show*/
$(document).on("pagebeforeshow","#gta1", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imggta1").html("<img src="+$(mxml).find("Document > Folder:contains('GTA') > Placemark > description:contains('Harwood') > img").attr('src') + "width='180' height='280'/>");	
	}	
});
/*function to load content on gta2 page beofre page show*/
$(document).on("pagebeforeshow","#gta2", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imggta2").html("<img src="+$(mxml).find("Document > Folder:contains('GTA') > Placemark > description:contains('Westney') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on gta3 page beofre page show*/
$(document).on("pagebeforeshow","#gta3", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imggta3").html("<img src="+$(mxml).find("Document > Folder:contains('GTA') > Placemark > description:contains('Church') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on burlington1 page beofre page show*/
$(document).on("pagebeforeshow","#burl1", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgburl1").html("<img src="+$(mxml).find("Document > Folder:contains('Burlington') > Placemark > description:contains('Burlington') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on burlington2 page beofre page show*/
$(document).on("pagebeforeshow","#burl2", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgburl2").html("<img src="+$(mxml).find("Document > Folder:contains('Burlington') > Placemark > description:contains('Woodward') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on burlington3 page beofre page show*/
$(document).on("pagebeforeshow","#burl3", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgburl3").html("<img src="+$(mxml).find("Document > Folder:contains('Burlington') > Placemark > description:contains('Eastport') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on burlington4 page beofre page show*/
$(document).on("pagebeforeshow","#burl4", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgburl4").html("<img src="+$(mxml).find("Document > Folder:contains('Burlington') > Placemark > description:contains('Hamilton') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on burlington5 page beofre page show*/
$(document).on("pagebeforeshow","#burl5", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgburl5").html("<img src="+$(mxml).find("Document > Folder:contains('Burlington') > Placemark > description:contains('lift') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on burlington6 page beofre page show*/
$(document).on("pagebeforeshow","#burl6", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgburl6").html("<img src="+$(mxml).find("Document > Folder:contains('Burlington') > Placemark > description:contains('Lake') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on niagara1 page beofre page show*/
$(document).on("pagebeforeshow","#nia1", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgnia1").html("<img src="+$(mxml).find("Document > Folder:contains('Niagara') > Placemark > description:contains('Ontario') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on niagara2 page beofre page show*/
$(document).on("pagebeforeshow","#nia2", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgnia2").html("<img src="+$(mxml).find("Document > Folder:contains('Niagara') > Placemark > description:contains('Lake') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on niagara3 page beofre page show*/
$(document).on("pagebeforeshow","#nia3", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgnia3").html("<img src="+$(mxml).find("Document > Folder:contains('Niagara') > Placemark > description:contains('Overpass') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on niagara4 page beofre page show*/
$(document).on("pagebeforeshow","#nia4", function() {	
	$.ajax({
	type:"GET",url:"camera2.xml",dataType:"xml",success: show,
	error: function(e){ alert(e.status + "-"+e.statusText);}		
	});	
	function show(mxml){	
		$("#imgnia4").html("<img src="+$(mxml).find("Document > Folder:contains('Niagara') > Placemark > description:contains('Toronto') > img").attr('src') + "width='180' height='280'/>");
	}	
});
/*function to load content on graph page beofre page show*/
$(document).on("pageshow","#graph", function() {	
	
var canvas= document.getElementById("myCanvas");
var ctx= canvas.getContext('2d');

var dataElement = {  labels: ["GTA", "Burlington/Mississagua", "Niagara", "Ottawa", "Sarnia", "London","Windsor", "1000-Isiland","Kingston"],
    datasets:[
        {
label: "Area wise Traffic Camera:",
        
fillColor: "rgba(225,0,151,0.8)",
       
strokeColor: "rgba(220,255,151,0.8)",
      
highlightFill: "rgba(120,0,151,0.9)",
      
highlightStroke: "rgba(225,223,0,0.9)",
      
     data: [85,60, 31,12,10,3,43,4,11]
        }  ]
};

var option1 ={
 
scaleShowLabels: true, 
scaleShowGridLines : false,
scaleShowVerticalLines: true,
barValueSpacing : 8,
barDatasetSpacing : 3,
 
 }
var mychart = new Chart(ctx).Bar(dataElement,option1);
 
});

