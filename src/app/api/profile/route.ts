import { NextResponse } from 'next/server';

let profileData = { name: '' };

export async function POST(request: Request) {
  try {
    const { name } = await request.json();
    
    if (typeof name !== 'string' || name.trim().toLowerCase() !== 'usman') {
      return NextResponse.json(
        { error: 'Invalid name. Must be "Usman"' },
        { status: 400 }
      );
    }

    profileData.name = name.trim();
    return NextResponse.json({ success: true, name: profileData.name });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(profileData);
}
