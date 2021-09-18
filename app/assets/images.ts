
interface ImageSource {
    tabProfileActive: {uri: string},
    tabProfileDeactive: {uri: string},
    iconQrCode: {uri: string},
    iconSettingAccount: {uri: string},
    iconSettingFriend: {uri: string},
    iconSettingNotification: {uri: string},
    iconSettingSupport: {uri: string},
    iconSettingConnect: {uri: string},
    iconSettingLogout: {uri: string},
    tabFriendActive: {uri: string},
    tabFriendDeactive: {uri: string},
    glassesDevice: {uri: string},
    iconForesy: {uri: string},
}

export const Img: ImageSource = {
    tabProfileActive: require('../../assets/images/tab-profile-active.png'),
    tabProfileDeactive: require('../../assets/images/tab-profile-deactive.png'),
    iconQrCode: require('../../assets/images/qr-code.png'),
    iconSettingAccount: require('../../assets/images/icon-setting-account.png'),
    iconSettingFriend: require('../../assets/images/icon-setting-friend.png'),
    iconSettingNotification: require('../../assets/images/icon-setting-notification.png'),
    iconSettingSupport: require('../../assets/images/icon-setting-support.png'),
    iconSettingConnect: require('../../assets/images/icon-setting-connect.png'),
    iconSettingLogout: require('../../assets/images/icon-setting-logout.png'),
    tabFriendActive: require('../../assets/images/tab-friend-active.png'),
    tabFriendDeactive: require('../../assets/images/tab-friend-deactive.png'),
    glassesDevice: require('../../assets/images/glasses-device.png'),
    iconForesy: require('../../assets/images/icon-foresy.png'),
};