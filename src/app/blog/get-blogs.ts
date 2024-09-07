export interface Blog {
    id: number;
    title: string;
    description: string;
    date: Date;
}

export interface BlogParams {
    id: number;
}

export async function getBlogComponent(params: BlogParams) {
    const Blog = await import(`@/app/blog/markdown/blog${params.id}.mdx`);
    return Blog.default;
}

export function getBlogs(): Blog[] {
    return [
        {
            id: 0,
            title: "What is an Agile User Story?",
            description:
                "An Agile user story is a brief, user-centric description of a feature that helps teams align on customer needs and desired outcomes within the Agile process.",
            date: new Date("2024-06-22"),
        },
        {
            id: 1,
            title: "Why Automated User Story Writing is a Game-Changer",
            description:
                "Explore the benefits of automating user story creation and how it saves time for Scrum teams.",
            date: new Date("2024-07-28"),
        },
        {
            id: 2,
            title: "Common Mistakes in Writing Acceptance Criteria",
            description:
                "Learn about common pitfalls when writing acceptance criteria and how to avoid them.",
            date: new Date("2024-06-30"),
        },
        {
            id: 3,
            title: "The Future of Project Management: Automation & AI 🤖🤖",
            description:
                "A deep dive into how automation and AI are transforming project management and team workflows.",
            date: new Date("2024-05-22"),
        },
        {
            id: 4,
            title: "Best Practices for Agile Retrospectives 🤠",
            description:
                "Get insights into running more effective retrospectives that drive real improvement.",
            date: new Date("2024-04-10"),
        },
        {
            id: 5,
            title: "10 Tips to Improve Your Agile Process",
            description:
                "Discover actionable tips to streamline your Agile process and boost team productivity.",
            date: new Date("2024-01-28"),
        },
    ];
}
