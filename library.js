(function(module) {
    "use strict";
    var HearThis = {},
        EmbedHearThis = '<iframe scrolling="no" id="hearthis_at_track_$1" width="100%" height="400" src="https://hearthis.at/embed/$1/transparent_black/?hcolor=&color=&style=2&block_size=1&block_space=0&background=1&waveform=0&cover=0" frameborder="0" allowtransparency></iframe>';
    var	HearThisShortLink = /<a href="(?:https?:\/\/)?(?:www\.)?(?:hearthis\.at)\/?([\w\-_]+)\/?">.+<\/a>/g;


    HearThis.parse = function(data, callback) {

        if (!data || !data.postData || !data.postData.content) {
            return callback(null, data);
        }
        if (data.postData.content.match(HearThisShortLink)) {
            data.postData.content = data.postData.content.replace(HearThisShortLink, EmbedHearThis);
        }

        callback(null, data);
    };

    module.exports = HearThis;
}(module));
