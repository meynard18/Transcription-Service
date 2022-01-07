import React from 'react';
import "../components/styles/Team.css";
import Img from "../components/images/lorieann.jpg";
import Img1 from "../components/images/meynard.jpg";
import Img2 from "../components/images/richard.jpg";
function Team() {
    const imgSize = {
        width: "250px",
        height: "250px"
    };

    const btnSpacing = {
        marginTop: "10%"
    };

    return (
        <div>

            <section className="Background-Color">

                <div className="container">
                    <div className="row text-center">
                        <div className="col-sm-12 col-md-12 mb-4">
                            <h3 className="text-header">Meet Our Team</h3>
                        </div>

                        <div className="col-md-4">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img style={imgSize} src={Img1} className="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <div className="text">
                                    <h4 className="font-weight-bold dark-grey-text mt-4">Meynard Duran</h4>
                                    <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
                                    <p className="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
                                        corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
                                    <a href="#"><button style={btnSpacing} type="button" className="btn btn-secondary">Read More</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img style={imgSize} src={Img} className="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <div className="text">
                                    <h4 className="font-weight-bold dark-grey-text mt-4">Lorie Pascual</h4>
                                    <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
                                    <p className="font-weight-normal dark-grey-text">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
                                        eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
                                    <a href="#"><button style={btnSpacing} type="button" className="btn btn-secondary">Read More</button></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="testimonial mb-5">
                                <div className="avatar mx-auto">
                                    <img style={imgSize} src={Img2} className="rounded-circle z-depth-1 img-fluid" />
                                </div>
                                <div className="text">
                                    <h4 className="font-weight-bold dark-grey-text mt-4">Richard Ombrog</h4>
                                    <h6 className="font-weight-bold blue-text my-3">Web Developer</h6>
                                    <p className="font-weight-normal dark-grey-text">
                                        At vero eos et accusamus et iusto odio dignissimos ducimus qui
                                        blanditiis praesentium voluptatum deleniti atque corrupti.</p>
                                    <a href="#"><button style={btnSpacing} type="button" className="btn btn-secondary">Read More</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Team
