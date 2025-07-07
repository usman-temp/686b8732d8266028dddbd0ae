import { NextResponse } from 'next/server';

let userName = '';

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    userName = name;
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save name' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ name: userName });
}
