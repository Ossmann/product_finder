// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// For simplicity of teaching, we're manually defining these types.
// However, these types are generated automatically if you're using an ORM such as Prisma.

export type SearchProfile = {
    id: string;
    companyName: string;
    museumCategory: string;
    targetAudience: string;
    medium: number;
    platform: string[];
    customerJourney: number;
    frequencyExhibitions: number;
    date: string;
  };

  export enum MuseumCategory {
    NATURAL_HISTORY = "Natural History",
    SCIENCE = "Science",
    ART = "Art",
    OTHER = "Other",
}