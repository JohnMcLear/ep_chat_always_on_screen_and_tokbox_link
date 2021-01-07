const path = require('path');
const eejs = require('ep_etherpad-lite/node/eejs');
const settings = require('ep_etherpad-lite/node/utils/Settings');

exports.clientVars = function (hook, context, callback) {
  let chat_always_on_screen_and_tokbox_link;
  try {
    if (settings.ep_tokbox_link) {
      chat_always_on_screen_and_tokbox_link = settings.ep_tokbox_link;
    }
  } catch (e) {
    console.warn('ep_chat_always_on_screen_and_tokbox_link: a tokbox URL can be set in settings.json as ep_tokbox_link');
    chat_always_on_screen_and_tokbox_link = '';
  }
  return callback({tokbox_link: chat_always_on_screen_and_tokbox_link});
};

exports.eejsBlock_scripts = function (hook_name, args, cb) {
  args.content = `<script src="../static/plugins/ep_chat_always_on_screen_and_tokbox_link/static/js/chat_always_on_screen_and_tokbox_link.js"></script>${args.content}`;
  return cb();
};
