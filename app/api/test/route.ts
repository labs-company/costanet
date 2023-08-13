import { NextResponse } from 'next/server';
import speedtest from '@/utils/speedtest';

export async function GET() {
    const result = await speedtest()
    console.log(result);
    return NextResponse.json({
        message: "Hello APi"
    })
}

export function POST() {
    return NextResponse.json({
        date: "datos"
    })
}