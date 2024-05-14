
class PedidoEstadoDTO {
    private _id_pedido: number;
    private _estado: string;

    constructor(id_pedido: number, estado: string) {
        this._id_pedido = id_pedido;
        this._estado = estado;
    }

    get id_pedido(): number {
        return this.id_pedido;
    }

    get estado(): string {
        return this.estado;
    }

    set id_pedido(id_pedido: number) {
        this._id_pedido = id_pedido;
    }

    set estado(estado: string) {
        this._estado = estado;
    }
}

export default PedidoEstadoDTO;