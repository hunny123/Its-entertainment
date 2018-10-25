

$(document).ready(function(){

 $.getJSON("https://www.googleapis.com/youtube/v3/search?q=latest+seasons+news&sp=EgIIAg%253D%253D&maxResults=10&type=video&key=AIzaSyCMlR6u_1n1nvEXH7rw6BpLhS_Rb7Agv8k&part=snippet", function(b) {
      
    for(var i=0 ; i<9;i++){
      
      console.log(b.items[i].snippet.title)
      $("#trending-music").append(`<div class="col-md-4 mt-5">
    <div class="card pb-5 " style="width:100%;height:100%">
    <iframe class="iframe-size mt-1" src="https://www.youtube.com/embed/${b.items[i].id.videoId}",allow="autoplay encrypted-media" frameborder='0' allowFullScreen width="100%" height="200px"></iframe><div class="card-body "style="background:hotpink">
    <h4 class="card-title  text-white"> Title:-${b.items[i].snippet.channelTitle}</h4><center>
   <a href='http://api.youtube6download.top/fetch/link.php?i=${b.items[i].id.videoId}' class="btn  pt-3 ml-2 download-buttons" target="blank"><i class="fa fa-download pr-1"></i> Download Mp3</a>
    <a href="https://lolyoutube.com/download/mp4/${b.items[i].id.videoId}/${Date.now()}"class="btn pt-3 ml-2 download-buttons" target="blank"><i class="fa fa-download  pr-1"></i> Download Mp4</a></center></div></div> </div>`)
        
      
    }
    })

  

$("#goback").click(function(){
   
   $("#search-result-parent").html("");
   $("#goback").hide();
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#search-box").offset().top
    }, 1000);


})


$("#search-click").click(function(){
   
  var t = $("#search").val();
 if(t===""){
  alert("Fill the value")
  setTimeout(function(){return false;},5000)
  
 }
 else{
    
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#search-result-parent").offset().top
    }, 1000);


   $("#goback").show(100)


  $(".search-result-parent").html(`<div class="jumbotron mt-2  bg-light"><h2 class="text-purple text-center query  mt-1">Your Search Results</h2><div class="row pb-2 " id="search-result" class="mt-2"></div></div>`)
  

  $.getJSON("https://www.googleapis.com/youtube/v3/search?q="+t+"&maxResults=4&type=video&key=AIzaSyCMlR6u_1n1nvEXH7rw6BpLhS_Rb7Agv8k&part=snippet", function(b) {
    
       console.log(b)
    for(var i=0 ; i<3;i++){
     
      
     $("#search-result").append(`<div class="col-md-4 mt-5">
    <div class="card pb-5 " style="width:100%;height:100%">
    <iframe class="iframe-size mt-1" src="https://www.youtube.com/embed/${b.items[i].id.videoId}",allow="autoplay encrypted-media" frameborder='0' allowFullScreen width="100%" height="200px"></iframe><div class="card-body "style="background:hotpink">
    <h4 class="card-title  text-white"> Title:-${b.items[i].snippet.channelTitle}</h4><center>
   <a href='http://api.youtube6download.top/fetch/link.php?i=${b.items[i].id.videoId}' class="btn  pt-3 ml-2 download-buttons" target="blank"><i class="fa fa-download pr-1"></i> Download Mp3</a>
    <a href="https://lolyoutube.com/download/mp4/${b.items[i].id.videoId}/${Date.now()}"class="btn pt-3 ml-2 download-buttons" target="blank"><i class="fa fa-download  pr-1"></i> Download Mp4</a></center></div></div> </div> `)

    }


     

 })}
 
  


});
 



   

}); 









   