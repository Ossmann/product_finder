'use server';

import { z } from 'zod';
import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
``

enum MuseumCategory {
    NATURAL_HISTORY = "Natural History",
    SCIENCE = "Science",
    ART = "Art",
}

const FormSchema = z.object({
    id: z.string(),
    museumCategory: z.string(),
    targetAudience: z.string(),
    medium: z.number(),
    platform: z.number(),
    customerJourney: z.number(),
    frequencyExhibitions: z.number(),
    date: z.string(),
});

const CreateSearchProfile = FormSchema.omit({ id: true, date: true });

export async function createSearchProfile(formData: FormData) {
    const { museumCategory, targetAudience, medium, platform, customerJourney, frequencyExhibitions } = CreateSearchProfile.parse({
      museumCategory: formData.get('museumCategory'),
    //   targetAudience: formData.get('targetAudience'),
    //   medium: formData.get('medium'),
    //   platform: formData.get('platform'),
    //   customerJourney: formData.get('customerJourney'),
    //   frequencyExhibitions: formData.get('frequencyExhibitions'),
    targetAudience: "Kids",
    medium: 1,
    platform: 1,
    customerJourney: 1,
    frequencyExhibitions: 1,
    });
const date = new Date().toISOString().split('T')[0];

await sql`
        INSERT INTO MuseumSearchProfiles (museumCategory, targetAudience, medium, platform, customerJourney, frequencyExhibitions, date)
        VALUES (${museumCategory}, ${targetAudience}, ${medium}, ${platform}, ${customerJourney}, ${frequencyExhibitions}, ${date})
    `;

    revalidatePath('/');
    redirect('/');
}

