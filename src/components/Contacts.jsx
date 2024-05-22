import React from 'react';
// import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebookF, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const iconStyles = { color: '#fff', size: '2em' };

function Contacts() {
  return (
    <div class="flex flex-col min-h-screen bg-white">
      <div class="flex-1 p-5 max-w-3xl mx-auto bg-gray-100 rounded-lg">
        <header class="text-center py-5">
          <h1 className="m-0 text-gray-900">VirtuLearn Academy</h1>
          <p class="m-0 text-gray-600">Your gateway to quality online education</p>
        </header>
        <section className='mb-5'>
          <h2 class="text-blue-600">About Us</h2>
          <p>
            VirtuLearn Academy is committed to providing top-notch online education through innovative and engaging courses.
            Our mission is to empower learners worldwide with the knowledge and skills needed to succeed in their careers.
          </p>
          <p>
            <strong>Our Vision:</strong> To be the leading online education platform recognized for excellence and innovation.
          </p>
          <p>
            <strong>Our Values:</strong> Integrity, Excellence, Innovation, Inclusivity, and Lifelong Learning.
          </p>
        </section>
        <section className='mb-5'>
          <h2 class="text-blue-600">Join Us!</h2>
          <p>
            We are always looking for talented and passionate individuals to join our team. If you are interested in working with us,
            please send your resume and cover letter to <a href="mailto:careers@virtulearn.com">careers@virtulearn.com</a>.
          </p>
        </section>
        <section class="mb-5">
          <h3 class="text-blue-600">Give Feedback or Have Any Queries?</h3>
          <form action="mailto:careers@virtulearn.com" method="post" encType="multipart/form-data">
            <label class="block my-2" htmlFor='name'>Name:</label>
            <input class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" type='text' id='name' name='name' />
            <label class="block my-2" htmlFor='email'>Email:</label>
            <input class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md"  type='email' id='email' name='email' />
            <label class="block my-2" htmlFor='message'>Message:</label>
            <textarea class="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md" id='message' name='message' rows='4'></textarea>
            <button class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer" type='submit'>Send</button>
          </form>
        </section>
        <section className="mb-5">
          <h3 class="text-blue-600">More Information</h3>
          <p>
            For students: Please email us at <a href="mailto:students@virtulearn.com">students@virtulearn.com</a> for any queries related to course enrollment, student support, or general inquiries.
          </p>
          <p>
            For teachers: Please email us at <a href="mailto:teachers@virtulearn.com">teachers@virtulearn.com</a> if you are interested in teaching opportunities, course development, or have any questions about our platform.
          </p>
          <p>
            For school owners: Please email us at <a href="mailto:schools@virtulearn.com">schools@virtulearn.com</a> for partnership opportunities, bulk enrollments, or inquiries related to integrating VirtuLearn Academy into your institution.
          </p>
          <p>
            For administrative inquiries: Please email our admin team at <a href="mailto:admin@virtulearn.com">admin@virtulearn.com</a>.
          </p>
          <p>
            For sales inquiries: Please email our sales team at <a href="mailto:sales@virtulearn.com">sales@virtulearn.com</a>.
          </p>
          <p>
            For technical support: Please email our support team at <a href="mailto:support@virtulearn.com">support@virtulearn.com</a>.
          </p>
        </section>
      </div>
      <footer className="bg-gray-800 text-white p-0.5 text-center transition duration-300 ease-in-out">
        <div className="contact-us">
          <h4>Contact Us</h4>
        </div>
        <div className="socials">
          <a class="mx-2.5 text-white no-underline" href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} style={iconStyles} />
          </a>
          <a className='mx-2.5 text-white no-underline'  href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} style={iconStyles} />
          </a>
          <a className='mx-2.5 text-white no-underline'  href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} style={iconStyles} />
          </a>
          <a className='mx-2.5 text-white no-underline' href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} style={iconStyles} />
          </a>
        </div>
        <p class="mx-0">&copy; 2024 VirtuLearn Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contacts;
