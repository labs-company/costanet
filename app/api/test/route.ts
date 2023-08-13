import { NextResponse } from 'next/server';
import speedtest from '@/utils/speedtest';

export async function GET() {
    const results = await speedtest()

    return NextResponse.json({
        results
    })
}
