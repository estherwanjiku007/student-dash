import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import {useRef} from 'react-router-dom'

const initialValues = {
    schoolName: '',
    address: '',
    contact: ''
};

const validationSchema = Yup.object({
    schoolName: Yup.string().required('School name is required'),
    address: Yup.string().required('Address is required'),
    contact: Yup.string().required('Contact is required')
});

const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
        const response = await axios.post('/api/schools', values);
        console.log(response.data);
        resetForm();
    } catch (error) {
        console.error('Error creating school:', error);
        alert('Error creating school');
    } finally {
        setSubmitting(false);
    }
};

const CreateSchool = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold mb-4">Create School</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            <div className="mb-4">
                                <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700">School Name:</label>
                                <Field type="text" id="schoolName" name="schoolName" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <ErrorMessage name="schoolName" component="div" className="text-red-500 text-xs mt-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address:</label>
                                <Field type="text" id="address" name="address" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-xs mt-2" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact:</label>
                                <Field type="text" id="contact" name="contact" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                                <ErrorMessage name="contact" component="div" className="text-red-500 text-xs mt-2" />
                            </div>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 disabled:opacity-50">Create School</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default CreateSchool;
