import React from 'react';
// import BackgroundImg from '../../plugins/commingsoon/images/img_bg_1.jpg';
var divStyle = {
    color: 'white',
    // backgroundImage: 'url(' + BackgroundImg + ')',
    WebkitTransition: 'all', // note the capital 'W' here
    msTransition: 'all' // 'ms' is the only lowercase vendor prefix
  };

export default function Header() {
  return (
      <div>
       <header id="fh5co-header" className="fh5co-cover" role="banner" style={divStyle} data-stellar-background-ratio="0.5">
       <div className="overlay"></div>
            <div className="container">
            <div className="row">
               <div className="col-md-8 col-md-offset-2 text-center">
                   <div className="display-t">
                       <div className="display-tc animate-box" data-animate-effect="fadeIn">
                           <h1>We Are Coming Very Soon!</h1>
                           <h2>Free html5 templates Made by <a href="http://freehtml5.co/" target="_blank">freehtml5.co</a></h2>
                           <div className="simply-countdown simply-countdown-one"></div>
                           <div className="row">
                               <h2>Notify me when it's ready</h2>
                               <form className="form-inline" id="fh5co-header-subscribe">
                                   <div className="col-md-12 col-md-offset-0">
                                       <div className="form-group">
                                           <input type="text" className="form-control" id="email" placeholder="Get notify by email" />
                                           <button type="submit" className="btn btn-primary">Send</button>
                                       </div>
                                   </div>
                               </form>
                               <ul className="fh5co-social-icons">
                                   <li><a href="#"><i className="icon-twitter-with-circle"></i></a></li>
                                   <li><a href="#"><i className="icon-facebook-with-circle"></i></a></li>
                                   <li><a href="#"><i className="icon-linkedin-with-circle"></i></a></li>
                                   <li><a href="#"><i className="icon-dribbble-with-circle"></i></a></li>
                               </ul>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
            </div>
        </header>
    </div>
  );
}

