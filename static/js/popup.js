'use strict'

var popup = function (params) {
    var $params = params;
    var $el = $($params.el);
    if ($params.closeButton) {
        if (Array.isArray($params.closeButton) && $params.closeButton.length > 0) {

        }
    }
    this.bind = function (binding) {
        for (var b in binding) {
            var p = b.split(":");
            $el.find(p[0]).on(p[1], binding[b]);
        }
    }
};