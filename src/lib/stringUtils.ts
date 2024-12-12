export const camelToDisplay = (value: string) => value
    .replace(/((?!^)[A-Z])/g, ' $1')
    .replace(/^./, function (str) { return str.toUpperCase(); })