import { i18n } from '@osd/i18n';
import { AppMountParameters, CoreSetup, CoreStart, Plugin, PluginInitializerContext } from '../../../src/core/public';

import {
  OpensearchDashboardsXlsxImportPluginSetup,
  OpensearchDashboardsXlsxImportPluginStart,
  AppPluginStartDependencies,
} from './types';
import { PLUGIN_NAME } from '../common';
interface ClientConfigType {
  enabled: boolean;
}

export class OpensearchDashboardsXlsxImportPlugin
  implements Plugin<OpensearchDashboardsXlsxImportPluginSetup, OpensearchDashboardsXlsxImportPluginStart> {
    constructor(private readonly initializerContext: PluginInitializerContext) {}
  public setup(core: CoreSetup): OpensearchDashboardsXlsxImportPluginSetup {
    // Register an application into the side navigation menu
    const config = this.initializerContext.config.get<ClientConfigType>();
 
    core.application.register({
      id: 'opensearchdashboardsXlsxImport',
      title: PLUGIN_NAME,
      euiIconType: 'importAction',
      async mount(params: AppMountParameters) {
        // Load application bundle
        const { renderApp } = await import('./application');
        // Get start services as specified in opensearchdashboards.json
        const [coreStart, depsStart] = await core.getStartServices();
      
        // Render the application
        //return renderApp(coreStart, depsStart as AppPluginStartDependencies, params, coreStart.chrome );
        return renderApp(coreStart, depsStart as AppPluginStartDependencies, params ,core.uiSettings.get('bulk_package_size'), core.uiSettings.get('displayed_row'));
      },
    });

    // Return methods that should be available to other plugins
    return {
      
      getGreeting() {
        return i18n.translate('opensearchdashboardsXlsxImport.greetingText', {
          defaultMessage: 'Hello from {name}!',
          values: {
            name: PLUGIN_NAME,
          },
        });
      },
    };
  }

  public start(core: CoreStart): OpensearchDashboardsXlsxImportPluginStart {
    return {};
  }

  public stop() {}
}
