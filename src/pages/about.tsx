import { Link } from 'react-router-dom'
import { PiStarFourFill } from "react-icons/pi";

export default function About() {
    return (
        <section className="max-w-5xl mx-auto px-6">
            <div className="mt-24">
                <p className="flex items-center gap-2 text-sm tracking-widest uppercase text-accent font-medium">
                    <span className="w-6 h-px bg-accent" />
                    Développeuse Web
                </p>

                <h1 className="mt-6 text-6xl md:text-8xl text-text-heading font-serif">
                    Aswan
                </h1>
                <h2 className="text-6xl md:text-8xl text-accent -mt-2 font-script">
                    Joseph-Mathieu
                </h2>

                <p className="mt-8 max-w-xl text-text leading-relaxed">
                    Développeuse web avec deux ans d'expérience au sein de l'Armée de
                    l'air et de l'espace.
                </p>

                <div className="mt-8 flex items-center gap-4">
                    <Link
                        to="/experiences"
                        className="bg-accent hover:bg-accent-dark text-white rounded-full px-6 py-3 text-sm font-medium transition"
                    >
                        Voir mon parcours →
                    </Link>
                    <Link
                        to="/contact"
                        className="border border-border hover:border-text rounded-full px-6 py-3 text-sm font-medium transition text-text-heading"
                    >
                        Me contacter
                    </Link>
                    <a
                        href="https://ab7131b7.report.alt-tools.tech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-border hover:border-text rounded-full px-6 py-3 text-sm font-medium transition text-text-heading"
                    >
                        CV Technique
                    </a>
                </div>

                <div className="mt-16 border-t border-border pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <Stat value="2 ans" label="Expérience" />
                    <Stat value="BAC +4" label="Formation" />
                    <Stat value="Rennes" label="Localisation" />
                    <Stat value="Bilingue" label="Anglais" />
                </div>
            </div>
            <AboutSection/>
        </section>
    )
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <p className="text-2xl text-text-heading font-serif">{value}</p>
            <p className="text-xs uppercase tracking-wider text-text/70 mt-1">
                {label}
            </p>
        </div>
    )
}

function AboutSection() {
    const points = [
        {
            title: 'Autonomie & rigueur',
            desc: 'Habituée aux environnements exigeants',
        },
        {
            title: 'Bilingue',
            desc: 'Anglais courant',
        },
        {
            title: 'Ouverte à l’IA',
            desc: 'Curiosité permanente pour les nouvelles techs',
        },
    ]

    return (
        <section className="mt-32 grid md:grid-cols-2 gap-12 items-start">
            <div>
                <p className="text-sm tracking-widest uppercase text-accent font-medium">
                    À propos
                </p>
                <h2 className="mt-4 text-4xl md:text-5xl font-serif text-text-heading leading-tight">
                    Code structuré,
                    <br />
                    <span className="italic">sens du détail</span>
                </h2>
                <p className="mt-6 text-text leading-relaxed">
                    Mon parcours est atypique formation en graphisme, et passion pour le développement web. Cette combinaison
                    me donne un regard à la fois technique et esthétique sur les
                    projets que je construis.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {points.map((point) => (
                    <div
                        key={point.title}
                        className="bg-bg border border-border rounded-xl p-5 shadow-sm"
                    >
                        <PiStarFourFill className="text-accent" />

                        <h3 className="mt-3 font-medium text-text-heading">
                            {point.title}
                        </h3>
                        <p className="mt-1 text-sm text-text">{point.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

