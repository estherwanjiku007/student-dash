import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';

const TakeAttendance = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const initialValues = {
    student_id: '',
    course_id: '',
    date: '',
    teacher_id: '',
  };

  const onSubmit = async (values, actions) => {
    setIsSubmitting(true);
    try {
      const response = await axios.post('https://phase5-project-ierq.onrender.com/attendances', values);
      setSuccessMessage('Attendance record created successfully!');
      actions.resetForm(); // Clear form after successful submission
    } catch (error) {
      console.error('Error creating attendance:', error);
      setErrorMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="take-attendance-container bg-gray-100 p-4 rounded-md shadow-md">
      {successMessage && (
        <p className="text-green-500 font-medium mb-4">{successMessage}</p>
      )}
      {errorMessage && <p className="text-red-500 font-medium mb-4">{errorMessage}</p>}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <Form className="take-attendance-form flex flex-col gap-4">
            <Field
              type="text"
              name="student_id"
              placeholder="Student ID"
              className="rounded-md border border-gray-300 px-2 py-1"
              disabled={isSubmitting} // Disable form fields while submitting
            />
            <ErrorMessage name="student_id" component="div" className="text-red-500 text-sm" />
            <Field
              type="text"
              name="course_id"
              placeholder="Course ID"
              className="rounded-md border border-gray-300 px-2 py-1"
              disabled={isSubmitting}
            />
            <ErrorMessage name="course_id" component="div" className="text-red-500 text-sm" />
            <Field
              type="date"
              name="date"
              placeholder="Date"
              className="rounded-md border border-gray-300 px-2 py-1"
              disabled={isSubmitting}
            />
            <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
            <Field
              type="text"
              name="teacher_id"
              placeholder="Teacher ID"
              className="rounded-md border border-gray-300 px-2 py-1"
              disabled={isSubmitting}
            />
            <ErrorMessage name="teacher_id" component="div" className="text-red-500 text-sm" />
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md focus:outline-none" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Take Attendance'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TakeAttendance;
