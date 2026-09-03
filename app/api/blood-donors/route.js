import { NextResponse } from 'next/server';
import { supabase, isSupabaseConfigured } from '@/lib/supabase';

// Supabase is optional at build time, so every handler checks before using it.
const notConfigured = () =>
    NextResponse.json({ error: 'Database is not configured' }, { status: 503 });

export async function GET() {
    if (!isSupabaseConfigured) return notConfigured();

    try {
        const { data, error } = await supabase
            .from('blood_donors')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error('Error fetching donors:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    if (!isSupabaseConfigured) return notConfigured();

    try {
        const data = await req.json();

        // insert data to 'blood_donors' table
        const { data: insertedData, error } = await supabase
            .from('blood_donors')
            .insert([data])
            .select();

        if (error) {
            console.error('Supabase error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        return NextResponse.json({ message: 'Donor registered successfully', data: insertedData }, { status: 201 });
    } catch (error) {
        console.error('Error inserting donor:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

