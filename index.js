let page = location.search.split("&")[0].split("=")[1];
let request = new XMLHttpRequest();
request.responcseType = "xml"
request.open('GET',"static/"+page+".xml",true);
request.onreadystatechange=function(){
  if(request.readyState===4&&request.status===200){
    document.getElementById("main").innerHTML = request.responseText;
  }
}
request.send(null);
function main(){
  location.assign("/?page=news")
}
