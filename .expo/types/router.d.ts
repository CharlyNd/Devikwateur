/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/CustomerDetailModal`; params?: Router.UnknownInputParams; } | { pathname: `/customerDetailModal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/listClients` | `/listClients`; params?: Router.UnknownInputParams; } | { pathname: `/modals/CustomerDetailModal`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/CustomerDetailModal`; params?: Router.UnknownOutputParams; } | { pathname: `/customerDetailModal`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownOutputParams; } | { pathname: `${'/(tabs)'}/listClients` | `/listClients`; params?: Router.UnknownOutputParams; } | { pathname: `/modals/CustomerDetailModal`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/CustomerDetailModal${`?${string}` | `#${string}` | ''}` | `/customerDetailModal${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `${'/(tabs)'}/listClients${`?${string}` | `#${string}` | ''}` | `/listClients${`?${string}` | `#${string}` | ''}` | `/modals/CustomerDetailModal${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/CustomerDetailModal`; params?: Router.UnknownInputParams; } | { pathname: `/customerDetailModal`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}` | `/`; params?: Router.UnknownInputParams; } | { pathname: `${'/(tabs)'}/listClients` | `/listClients`; params?: Router.UnknownInputParams; } | { pathname: `/modals/CustomerDetailModal`; params?: Router.UnknownInputParams; };
    }
  }
}
