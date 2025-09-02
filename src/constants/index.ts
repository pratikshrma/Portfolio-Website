import type {
    TNavLink,
    TService,
    TTechnology,
    TExperience,
    TTestimonial,
    TProject,
} from "../types";

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "contact", title: "Contact" },
];

const services: TService[] = [
    { title: "Full Stack Developer", icon: web },
    { title: "Frontend Specialist", icon: mobile },
    { title: "Backend Developer", icon: backend },
    { title: "3D/Three.js Developer", icon: creator },
];

const technologies: TTechnology[] = [
    { name: "HTML 5", icon: html },
    { name: "CSS 3", icon: css },
    { name: "JavaScript", icon: javascript },
    { name: "TypeScript", icon: typescript },
    { name: "React JS", icon: reactjs },
    { name: "Tailwind CSS", icon: tailwind },
    { name: "Node JS", icon: nodejs },
    { name: "MongoDB", icon: mongodb },
    { name: "Three.js", icon: threejs },
    { name: "Git", icon: git },
    { name: "Figma", icon: figma },
    { name: "Docker", icon: docker },
];

const experiences: TExperience[] = [
    {
        title: "Full Stack Developer",
        companyName: "Atlancer",
        icon: web,
        iconBg: "#383E56",
        date: "May 2024 – Present",
        points: [
            "Built and scaled SaaS platform (React + TypeScript) serving 40K+ DAUs.",
            "Optimized rendering & caching → 40% faster load times.",
            "Developed 15+ responsive UIs improving user engagement.",
            "Wrote 50+ Cypress E2E tests reducing regressions by 90%.",
            "Integrated CI/CD pipelines (GitHub Actions + Cloud Build) → 99.9% success rate.",
        ],
    },
];

const testimonials: TTestimonial[] = [
    {
        testimonial:
            "Pratik is a reliable and creative developer who consistently delivers high-quality results.",
        name: "Team Lead",
        designation: "Engineering Lead",
        company: "Atlancer",
        image: "https://randomuser.me/api/portraits/men/10.jpg",
    },
];

const projects: TProject[] = [
    // {
    //     name: "Atlancer",
    //     description:
    //         "Contributed to a talent marketplace platform, building scalable web apps and 3D experiences using React, Node.js, Firebase, and Three.js.",
    //     tags: [
    //         { name: "react", color: "blue-text-gradient" },
    //         { name: "node.js", color: "green-text-gradient" },
    //         { name: "firebase", color: "pink-text-gradient" },
    //         { name: "three.js", color: "blue-text-gradient" },
    //     ],
    //     image: "/5.png", // replace with an actual screenshot if available
    //     sourceCodeLink: "https://atlancer.com/",
    // },
    {
        name: "Particle Transition Animation",
        description:
            "Dynamic WebGL demo where particles morph between shapes. Built with React/Vite and Three.js using shaders & GPU animations.",
        tags: [
            { name: "three.js", color: "blue-text-gradient" },
            { name: "react", color: "green-text-gradient" },
            { name: "vite", color: "pink-text-gradient" },
        ],
        image: "/1.png",
        sourceCodeLink: "https://praticles-transition.vercel.app/",
    },
    {
        name: "Shoe Configurator",
        description:
            "Interactive 3D configurator with real-time rotation & customization. Optimized WebGL rendering for cross-device performance.",
        tags: [
            { name: "three.js", color: "blue-text-gradient" },
            { name: "react", color: "green-text-gradient" },
        ],
        image: "/2.png",
        sourceCodeLink: "https://shoe-configurator-henna.vercel.app/",
    },
    {
        name: "3D Ball Obstacle Game",
        description:
            "Physics-based browser game with gravity, collisions, and friction using React Three Fiber.",
        tags: [
            { name: "three.js", color: "blue-text-gradient" },
            { name: "react-three-fiber", color: "green-text-gradient" },
        ],
        image: "/3.png",
        sourceCodeLink: "https://ball-game-rho.vercel.app/",
    },
    {
        name: "3D Image Carousel",
        description:
            "Rotating 3D carousel with custom meshes, lighting, and depth effects.",
        tags: [
            { name: "three.js", color: "blue-text-gradient" },
            { name: "react", color: "green-text-gradient" },
        ],
        image: "/4.png",
        sourceCodeLink: "https://three-js-carousel-theta.vercel.app/",
    },
    {
        name: "AI Pokémon Recognition Bot",
        description:
            "TensorFlow-based image classifier (90% accuracy) integrated into a Discord bot serving 500+ daily requests.",
        tags: [
            { name: "tensorflow", color: "blue-text-gradient" },
            { name: "discord.js", color: "green-text-gradient" },
        ],
        image: nodejs,
        sourceCodeLink: "https://github.com/pratikshrma",
    },
];

export { services, technologies, experiences, testimonials, projects };
