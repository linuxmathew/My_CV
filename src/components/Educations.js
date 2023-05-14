import React from "react";

const Educations = () => {
  return (
    <div id="section4">
      <div className="card">
        <div className="card-content">
          <h6>
            <strong>EDUCATION</strong>
          </h6>
          <table className="striped">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Date</th>
                <th>Qualification</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                                <td>Google</td>
                                <td>Feb - Sep, 2022 </td>
                                <td>Google IT support Specialist</td>
                            </tr> */}
              <tr>
                <td>Obafemi Awolowo University</td>
                <td>Sept 2017 - Dec. 2022</td>
                <td>Bsc, Computer Engineering</td>
              </tr>
              <tr>
                <td>Polytechnic</td>
                <td>August 2012 - Sept. 2014</td>
                <td>National Diploma, Computer Engineering</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Educations;
