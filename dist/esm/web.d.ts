import { WebPlugin } from '@capacitor/core';
import type { VpnDetectorPlugin } from './definitions';
export declare class VpnDetectorWeb extends WebPlugin implements VpnDetectorPlugin {
    isVpnActive(): Promise<{
        value: boolean;
    }>;
}
