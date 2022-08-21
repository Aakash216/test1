import React, { useState } from "react";
import { Formik, Field } from "formik";
import Table from "./table";

const Basic = () => {
  const [state, setState] = useState([]);
  return (
    <>
      <div
        style={{
          border: "1px solid black",
          margin: "auto",
          marginTop: "40px",
          width: "90%",
          display: "flex",
          backgroundColor: "#ECECEC",
        }}
      >
        <Formik
          initialValues={{
            name: "",
            age: "",
            gender: "",
            IdType: "",
            mobile: "",
            govtId: "",
            guardian: "",
            label: "",
            email: "",
            emergencyNumber: "",
            address: "",
            state: "",
            city: "",
            country: "",
            pincode: "",
            occupation: "",
            religion: "",
            maritalStatus: "",
            bloodGroup: "",
            nationality: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Required";
            }
            if (!values.name) {
              errors.name = "Required";
            }
            if (!values.age) {
              errors.age = "Required";
            }
            if (!values.gender) {
              errors.gender = "Required";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            console.log(values);

            setState((oldArray) => [...oldArray, values]);

            resetForm({});
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form style={{ disply: "flex" }} onSubmit={handleSubmit}>
              <div style={{ margin: "10px" }}>
                <h4 style={{ textDecoration: "underline", fontSize: "18px" }}>
                  Personal Details
                </h4>
                <label style={{ fontSize: "15px" }} htmlFor="Name">
                  Name<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  style={{
                    width: "31%",
                    marginLeft: "35px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter your Name"
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
                {errors.name && touched.name && errors.name}
                <label
                  style={{ marginLeft: "80px", fontSize: "15px" }}
                  htmlFor="Age"
                >
                  Date of Birth or Age<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  style={{
                    marginLeft: "35px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="DD/MM/YYY or Age in years"
                  type="string"
                  name="age"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.age}
                />
                {errors.age && touched.age && errors.age}
                <label
                  style={{ marginLeft: "80px", fontSize: "15px" }}
                  htmlFor="gender"
                >
                  Sex<span style={{ color: "red" }}>*</span>
                </label>
                <Field
                  style={{
                    marginLeft: "35px",
                    width: "246px",
                    height: "30px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  name="gender"
                  as="select"
                  className="my-select"
                >
        
                  <option value="Default">Male</option>
                  <option value="Female">Female</option>
                  <option value="others">Others</option>
                </Field>

                {errors.gender && touched.gender && errors.gender}
                <br />
                <div style={{ marginTop: "20px", fontSize: "15px" }}>
                  <label htmlFor="Mobile">Mobile</label>
                  <input
                    style={{
                      width: "254px",
                      marginLeft: "27px",
                      borderRadius: "5px",
                      border: "1px solid black",
                    }}
                    placeholder="Enter Mobile"
                    type="number"
                    name="mobile"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                  />
                  <label
                    style={{ marginLeft: "290px", fontSize: "15px" }}
                    htmlFor="GovtId"
                  >
                    Govt Issued ID
                  </label>
                  <input
                    style={{
                      marginLeft: "73px",
                      borderRadius: "5px",
                      border: "1px solid black",
                    }}
                    placeholder="ID Type"
                    type="string"
                    name="IdType"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.IdType}
                  />
                  <input
                    style={{
                      width: "405px",
                      marginLeft: "10px",
                      borderRadius: "5px",
                      border: "1px solid black",
                    }}
                    placeholder="Enter Govt ID"
                    type="number"
                    name="govtId"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.govtId}
                  />
                </div>
              </div>
              <div style={{ margin: "10px" }}>
                <h4 style={{ textDecoration: "underline", fontSize: "18px" }}>
                  Contact Details
                </h4>
                <label style={{ fontSize: "15px" }} htmlFor="Gurdian Details">
                  Guardian Details
                </label>
                <input
                  style={{
                    marginLeft: "20px",
                    width: "140px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Label"
                  type="label"
                  name="label"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.label}
                />
                <input
                  style={{
                    marginLeft: "10px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Guardian Name"
                  type="guardian"
                  name="guardian"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.guardian}
                />
                <label
                  style={{ fontSize: "15px", marginLeft: "80px" }}
                  htmlFor="email"
                >
                  email
                </label>
                <input
                  style={{
                    marginLeft: "35px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Email"
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                <label
                  htmlFor="emergency Number"
                  style={{ fontSize: "14px", marginLeft: "43px" }}
                >
                  Emergency Contact Number
                </label>
                <input
                  style={{
                    marginLeft: "17px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Emergency No"
                  type="number"
                  name="emergencyNumber"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.emergencyNumber}
                />
              </div>
              <div style={{ margin: "10px" }}>
                <h4 style={{ textDecoration: "underline", fontSize: "18px" }}>
                  Address Details
                </h4>
                <label htmlFor="Address">address</label>
                <input
                  style={{
                    marginLeft: "26px",
                    width: "456px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Address"
                  type="address"
                  name="address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                />
                <label
                  htmlFor="state"
                  style={{ fontSize: "15px", marginLeft: "80px" }}
                >
                  State
                </label>
                <input
                  style={{
                    marginLeft: "35px",
                    width: "358px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter State"
                  type="state"
                  name="state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.state}
                />
                <label
                  htmlFor="city"
                  style={{ fontSize: "15px", marginLeft: "80px" }}
                >
                  City
                </label>
                <input
                  style={{
                    marginLeft: "30px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter City/toen/village"
                  type="city"
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                <div style={{ marginTop: "15px" }}>
                  <label htmlFor="country">Country</label>
                  <input
                    style={{
                      marginLeft: "25px",
                      borderRadius: "5px",
                      border: "1px solid black",
                    }}
                    type="search"
                    name="country"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.country}
                  />
                  <label
                    htmlFor="Pincode"
                    style={{ fontSize: "15px", marginLeft: "280px" }}
                  >
                    Pincode
                  </label>
                  <input
                    style={{
                      marginLeft: "20px",
                      borderRadius: "5px",
                      border: "1px solid black",
                    }}
                    placeholder="Enter Pincode"
                    type="number"
                    name="pincode"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.pincode}
                  />
                </div>
              </div>
              <div style={{ margin: "10px" }}>
                <h4 style={{ textDecoration: "underline", fontSize: "18px" }}>
                  Other Details
                </h4>
                <label style={{ fontSize: "15px" }} htmlFor="occupation">
                  Occupation
                </label>
                <input
                  style={{
                    marginLeft: "10px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter occupation"
                  type="occupation"
                  name="occupation"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.occupation}
                />
                <label
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                  htmlFor="Religion"
                >
                  Religion
                </label>
                <input
                  style={{
                    marginLeft: "10px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Religion"
                  type="religion"
                  name="religion"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.religion}
                />
                <label
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                  htmlFor="Martial Status"
                >
                  Marital Status
                </label>
                <input
                  style={{
                    marginLeft: "10px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Enter Martial Status"
                  type="status"
                  name="maritalStatus"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.maritalStatus}
                />
                <label
                  style={{ fontSize: "15px", marginLeft: "30px" }}
                  htmlFor="BloodGrou"
                >
                  Blood Group
                </label>
                <input
                  style={{
                    marginLeft: "10px",
                    width: "230px",
                    borderRadius: "5px",
                    border: "1px solid black",
                  }}
                  placeholder="Group"
                  type="group"
                  name="bloodGroup"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.bloodGroup}
                />
                <div style={{ marginTop: "15px" }}>
                  <label htmlFor="Nationality">Nationality</label>
                  <input
                    style={{
                      marginLeft: "10px",
                      width: "250px",
                      borderRadius: "5px",
                      border: "1px solid black",
                    }}
                    type="nationality"
                    name="nationality"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nationality}
                  />
                </div>
              </div>
              <div
                style={{ textAlign: "right", width: "100%", margin: "10px" }}
              >
                <button
                  style={{ marginRight: "6%", width: "8%", height: "60px" }}
                  className="btn btn-outline-danger"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Cancel <br />
                  <span style={{ fontSize: "15px" }}>(ESC)</span>
                </button>
                <button
                  style={{ marginLeft: "3%", width: "8%", height: "60px" }}
                  className="btn btn-success"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                  <br />
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
      <Table state={state} />
    </>
  );
};

export default Basic;
