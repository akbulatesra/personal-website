'use client';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import toast, { Toaster } from 'react-hot-toast';
import Image from 'next/image';
import { MyFormValues } from '@/types';
import { onBlur, onChange } from '@/helpers';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().nullable().required('Name field is required'),
  mail: Yup.string()
    .email('Enter a valid e-mail')
    .nullable()
    .required('Mail field is required'),
  message: Yup.string().nullable().required('Message field is required'),
});

const GetInTouch = () => {
  const initialValues: MyFormValues = { name: '', mail: '', message: '' };
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (actions: FormikHelpers<MyFormValues>) => {
    emailjs
      .sendForm(
        process.env.SERVICE_ID || '',
        process.env.TEMPLATE_ID || '',
        formRef.current || '',
        process.env.PUBLIC_KEY
      )
      .then(
        (result) => {
          toast('Your email has been sent successfully!');
        },
        (error) => {
          toast(
            'An error occurred while sending the email. Please try again later.'
          );
        }
      )
      .finally(() => {
        actions.setSubmitting(false);
        actions.resetForm();
      });
  };
  return (
    <div
      className="flex flex-col lg:gap-12 md:gap-8 gap-4 xl:h-[70vh]"
      id="contact"
    >
      <h2 className='text-3xl lg:text-6xl mb-0"'>Get In Touch</h2>
      <Toaster
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      <section className="flex lg:gap-12 md:gap-8 gap-4">
        <div className="flex flex-1 lg:w-1/2">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(_, actions) => {
              handleSubmit(actions);
            }}
          >
            {({
              isSubmitting,
              errors,
              setFieldValue,
              touched,
              validateField,
              setFieldTouched,
            }) => (
              <Form
                ref={formRef}
                className="flex flex-col px-4 py-2 bg-inherit text-base lg:text-lg h-full w-full shadow-lg dark:shadow-darkMode"
              >
                <span className="flex flex-col relative">
                  <label htmlFor="name" className="text-base lg:text-lg">
                    Name
                  </label>
                  <Field
                    id="name"
                    name="name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e, setFieldValue, validateField, 'name', touched)
                    }
                    onBlur={() =>
                      onBlur(setFieldTouched, validateField, 'name')
                    }
                    placeholder="Your Name"
                    className={`bg-inherit p-2 shadow-md dark:shadow-darkMode mb-5 mt-2 ${
                      errors.name &&
                      touched.name &&
                      'border-special_red border-2'
                    }`}
                  />
                  {errors.name && touched.name && (
                    <span className="text-xs lg:text-sm absolute right-0 bottom-0 text-special_red">
                      {errors.name}
                    </span>
                  )}
                </span>
                <span className="flex flex-col relative">
                  <label htmlFor="mail" className="text-base lg:text-lg">
                    Mail Address
                  </label>
                  <Field
                    id="mail"
                    name="mail"
                    placeholder="example@example.com"
                    className={`bg-inherit p-2 shadow-md dark:shadow-darkMode mb-5 mt-2 ${
                      errors.mail &&
                      touched.mail &&
                      'border-special_red border-2'
                    }`}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(e, setFieldValue, validateField, 'mail', touched)
                    }
                    onBlur={() =>
                      onBlur(setFieldTouched, validateField, 'mail')
                    }
                  />
                  {errors.mail && touched.mail && (
                    <span className="text-xs lg:text-sm absolute right-0 bottom-0 text-special_red">
                      {errors.mail}
                    </span>
                  )}
                </span>
                <span className="flex flex-col relative">
                  <label htmlFor="message" className="text-base lg:text-lg">
                    Message
                  </label>
                  <Field
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    as="textarea"
                    className={`bg-inherit p-2 shadow-md dark:shadow-darkMode mb-5 mt-2 border-none resize-none ${
                      errors.message &&
                      touched.message &&
                      'border-special_red border-2 !border-solid'
                    }`}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      onChange(
                        e,
                        setFieldValue,
                        validateField,
                        'message',
                        touched
                      )
                    }
                    onBlur={() =>
                      onBlur(setFieldTouched, validateField, 'message')
                    }
                  />
                  {errors.message && touched.message && (
                    <span className="lg:text-sm text-xs absolute right-0 bottom-0 text-special_red">
                      {errors.message}
                    </span>
                  )}
                </span>

                <button
                  type="submit"
                  className={`lg:px-6 lg:py-2 px-3 py-1 ${
                    isSubmitting
                      ? 'bg-slate-200 text-slate-500'
                      : 'bg-yellow-400'
                  } w-fit lg:text-lg text-sm md:text-base rounded-md my-auto`}
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>

        <Image
          alt="phone with some words hello etc"
          width={300}
          height={388}
          src="/images/contact.jpg"
          className="hidden lg:block w-1/2 object-fill h-[revert-layer] flex-1"
        />
      </section>
    </div>
  );
};
export default GetInTouch;
