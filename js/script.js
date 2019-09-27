$("#about").load("about.html", function(responseTxt, statusTxt, xhr) {
    if (statusTxt == "success") {
        alert("It works");
    } else if (statusTxt == "error") {
        alert("Error:" + xhr.statustext);
    }
});
/* var x = location.href;

$("#btn-about").on("click", function(e) {
    e.preventDefault();
    var page = $(this).attr("href");
    $("#btn-about").load(page);
}); */
