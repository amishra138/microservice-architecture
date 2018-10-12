export interface BroadcastEvent {
    key: Events;
    data?: any;
}
export enum Events {
    LOGGED_IN = 'LOGGED IN'
}
