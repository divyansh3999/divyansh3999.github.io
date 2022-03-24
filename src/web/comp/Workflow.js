import React from "react";

export default function Workflow() {
  return (
    <>
    <div className="container">
    <hr className="bg-light"/>
    </div>
      <section className="buildSection py-5">
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="section text-center">
              <h1>Workflow that just works</h1>
              <p className="text-center">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum — semper quis
                lectus nulla at volutpat diam ut venenatis.
              </p>
            </div>
          </div>
        </div>
        <div className="container marketing">
          <hr className="featurette-divider" />

          <div className="row featurette py-3 d-flex align-items-center">
            <div className="col-md-6 marginMobile">
              <p className="workPara">LIGHTNING FAST WORKFLOW</p>
              <h3 className="card-title">Data-driven insights</h3>
              <p className="card-text">
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://open.cruip.com/static/media/features-split-image-01.d9cb99ce.png"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette py-3 d-flex align-items-center">
            <div className="col-md-6 marginMobile order-md-2">
              <p className="workPara">LIGHTNING FAST WORKFLOW</p>
              <h3 className="card-title">Data-driven insights</h3>
              <p className="card-text">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-6 order-md-1">
              <img
                src="https://open.cruip.com/static/media/features-split-image-02.3c569239.png"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <hr className="featurette-divider" />

          <div className="row featurette py-3 d-flex align-items-center">
            <div className="col-md-6 marginMobile">
              <p className="workPara">LIGHTNING FAST WORKFLOW</p>
              <h3 className="card-title">Data-driven insights</h3>
              <p className="card-text">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className="col-md-6">
              <img
                src="https://open.cruip.com/static/media/features-split-image-02.3c569239.png"
                className="card-img-top"
                alt="..."
              />
            </div>
          </div>

          <hr className="featurette-divider" />
        </div>
      </section>
      <div className="container">
    <hr className="bg-light"/>
    </div>
    </>
  );
}
