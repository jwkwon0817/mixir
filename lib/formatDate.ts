export default function formatDate(date: Date | string | number, format: string) {
    const d = new Date(date);

    const tokens: { [key: string]: string } = {
        'YYYY': d.getFullYear().toString(),
        'YY': d.getFullYear().toString().slice(-2),
        'MM': (d.getMonth() + 1).toString().padStart(2, '0'),
        'DD': d.getDate().toString().padStart(2, '0'),
        'HH': d.getHours().toString().padStart(2, '0'),
        'mm': d.getMinutes().toString().padStart(2, '0'),
        'ss': d.getSeconds().toString().padStart(2, '0'),
        'M': (d.getMonth() + 1).toString(),
        'D': d.getDate().toString(),
        'H': d.getHours().toString(),
        'm': d.getMinutes().toString(),
        's': d.getSeconds().toString()
    };

    return Object.keys(tokens).reduce((result, token) => {
        return result.replace(token, tokens[token]);
    }, format);
};

