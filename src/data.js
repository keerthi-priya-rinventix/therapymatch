// File: src/data.js

// --- Therapy Match Questionnaire Options (Steps 2-6) ---

export const OPTIONS = {
    // --- Step 2: Basic Information Collection ---
    basic: {
        therapyTypes: [
            { id: 'myself', label: 'Myself', type: 'individual' },
            { id: 'couple', label: 'My relationship/marriage', type: 'couple' },
            { id: 'child', label: 'My child', type: 'child' },
            { id: 'family', label: 'My family', type: 'family' },
            // Added hasInput for user specification
            { id: 'other', label: 'Other', type: 'other', hasInput: true } 
        ],
        history: [
            'Yes, currently in therapy but seeking a change', 
            'Yes, in the past', 
            'No, this is my first time'
        ],
        urgency: [
            'Immediate (within days)', 
            'Soon (within 1-2 weeks)', 
            'Flexible (within a month)'
        ]
    },

    // --- Step 3: Situation-Specific Questions ---
    individual: {
        concerns: [
            'Anxiety', 'Depression', 'Stress management', 'Trauma or PTSD', 
            'Grief or loss', 'Life transitions', 'Self-esteem', 'Identity questions', 
            'Relationship issues', 'Work-related stress', 
            // Added hasInput for user specification
            { label: 'Other', hasInput: true } 
        ],
        approaches: [
            'Cognitive Behavioral Therapy (CBT)', 'Mindfulness-based approaches', 
            'Psychodynamic therapy', 'Solution-focused therapy', 
            'Not sure/open to recommendations', 
            // Added hasInput for user specification
            { label: 'Other', hasInput: true } 
        ],
        communicationPreference: [
            'Direct and straightforward communication', 
            'Gentle and supportive approach', 
            'Mix of both depending on the situation', 
            'Not sure/no preference'
        ]
    },

    couple: {
        relationshipStages: [
            'Building a new relationship', 'Established relationship facing challenges', 
            'Considering separation or divorce', 'Navigating separation or divorce', 
            'Post-divorce co-parenting'
        ],
        concerns: [
            'Communication difficulties', 'Trust issues', 'Intimacy concerns', 
            'Parenting disagreements', 'Financial conflicts', 'Life transitions (moving, career changes, etc.)', 
            'Different life goals', 'Recovering from infidelity', 'Managing conflict constructively', 
            // Added hasInput for user specification
            { label: 'Other', hasInput: true } 
        ],
        partnerCommitment: [
            'Yes, we both want to participate', 
            'One partner is more motivated than the other', 
            'Unsure of partner\'s commitment'
        ]
    },

    child: {
        ageGroups: ['0-5 years', '6-10 years', '11-13 years', '14-17 years'],
        concerns: [
            'Behavioral issues', 'Emotional regulation', 'Social skills', 
            'Academic challenges', 'Anxiety or fears', 'Depression or mood changes', 
            'Trauma or significant life changes', 'Autism spectrum disorder', 
            'ADHD or attention issues', 'Other developmental concerns', 
            // Added hasInput for user specification
            { label: 'Other', hasInput: true } 
        ],
        diagnosisStatus: [
            // Added hasInput for diagnosis specification
            { label: 'Yes', hasInput: true }, 
            'Suspected but not diagnosed', 
            'No', 
            'Prefer not to say'
        ]
    },

    // --- Step 4: Practical Preferences ---
    logistics: {
        formats: [
            'In-person sessions only', 
            'Virtual sessions only', 
            'Hybrid approach (mix of in-person and virtual)', 
            'No preference'
        ],
        availability: [
            'Weekdays during business hours', 
            'Weekday evenings', 
            'Weekends', 
            'Flexible/varies'
        ],
        insurance: [
            // Added hasInput for provider specification
            { label: 'Yes (please specify provider)', hasInput: true }, 
            'No, will be self-pay', 
            'Not sure'
        ],
        budgets: [
            '$50-100', 
            '$100-150', 
            '$150-200', 
            '$200+', 
            'Prefer sliding scale options'
        ]
    },
// --- Step 5: Cultural and Personal Preferences (Detailed) ---
    personal: {
        // Importance rating scale options
        importanceScale: ['Not Important', 'Somewhat Important', 'Important', 'Very Important'],
        
        culturalFactors: [
            'Therapist shares my cultural background',
            'Therapist has experience working with my cultural group',
            'Therapist understands cultural nuances affecting mental health',
            'Therapist incorporates culturally relevant healing practices',
            'Therapist recognizes cultural influences on family dynamics'
        ],
        
        religiousFactors: [
            'Therapist shares my religious/spiritual perspective',
            'Therapist respects my religious/spiritual beliefs',
            'Therapist can integrate spiritual elements into treatment',
            'Therapist understands religious influences on my worldview'
        ],
        
        identityFactors: [
            'Therapist is the same gender as me',
            'Therapist has a similar age range to me',
            'Therapist is LGBTQ+ affirming',
            'Therapist has experience with my specific ethnic background'
        ],
        
        languageOptions: [
            // Added hasInput for language specification
            { label: 'I prefer therapy in a language other than English', hasInput: true }, 
            'I require interpretation services'
        ],
        
        languageFluencyImportance: ['Not Important', 'Somewhat Important', 'Important', 'Very Important'],
        
        therapistQualities: [
            'Warm and empathetic', 'Direct and straightforward', 'Challenging when needed',
            'Structured and organized', 'Flexible and adaptive', 'Experience-focused', 
            'Solution-oriented', 'Attentive listener', 'Provides clear feedback', 
            'Uses appropriate humor', 'Patient and calm', 'Energetic and engaging', 
            'Transparent about the therapy process', 'Collaborative in approach', 
            'Validates my experiences'
        ],
        
        therapeuticStyle: [
            'I prefer a therapist who primarily listens and guides me to my own insights',
            'I prefer a therapist who provides direct advice and concrete suggestions',
            'I prefer a therapist who balances listening with active guidance',
            'I prefer a therapist who assigns "homework" between sessions',
            'I prefer a therapist who focuses mainly on our session time',
            'I prefer a therapist who explains the therapeutic process and techniques',
            'I prefer a therapist who uses a more intuitive approach'
        ],
        
        additionalConsiderations: [
            'Immigration experiences', 'Cultural traditions or practices', 
            'Family values or dynamics', 'Religious or spiritual practices', 
            'Racial or ethnic identity experiences', 'LGBTQ+ identity experiences', 
            'Disability considerations', 
            // Added hasInput for user specification
            { label: 'Other', hasInput: true }
        ],
        
        previousTherapyQualities: [
            'They listened without judgment', 'They challenged my thinking', 
            'They provided practical tools', 'They were culturally sensitive', 
            'They respected my pace', 'They were knowledgeable about my specific concerns', 
            'They created a safe space', 
            // Added hasInput for user specification
            { label: 'Other', hasInput: true }
        ]
    },

    // --- Step 6: Completion/Next Steps ---
    completion: {
        nextSteps: [
            'See your matches now', 
            'Refine your answers', 
            'Save and continue later (create account/login)'
        ]
    }
};

// --- Mock Therapist Data (for results page) ---

export const MOCK_THERAPISTS = [
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

// --- Dashboard Chart Data ---

export const USAGE_DATA = [
    { month: 'Jan', signups: 120, matches_saved: 40, consults: 20 },
    { month: 'Feb', signups: 150, matches_saved: 55, consults: 28 },
    { month: 'Mar', signups: 190, matches_saved: 70, consults: 35 },
    { month: 'Apr', signups: 220, matches_saved: 95, consults: 48 },
    { month: 'May', signups: 280, matches_saved: 120, consults: 60 },
    { month: 'Jun', signups: 350, matches_saved: 150, consults: 75 },
];

// --- Dashboard Key Metrics ---

export const KEY_METRICS = {
    matchesMade: 1240,
    consultsBooked: 75,
    userSavedMatches: 4, // Personalized for the logged-in user
};