export function formateDate(date: string) {
    let data = new Date(date),
        dia = (data.getDate() + 1).toString().padStart(2, '0'),
        mes = (data.getMonth() + 1).toString().padStart(2, '0'),
        ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}
