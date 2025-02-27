import { registerPlugin } from '@capacitor/core';
const VpnDetector = registerPlugin('VpnDetector', {
    web: () => import('./web').then(m => new m.VpnDetectorWeb()),
});
export * from './definitions';
export { VpnDetector };
//# sourceMappingURL=index.js.map