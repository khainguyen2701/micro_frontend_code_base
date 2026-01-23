
    export type RemoteKeys = 'product_remotes_app';
    type PackageType<T> = T extends 'product_remotes_app' ? typeof import('product_remotes_app') :any;