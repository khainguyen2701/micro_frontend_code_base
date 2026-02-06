
    export type RemoteKeys = 'libs';
    type PackageType<T> = T extends 'libs' ? typeof import('libs') :any;