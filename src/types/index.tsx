export interface StoreState {
    languageName: string;
    enthusiasmLevel: number;
    authed: boolean;
}

export interface Credentials {
    username: string;
    password: string;
    email: string;
    state: any;
}

export interface State {
    state: any;
    auth: any;
}