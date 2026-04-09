import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

// Proxy ke Apps Script — URL-nya tidak pernah expose ke client
export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const action    = searchParams.get('action') || 'data';
  const startDate = searchParams.get('startDate');
  const endDate   = searchParams.get('endDate');

  const appsScriptUrl = process.env.APPS_SCRIPT_URL;
  if (!appsScriptUrl) {
    return NextResponse.json({ error: 'APPS_SCRIPT_URL not configured' }, { status: 500 });
  }

  let url = `${appsScriptUrl}?action=${action}`;
  if (startDate) url += `&startDate=${startDate}`;
  if (endDate)   url += `&endDate=${endDate}`;

  try {
    const res = await fetch(url, {
      cache: 'no-store',
      // Apps Script kadang butuh follow redirect
      redirect: 'follow',
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: `Apps Script returned ${res.status}` },
        { status: 502 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error('Apps Script fetch error:', err);
    return NextResponse.json(
      { error: 'Failed to fetch from Apps Script' },
      { status: 500 }
    );
  }
}
