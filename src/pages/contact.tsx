import { Mail, Phone, MapPin, FileText, type LucideIcon } from 'lucide-react'

type ContactItem = {
    icon: LucideIcon
    label: string
    value: string
    href?: string
}

const items: ContactItem[] = [
    {
        icon: Mail,
        label: 'Email',
        value: 'aswan.josephmathieu1999@gmail.com',
        href: 'mailto:aswan.josephmathieu1999@gmail.com',
    },
    {
        icon: Phone,
        label: 'Téléphone',
        value: '06 65 70 46 93',
        href: 'tel:0665704693',
    },
    {
        icon: MapPin,
        label: 'Localisation',
        value: 'Rennes, 35000',
    },
    {
        icon: FileText,
        label: 'CV Technique',
        value: 'Consulter le rapport',
        href: 'https://ab7131b7.report.alt-tools.tech',
    },
]

function ContactCard({ item }: { item: ContactItem }) {
    const Icon = item.icon

    return (
        <div className="flex items-center gap-4 bg-card rounded-2xl px-6 py-5">
      <span className="w-10 h-10 shrink-0 rounded-full bg-accent-bg text-accent flex items-center justify-center">
        <Icon size={18} />
      </span>
            <div>
                <p className="text-xs text-accent">{item.label}</p>
                <p className="font-medium text-text-heading">{item.value}</p>
            </div>
        </div>
    )
}

function ContactRow({ item }: { item: ContactItem }) {
    const { href } = item

    if (href) {
        const isExternal = href.startsWith('http')
        return (
            <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="block hover:opacity-80 transition"
            >
                <ContactCard item={item} />
            </a>
        )
    }

    return <ContactCard item={item} />
}

export default function Contact() {
    return (
        <section className="max-w-5xl mx-auto px-6 mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <p className="text-sm tracking-widest uppercase text-accent font-medium">
                        Contact
                    </p>
                    <h1 className="mt-4 text-5xl md:text-6xl font-serif text-text-heading">
                        Travaillons
                    </h1>
                    <h2 className="text-5xl md:text-6xl font-serif italic text-accent -mt-1">
                        ensemble
                    </h2>
                    <p className="mt-6 max-w-md text-text leading-relaxed">
                        Je suis disponible pour des opportunités en développement. N'hésitez pas à me contacter.
                    </p>
                </div>

                <div className="space-y-4">
                    {items.map((item) => (
                        <ContactRow key={item.label} item={item} />
                    ))}
                </div>
            </div>
        </section>
    )
}