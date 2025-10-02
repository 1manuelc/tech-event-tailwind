import { Button } from '@/components/ui/button';
import { ArrowRightIcon, Calendar, MapPin } from 'lucide-react';

const Hero = () => {
	const scrollToContact = () => {
		const element = document.getElementById('contact');
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<section
			id="hero"
			className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-16 lg:pb-0"
		>
			{/* Gradient Background */}
			<div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-10" />

			{/* Animated Glow Effects */}
			<div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl animate-pulse opacity-5" />
			<div
				className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl opacity-5 animate-pulse"
				style={{ animationDelay: '1s' }}
			/>

			<div className="container mx-auto px-4 relative z-10">
				<div className="max-w-4xl mx-auto text-center animate-fade-in">
					{/* Badge */}
					<div className="inline-flex items-center gap-2 bg-zinc-900/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
						<span className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
						<span className="text-sm font-medium">
							IA Generativa & Fake News: A nova geração da
							desinformação
						</span>
					</div>

					{/* Main Title */}
					<h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
						Vivencie tecnologia, aprenda e conecte-se
					</h1>

					{/* Subtitle */}
					<p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
						Explore palestras, oficinas e network com profissionais
						e estudantes de TI
					</p>

					{/* CTA Buttons */}
					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
						<Button
							variant="hero"
							size="xl"
							onClick={scrollToContact}
							className="group"
						>
							Inscreva-se Agora
							<span className="ml-2 group-hover:translate-x-1 transition-transform">
								<ArrowRightIcon />
							</span>
						</Button>
						<Button variant="outline" size="xl">
							Ver Programação
						</Button>
					</div>

					{/* Event Info Cards */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
						<div className="bg-zinc-900/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card/70 transition-all">
							<Calendar className="w-6 h-6 text-primary mb-2 mx-auto" />
							<p className="text-sm text-muted-foreground">
								Data
							</p>
							<p className="font-semibold">
								6-8 de novembro de 2025
							</p>
						</div>
						<div className="bg-zinc-900/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:bg-card/70 transition-all">
							<MapPin className="w-6 h-6 text-secondary mb-2 mx-auto" />
							<p className="text-sm text-muted-foreground">
								Local
							</p>
							<p className="font-semibold">
								IFCE - Campus Tianguá
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
