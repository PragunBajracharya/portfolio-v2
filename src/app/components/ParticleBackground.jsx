import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticleBackground = () => {
	const [init, setInit] = useState(false);

	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadFull(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = (container) => {
		console.log(container);
	};

	const options = useMemo(
		() => ({
			fpsLimit: 120,
			background: {
				color: "transparent",
			},
			fullScreen: {
				enable: false,
				zIndex: -1,
			},
			interactivity: {
				events: {
					onClick: { enable: true, mode: "push" },
					onHover: { enable: true, mode: "repulse" },
				},
				modes: {
					push: { quantity: 4 },
					repulse: { distance: 200, duration: 0.4 },
				},
			},
			particles: {
				color: { value: "#ffffff" },
				links: {
					color: "#ffffff",
					distance: 150,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					enable: true,
					speed: 2,
					direction: "none",
					outModes: { default: "bounce" },
				},
				number: {
					density: { enable: true },
					value: 100,
				},
				opacity: { value: 0.5 },
				shape: { type: "circle" },
				size: { value: { min: 1, max: 5 } },
			},
			detectRetina: true,
		}),
		[]
	);

	if (!init) return null;

	return (
		<div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-1">
			<Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} className="h-full"/>
		</div>
	);
};

export default ParticleBackground;
