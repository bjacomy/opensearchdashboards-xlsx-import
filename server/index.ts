import { schema, TypeOf } from '@osd/config-schema';
import type { PluginConfigDescriptor } from 'opensearchDashboards/server';

import { PluginInitializerContext } from '../../../src/core/server';
import { OpenSearchDashboardsXlsxImportPlugin } from './plugin';


const configSchema = schema.object({
  enabled: schema.boolean({ defaultValue: true })
});


export const config: PluginConfigDescriptor<ConfigType> = {
  exposeToBrowser: {
    enabled: true
  },
  schema: configSchema,
};
export   type ConfigType = TypeOf<typeof configSchema>;
//  This exports static code and TypeScript types,
//  as well as, OpenSearchDashboards Platform `plugin()` initializer.



export function plugin(initializerContext: PluginInitializerContext) {
  return new OpenSearchDashboardsXlsxImportPlugin(initializerContext);
}

export { OpenSearchDashboardsXlsxImportPluginSetup, OpenSearchDashboardsXlsxImportPluginStart } from './types';
