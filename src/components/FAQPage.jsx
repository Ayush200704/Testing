import React, { useState } from 'react';
import './FAQPage.css';
import Spline from '@splinetool/react-spline';

const FAQPage = () => {
	const GeneralFAQ = [
		{
			id: 1,
			toggle: false,
			question: 'What types of surveillance systems does KalkiNI offer?',
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
		{
			id: 2,
			toggle: false,
			question: "How does KalkiNI's AI technology improve surveillance?",
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
		{
			id: 3,
			toggle: false,
			question:
				"Is KalkiNI's surveillance technology compatible with existing systems?",
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
		{
			id: 4,
			toggle: false,
			question:
				"How secure is the data collected by KalkiNI's surveillance systems?",
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
		{
			id: 5,
			toggle: false,
			question: "Can KalkiNI's systems be customized to meet specific needs?",
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
		{
			id: 6,
			toggle: false,
			question: 'What kind of support does KalkiNI offer after installation?',
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
	];

	const FAQ2 = [
		{
			id: 1,
			toggle: false,
			question: 'Is it a one-time payment?',
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
		{
			id: 2,
			toggle: false,
			question: 'How does billing works?',
			answer:
				'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis libero eveniet deleniti, consequatur ut maiores. Autem vel impedit praesentium porro aspernatur dicta iure nisi nobis. Vel aliquid tempora iste autem.',
		},
	];

	const [genFAQ, setGenFAQ] = useState(GeneralFAQ);
	const [Faq2, setFaq2] = useState(FAQ2);
	const handleToggle = (id) => {
		setGenFAQ((prevFaqs) =>
			prevFaqs.map((faq) =>
				faq.id === id
					? {
							...faq,
							toggle: !faq.toggle,
					  }
					: faq
			)
		);
	};
	const handleToggle2 = (id) => {
		setFaq2((prevFaqs2) =>
			prevFaqs2.map((faq) =>
				faq.id === id
					? {
							...faq,
							toggle: !faq.toggle,
					  }
					: faq
			)
		);
	};

	return (
		<div className="faq-page">
			<div className="head">
				<p id="support">Support</p>
				<h1>
					Top questions about <span id="title">KalkiNI</span>
				</h1>
				<input type="text" placeholder="Search" />
				<p className="right-aligned-text">
					Need something cleared up? Here are
					<br /> our most frequently asked questions.
				</p>
			</div>

			<div className="faq-section">
				<div className="faq-div1">
					<h2>General FAQs</h2>
					<p>
						Everything you need to know about the product and how it works.
						Can&apos;t find an answer? Please chat to our friendly team.
					</p>
					<Spline
						className="spline"
						scene="https://prod.spline.design/OBVLAn96eBOxt-5J/scene.splinecode"
					/>
				</div>
				<div className="faq-list">
					{genFAQ.map((q) => (
						<div className="faq-item" key={q.id}>
							<div className="faq-question">
								<h3>{q.question}</h3>
								<span className="toggle" onClick={() => handleToggle(q.id)}>
									{q.toggle ? '-' : '+'}
								</span>
							</div>
							{q.toggle && <p className="answer">{q.answer}</p>}
						</div>
					))}
				</div>
			</div>
			{/* <hr className='hr'/>     */}
			<div className="faq-section">
				<div className="faq-div1">
					<h2>Billing FAQs</h2>
					<p>
						Everything you need to know about the billing and invoices.
						Can&apos;t find an answer? Please chat to our friendly team.
					</p>
				</div>
				<div className="faq-list">
					{Faq2.map((q) => (
						<div className="faq-item" key={q.id}>
							<div className="faq-question">
								<h3>{q.question}</h3>
								<span className="toggle" onClick={() => handleToggle2(q.id)}>
									{q.toggle ? '-' : '+'}
								</span>
							</div>
							{q.toggle && <p className="answer">{q.answer}</p>}
						</div>
					))}
				</div>
			</div>

			<div className="foot">
				<h2>Still have questions?</h2>
				<div className="button-group">
					<input type="text" placeholder="Send a Question" />
					<button className="button button-primary">Send</button>
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
