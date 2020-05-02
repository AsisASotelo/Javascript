//Event Handling

document.addEventListener("DOMContentLoaded",
    function(event){
        document.querySelector("button")
                .addEventListener("click",function(){
                    var self = this;
                    var name = "";

                    $ajaxUtils
                    .sendGetRequest("/data/name.json",
                      function(res){
                          var message = 
                          res.firstname + " " + res.lastname;
                          console.log(res);
                          document.querySelector("#content")
                            .innerHTML ="<h2>Hello " + message + "!";

                      });
                    
                    
                });
    }




);