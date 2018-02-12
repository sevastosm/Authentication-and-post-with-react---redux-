export interface StoreState {
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