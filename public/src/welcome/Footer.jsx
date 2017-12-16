
import React from 'react';


export default function Footer() {
  return (
      <div>
        <footer id="fh5co-footer" role="contentinfo">
            <div className="container">

                <div className="row copyright">
                    <div className="col-md-12 text-center">
                        <p>
                            <small className="block">&copy; 2017. All Rights Reserved.</small> 
                            <small className="block">Designed by <a href="http://infolokal.id/" target="_blank">infolokal.id</a> Demo Images: 
                            <a href="http://infolokal.id/" target="_blank">Unsplash</a></small>
                        </p>
                        <p>
                            <ul className="fh5co-social-icons">
                                <li><a href="#"><i className="icon-twitter"></i></a></li>
                                <li><a href="#"><i className="icon-facebook"></i></a></li>
                                <li><a href="#"><i className="icon-linkedin"></i></a></li>
                                <li><a href="#"><i className="icon-dribbble"></i></a></li>
                            </ul>
                        </p>
                    </div>
                </div>
		    </div>
	    </footer>
        <div className="gototop js-top">
		    <a href="#" className="js-gotop"><i className="icon-arrow-up"></i></a>
	    </div>
    </div>
  );
}

