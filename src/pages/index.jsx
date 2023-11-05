import Navbar from "@/components/Navbar";
import VenueCollection from "@/components/VenueCollection";

export default function Home() {
	return (
		<div>
			<Navbar />

			<div className='container-lg mx-auto px-4 justify-center min-h-screen max-w-[75rem]'>
				<h1 className='text-4xl font-bold text-center'>VenueLoca</h1>
				<h2 className='text-2xl font-bold text-center'>Find the perfect venue for your next event</h2>

				<VenueCollection />
			</div>
		</div>

	)
}