window.onload = function(){
  var ips = [];
  
var ipObjects = function(){
  
}

$("#go").click(function(){
  
    var lines = document.getElementById("myTextArea").value.split('\n');

  for(var x=0;x<lines.length;x++){
    var site = lines[x].split(',');
    ips.push({name:site[0],address:site[1]})
  }

  console.log(ips);
  
    for(var x=0;x<ips.length;x++){
    (function(x){
      $.getJSON("http://ip-api.com/json/"+ips[x].address+"?callback=?",
                function(data){
          
        ips[x].org = data.isp;
        $("#IPs").append("<div>"+ips[x].name+","+ips[x].address+","+ips[x].org+"</div>");
          console.log("ADDED: "+ips[x].org);
        
        
      })
    })(x)

  }
  
  
})
  
  $("#myTextArea")
  .focus(function() {
        if (this.value === this.defaultValue) {
            this.value = '';
        }
  })
  .blur(function() {
        if (this.value === '') {
            this.value = this.defaultValue;
        }
});

}