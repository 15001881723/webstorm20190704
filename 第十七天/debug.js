    function debug(msg) {
        var log=document.getElementById("debuglog");
        if (!log){
            log=document.createElement("div");
            log.id="debuglog";
            log.innerHTML="<h1>初始内容</h1>"
            document.body.appendChild(log);
        }
        var pre=document.createElement("pre");
        var text=document.createTextNode(msg);
        pre.appendChild(text);
        log.appendChild(pre);
    }