import { useState } from 'react'

type Experience = {
    period: string
    title: string
    place: string
    skills: string[]
    bullets: string[]
}

const experiences: Experience[] = [
    {
        period: '2023 - 2025',
        title: 'Développeuse Web',
        place: 'Armée de l\'air et de l\'espace - Base aérienne de Tours',
        skills: ['Symfony', 'PHP', 'Twig', 'SASS', 'JavaScript', 'GitLab'],
        bullets: [
            'Développement d\'applications métier sous Symfony - entités, contrôleurs, logique métier',
            'Création d\'interfaces utilisateurs : formulaires, tableaux, ergonomie UX',
            'Tests fonctionnels avec Codeception, gestion de versions en équipe via GitLab',
            'Certifications obtenues : Symfony, AWS',
        ],
    },
    {
        period: '2020',
        title: 'Communication Visuelle / Infographie',
        place: 'Mairie de Chambray-Lès-Tours - Chambray-Lès-Tours',
        skills: ['Photoshop', 'Illustrator', 'InDesign'],
        bullets: [
            'Conception d\'affiches et bannières pour des supports de communication municipaux',
            'Réalisation de visuels pour supports numériques et imprimés',
            'Respect de l\'identité visuelle et des contraintes de communication',
        ],
    },
    {
        period: '2019',
        title: 'Communication Visuelle / Infographie',
        place: 'Touraine Insertion - Tours',
        skills: ['Photoshop', 'Illustrator', 'InDesign'],
        bullets: [
            'Conception graphique et mise en page de documents institutionnels',
            'Réalisation de supports de communication imprimés',
        ],
    },
]

type Formation = {
    title: string
    school: string
    years: string
}

const formations: Formation[] = [
    {
        title: 'Concepteur Développeur d\'Application',
        school: '2itech Academy',
        years: '2023 – 2025',
    },
    {
        title: 'Développeur Web et Web Mobile',
        school: 'O\'clock',
        years: '2022',
    },
    {
        title: 'Infographiste Metteur en Page',
        school: 'Greta Val de Loire',
        years: '2019 – 2020',
    },
]

export default function Experiences() {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <section className="max-w-5xl mx-auto px-6 mt-24">
            <p className="text-sm tracking-widest uppercase text-accent font-medium">
                Expériences
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-serif text-text-heading">
                Parcours professionnel
            </h1>

            <div className="mt-12 space-y-4">
                {experiences.map((exp, i) => {
                    const isOpen = openIndex === i
                    return (
                        <div
                            key={exp.title + exp.period}
                            className={`rounded-2xl overflow-hidden transition-colors ${
                                isOpen ? 'bg-bg shadow-md' : 'bg-card'
                            }`}
                        >
                            <button
                                onClick={() => setOpenIndex(isOpen ? null : i)}
                                className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                            >
                <span className="text-sm text-text w-28 shrink-0">
                  {exp.period}
                </span>
                                <span className="flex-1">
                  <span className="block font-medium text-text-heading">
                    {exp.title}
                  </span>
                  <span className="block text-sm text-text">
                    {exp.place}
                  </span>
                </span>
                                <span
                                    className={`text-accent text-xl transition-transform ${
                                        isOpen ? 'rotate-45' : ''
                                    }`}
                                >
                  +
                </span>
                            </button>

                            {isOpen && (
                                <div className="px-6 pb-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="text-xs bg-accent-bg text-accent rounded-full px-3 py-1"
                                            >
                        {skill}
                      </span>
                                        ))}
                                    </div>
                                    <ul className="space-y-2">
                                        {exp.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                className="flex gap-3 text-sm text-text"
                                            >
                                                <span className="text-text/50">-</span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <h3 className="mt-16 text-2xl italic font-serif text-text-heading">
                Formations
            </h3>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
                {formations.map((f) => (
                    <div
                        key={f.title + f.years}
                        className="flex items-center gap-4 bg-card rounded-2xl px-6 py-5"
                    >
                        <div>
                            <p className="font-medium text-text-heading">{f.title}</p>
                            <p className="text-sm text-text">
                                {f.school} · {f.years}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}