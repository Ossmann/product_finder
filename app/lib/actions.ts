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
    medium: z.string(),
    targetAudience: z.string(),
    platform: z.string(),
    customerJourney: z.string(),
    frequencyExhibitions: z.string(),
    date: z.string(),
});

const CreateSearchProfile = FormSchema.omit({ id: true, date: true });

export async function createSearchProfile(formData: FormData) {
    const { museumCategory, medium, targetAudience, platform, customerJourney, frequencyExhibitions } = CreateSearchProfile.parse({
      museumCategory: formData.get('museumCategory'),
      medium: formData.get('medium'),
      targetAudience: formData.get('targetAudience'),
      platform: formData.get('platform'),
      customerJourney: formData.get('customerJourney'),
      frequencyExhibitions: formData.get('frequencyExhibitions'),
    });
const date = new Date().toISOString().split('T')[0];

await sql`
        INSERT INTO MuseumSearchProfiles (museumCategory, medium, targetAudience, platform, customerJourney, frequencyExhibitions, date)
        VALUES (${museumCategory}, ${medium}, ${targetAudience}, ${platform}, ${customerJourney}, ${frequencyExhibitions}, ${date})
    `;

    revalidatePath('/');
    redirect('/recommendations');
}

