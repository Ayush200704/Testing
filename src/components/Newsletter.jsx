import React from 'react';
import './Newsletter.css'; // Ensure you have the corresponding CSS file

const Newsletter = () => {
	return (
		<div className="newsletter">
			<section className="news">
				<h3>Get Latest News</h3>
				<p>Stay ahead with our up-to-the-minute market updates.</p>
				<form action="">
					<input
						type="text"
						placeholder="Your Name"
						maxLength="30"
						className="input"
					/>
					<input
						type="email"
						placeholder="Your Email"
						maxLength="50"
						className="input"
					/>
					<input type="submit" value="Subscribe Now" className="btn" />
				</form>
			</section>
		</div>
	);
};

export default Newsletter;
