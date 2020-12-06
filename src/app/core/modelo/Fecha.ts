export class Fecha {
    constructor(
        public id: string,
        public dia: string,
        public diaSemana: string,
        public semana: string
    ) {
    }

    public toString(): string {
        return this.diaSemana+" "+ this.dia;
    }
}
