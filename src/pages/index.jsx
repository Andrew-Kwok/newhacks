import Navbar from "@/components/Navbar";
import VenueCollection from "@/components/VenueCollection";

export default function Home() {
	return (
		<div>
			<Navbar />

			<div className='container mx-auto my-10 px-5 bg-base-100 sm:max-w-xl md:max-w-3xl lg:max-w-5xl xl:max-w-6xl'>
				<h1 className='text-4xl font-bold text-center'>VenueLoca</h1>
				<h2 className='text-2xl font-bold text-center'>Find the perfect venue for your next event</h2>

				<VenueCollection />
			</div>

		</div>

	)
}