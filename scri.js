function validateLink() { 
  var link = document.getElementById("linkInput").value;

  if (link.substring(0,7) !== "http://" && link.substring(0,8) !== "https://") { 
    link = "http://" + link; 
  }

  window.location = link; 

} 