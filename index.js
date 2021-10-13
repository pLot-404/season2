let page = location.search.split("&")[0].split("=")[1];
let request = new XMLHttpRequest();
if(page==="main"){
  request.open('GET',"static/main.xml",true);
}
request.onreadystatechange=function(){
  if(request.readyState===4&&request.status===200){
    document.getElementByID("main").innerHTML = request.responseXML.getElementsByTagName("pages");
  }
}
request.send();
