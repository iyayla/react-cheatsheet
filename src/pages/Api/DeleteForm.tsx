import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import type { DeleteEntryResponse } from "../../types/entryResponse";

export interface DeleteFormValues {
  id: string;
}

interface DeleteFormProps {
  initialValues: DeleteFormValues;
  isLoading: boolean;
  onSubmit: (values: DeleteFormValues) => void;
  deleteData: DeleteEntryResponse | null;
}

const validationSchema = Yup.object({
  id: Yup.string().required("Id is required"),
});

const DeleteForm: React.FC<DeleteFormProps> = ({
  initialValues,
  isLoading,
  onSubmit,
  deleteData,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form className="mt-7">
        <div className="text-right">
          <button
            className="btn btn-error btn-block"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Deleting..." : "Delete"}
          </button>
        </div>

        {deleteData && deleteData.success === false && deleteData.errors && (
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
              <span>{deleteData.errors[0]}</span>
            </div>
          </div>
        )}
      </Form>
    </Formik>
  );
};

export default DeleteForm;
