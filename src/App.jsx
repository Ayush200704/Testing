import React from 'react';
import Header from './components/Header';
// import Carousel from './components/Carousel';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Newsletter from './components/Newsletter';
import Wrapper from './components/Wrapper';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import BentoBox from './components/BentoBox/BentoBox';
import FAQPage from './components/FAQPage';
import NewsSection from './components/NewsSection';
import Hero from './components/Hero';


import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import BlogList from './components/BlogList';
import Landing from './components/Landing';

const App = () => {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/newssection" element={<NewsSection />} />

					<Route path="/blog" element={<BlogList />} />

					<Route path="/services" element={<Services />}/>

					<Route
						path="/"
						element={
							<>
								<Header />
								{/* <Carousel /> */}
								<Landing />
								
									<Hero />
								
								 {/* <BentoBox /> 								 */}
								
								{/* <Newsletter /> */}
								<Wrapper />
								<FAQPage />
								<Gallery />
								<ContactUs />
								<Footer />
							</>
						}
					/>
				</Routes>
			</Router>
		</>
	);
};

export default App;
