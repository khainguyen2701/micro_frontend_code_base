
    export type RemoteKeys = 'order_remotes' | 'order_remotes/css';
    type PackageType<T> = T extends 'order_remotes/css' ? typeof import('order_remotes/css') :T extends 'order_remotes' ? typeof import('order_remotes') :any;