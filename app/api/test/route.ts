import { NextResponse } from 'next/server';
// import speedtest from '@/utils/speedtest';
// @ts-ignore
// import FastSpeedTest from 'fast-speedtest-api';
import https from "node:https";

export async function GET() {
    // const results = await speedtest()

    // const speedtest = new FastSpeedTest({
    //     token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
    //     unit: FastSpeedTest.UNITS.Mbps, // default: Bps
    //     proxy: 'http://optional:auth@my-proxy:123' // def

    // })



    const startTime = Date.now();

    const results = [];
    https.get('https://fast.com/', (res) => {

        res.on('data', (chunk) => {
            data.push(chunk);
        });

        res.on('end', () => {
            const endTime = Date.now();
            const duration = (endTime - startTime) / 1000; // en segundos

            const totalBytes = Buffer.concat(data).length;
            const speed = (totalBytes / duration) / (1024 * 1024); // en MB/s

            data.push({
                totalBytes,
                speed,
            })
            console.log(`Velocidad aproximada: ${speed.toFixed(2)} MB/s`);
        });
    }).on('error', (err) => {
        console.error('Error:', err);
        return;
    });



    // const results = await speedtest.getSpeed()

    return NextResponse.json({
        results
    })
}
