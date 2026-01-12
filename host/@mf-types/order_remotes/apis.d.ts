
    export type RemoteKeys = 'order_remotes';
    type PackageType<T> = T extends 'order_remotes' ? typeof import('order_remotes') :any;