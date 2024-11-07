import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {useRef} from 'react-router-dom'

const initialValues = {
  name: '',
  course_id: '',
  school_id: ''
};

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  course_id: Yup.string().required('Course ID is required'),
  school_id: Yup.string().required('School ID is required')
});

const onSubmit = async (values, { setSubmitting, resetForm }) => {
  try {
    await axios.post('https://virtulearn-backend.onrender.com//teachers', values);
    alert('Teacher added successfully');
    resetForm();
  } catch (error) {
    console.error('Error adding teacher:', error);
    alert('Error adding teacher');
  } finally {
    setSubmitting(false);
  }
};

const AddTeacher = () => {
  return (
    <div className="teacher-container flex justify-center items-center min-h-screen bg-gray-100">
      <div className="card bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6">Add Teacher</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name:</label>
                <Field type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="name" component="div" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="course_id" className="block text-gray-700 font-medium mb-2">Course ID:</label>
                <Field type="text" id="course_id" name="course_id" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="course_id" component="div" className="text-red-500 mt-1" />
              </div>
              <div className="mb-4">
                <label htmlFor="school_id" className="block text-gray-700 font-medium mb-2">School ID:</label>
                <Field type="text" id="school_id" name="school_id" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <ErrorMessage name="school_id" component="div" className="text-red-500 mt-1" />
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">Add Teacher</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddTeacher;
