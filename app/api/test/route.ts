import { NextResponse } from 'next/server';
// import speedtest from '@/utils/speedtest';
// @ts-ignore
import FastSpeedTest from 'fast-speedtest-api';

export async function GET() {
    // const results = await speedtest()

    const results = {}
    return NextResponse.json({
        results
    })
}
