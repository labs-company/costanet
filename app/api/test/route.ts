import { NextResponse } from 'next/server';
// import speedtest from '@/utils/speedtest';
// @ts-ignore
import FastSpeedTest from 'fast-speedtest-api';

export async function GET() {
    // const results = await speedtest()

    const speedtest = new FastSpeedTest({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
        unit: FastSpeedTest.UNITS.Mbps, // default: Bps
        proxy: 'http://optional:auth@my-proxy:123' // def

    })

    const results = await speedtest.getSpeed()

    return NextResponse.json({
        results
    })
}
