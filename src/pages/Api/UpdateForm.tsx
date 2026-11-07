import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { UpsertEntryResponse } from "../../types/entryResponse";

export interface UpdateFormValues {
    id: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
}

interface UpdateFormProps {
    initialValues: UpdateFormValues;
    isLoading: boolean;
    onSubmit: (values: UpdateFormValues) => void;
    updateData: UpsertEntryResponse | null;
}

const validationSchema = Yup.object({
  id: Yup.string().required("Id is required"),
  firstName: Yup.string()
    .max(255, "First name must be less than 255 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .max(255, "Last name must be less than 255 characters")
    .required("Last name is required"),
  phoneNumber: Yup.string()
    .max(255, "Phone number must be less than 255 characters")
    .required("Phone number is required"),
});

const AddForm: React.FC<UpdateFormProps> = ({ initialValues, isLoading, onSubmit, updateData }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form className="mt-7">
        <div>
          <fieldset className="fieldset">
            <label htmlFor="firstName">First Name</label>
            <Field
              id="firstName"
              name="firstName"
              className="input"
              disabled={isLoading}
            />
            <ErrorMessage name="firstName" className="" component="div" />
          </fieldset>
        </div>

        <div>
          <fieldset className="fieldset">
            <label htmlFor="lastName">Last Name</label>
            <Field
              id="lastName"
              name="lastName"
              className="input"
              disabled={isLoading}
            />
            <ErrorMessage name="lastName" component="div" />
          </fieldset>
        </div>

        <div>
          <fieldset className="fieldset">
            <label htmlFor="phoneNumber">Phone Number</label>
            <Field
              id="phoneNumber"
              name="phoneNumber"
              className="input"
              disabled={isLoading}
            />
            <ErrorMessage name="phoneNumber" component="div" />
          </fieldset>
        </div>

        <div className="text-right mt-4">
          <button
            className="btn btn-error btn-block"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>

        {updateData && !updateData.success && updateData.errors && (
          <div className="text-center mt-4">
            <div role="alert" className="alert alert-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>{updateData.errors[0]}</span>
            </div>
          </div>
        )}
      </Form>
    </Formik>
  );
};

export default AddForm;
