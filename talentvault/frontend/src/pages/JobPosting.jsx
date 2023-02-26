import React, { useState } from "react";
import "../index.css";
import Wrapper from "../assets/styling/RegisterPage";
import FormRow from "../components/FormRow";

function JobPosting() {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName:"",
    remotejob: "",
    employmenttype: "",
    province: "",
    city: "",
  });

  const { jobTitle, companyName,remotejob, employmenttype, province,city } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={{ onSubmit }}>
        <h3 className="form-title">Your Job Posting</h3>

       
          <FormRow
            type="text"
            labelText="Job Title"
            className="form-control"
            name="jobTitle"
            value={jobTitle}
            onChange={onChange}
          />
          <FormRow
            type="text"
            labelText="Company Name"
            className="form-control"
            name="companyName"
            value={companyName}
            onChange={onChange}
          />

       

            <FormRow
            type="text"
            labelText="City"
            className="form-control"
            name="city"
            value={city}
            onChange={onChange}
          />

     
      <div className="form-group" id="custom-select">
          <label>Province</label>
          <select
            name="province"
            className="form-control"
            value={province}
            onChange={onChange}
            aria-required="true"
          >
            <option className="dropdown_options" value="alberta">
              AB
            </option>
            <option className="dropdown_options" value="british_columbia">
             BC
            </option>
            <option className="dropdown_options" value="prince_edward_island">
             PE
            </option>
            <option className="dropdown_options" value="manitoba">
              MB
            </option>
            <option className="dropdown_options" value="new_brunswick">
              NB
            </option>
            <option className="dropdown_options" value="newfoundland_labrador">
              NL
            </option>
            <option className="dropdown_options" value="northwest_territories">
              NW
            </option>
            <option className="dropdown_options" value="nova_scotia">
              NS
            </option>
            <option className="dropdown_options" value="nunavut">
              NU
            </option>
            <option className="dropdown_options" value="ontario">
              ON
            </option>
            <option className="dropdown_options" value="saskatchewan">
              SK
            </option>
            <option className="dropdown_options" value="quebec">
              QC
            </option>
            <option className="dropdown_options" value="yukon">
              YT
            </option>
          </select>
        </div>

        <div className="form-group" id="remotejobcheckbox">
          <label id="checkboxlabel">
            This role can be performed remotely
          </label>
          <input
            type="checkbox"
            className="form-control-checkbox"
            name="remotejob"
            value={remotejob}
            onChange={onChange}
            unchecked
          />
        </div>

        <div className="form-group" id="custom-select">
          <label>Employment Type</label>
          <select
            name="employment_type"
            className="form-control"
            value={employmenttype}
            onChange={onChange}
            aria-required="true"
          >
            <option className="dropdown_options" value="full_time">
              Full-Time
            </option>
            <option className="dropdown_options" value="part_time">
              Part-Time
            </option>
            <option className="dropdown_options" value="contractor">
              Contractor
            </option>
            <option className="dropdown_options" value="temporary">
              Temporary
            </option>
            <option className="dropdown_options" value="other">
              Other
            </option>
          </select>
        </div>

        <div className="form-group">
          <label>Job Description</label>
          <textarea
            type="textarea"
            className="form-control-text-area"
            name="jobdescription"
            placeholder="Please paste your job description here"
          />
        </div>

  
          <button type="submit" className="btn btn-block">
            Save and Continue
          </button>
       
      </form>
    </Wrapper>
  );
}

export default JobPosting;
