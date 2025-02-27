'use strict';

var core = require('@capacitor/core');

const VpnDetector = core.registerPlugin('VpnDetector', {
    web: () => Promise.resolve().then(function () { return web; }).then(m => new m.VpnDetectorWeb()),
});

class VpnDetectorWeb extends core.WebPlugin {
    async isVpnActive() {
        throw this.unimplemented('Not implemented on web.');
    }
}

var web = /*#__PURE__*/Object.freeze({
    __proto__: null,
    VpnDetectorWeb: VpnDetectorWeb
});

exports.VpnDetector = VpnDetector;
//# sourceMappingURL=plugin.cjs.js.map
