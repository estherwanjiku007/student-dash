import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const iconStyles = { color: '#fff', size: '2em' };

function Contacts() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 p-10 text-gray-700">
      <div className="text-center max-w-4xl mx-auto bg-white p-10 rounded-lg shadow-md">
        <header className="mb-7">
          <h1 className="text-4xl font-extrabold text-blue-600">VirtuLearn Academy</h1>
          <p className="text-gray-600 mt-2">Your gateway to quality online education</p>
        </header>
        
        <section className="mb-10">
          <h3 className="text-3xl font-semibold text-blue-500 mb-4">Contact Us</h3>
          <p className="mb-4">
            For students: Please email us at <a href="mailto:students@virtulearn.com" className="text-blue-600">students@virtulearn.com</a> for any queries related to course enrollment, student support, or general inquiries.
          </p>
          <p className="mb-4">
            For teachers: Please email us at <a href="mailto:teachers@virtulearn.com" className="text-blue-600">teachers@virtulearn.com</a> if you are interested in teaching opportunities, course development, or have any questions about our platform.
          </p>
          <p className="mb-4">
            For school owners: Please email us at <a href="mailto:schools@virtulearn.com" className="text-blue-600">schools@virtulearn.com</a> for partnership opportunities, bulk enrollments, or inquiries related to integrating VirtuLearn Academy into your institution.
          </p>
          <p className="mb-4">
            For administrative inquiries: Please email our admin team at <a href="mailto:admin@virtulearn.com" className="text-blue-600">admin@virtulearn.com</a>.
          </p>
          <p className="mb-4">
            For sales inquiries: Please email our sales team at <a href="mailto:sales@virtulearn.com" className="text-blue-600">sales@virtulearn.com</a>.
          </p>
          <p className="mb-4">
            For technical support: Please email our support team at <a href="mailto:support@virtulearn.com" className="text-blue-600">support@virtulearn.com</a>.
          </p>
        </section>
        
      </div>
      {/* <footer className="w-full bg-blue-600 text-white py-3 text-center mt-10">
        <div className="mb-2">
          <h4 className="text-lg font-semibold">Contact Us</h4>
        </div>
        <div className="flex justify-center mb-2">
          <a className="mx-2.5" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={iconStyles} />
          </a>
          <a className="mx-2.5" href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={iconStyles} />
          </a>
          <a className="mx-2.5" href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} style={iconStyles} />
          </a>
          <a className="mx-2.5" href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
          </a>
        </div>
        <p className="text-sm">&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
      </footer> */}
    </div>
  );
}

export default Contacts;
