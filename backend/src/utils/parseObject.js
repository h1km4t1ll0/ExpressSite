export function parseObject(data) {
    try {
        return JSON.parse(data.body);
    } catch (e) {
        return false;
    }
}
