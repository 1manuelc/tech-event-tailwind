import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Speakers from '@/components/Speakers';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

const Index = () => {
	return (
		<div className="min-h-screen bg-background space-y-8 lg:space-y-0">
			<Navbar />
			<Hero />
			<Speakers />
			<ContactForm />
			<Footer />
		</div>
	);
};

export default Index;
