import { WebPlugin } from '@capacitor/core';
export class VpnDetectorWeb extends WebPlugin {
    async isVpnActive() {
        throw this.unimplemented('Not implemented on web.');
    }
}
//# sourceMappingURL=web.js.map