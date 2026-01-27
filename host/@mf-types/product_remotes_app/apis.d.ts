
    export type RemoteKeys = 'product_remotes_app' | 'product_remotes_app/router';
    type PackageType<T> = T extends 'product_remotes_app/router' ? typeof import('product_remotes_app/router') :T extends 'product_remotes_app' ? typeof import('product_remotes_app') :any;