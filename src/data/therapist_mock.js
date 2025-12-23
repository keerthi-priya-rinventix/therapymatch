// File: src/data/therapist_mock.js

export const MOCK_PROVIDER_DATA = {
  stats: {
    activePatients: 18,
    pendingRequests: 4,
    matchRate: "94%",
    avgPatientMood: "+12%"
  },
  
  // These are the "Incoming Leads" from the matching wizard
  matchRequests: [
    {
      id: "p1",
      name: "Alex R.",
      matchScore: 98,
      topConcerns: ["Anxiety", "Work Stress"],
      requestedOn: "2 hours ago",
      compatibilityNote: "High alignment on Cognitive Behavioral preferences and evening availability."
    },
    {
      id: "p2",
      name: "Jordan M.",
      matchScore: 92,
      topConcerns: ["Lgbtq+ Issues", "Relationship Stress"],
      requestedOn: "5 hours ago",
      compatibilityNote: "Matches your specialty in LGBTQ+ affirmative care."
    }
  ],

  // Current caseload
  activePatients: [
    { id: "a1", name: "Sarah J.", lastSession: "Oct 12", frequency: "Weekly", status: "Stable" },
    { id: "a2", name: "Michael K.", lastSession: "Oct 14", frequency: "Bi-weekly", status: "Progressing" },
    { id: "a3", name: "Elena W.", lastSession: "Oct 15", frequency: "Weekly", status: "Crisis Support" }
  ]
};