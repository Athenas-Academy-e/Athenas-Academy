import { getBoletos } from '@/Helpers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const data = await request.json();
    const resultBoleto = await getBoletos(data.numero_lancamento, data.format)
    return NextResponse.json(resultBoleto);
}
