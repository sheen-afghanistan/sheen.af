import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req) {
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
