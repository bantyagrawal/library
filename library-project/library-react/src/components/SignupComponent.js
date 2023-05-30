import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Container, Row, Col, Form as BootstrapForm, Button } from 'react-bootstrap';

const initialValues = {
  name: '',
  email: '',
  rollnumber: '',
  password: '',
  contact: '',
  address: '',
  image: '',
};

const validationSchema = yup.object({
  name: yup.string().required('Required'),
  email: yup.string().required('Required').email('Invalid Email'),
  rollnumber: yup.number().required('Required').typeError('Only numbers allowed'),
  password: yup.string().required('Required'),
  contact: yup.number().required('Required').typeError('Only numbers allowed'),
  address: yup.string().required('Required'),
  image: yup.mixed().required('Required'),
});

const SignupComponent = () => {
  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <>
      <Container className="d-flex justify-content-center align-items-center min-vh-60">
        <Row>
          <Col>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {({ setFieldValue }) => (
                <Form>
                  <h2 className="text-center mb-4">Signup</h2>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Name</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Email</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Roll Number</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="rollnumber"
                      id="rollnumber"
                      placeholder="Enter your roll number"
                    />
                    <ErrorMessage name="rollnumber" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Password</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                    />
                    <ErrorMessage name="password" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Contact</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="contact"
                      id="contact"
                      placeholder="Enter your contact"
                    />
                    <ErrorMessage name="contact" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Address</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="text"
                      name="address"
                      id="address"
                      placeholder="Enter your address"
                    />
                    <ErrorMessage name="address" component="div" className="text-danger" />
                  </BootstrapForm.Group>

                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Profile</BootstrapForm.Label>
                    <Field
                      as={BootstrapForm.Control}
                      type="file"
                      name="image"
                      id="image"
                      onChange={(e) => setFieldValue('image', e.target.files[0])}
                    />
                    <ErrorMessage name="image" component="div" className="text-danger" />
                  </BootstrapForm.Group>
                  <br />

                  <div className="text-center">
                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SignupComponent;
