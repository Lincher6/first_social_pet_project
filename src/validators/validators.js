export const required = (value) => {
    return value ? undefined : 'обязательное поле'
}

export const maxLength = length => (value) => {
    return value.length < length ? undefined : `много символов(${length} макс)`
}

export const minLength = length => (value) => {
    return value.length > length ? undefined : `не достаточно символов(${length} мин)`
}