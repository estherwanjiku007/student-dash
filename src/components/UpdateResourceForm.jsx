import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const UpdateResourceForm = ({ resourceId }) => {
  const [initialValues, setInitialValues] = useState({
    name: '',
    course_id: '',
    url: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Resource ID:', resourceId); // Log the resourceId
    const fetchResource = async () => {
      try {
        const response = await axios.get(`https://virtulearn-backend.onrender.com/resources/${resourceId}`);
        const resource = response.data;

        console.log('Fetched resource:', resource); // Log the fetched resource

        if (resource && resource.name && resource.course_id && resource.url) {
          setInitialValues({
            name: resource.name,
            course_id: resource.course_id.toString(),
            url: resource.url,
          });
        } else {
          throw new Error('Resource data is incomplete or missing');
        }
      } catch (err) {
        console.error('Error fetching the resource:', err);
        setError(err.message || 'An error occurred while fetching the resource');
      } finally {
        setLoading(false);
      }
    };

    fetchResource();
  }, [resourceId]);

  const formik = useFormik({
    initialValues,
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      course_id: Yup.number().required('Required'),
      url: Yup.string().url('Invalid URL').required('Required'),
    }),
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const convertedValues = {
          ...values,
          course_id: parseInt(values.course_id, 10),
        };

        await axios.put(`https://virtulearn-backend.onrender.com/resources/${resourceId}`, convertedValues);
        alert('Resource updated successfully');
      } catch (error) {
        console.error('Error updating the resource:', error);
        alert('Error updating resource');
      } finally {
        setSubmitting(false);
      }
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`shadow appearance-none border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {formik.touched.name && formik.errors.name ? (
            <p className="text-red-500 text-xs italic">{formik.errors.name}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="course_id">
            Course ID
          </label>
          <input
            id="course_id"
            name="course_id"
            type="number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.course_id}
            className={`shadow appearance-none border ${formik.touched.course_id && formik.errors.course_id ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {formik.touched.course_id && formik.errors.course_id ? (
            <p className="text-red-500 text-xs italic">{formik.errors.course_id}</p>
          ) : null}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="url">
            URL
          </label>
          <input
            id="url"
            name="url"
            type="url"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.url}
            className={`shadow appearance-none border ${formik.touched.url && formik.errors.url ? 'border-red-500' : 'border-gray-300'} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          />
          {formik.touched.url && formik.errors.url ? (
            <p className="text-red-500 text-xs italic">{formik.errors.url}</p>
          ) : null}
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {formik.isSubmitting ? 'Updating...' : 'Update Resource'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateResourceForm;
