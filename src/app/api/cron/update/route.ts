import { NextRequest, NextResponse } from 'next/server';
import { fetchAndStorePartialData } from '@/app/api/cron/v2/dataManager';

export async function GET() {
    try {
        // Call your data fetch and store function
        await fetchAndStorePartialData();

        // Respond with a success message
        return NextResponse.json({ message: 'Cron job executed successfully.' });
    } catch (error) {
        console.error('Error executing cron job:', error);
        return NextResponse.json({ error: 'Failed to execute cron job.' }, { status: 500 });
    }
}
