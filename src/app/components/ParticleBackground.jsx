import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import skills from "../data/skillsData";

const ParticleBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
			<Particles
				id="tsparticles"
				init={particlesInit}
				loaded={particlesLoaded}
				options={{
                    background: {
                        color: {
                            value: "#0d47a1",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
					particles: {
						number: {
							value: 50,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						shape: {
							type: "circle",
							stroke: {
								width: 0,
							},
						},
						opacity: {
							value: 0.5,
							random: true,
						},
						size: {
							value: 10,
							random: true,
						},
						line_linked: {
							enable: true,
							distance: 150,
							color: "#ffffff",
							opacity: 0.4,
							width: 1,
						},
					},
				}}
			/>
			<div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center" }}>
				{skills.map((skill, index) => (
					<div
						key={index}
						style={{
							fontSize: "40px",
							color: skill.color,
							margin: "20px",
						}}
					>
						<skill.icon />
					</div>
				))}
			</div>
		</div>
	);
};

export default ParticleBackground;
