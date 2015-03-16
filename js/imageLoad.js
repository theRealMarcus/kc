$(documnet).ready(function(){
	$().SPServices({
    operation: "GetListItems",
    async: false,
    listName: "SliderImages",
    CAMLViewFields: "<ViewFields><FieldRef Name='URL' /></ViewFields>",
    completefunc: function (xData, Status) {
      $(xData.responseXML).SPFilterNode("z:row").each(function() {
        var liHtml = "<div class='side'><a href='#'><img src='"  + $(this).attr("URL") + "' height='300' width='1000' /></a></div>";
        $(".silder1").append(liHtml);
      });
});