(function() {
    //TODO include slide numbers
    var url = window.location.href;

    //FIXME better sizing
    var config = Reveal.getConfig();
    var size = Math.min(config.height,config.width) - 70;

    var containers = document.querySelectorAll("div.reveal-js-qrcode");
    containers.forEach(
        function(e){
            //FIXME better centering
            e.style.display = "inline-block";
            e.style.textAlign = "center";
            new QRCode(e, {text:url, width:size, height:size});
        });
}());
