export default class{
    static yymmdd = {
        formatar(dt: Date, separator: string = "-"){
            const dia = dt.getDate().toString().padStart(2, '0')
            const mes = dt.getMonth().toString().padStart(2, '0')
            return `${dt.getFullYear()}${separator}${mes}${separator}${dia}`;
        }
    }
    static ddmmyy = {
        formatar(dt: Date, separator: string = '/'){
            const dia = dt.getDate().toString().padStart(2, '0')
            const mes = dt.getMonth().toString().padStart(2, '0')
            return `${dia}${separator}${mes}${separator}${dt.getFullYear()}`;
        }
    }
}