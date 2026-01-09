
    export type RemoteKeys = 'dashboard_remotes/Header';
    type PackageType<T> = T extends 'dashboard_remotes/Header' ? typeof import('dashboard_remotes/Header') :any;