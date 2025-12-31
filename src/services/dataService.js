// This service will handle data fetching from Google Sheets/Excel in the future.
// For now, it returns mock data to ensure the UI is ready for the integration.

export const getEvents = async () => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    return [
        {
            id: 1,
            title: "DSA Bootcamp",
            date: "Jan 15, 2026",
            description: "Master the fundamentals of Data Structures and Algorithms.",
            type: "Workshop"
        },
        {
            id: 2,
            title: "HackKARE 2026",
            date: "Feb 20, 2026",
            description: "24-hour national level hackathon. Build solving real-world problems.",
            type: "Hackathon"
        },
        {
            id: 3,
            title: "Tech Talk: AI",
            date: "Mar 10, 2026",
            description: "Deep dive into Generative AI with industry experts.",
            type: "Seminar"
        }
    ];
};

export const getTeam = async () => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return [
        {
            id: 1,
            name: "Dr. Savitha",
            role: "Founder & Faculty Coordinator",
            tenure: "Founders (2023–2024)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Savitha",
            linkedin: "https://linkedin.com"
        },
        {
            id: 2,
            name: "Anirudh",
            role: "Founder & Lead",
            tenure: "Founders (2023–2024)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anirudh",
            linkedin: "https://linkedin.com"
        },
        {
            id: 3,
            name: "Member A",
            role: "Tech Lead",
            tenure: "2024–2025",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberA",
            linkedin: "https://linkedin.com"
        },
        {
            id: 4,
            name: "Member B",
            role: "Event Lead",
            tenure: "2024–2025",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberB",
            linkedin: "https://linkedin.com"
        },
        {
            id: 5,
            name: "Member C",
            role: "Current Lead",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberC",
            linkedin: "https://linkedin.com"
        },
        {
            id: 6,
            name: "Member D",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberD",
            linkedin: "https://linkedin.com"
        },
        {
            id: 7,
            name: "Member E",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberE",
            linkedin: "https://linkedin.com"
        },
        {
            id: 8,
            name: "Member F",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberF",
            linkedin: "https://linkedin.com"
        },
        {
            id: 9,
            name: "Member G",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberG",
            linkedin: "https://linkedin.com"
        },
        {
            id: 10,
            name: "Member H",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberH",
            linkedin: "https://linkedin.com"
        },
        {
            id: 11,
            name: "Member I",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberI",
            linkedin: "https://linkedin.com"
        },
        {
            id: 12,
            name: "Member J",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberJ",
            linkedin: "https://linkedin.com"
        },
        {
            id: 13,
            name: "Member K",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberK",
            linkedin: "https://linkedin.com"
        },
        {
            id: 14,
            name: "Member L",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberL",
            linkedin: "https://linkedin.com"
        },
        {
            id: 15,
            name: "Member M",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberM",
            linkedin: "https://linkedin.com"
        },
        {
            id: 16,
            name: "Member N",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberN",
            linkedin: "https://linkedin.com"
        },
        {
            id: 17,
            name: "Member O",
            role: "Core Member",
            tenure: "2025–2026 (current)",
            image: "https://api.dicebear.com/7.x/avataaars/svg?seed=MemberO",
            linkedin: "https://linkedin.com"
        }
    ];
};

export const getEventWinners = async (eventId) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    // Mock data for winners
    return {
        topWinners: [
            { id: 1, name: "Arjun K.", position: 1, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun", project: "AI Drone Swarm" },
            { id: 2, name: "Sarah M.", position: 2, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah", project: "EcoChain" },
            { id: 3, name: "David R.", position: 3, image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David", project: "MediBot" },
        ],
        allWinners: [
            { rank: 4, name: "Team Pixel", project: "Vision API" },
            { rank: 5, name: "Code Breakers", project: "SecureNet" },
            { rank: 6, name: "InnovateX", project: "Smart Home" },
            { rank: 7, name: "Tech Ninjas", project: "GameDev Hub" },
            { rank: 8, name: "Data Minds", project: "Predictive Analytics" },
        ]
    };
};
