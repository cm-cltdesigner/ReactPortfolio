import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead"></p>
            <div className="row">
              <div className="columns contact-details MakeWhite">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>

                    980-598-7724<br />
                    cmanery4hire@gmail.com<br />
                    Based in Charlotte, NC<br />
                  </span>
                </p>
              </div>
            </div>

            <div class="section-heading">
              <h3 class="title is-2">Hire Me !</h3>
              <a href="https://drive.google.com/file/d/1rcrXKsOilhoUvaItVopCfSH_ms4Jw2wR/view?usp=sharing" class="button is-link is-medium" target="_blank" rel="noopener noreferrer">
                <span>Download My Resume</span>
              </a>
            </div>

          </div>
        </div>
      </section>
    );
  }
}