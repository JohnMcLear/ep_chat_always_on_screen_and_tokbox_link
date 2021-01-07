var chat_always_on_screen_and_tokbox_link = {

  getURLParameter(name) {
    return decodeURI(
        (RegExp(`${name}=` + '(.+?)(&|$)').exec(location.search) || [, null])[1]
    );
  },

  init() {
    chat.stickToScreen(true);
    $('#chatinput').height('90px');
    $('#chattext').css('bottom', '100px');
    $('#chatinputbox > form').html('');
    const textarea = '<textarea id="chatinput" style="width:185px;height:90px;padding-left:2px;font-size:12px;padding-top:2px;" placeholder="type here to chat..."></textarea>';
    $('#chatinputbox > form').html(textarea);
    $('#chatinput').keyup((e) => {
      if (e.which == 13) {
        chat.send();
      }
    });

    const tokbox_link = clientVars.tokbox_link;
    if (tokbox_link) {
      if (chat_always_on_screen_and_tokbox_link.getURLParameter('av')) { // is it set?
        if (chat_always_on_screen_and_tokbox_link.getURLParameter('av') === 'YES') {
          const link = `${tokbox_link}?string=${location.href}`;
          const markup = '<p id="tokboxStart" style="cursor:pointer; cursor:hand;text-align:center;text-size:12px;font-weight:bold;text-transform:uppercase;padding-bottom:8px;">START VIDEO/AUDIO CHAT</p>';
          $(markup).insertBefore('#chatinput');
          $('#tokboxStart').click(() => {
            window.open(link, 'utilization', 'height=700,width=350,scrollbars=1');
          });

          $('#chattext').css('bottom', '125px');
        }
      }
    }
  },
};
