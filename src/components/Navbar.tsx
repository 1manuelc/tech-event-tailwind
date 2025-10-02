import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
			setIsOpen(false);
		}
	};

	const menuItems = [
		{ label: 'Início', id: 'hero' },
		{ label: 'Palestrantes', id: 'speakers' },
		{ label: 'Inscrição', id: 'contact' },
	];

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md">
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					{/* Logo */}
					<div className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
						X ETIB 2025
					</div>

					{/* Desktop Menu */}
					<div className="hidden md:flex items-center gap-8">
						{menuItems.map((item) => (
							<button
								key={item.id}
								onClick={() => scrollToSection(item.id)}
								className="text-foreground hover:text-primary transition-colors font-medium"
							>
								{item.label}
							</button>
						))}
						<Button variant="hero" size="default">
							Inscreva-se
						</Button>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden text-foreground"
						onClick={() => setIsOpen(!isOpen)}
						aria-label="Toggle menu"
					>
						{isOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				{isOpen && (
					<div className="md:hidden py-4 animate-fade-in">
						<div className="flex flex-col gap-4">
							{menuItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="text-foreground hover:text-primary transition-colors font-medium text-left py-2"
								>
									{item.label}
								</button>
							))}
							<Button
								variant="hero"
								size="default"
								className="w-full"
							>
								Inscreva-se
							</Button>
						</div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
