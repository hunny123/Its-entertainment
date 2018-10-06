 
    $.getJSON("https://www.googleapis.com/youtube/v3/search?q=latestmovie&maxResults=4&type=video&key=AIzaSyCMlR6u_1n1nvEXH7rw6BpLhS_Rb7Agv8k&part=snippet", function(b) {
      let k =""
    for(var i=0 ; i<b.items.length;i++){
      if(i===0){
        k ="active"
      }
      else{
        k=""
      }
      $("#c1 .carousel-inner").append(`<div class='carousel-item ${k}' ><div>
     <iframe class="iframe-size " src="https://www.youtube.com/embed/${b.items[i].id.videoId}",allow="autoplay; encrypted-media" frameborder='0' allowFullScreen width="100%" height="300px"></div></div>`)
        $("#c1 .carousel-indicators").append(`<li data-target="#c1" data-slide-to=${i} class=${k}></li>`)
    }
    })
    $.getJSON("https://www.googleapis.com/youtube/v3/search?id=10&part=snippet&regionCode=US&key=AIzaSyCMlR6u_1n1nvEXH7rw6BpLhS_Rb7Agv8k", function(b) {
      let k =""
    for(var i=0 ; i<b.items.length;i++){
      if(i===0){
        k ="active"
      }
      else{
        k=""
      }
      $("#c2 .carousel-inner").append(`<div class='carousel-item ${k}' ><div>
     <iframe class="iframe-size " src="https://www.youtube.com/embed/${b.items[i].id.videoId}",allow="autoplay; encrypted-media" frameborder='0' allowFullScreen width="100%" height="300px"></div></div>`)
        $("#c2 .carousel-indicators").append(`<li data-target="#c2" data-slide-to=${i} class=${k}></li>`)
    }
    })
    $.getJSON("https://www.googleapis.com/youtube/v3/search?q=latest game trailer&maxResults=5&type=horror&key=AIzaSyCMlR6u_1n1nvEXH7rw6BpLhS_Rb7Agv8k&part=snippet", function(b) {
      let k =""
    for(var i=0 ; i<b.items.length;i++){
      if(i===0){
        k ="active"
      }
      else{
        k=""
      }
      $("#c3 .carousel-inner").append(`<div class='carousel-item ${k}' ><div>
     <iframe class="iframe-size " src="https://www.youtube.com/embed/${b.items[i].id.videoId}",allow="autoplay; encrypted-media" frameborder='0' allowFullScreen width="100%" height="300px"></div></div>`)
        $("#c3 .carousel-indicators").append(`<li data-target="#c3" data-slide-to=${i} class=${k}></li>`)
    }



    console.log($("#play"))
    })  
      

  
