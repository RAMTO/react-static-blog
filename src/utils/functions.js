export function getDataFromItem(item, fields) {
    let data = {};
    fields.forEach(field => data[field] = item.fields[field])

    return data
}