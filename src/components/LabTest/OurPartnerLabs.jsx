import React from "react";
import TopMedical from './TopMedical';

const OurPartnerLabs = () => {
  return (
    <>
      <div className="row mt-5">
        <div class="card  ">
          <div class="card-header"></div>
          <div class="card-body">
            <h5 class="card-title h2 mb-5 mt-4"> Our Partner Labs</h5>
            <p class="card-text h3 mb-5 ">Practo Labs</p>

            <div class="card-footer bg-transparent border-success mt-4">
              Your tests will be conducted in one of our partner labs to ensure
              highest accuracy of your reports.
            </div>
          </div>
          <div class="card-footer text-muted"></div>
        </div>
      </div>
      <TopMedical/>
    </>
  );
};

export default OurPartnerLabs;
