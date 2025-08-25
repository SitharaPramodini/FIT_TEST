import React, { useState, useEffect } from 'react';
import clients from './clients';  // Import the clients array
import './Clients.css';

const CompanyClients = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedClient, setSelectedClient] = useState(null);

	const openModal = (client) => {
		setSelectedClient(client);
		setIsModalOpen(true);
		// Stop the animation by adding a class to stop it
		document.querySelectorAll('.slide-track').forEach(track => {
			track.style.animationPlayState = 'paused';
		});
	};

	const closeModal = () => {
		setIsModalOpen(false);
		setSelectedClient(null);
		// Resume the animation when modal is closed
		document.querySelectorAll('.slide-track').forEach(track => {
			track.style.animationPlayState = 'running';
		});
	};

	const handleOutsideClick = (e) => {
		if (e.target.classList.contains("modal-overlay")) {
			closeModal();
		}
	};

	useEffect(() => {
		// Allow scrolling when modal is closed
		if (isModalOpen) {
			document.body.style.overflow = "hidden"; // Stop page scrolling
		} else {
			document.body.style.overflow = "auto"; // Allow scrolling
		}

		return () => {
			document.body.style.overflow = "auto"; // Reset overflow on component unmount
		};
	}, [isModalOpen]);

	const createSlider = (start, end) => (
		<div className="slider">
			<div className="slide-track">
				{clients.slice(start, end).map((client, index) => (
					<div
						key={index}
						className="slide"
						onClick={() => openModal(client)}
					>
						<img src={client.icon} height="33" width="83" alt={client.title} />
					</div>
				))}
				{clients.slice(start, end).map((client, index) => (
					<div
						key={index}
						className="slide"
						onClick={() => openModal(client)}
					>
						<img src={client.icon} height="33" width="83" alt={client.title} />
					</div>
				))}
			</div>
		</div>
	);

	return (
		<div className="relative w-full h-auto bg-[#020a1a] text-black rounded-lg overflow-hidden">
			<h2 className="relative pt-2 text-3xl text-center font-bold text-white md:text-5xl md:leading-[1.2]  my-8">Company clients</h2>

			{/* First Slider */}
			{createSlider(0, 10)}

			{/* Second Slider */}
			{createSlider(11, 20)}

			{/* Third Slider */}
			{createSlider(21, 30)}

			{/* Fourth Slider */}
			{createSlider(31, 40)}

			{/* Fifth Slider */}
			{createSlider(41, 48)}

			{/* Modal */}
			{isModalOpen && (

				<div
					className="modal-overlay"
					onClick={handleOutsideClick}
				>
					<picture>
						<div className="modal">
							<figcaption>{selectedClient.title}</figcaption>
							<img src={selectedClient.icon} alt={selectedClient.title} className='mx-auto' />
							<p>{selectedClient.description}</p>
						</div>
					</picture>
				</div>
			)}
		</div>
	);
};

export default CompanyClients;
