/* eslint-disable no-unused-vars */
import React from 'react';
import { MyFormValues } from '@/types';
import { FormikTouched, FormikErrors } from 'formik';
import axios from 'axios';

export const onChange = (
  e: React.ChangeEvent<HTMLInputElement>,
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<MyFormValues>>,
  validateField: (field: string) => Promise<void> | Promise<string | undefined>,
  field: keyof MyFormValues,
  touched: FormikTouched<MyFormValues>
) => {
  setFieldValue(field, e.target.value);
  if (touched[field]) {
    validateField(field);
  }
};
export const onBlur = (
  setFieldTouched: (
    field: string,
    isTouched?: boolean | undefined,
    shouldValidate?: boolean | undefined
  ) => Promise<void | FormikErrors<MyFormValues>>,
  validateField: (field: string) => Promise<void> | Promise<string | undefined>,
  field: keyof MyFormValues
) => {
  setFieldTouched(field, true);
  validateField(field);
};

export const getMediumArticles = async () => {
  try {
    const response = await axios.get('https://api.rss2json.com/v1/api.json', {
      params: {
        rss_url: 'https://medium.com/feed/@a.esra.akbulat',
      },
    });
    return response.data.items || [];
  } catch (error) {
    console.error('Error fetching Medium posts:', error);
    return [];
  }
};
