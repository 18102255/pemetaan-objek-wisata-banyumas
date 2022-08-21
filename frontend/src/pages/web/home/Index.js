//import layout
import React from "react";

//import layout web
import LayoutWeb from "../../../layouts/Web";

//import Slider component
import Slider from "../../../components/web/Slider";

function Home() {
  return (
    <React.Fragment>
      <LayoutWeb>
        <Slider />

        <div className="container mb-5">
          <div className="row mt-minus-87">
            <div className="col-md-12">
              <div className="card border-0 rounded shadow-sm">
                <div className="card-body">
                  <h5>
                    <i className="fa fa-search"></i> dolan banyumas
                  </h5>
                  <p>golet panggonan apa bae ning banyumas!</p>
                  <hr />
                  <input
                    type="text"
                    className="form-control"
                    placeholder="golet apa bae ana ning banyumas"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center mt-4"></div>
        </div>
      </LayoutWeb>
    </React.Fragment>
  );
}
export default Home;
