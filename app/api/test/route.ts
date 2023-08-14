import { NextResponse } from 'next/server';
// import speedtest from '@/utils/speedtest';
// @ts-ignore
import FastSpeedTest from 'fast-speedtest-api';
import cors from 'cors';

export async function GET(req: Request) {
    // const results = await speedtest()
    cors({
        origin: ['http://localhost:3000', 'https://costanet.vercel.app'],
        methods: ['GET'],
    })
    req.headers.set("Access-Control-Allow-Origin", "*")
    const speedtest = new FastSpeedTest({
        token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
        verbose: false, // default: false
        timeout: 10000, // default: 5000
        https: true, // default: true
        urlCount: 5, // default: 5
        bufferSize: 8, // default: 8
        unit: FastSpeedTest.UNITS.Mbps, // default: Bps
        proxy: 'http://optional:auth@my-proxy:123' // default: undefined

    })


    const results = await speedtest.getSpeed()



    return NextResponse.json({
        results
    })
}
