import React from "react";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export interface DeleteFormValues {
  id: string;
}

interface DeleteFormProps {
  initialValues: DeleteFormValues;
  isLoading: boolean;
  onSubmit: (values: DeleteFormValues) => void;
}

const validationSchema = Yup.object({
  id: Yup.string().required("Id is required"),
});

const DeleteForm: React.FC<DeleteFormProps> = ({
  initialValues,
  isLoading,
  onSubmit,
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      <Form>
        <button className="btn btn-error" type="submit" disabled={isLoading}>
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </Form>
    </Formik>
  );
};

export default DeleteForm; 
