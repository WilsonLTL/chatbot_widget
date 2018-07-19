$(function() {
  var chatWidget = (".chat-widget-container"),
      chatBox = $(".chat-box-container");
  
  $(chatWidget).click(function(e){
    
    e.preventDefault();
    
    $(chatBox).toggleClass("show");
    $(chatWidget).toggleClass("open");
  })
  
});