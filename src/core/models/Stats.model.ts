export interface SwaggerStats {
    startts:        number;
    all:            { [key: string]: number };
    egress:         { [key: string]: number };
    sys:            Sys;
    name:           string;
    version:        string;
    hostname:       string;
    ip:             string;
    apdexThreshold: number;
    method:         Method;
    timeline:       Timeline;
}

export interface Method {
    GET:    { [key: string]: number };
    POST:   { [key: string]: number };
    PUT:    { [key: string]: number };
    DELETE: { [key: string]: number };
    HEAD:   { [key: string]: number };
}

export interface Sys {
    rss:       number;
    heapTotal: number;
    heapUsed:  number;
    external:  number;
    cpu:       number;
    lag?:      number;
    maxlag?:   number;
}

export interface Timeline {
    settings: Settings;
    data:     { [key: string]: Datum };
}

export interface Datum {
    stats: { [key: string]: number };
    sys:   Sys;
}

export interface Settings {
    bucket_duration: number;
    bucket_current:  number;
    length:          number;
}
