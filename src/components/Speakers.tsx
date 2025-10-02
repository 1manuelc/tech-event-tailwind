import { useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogDescription,
} from '@/components/ui/dialog';
import { Linkedin, Twitter } from 'lucide-react';
import speaker1 from '@/assets/speaker1.jpg';
import speaker2 from '@/assets/speaker2.jpg';
import speaker3 from '@/assets/speaker3.jpg';
import speaker4 from '@/assets/speaker4.jpg';

interface Speaker {
	id: number;
	name: string;
	role: string;
	company: string;
	image: string;
	bio: string;
	linkedin: string;
	twitter: string;
}

const speakers: Speaker[] = [
	{
		id: 1,
		name: 'Dr. Maria Santos',
		role: 'Chief AI Officer',
		company: 'TechInnovate',
		image: speaker1,
		bio: 'Pioneira em inteligência artificial com mais de 15 anos de experiência. Lidera projetos de IA generativa e machine learning em escala global.',
		linkedin: '#',
		twitter: '#',
	},
	{
		id: 2,
		name: 'Ken Tanaka',
		role: 'Founder & CEO',
		company: 'FutureStartup',
		image: speaker2,
		bio: 'Empreendedor serial que já fundou 5 startups de sucesso. Especialista em crescimento exponencial e estratégias de produto.',
		linkedin: '#',
		twitter: '#',
	},
	{
		id: 3,
		name: 'James Anderson',
		role: 'CTO',
		company: 'CloudSystems',
		image: speaker3,
		bio: 'Arquiteto de sistemas distribuídos e especialista em infraestrutura cloud. Palestrante internacional sobre DevOps e SRE.',
		linkedin: '#',
		twitter: '#',
	},
	{
		id: 4,
		name: 'Ana Rodriguez',
		role: 'VP of Innovation',
		company: 'NextGen Labs',
		image: speaker4,
		bio: 'Líder em transformação digital e inovação. Ajuda empresas a implementarem cultura de inovação e metodologias ágeis.',
		linkedin: '#',
		twitter: '#',
	},
];

const Speakers = () => {
	const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(
		null,
	);

	return (
		<section id="speakers" className="py-20 relative">
			<div className="container mx-auto px-4">
				{/* Section Header */}
				<div className="text-center mb-16 animate-fade-in">
					<h2 className="text-4xl md:text-5xl font-bold mb-4">
						Palestrantes{' '}
						<span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
							de Destaque
						</span>
					</h2>
					<p className="text-xl text-muted-foreground max-w-2xl mx-auto">
						Conheça os especialistas que irão compartilhar suas
						visões sobre o futuro da tecnologia
					</p>
				</div>

				{/* Speakers Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					{speakers.map((speaker, index) => (
						<Card
							key={speaker.id}
							className="group bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-fade-in overflow-hidden"
							style={{ animationDelay: `${index * 100}ms` }}
						>
							<CardContent className="p-0">
								<div className="relative overflow-hidden aspect-square">
									<img
										src={speaker.image}
										alt={speaker.name}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold mb-1">
										{speaker.name}
									</h3>
									<p className="text-primary text-sm mb-1">
										{speaker.role}
									</p>
									<p className="text-muted-foreground text-sm">
										{speaker.company}
									</p>
								</div>
							</CardContent>
							<CardFooter className="p-6 pt-0 flex gap-2">
								<Button
									variant="outline"
									size="sm"
									className="flex-1"
									onClick={() => setSelectedSpeaker(speaker)}
								>
									Saiba Mais
								</Button>
								<Button variant="ghost" size="icon" asChild>
									<a
										href={speaker.linkedin}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="w-4 h-4" />
									</a>
								</Button>
								<Button variant="ghost" size="icon" asChild>
									<a
										href={speaker.twitter}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Twitter className="w-4 h-4" />
									</a>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>

			{/* Modal */}
			<Dialog
				open={!!selectedSpeaker}
				onOpenChange={() => setSelectedSpeaker(null)}
			>
				<DialogContent className="bg-card border-border">
					{selectedSpeaker && (
						<>
							<DialogHeader>
								<div className="flex items-center gap-4 mb-4">
									<img
										src={selectedSpeaker.image}
										alt={selectedSpeaker.name}
										className="w-20 h-20 rounded-full object-cover border-2 border-primary"
									/>
									<div>
										<DialogTitle className="text-2xl">
											{selectedSpeaker.name}
										</DialogTitle>
										<p className="text-primary">
											{selectedSpeaker.role}
										</p>
										<p className="text-muted-foreground text-sm">
											{selectedSpeaker.company}
										</p>
									</div>
								</div>
							</DialogHeader>
							<DialogDescription className="text-foreground text-base leading-relaxed">
								{selectedSpeaker.bio}
							</DialogDescription>
							<div className="flex gap-2 mt-4">
								<Button
									variant="outline"
									size="sm"
									asChild
									className="flex-1"
								>
									<a
										href={selectedSpeaker.linkedin}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="w-4 h-4 mr-2" />
										LinkedIn
									</a>
								</Button>
								<Button
									variant="outline"
									size="sm"
									asChild
									className="flex-1"
								>
									<a
										href={selectedSpeaker.twitter}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Twitter className="w-4 h-4 mr-2" />
										Twitter
									</a>
								</Button>
							</div>
						</>
					)}
				</DialogContent>
			</Dialog>
		</section>
	);
};

export default Speakers;
