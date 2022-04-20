export default function Choose(condition, list) {
    for (const item of list) {
        if (item.state === condition) {
            return item.value;
        }
    }
}
