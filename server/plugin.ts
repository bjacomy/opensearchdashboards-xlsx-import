import {
  PluginInitializerContext,
  CoreSetup,
  CoreStart,
  Plugin,
  Logger,
} from '../../../src/core/server';

import { OpenSearchDashboardsXlsxImportPluginSetup, OpenSearchDashboardsXlsxImportPluginStart } from './types';
import { defineRoutes } from './routes';
import { i18n } from '@osd/i18n';
import { schema } from '@osd/config-schema';



export class OpenSearchDashboardsXlsxImportPlugin
  implements Plugin<OpenSearchDashboardsXlsxImportPluginSetup, OpenSearchDashboardsXlsxImportPluginStart> {
  private readonly logger: Logger;

  
  constructor(initializerContext: PluginInitializerContext) {
    this.logger = initializerContext.logger.get();
  }

  public setup(core: CoreSetup) {
    this.logger.debug('opensearchdashboards-xlsx-import: Setup');
    core.uiSettings.register({
      'bulk_package_size': {
        name: i18n.translate('opensearchdashboardsXlsxImport.uiSettings.showBulkLabel', {
          defaultMessage: 'bulk size for xlsx import',
        }),
        value: 1000,
        description: i18n.translate('opensearchdashboardsXlsxImport.uiSettings.showBulkDescription', {
          defaultMessage: 'xlsx import index will be created using bulksize',
        }),
        category: ['opensearchdashboardsXlsxImport'],
        schema: schema.number(),
      }     
    });
    core.uiSettings.register({
      'displayed_row': {
        name: i18n.translate('opensearchdashboardsXlsxImport.uiSettings.showDisplayedRowsLabel', {
          defaultMessage: 'number of row for file preview',
        }),
        value: 50,
        description: i18n.translate('opensearchdashboardsXlsxImport.uiSettings.showDisplayedRowsDescription', {
          defaultMessage: 'After file selection, this data limit the number of file item displayed during preview',
        }),
        category: ['opensearchdashboardsXlsxImport'],
        schema: schema.number(),
      }     
    });
    const router = core.http.createRouter();
    // Register server side APIs
    defineRoutes(router);
    
    return {};
  }

  public start(core: CoreStart) {
    
    this.logger.debug('opensearchdashboards-xlsx-import: Started');
    return {};
  }

  public stop() {}
}
