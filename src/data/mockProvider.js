// File: src/data/mockProvider.js

export const MOCK_PROVIDER_DATA = {
  // Practice Performance Metrics
  stats: [
    { label: 'Active Patients', value: '24', change: '+2', trend: 'up' },
    { label: 'Match Accuracy', value: '96%', change: '+1.5%', trend: 'up' },
    { label: 'Avg. Recovery Rate', value: '82%', change: '+4%', trend: 'up' },
    { label: 'Inbound Requests', value: '7', change: 'New', trend: 'neutral' }
  ],

  // New Match Requests (Leads generated from the Patient Wizard)
  matchRequests: [
    {
      id: "req_001",
      patientName: "Alex Rivera",
      score: 98,
      compatibility: "High alignment on LGBTQ+ affirmative care and CBT preferences.",
      concerns: ["Workplace Anxiety", "Identity Stress"],
      timestamp: "24 mins ago",
      initialMessage: "I saw that you specialize in tech-industry stress. I'd love to chat."
    },
    {
      id: "req_002",
      patientName: "Jordan Smith",
      score: 92,
      compatibility: "Matches your expertise in trauma-informed somatic therapy.",
      concerns: ["PTSD", "Sleep Disturbances"],
      timestamp: "3 hours ago",
      initialMessage: "Looking for a therapist who understands childhood trauma."
    },
    {
      id: "req_003",
      patientName: "Casey L.",
      score: 89,
      compatibility: "Strong match for your evening availability and sliding scale.",
      concerns: ["Relationship Conflict"],
      timestamp: "5 hours ago",
      initialMessage: "My partner and I are looking for a mediator."
    }
  ],

  // Today's Clinical Schedule
  schedule: [
    { 
      id: "session_1", 
      time: "09:00 AM", 
      patient: "Sarah J.", 
      type: "Follow-up", 
      status: "Confirmed",
      notes: "Focus on boundary setting exercises."
    },
    { 
      id: "session_2", 
      time: "10:30 AM", 
      patient: "Michael R.", 
      type: "Intake", 
      status: "Confirmed",
      notes: "First session - review history."
    },
    { 
      id: "session_3", 
      time: "01:00 PM", 
      patient: "Elena W.", 
      type: "Crisis Support", 
      status: "Arriving",
      notes: "Check-in on safety plan."
    }
  ]
};