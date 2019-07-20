export interface Aplicacionencuesta {
    PK_APLICACION_ENCUESTA?: number;
    FECHA_APLICACION?: number;
    FK_USUARIO?: number;
    FK_ENCUESTA?: number;
    FK_USUARIO_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_REGISTRO?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
}

export interface Usuario {
    PK_USUARIO?: number;
    name?: string;
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
