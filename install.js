import packageJson from './package.json' with { type: 'json' };
import { getInstallCandidateUrl, install } from '@node-3d/addon-tools';

const prefix = 'https://github.com/node-3d/webgl/releases/download';
const tag = '6.0.1';

await install(getInstallCandidateUrl(packageJson.name) || `${prefix}/${tag}`);
