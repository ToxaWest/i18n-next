export default async function getMessages(arr, locale) {
    const messages = {};
    for (let m in arr){
        messages[arr[m]] = (await import('../../../src/messages/' + locale + '/' + arr[m] + '.json')).default;
    }
    return messages
}
