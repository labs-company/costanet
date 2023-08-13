import { NextResponse } from 'next/server';
// import speedtest from '@/utils/speedtest';
// @ts-ignore
import FastSpeedTest from 'fast-speedtest-api';

export async function GET() {
    // const results = await speedtest()

    const speedtest = new FastSpeedTest({

        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm", // required
        verbose: true, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5
        bufferSize: 8, // default: 8
        unit: FastSpeedTest.UNITS.Mbps, // default: Bps
        proxy: 'http://optional:auth@my-proxy:123' // def

    })


    const results = await speedtest.getSpeed()

    return NextResponse.json({
        results
    })
}
