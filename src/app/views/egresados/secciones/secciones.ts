export interface Seccion {
    PK_SECCION?: number;
    NUMERO_SECCION?: number;
    NOMBRE_SECCION?: string;
    OBJETIVO?: string;
    INSTRUCCIONES?: string;
    FK_ENCUESTA?: number;
    FK_USUARIO_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_REGISTRO?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
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
