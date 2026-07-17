type Project = {
    category: string
    number: string
    title: string
    description: string
    tags: string[]
}

const projects: Project[] = [
    {
        category: 'Full-Stack',
        number: '01',
        title: 'Application interne - Base aérienne',
        description:
            'Application métier développée sous Symfony pour la base aérienne de Tours. Gestion des entités, logique métier, interfaces utilisateurs (formulaires, tableaux) et tests fonctionnels avec Codeception.',
        tags: ['Symfony', 'PHP', 'Twig', 'SASS', 'JavaScript', 'GitLab'],
    },
    {
        category: 'Frontend · React',
        number: '02',
        title: 'Mon portfolio',
        description:
            'Ce portfolio - conçu et développé de A à Z avec React, TypeScript et Tailwind CSS. Mise en page responsive, typographie soignée, et expérience utilisateur fluide.',
        tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    },
    {
        category: 'React Native · Mobile',
        number: '03',
        title: 'Projet à venir',
        description:
            '',
        tags: ['React Native', 'API REST', 'TypeScript', 'SpringBoot'],
    },
]

type Category = {
    label: string
    skills: string[]
}

const categories: Category[] = [
    {
        label: 'Front-end',
        skills: [
            'TypeScript',
            'JavaScript',
            'React.js',
            'React Native',
            'SASS',
            'Tailwind CSS',
            'Bootstrap',
            'WebSocket',
        ],
    },
    {
        label: 'Back-end',
        skills: ['PHP / Symfony', 'Java', 'API REST', 'MySQL', 'PostgreSQL', 'MongoDB'],
    },
    {
        label: 'Outils & DevOps',
        skills: ['Docker', 'Git / GitLab / GitHub', 'PHPStorm', 'WebStorm', 'VS Code', 'Ubuntu'],
    },
    {
        label: 'Design & graphisme',
        skills: ['Photoshop', 'Illustrator', 'InDesign'],
    },
]

const softSkills = [
    'Travail en équipe',
    'Autonomie',
    'Rigueur',
    'Capacité d\'adaptation',
    'Communication',
]

export default function Projets() {
    return (
        <section className="max-w-5xl mx-auto px-6 mt-24">
            <div className="flex items-end justify-between flex-wrap gap-2">
                <h1 className="text-4xl md:text-5xl font-serif text-text-heading">
                    Ce que j'ai construit
                </h1>
                <p className="text-sm text-text">React · Symfony · TypeScript</p>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
                {projects.map((p) => (
                    <div
                        key={p.number}
                        className="bg-bg rounded-2xl overflow-hidden border border-border flex flex-col"
                    >
                        <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center justify-between text-xs text-accent uppercase tracking-wider">
                                <span>{p.category}</span>
                                <span className="text-text/50">{p.number}</span>
                            </div>

                            <h3 className="mt-3 font-serif text-lg text-text-heading">
                                {p.title}
                            </h3>
                            <p className="mt-2 text-sm text-text leading-relaxed flex-1">
                                {p.description}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-xs bg-accent-bg text-accent rounded-full px-3 py-1"
                                    >
                    {tag}
                  </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stack technique */}
            <div className="mt-32">
                <p className="text-sm tracking-widest uppercase text-accent font-medium">
                    Compétences
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-serif text-text-heading">
                    Stack technique
                </h2>

                <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {categories.map((cat) => (
                        <div
                            key={cat.label}
                            className="bg-bg border border-border rounded-2xl p-6"
                        >
                            <p className="text-xs tracking-widest uppercase text-accent font-medium">
                                {cat.label}
                            </p>
                            <ul className="mt-4 space-y-2">
                                {cat.skills.map((skill) => (
                                    <li
                                        key={skill}
                                        className="flex items-center gap-2 text-sm text-text"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-accent/60" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                    {softSkills.map((skill) => (
                        <span
                            key={skill}
                            className="text-sm border border-border rounded-full px-4 py-2 text-text-heading"
                        >
              {skill}
            </span>
                    ))}
                </div>
            </div>
        </section>
    )
}