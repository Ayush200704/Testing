import 'boxicons/css/boxicons.min.css';
import './Footer.css';

export default function Footer() {
	return (
		<footer className="footer">
			<div className="mainFooter">
				<div className="footerDescription">
					<h2>KalkiNi</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore eum,
						corrupti vitae tempora placeat nemo beatae atque nobis ea facere
						neque optio dolorem nisi consequatur minus corporis architecto alias
						iste!
					</p>
				</div>
				<div className="quick">
					<h4>Quick Access</h4>
					<ul>
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#education">Education</a>
						</li>
						<li>
							<a href="#services">Services</a>
						</li>
						<li>
							<a href="#testimonials">Testimonials</a>
						</li>
					</ul>
				</div>
				<div className="help">
					<h4>Help &amp; Support</h4>
					<ul>
						<li>
							<a href="#home">Contact Us</a>
						</li>
						<li>
							<a href="#education">Services</a>
						</li>
						<li>
							<a href="#services">Hire Us</a>
						</li>
					</ul>
				</div>
				<div className="social">
					<h4>Socials</h4>
					<ul>
						<li>
							<a href="#home">Facebook</a>
						</li>
						<li>
							<a href="#education">LinkedIn</a>
						</li>
						<li>
							<a href="#services">Instagram</a>
						</li>
						<li>
							<a href="#">Discord</a>
						</li>
					</ul>
				</div>
				<div className="legal">
					<h4>Legal</h4>
					<ul>
						<li>
							<a href="#home">License (EULA)</a>
						</li>
						<li>
							<a href="#education">Privacy Policy</a>
						</li>
						<li>
							<a href="#services">Terms &amp; Conditions</a>
						</li>
						<li>
							<a href="#">Brand Guideline</a>
						</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="disclaimer">
				&copy; 2024 KalkiNi&trade; is a registered trademark. All Rights
				Reserved.
			</p>
		</footer>
	);
}
