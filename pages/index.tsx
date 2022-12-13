import type { NextPage } from 'next'
import Head from 'next/head'
import { Poppins } from '@next/font/google'

import { ThreeDContent } from 'components/ThreeDContent'
import { HtmlContent } from 'components/HtmlContent'

const poppins = Poppins({
	weight: [
		'300', // light
		'400', // normal
		'500', // medium
		'600', // semibold
		'700' // bold
	],
	variable: '--font-poppins',
	subsets: ['latin']
})

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Sokhuong | Creative Developer</title>
				<meta
					name="Description"
					content="Web Developer. Frontend, WebGL, 3D, Three.js, Animation, React Three Fiber, Blender, React.js, TypeScript."
				/>

				{/* Open Graph */}
				<meta property="og:title" content="Sokhuong | Web Dev" />
				<meta
					property="og:description"
					content="React.js | Vue.js | WebGL | Animation"
				/>
				<meta
					property="og:image"
					content="https://sokhuong.vercel.app/media-card.png"
				/>
			</Head>

			<div
				id="container"
				className={`${poppins.className} relative w-screen h-screen overflow-hidden`}
			>
				{/* Contain Canvas Element */}
				<figure id="3d-content" className="absolute inset-0 z-0 w-full h-full">
					<ThreeDContent />
				</figure>

				{/* Contain HTML Overlay */}
				<main
					id="html-content"
					className="absolute inset-0 z-10 w-full h-full pointer-events-none touch-none"
				>
					<HtmlContent />
				</main>
			</div>
		</>
	)
}

export default Home
