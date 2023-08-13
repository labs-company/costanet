import { exec } from 'child_process';

const COMMAND = "speedtest --format=json-pretty"

interface IPing {
    jitter: number;
    latency: number;
    low: number;
    high: number;
}

interface IBytes {
    bytes: number
}

interface ITestFormat {
    ping: IPing;
    download: IBytes;
    upload: IBytes;
    isp: string;
    externalIp: string
}


async function runSpeedTest(): Promise<ITestFormat | null> {

    return new Promise((resolve, reject) => {

        console.log('Evaluando la velocidad de tu internet');

        exec(COMMAND, (err, stdout, stderr) => {
            if (err) {
                console.error(`Error executing Speedtest ${err}`)
                reject(err)
                return;
            };


            try {
                const resultSpeedTest: ITestFormat = JSON.parse(stdout);
                resolve(resultSpeedTest);
            } catch (parseError) {
                console.error(`Error al analizar JSON: ${parseError}`);
                reject(parseError);
            }
        })
    })
}
export default runSpeedTest