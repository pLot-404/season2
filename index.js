let page = location.search.split("&")[0].split("=")[1];
let request = new XMLHttpRequest();
request.responcseType = "xml"
if(page==="main"){
  request.open('GET',"static/main.xml",true);
}
request.onreadystatechange=function(){
  if(request.readyState===4&&request.status===200){
    document.getElementById("main").innerHTML = request.response;
  }
}
request.send(null);
