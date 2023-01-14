export enum EnumChannels {
    SMS = 1,
    EMAIL = 2,
    PUSH_NOTIFICATION = 3
}

export const EnumChannelsLabel = new Map<number, string>([
    [EnumChannels.SMS, 'SMS'],
    [EnumChannels.EMAIL, 'E-mail'],
    [EnumChannels.PUSH_NOTIFICATION, 'Push notification']
]);

export const EnumChannelsKey = new Map<number, string>([
    [EnumChannels.SMS, 'SMS'],
    [EnumChannels.EMAIL, 'EMAIL'],
    [EnumChannels.PUSH_NOTIFICATION, 'PUSH_NOTIFICATION']
]);
