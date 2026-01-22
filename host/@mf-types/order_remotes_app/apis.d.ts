
    export type RemoteKeys = 'order_remotes_app' | 'order_remotes_app/router' | 'order_remotes_app/setAuthAdapter';
    type PackageType<T> = T extends 'order_remotes_app/setAuthAdapter' ? typeof import('order_remotes_app/setAuthAdapter') :T extends 'order_remotes_app/router' ? typeof import('order_remotes_app/router') :T extends 'order_remotes_app' ? typeof import('order_remotes_app') :any;