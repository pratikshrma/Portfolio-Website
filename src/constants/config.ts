type TSection = {
    p: string;
    h2: string;
    content?: string;
};

type TConfig = {
    html: {
        title: string;
        fullName: string;
        email: string;
    };
    hero: {
        name: string;
        p: string[];
    };
    contact: {
        form: {
            name: {
                span: string;
                placeholder: string;
            };
            email: {
                span: string;
                placeholder: string;
            };
            message: {
                span: string;
                placeholder: string;
            };
        };
    } & TSection;
    sections: {
        about: Required<TSection>;
        experience: TSection;
        feedbacks: TSection;
        works: Required<TSection>;
    };
};

export const config: TConfig = {
    html: {
        title: "Pratik Sharma — 3D Portfolio",
        fullName: "Pratik Sharma",
        email: "pratiksharma3412@gmail.com",
    },
    hero: {
        name: "Pratik Sharma",
        p: [
            "I build scalable web apps,",
            "3D visuals, and interactive user experiences",
        ],
    },
    contact: {
        p: "Get in touch",
        h2: "Contact.",
        form: {
            name: {
                span: "Your Name",
                placeholder: "What's your name?",
            },
            email: { span: "Your Email", placeholder: "What's your email?" },
            message: {
                span: "Your Message",
                placeholder: "What do you want to say?",
            },
        },
    },
    sections: {
        about: {
            p: "Introduction",
            h2: "Overview.",
            content: `I'm a Full Stack Developer with 3+ years of combined experience in IT 
management and software development. Skilled in React, TypeScript, Node.js, 
Express, Firebase, Firestore, and Three.js. I’ve scaled SaaS platforms to 40,000+ 
daily users, optimized performance, and delivered production-ready solutions. 
I enjoy solving real-world problems and collaborating on impactful projects.`,
        },
        experience: {
            p: "What I have done so far",
            h2: "Work Experience.",
            content: `- **Full-Stack Developer, Atlancer (May 2024 – Present)**  
Architected and launched a scalable SaaS platform (React, TypeScript, Node.js, Firestore).  
Scaled to 40,000 daily users with zero downtime and 99.9% CI/CD deployment reliability.  
Designed real-time Firestore schema, optimized UI/UX, and reduced latency by 40%.  
Built 200+ Cypress E2E tests reducing release regressions by 90%.  

- **Computer Technician / IT In-Charge, NCC (Feb 2022 – May 2024)**  
Managed IT infrastructure and troubleshooting.  
Ensured smooth operations during large-scale training events and exercises.`,
        },
        feedbacks: {
            p: "What others say",
            h2: "Testimonials.",
            content: `“Pratik was instrumental in scaling our platform to tens of thousands of 
daily users while maintaining reliability.” – Team Lead, Atlancer  

“Highly dependable and solution-oriented. He ensured flawless IT operations 
during high-pressure NCC events.” – Commanding Officer, NCC`,
        },
        works: {
            p: "My work",
            h2: "Projects.",
            content: `Here are some projects that showcase my skills and experience:`
        },
    },
};
