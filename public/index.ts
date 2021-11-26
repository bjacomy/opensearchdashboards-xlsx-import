import {  PluginInitializerContext } from '../../../src/core/public';
import './index.scss';

import { OpensearchDashboardsXlsxImportPlugin } from './plugin';

// This exports static code and TypeScript types,
// as well as, OpensearchDashboards Platform `plugin()` initializer.
export function plugin(initializerContext: PluginInitializerContext) {
  return new OpensearchDashboardsXlsxImportPlugin(initializerContext);
}
export { OpensearchDashboardsXlsxImportPluginSetup, OpensearchDashboardsXlsxImportPluginStart } from './types';
