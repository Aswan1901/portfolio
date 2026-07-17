import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.tsx'

const links = [
    { to: '/', label: 'À propos' },
    { to: '/experiences', label: 'Expériences' },
    { to: '/projets', label: 'Projets' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    return (
        <header className="max-w-5xl mx-auto px-6">
            <nav className="flex items-center justify-between py-6">
                <NavLink
                    to="/"
                    className="font-serif text-lg tracking-wide text-text-heading"
                >
                    AJM
                </NavLink>

                <ul className="hidden md:flex items-center gap-8">
                    {links.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                className={({ isActive }) =>
                                    `text-xs tracking-widest uppercase transition ${
                                        isActive
                                            ? 'text-text-heading font-medium'
                                            : 'text-text hover:text-text-heading'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <span className="border border-accent text-accent text-xs px-4 py-2 rounded-full">
            Disponible
          </span>
                </div>
            </nav>
        </header>
    )
}