export declare const useAuth: () => {
    token: string | null;
    setToken: ((token: string) => void) | undefined;
    logout: (() => void) | undefined;
};
