export interface Pregunta {
    PK_PREGUNTA?: number;
    ORDEN?: number;
    PLANTEAMIENTO?: string;
    TEXTO_GUIA?: string;
    FK_TIPO_PREGUNTA?: number;
    FK_USUARIO_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_REGISTRO?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
}

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

export interface TipoPregunta {
    PK_TIPO_PREGUNTA?: number;
    NOMBRE_TIPO_PREGUNTA?: string;
    FK_USUARIO_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_REGISTRO?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
}
