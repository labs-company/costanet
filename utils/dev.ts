export const URL_API = {
    local: "http://localhost:3000/api/test",
    production: "http://164.90.158.172/api/test"
}
interface IPing {
    jitter: number;
    latency: number;
    low: number;
    high: number;
}

interface IBytes {
    bytes: number;
    elapsed: number;
}

export interface ITestFormat {
    ping: IPing;
    download: IBytes;
    upload: IBytes;
    isp: string;
    externalIp?: string
}
