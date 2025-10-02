import { Button } from '@/components/ui/button';
import { InstagramIcon } from 'lucide-react';

const ContactForm = () => {
	return (
		<section id="contact" className="py-20 relative">
			<div className="container mx-auto px-4">
				<div className="max-w-2xl mx-auto">
					{/* Section Header */}
					<div className="text-center mb-12 animate-fade-in">
						<h2 className="text-4xl md:text-5xl font-bold mb-4">
							Inscreva-se
						</h2>
						<p className="text-xl text-muted-foreground">
							Estamos organizando todos os detalhes do evento, em
							breve abriremos inscrições!
						</p>
					</div>

					<Button className="w-full hover:opacity-70 transition-opacity h-fit text-start leading-relaxed text-wrap">
						<InstagramIcon className="size-5" />
						<a
							href="https://www.instagram.com/etib.ifce.tiangua/"
							rel="noopener"
							target="_blank"
						>
							Acompanhe notícias sobre o evento no perfil Oficial
							do ETIB no Instagram
						</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
