var chat_always_on_screen_and_tokbox_link = {

  getURLParameter: function(name) {
      return decodeURI(
          (RegExp(name + '=' + '(.+?)(&|$)').exec(location.search)||[,null])[1]
      );
  },

  init: function() {

    chat.stickToScreen(true);
    $("#chatinput").height("90px");
    $("#chattext").css("bottom", "100px");
    $("#chatinputbox > form").html("");
    var textarea = '<textarea id="chatinput" style="width:185px;height:90px;padding-left:2px;font-size:12px;padding-top:2px;" placeholder="type here to chat..."></textarea>';
    $("#chatinputbox > form").html(textarea);
    $("#chatinput").keyup(function(e){
      if(e.which == 13){
        chat.send();
      }
    });

    var tokbox_link = clientVars.tokbox_link;
    if(tokbox_link){
      if (chat_always_on_screen_and_tokbox_link.getURLParameter("av")){  // is it set?
        if(chat_always_on_screen_and_tokbox_link.getURLParameter("av") === "YES"){
          var link = tokbox_link + "?string="+location.href;
          var markup = '<p id="tokboxStart" style="cursor:pointer; cursor:hand;text-align:center;text-size:12px;font-weight:bold;text-transform:uppercase;padding-bottom:8px;">START VIDEO/AUDIO CHAT</p>';
          $(markup).insertBefore("#chatinput");
          $("#tokboxStart").click(function(){
            window.open(link, 'utilization', 'height=700,width=350,scrollbars=1');
          });
  
          $("#chattext").css("bottom", "125px");
        }
      }
    }
  }
}
