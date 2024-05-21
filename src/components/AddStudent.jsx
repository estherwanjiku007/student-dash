import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {useRef} from 'react-router-dom'

const AddStudent = () => {
  const initialValues = {
    name: '',
    course_id: '',
    school_id: '',
    resourse_id: '' // Corrected typo in field name
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    course_id: Yup.number().required('Course ID is required'),
    school_id: Yup.number().required('School ID is required'),
    resourse_id: Yup.number().required('Resource ID is required') // Corrected typo in field name
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('https://virtulearn-backend.onrender.com/students', values);
      if (response.status === 201) {
        alert('Student added successfully');
        resetForm();
      } else {
        alert('Failed to add student');
      }
    } catch (error) {
      console.error('Error adding student:', error);
      alert('Error adding student');
    }
    setSubmitting(false);
  };

  return (
    <div className="student-container flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6">Add Student</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <Field type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="course_id" className="block text-gray-700 font-medium mb-2">Course ID</label>
                <Field type="number" id="course_id" name="course_id" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="course_id" component="div" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="school_id" className="block text-gray-700 font-medium mb-2">School ID</label>
                <Field type="number" id="school_id" name="school_id" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="school_id" component="div" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="resourse_id" className="block text-gray-700 font-medium mb-2">Resource ID</label>
                <Field type="number" id="resourse_id" name="resourse_id" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="resourse_id" component="div" className="text-red-500 mt-1" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">Add Student</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddStudent;
