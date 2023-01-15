import appSource from '../../database/data.source';
import { EnumChannels, EnumChannelsKey, EnumChannelsLabel } from './enums/EnumChannels';

export default async function insertLog(channel, user, notification) {
    try {
        await appSource.createQueryBuilder()
            .insert()
            .into('logs')
            .values({
                created_at: getFormatedDate(),
                log: JSON.stringify({
                    application: 'api-subscribers',
                    channel: EnumChannelsLabel.get(parseInt(EnumChannels[channel])),
                    user,
                    notification
                })
            }).execute();
    } catch (error) {
        console.error(`${getFormatedDate()} - Unable to create log. ${EnumChannelsKey.get(parseInt(channel))} - ${user.name}`);
    }
};

function getFormatedDate() {
    return new Date().toISOString().slice(0, 19).replace('T', ' ');
}