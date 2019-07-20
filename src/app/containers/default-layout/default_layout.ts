export interface Usuario {
    PK_USUARIO?: number;
    name?: string;
    ESTADO?: number;
}

export interface Encuesta {
    PK_ENCUESTA?: number;
    NOMBRE?: string;
    OBJETIVO?: string;
    INSTRUCCIONES?: string;
    FK_USUARIO_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_REGISTRO?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
}
