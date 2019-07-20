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
    SECCIONES?: Seccion[];
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
    PREGUNTAS?: Pregunta[];
}

export interface Pregunta {
    PK_PREGUNTA?: number;
    ORDEN?: number;
    PLANTEAMIENTO?: string;
    TEXTO_GUIA?: string;
    FK_TIPO_PREGUNTA?: number;
    NOMBRE_TIPO_PREGUNTA?: string;
    FK_SECCION?: number;
    FK_USUARIO_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_REGISTRO?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
    RESPUESTAS?: RespuestaPosible[];
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

export interface RespuestaPosible {
    PK_RESPUESTA_POSIBLE?: number;
    RESPUESTA?: string;
    FK_PREGUNTA?: number;
    FK_USUARIO_REGISTRO?: number;
    FECHA_REGISTRO?: number;
    FK_USUARIO_MODIFICACION?: number;
    FECHA_MODIFICACION?: number;
    BORRADO?: number;
}
