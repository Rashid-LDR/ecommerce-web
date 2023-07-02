import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="page-footer font-small cyan darken-3 bg-info">

                {/* <!-- Footer Elements --> */}
                <div className="container-fluid">

                    {/* <!-- Grid row--> */}
                    <div className="row">

                        {/* <!-- Grid column --> */}
                        <div className="col-md-12 py-5 text-center">
                            <div className="mb-5 flex-center">

                                {/* <!-- Facebook --> */}
                                <Link to="/facebook" className="btn btn-outline-dark ms-2">
                                 <i className="fa fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x  "></i>
                                 </Link>
                                {/* <!-- Twitter --> */}
                                <Link className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </Link>
                                {/* <!-- Google +--> */}
                                <Link className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </Link>
                                {/* <!--Linkedin --> */}
                                <Link className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </Link>
                                {/* <!--Instagram--> */}
                                <Link className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x"> </i>
                                </Link>
                                {/* <!--Pinterest--> */}
                                <Link className="btn btn-outline-dark ms-2">
                                    <i className="fa fa-pinterest fa-lg white-text fa-2x"> </i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Grid column --> */}

                    </div>
                    {/* <!-- Grid row--> */}

                </div>
                {/* <!-- Footer Elements --> */}

                {/* <!-- Copyright --> */}
                <div className="footer-copyright text-center py-3">© 2023 Copyright:
                    <span>mrashidali51@gmail.com</span>
                </div>
                {/* <!-- Copyright --> */}

            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer;