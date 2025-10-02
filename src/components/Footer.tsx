import {
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{ icon: Facebook, href: '#', label: 'Facebook' },
		{ icon: Twitter, href: '#', label: 'Twitter' },
		{ icon: Instagram, href: '#', label: 'Instagram' },
		{ icon: Linkedin, href: '#', label: 'LinkedIn' },
	];

	const footerLinks = {
		evento: [
			{ label: 'Sobre', href: '#' },
			{ label: 'Programação', href: '#' },
			{ label: 'Palestrantes', href: '#speakers' },
			{ label: 'Patrocinadores', href: '#' },
		],
		recursos: [
			{ label: 'Blog', href: '#' },
			{ label: 'FAQ', href: '#' },
			{ label: 'Mídia Kit', href: '#' },
			{ label: 'Contato', href: '#contact' },
		],
		legal: [
			{ label: 'Privacidade', href: '#' },
			{ label: 'Termos de Uso', href: '#' },
			{ label: 'Código de Conduta', href: '#' },
		],
	};

	return (
		<footer className="bg-zinc-900 border-t border-border pt-16 pb-8">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
					{/* Brand Column */}
					<div className="lg:col-span-2">
						<h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
							X ETIB 2025
						</h3>
						<p className="text-muted-foreground mb-4 max-w-sm">
							Vivencie tecnologia, aprenda e conecte-se
						</p>

						{/* Contact Info */}
						<div className="space-y-2 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<MapPin className="w-4 h-4 text-primary" />
								<span>IFCE - Campus Tianguá</span>
							</div>
							<div className="flex items-center gap-2">
								<Mail className="w-4 h-4 text-secondary" />
								<a
									href="mailto:contato@techfuture2025.com.br"
									className="hover:text-foreground transition-colors"
								>
									contato@techfuture2025.com.br
								</a>
							</div>
						</div>

						{/* Social Links */}
						<div className="flex gap-2 mt-6">
							{socialLinks.map((social) => (
								<Button
									key={social.label}
									variant="ghost"
									size="icon"
									asChild
									className="hover:bg-primary/10 hover:text-primary transition-colors"
								>
									<a
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
									>
										<social.icon className="w-5 h-5" />
									</a>
								</Button>
							))}
						</div>
					</div>

					{/* Evento Links */}
					<div>
						<h4 className="font-semibold mb-4 text-foreground">
							Evento
						</h4>
						<ul className="space-y-2">
							{footerLinks.evento.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-muted-foreground hover:text-primary transition-colors text-sm"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Recursos Links */}
					<div>
						<h4 className="font-semibold mb-4 text-foreground">
							Recursos
						</h4>
						<ul className="space-y-2">
							{footerLinks.recursos.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-muted-foreground hover:text-primary transition-colors text-sm"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>

					{/* Legal Links */}
					<div>
						<h4 className="font-semibold mb-4 text-foreground">
							Legal
						</h4>
						<ul className="space-y-2">
							{footerLinks.legal.map((link) => (
								<li key={link.label}>
									<a
										href={link.href}
										className="text-muted-foreground hover:text-primary transition-colors text-sm"
									>
										{link.label}
									</a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-border">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-sm text-muted-foreground">
							© {currentYear} X ETIB 2025. Todos os direitos
							reservados.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
