(function(module) {
    "use strict";

    var HearThis = {},
        embed = '<iframe class="hearthis" scrolling="no" id="" width="95%" height="150" src="http://hearthis.at/embed/$1?hcolor=006CFF" frameborder="0" allowtransparency></iframe>';


    HearThis.parse = function(postContent, callback) {
        postContent = postContent.replace(/<a href="(?:https?:\/\/)?(?:hearthis\.at)\/?(.+)">.+<\/a>/g, embed);
        callback(null, postContent);
    };

    module.exports = HearThis;
}(module));
