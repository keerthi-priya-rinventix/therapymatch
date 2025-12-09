// Source: TherapyMatch Document - EXPANDED DATA

export const OPTIONS = {
    therapyTypes: [
        { id: 'myself', label: 'Myself', type: 'individual' },
        { id: 'couple', label: 'My relationship/marriage', type: 'couple' },
        { id: 'child', label: 'My child', type: 'child' },
        { id: 'family', label: 'My family', type: 'family' }
    ],
    history: ['Yes, currently in therapy', 'Yes, in the past', 'No, this is my first time'],
    
    // Concerns based on document context
    individualConcerns: [
        'Anxiety', 'Depression', 'Stress management', 'Trauma or PTSD',  
        'Grief or loss', 'Life transitions', 'Self-esteem', 
        'Relationship issues', 'Work-related stress', 'Eating Disorders',
        'Bipolar Disorder', 'Sleep Issues'
    ],
    coupleConcerns: [
        'Communication difficulties', 'Trust issues', 'Intimacy concerns', 
        'Parenting disagreements', 'Financial conflicts', 'Managing conflict',
        'Pre-marital counseling', 'Separation/Divorce'
    ],
    childConcerns: [
        'Behavioral issues', 'Emotional regulation', 'Social skills', 
        'Academic challenges', 'Anxiety or fears', 'ADHD', 'Autism Spectrum Support'
    ],

    // Therapeutic Approaches
    approaches: [
        'Cognitive Behavioral Therapy (CBT)', 'Mindfulness-based', 
        'Psychodynamic therapy', 'Solution-focused therapy', 
        'Dialectical Behavior Therapy (DBT)', 'Art Therapy',
        'EMDR (Trauma)', 'Not sure/open to recommendations'
    ],

    // Therapist Qualities (Select top 5)
    qualities: [
        'Warm and empathetic', 'Direct and straightforward', 'Challenging when needed',
        'Structured and organized', 'Flexible and adaptive', 'Solution-oriented', 
        'Attentive listener', 'Provides clear feedback', 'Collaborative', 'Highly Experienced', 
        'Uses Humor Appropriately'
    ],

    // Logistics
    formats: ['In-person', 'Virtual', 'Hybrid', 'No Preference'],
    budgets: ['$50-100', '$100-150', '$150-200', '$200+', 'Sliding Scale'],
    availability: ['Weekdays (Business Hours)', 'Weekday Evenings', 'Weekends'],

    // NEW: Demographic and Insurance Data for advanced filtering
    languages: ['English', 'Spanish', 'Mandarin', 'French', 'ASL', 'Other'],
    ageGroups: ['Child (0-12)', 'Adolescent (13-17)', 'Adult (18-64)', 'Senior (65+)'],
    insuranceProviders: ['Aetna', 'Blue Cross Blue Shield (BCBS)', 'Cigna', 'UnitedHealthcare (UHC)', 'Kaiser Permanente', 'Out-of-Network/Self-Pay']
};

// Mock Data for Results Page - EXPANDED
export const MOCK_THERAPISTS = [
    // Existing Therapists
    {
        id: 1,
        name: "Dr. Sarah Johnson, Ph.D, LMFT",
        matchScore: 98,
        specialties: ["Couples therapy", "Communication", "Co-parenting"],
        approach: "Solution-focused & Emotionally-focused",
        availability: "Tue, Thu (Eve), Sat",
        cost: 175,
        location: "3.2 miles away",
        image: "https://i.pravatar.cc/150?u=sarah",
        quote: "I believe that even in the most challenging transitions, we can find paths forward that honor everyone's needs.",
        insurance: ['BCBS', 'Aetna']
    },
    {
        id: 2,
        name: "David Chen, LCSW",
        matchScore: 94,
        specialties: ["Anxiety", "Work Stress", "CBT"],
        approach: "Cognitive Behavioral & Mindfulness",
        availability: "Mon-Fri (Business Hours)",
        cost: 150,
        location: "Virtual Only",
        image: "https://i.pravatar.cc/150?u=david",
        quote: "My goal is to provide you with practical tools to navigate daily stressors with confidence.",
        insurance: ['UHC', 'Cigna']
    },
    {
        id: 3,
        name: "Elena Rodriguez, PsyD",
        matchScore: 89,
        specialties: ["Trauma", "Identity", "LGBTQ+ Affirming"],
        approach: "Psychodynamic & Narrative",
        availability: "Flexible / Varies",
        cost: 190,
        location: "5 miles away",
        image: "https://i.pravatar.cc/150?u=elena",
        quote: "Understanding your story is the first step to writing a new chapter.",
        insurance: ['Out-of-Network/Self-Pay']
    },
    // New Therapists for diversity
    {
        id: 4,
        name: "Dr. Kenji Sato, PsyD",
        matchScore: 85,
        specialties: ["Child & Adolescent", "ADHD", "Family Therapy"],
        approach: "Play Therapy & CBT",
        availability: "Wed, Fri (Day)",
        cost: 210,
        location: "In-person/Hybrid",
        image: "https://i.pravatar.cc/150?u=kenji",
        quote: "Working with children requires patience and a creative approach to communication.",
        insurance: ['Kaiser Permanente']
    },
    {
        id: 5,
        name: "Jessica Lee, MA, ATR",
        matchScore: 91,
        specialties: ["Trauma", "Grief", "Art Therapy"],
        approach: "Psychodynamic & Art Therapy",
        availability: "Tue, Thu (Eve)",
        cost: 165,
        location: "Virtual Only",
        image: "https://i.pravatar.cc/150?u=jessica",
        quote: "Art can be a powerful language when words fail.",
        insurance: ['Aetna', 'UHC']
    },
    {
        id: 6,
        name: "Robert Smith, LPC",
        matchScore: 78,
        specialties: ["Substance Abuse", "Depression", "Motivational Interviewing"],
        approach: "Motivational Interviewing",
        availability: "Mon, Wed, Fri (Day)",
        cost: 110,
        location: "Virtual Only",
        image: "https://i.pravatar.cc/150?u=robert",
        quote: "Change is hard, but together we can find the motivation within you.",
        insurance: ['BCBS', 'Sliding Scale']
    }
];

export const USAGE_DATA = [
    { month: 'Jan', signups: 120, matches_saved: 40, consults: 20 },
    { month: 'Feb', signups: 150, matches_saved: 55, consults: 28 },
    { month: 'Mar', signups: 190, matches_saved: 70, consults: 35 },
    { month: 'Apr', signups: 220, matches_saved: 95, consults: 48 },
    { month: 'May', signups: 280, matches_saved: 120, consults: 60 },
    { month: 'Jun', signups: 350, matches_saved: 150, consults: 75 },
];

export const KEY_METRICS = {
    matchesMade: 1240,
    consultsBooked: 75,
    userSavedMatches: 4, // Personalized for the logged-in user
};