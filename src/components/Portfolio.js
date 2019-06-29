import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1><div id="makeGrey"> Check Out Some of My Works. </div></h1>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {
                resumeData.portfolio && resumeData.portfolio.map((item) => {
                  return (
                    <div className="columns portfolio-item">
                      <div className="item-wrap">
                        <img src={`${item.imgurl}`} alt="nametage" className="item-img" />
                        <a href={item.imagebaseurl} target="_blank" rel="noopener noreferrer">
                          <i className={item.className}></i>
                          <div className="overlay">
                            <div className="portfolio-item-meta">
                              <h5>{item.name}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  )
                })
              }
              }

            </div>
          </div>
        </div>
      </section>
    );

  }
}