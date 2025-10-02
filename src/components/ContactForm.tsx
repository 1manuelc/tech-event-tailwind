import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { toast } from '@/hooks/use-toast';
import { Mail, User, MessageSquare } from 'lucide-react';

const formSchema = z.object({
	name: z
		.string()
		.min(2, 'Nome deve ter pelo menos 2 caracteres')
		.max(100, 'Nome muito longo'),
	email: z.string().email('Email inválido').max(255, 'Email muito longo'),
	message: z
		.string()
		.min(10, 'Mensagem deve ter pelo menos 10 caracteres')
		.max(1000, 'Mensagem muito longa'),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const onSubmit = async (data: FormData) => {
		setIsSubmitting(true);

		// simulação de envio
		await new Promise((resolve) => setTimeout(resolve, 1500));

		console.log('Form data:', data);

		toast({
			title: 'Inscrição realizada com sucesso!',
			description: 'Em breve entraremos em contato com mais informações.',
		});

		form.reset();
		setIsSubmitting(false);
	};

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
							Garanta sua vaga agora!
						</p>
					</div>

					{/* Form Card */}
					<div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8 shadow-lg animate-scale-in">
						<Form {...form}>
							<form
								onSubmit={form.handleSubmit(onSubmit)}
								className="space-y-6"
							>
								{/* Name Field */}
								<FormField
									control={form.control}
									name="name"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<User className="w-4 h-4 text-primary" />
												Nome Completo
											</FormLabel>
											<FormControl>
												<Input
													placeholder="Seu nome completo"
													className="bg-zinc-700/50 transition-colors"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Email Field */}
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<Mail className="w-4 h-4 text-secondary" />
												Email
											</FormLabel>
											<FormControl>
												<Input
													type="email"
													placeholder="seu@email.com"
													className="bg-zinc-700/50 transition-colors"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Message Field */}
								<FormField
									control={form.control}
									name="message"
									render={({ field }) => (
										<FormItem>
											<FormLabel className="flex items-center gap-2">
												<MessageSquare className="w-4 h-4 text-accent" />
												Mensagem / Interesse
											</FormLabel>
											<FormControl>
												<Textarea
													placeholder="Conte-nos um pouco sobre seu interesse no evento..."
													className="bg-zinc-700/50 transition-colors min-h-[120px] resize-none"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>

								{/* Submit Button */}
								<Button
									type="submit"
									variant="hero"
									size="lg"
									className="w-full"
									disabled={isSubmitting}
								>
									{isSubmitting
										? 'Enviando...'
										: 'Confirmar Inscrição'}
								</Button>
							</form>
						</Form>

						{/* Additional Info */}
						<div className="mt-6 p-4 bg-muted/30 rounded-lg">
							<p className="text-sm text-muted-foreground text-center">
								🔒 Seus dados estão seguros. Não compartilhamos
								informações com terceiros.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;
