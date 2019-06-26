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
                        <a href={item.url}>
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
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// export default class Home extends Component {
//   render() {
//       return (
//           <Grid>
//               <Jumbotron className="brainImg">
//               </Jumbotron>
//               <div class="footer"><center className="iconsBaby">
//                   <Image src="giticon.png" className="githubIcon" to="https://github.com/Joeyryanbridges" />
//                   <Image src="linkedinIcon.png" className="linkedinIcon" href="https://github.com/Joeyryanbridges" />
//                   <Image src="SOFIcon.png" className="githubIcon" href="https://github.com/Joeyryanbridges" />
//               </center>
//               </div>
//           </Grid>
//       )
  
//   }
// }