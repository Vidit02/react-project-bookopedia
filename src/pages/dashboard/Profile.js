import React from 'react'
import { AllCssDash } from '../../components/AllCssDash'

export const Profile = () => {
    return (
        <div>
                <AllCssDash/>
            <div className="wrapper ">
                <div className="sidebar" data-color="white" data-active-color="danger">
                    <div className="logo">
                        <a href="https://www.creative-tim.com" className="simple-text logo-mini">
                            <div className="logo-image-small">
                                <img src="../assets/img/logo-small.png" />
                            </div>
                            {/* <p>CT</p> */}
                        </a>
                        <a href="https://www.creative-tim.com" className="simple-text logo-normal">
                            Creative Tim
                            {/* <div class="logo-image-big">
      <img src="../assets/img/logo-big.png">
    </div> */}
                        </a>
                    </div>
                    <div className="sidebar-wrapper">
                        <ul className="nav">
                            <li>
                                <a href="./dashboard.html">
                                    <i className="nc-icon nc-bank" />
                                    <p>Dashboard</p>
                                </a>
                            </li>
                            <li>
                                <a href="./icons.html">
                                    <i className="nc-icon nc-diamond" />
                                    <p>Icons</p>
                                </a>
                            </li>
                            <li>
                                <a href="./map.html">
                                    <i className="nc-icon nc-pin-3" />
                                    <p>Maps</p>
                                </a>
                            </li>
                            <li>
                                <a href="./notifications.html">
                                    <i className="nc-icon nc-bell-55" />
                                    <p>Notifications</p>
                                </a>
                            </li>
                            <li className="active ">
                                <a href="./user.html">
                                    <i className="nc-icon nc-single-02" />
                                    <p>User Profile</p>
                                </a>
                            </li>
                            <li>
                                <a href="./tables.html">
                                    <i className="nc-icon nc-tile-56" />
                                    <p>Table List</p>
                                </a>
                            </li>
                            <li>
                                <a href="./typography.html">
                                    <i className="nc-icon nc-caps-small" />
                                    <p>Typography</p>
                                </a>
                            </li>
                            <li className="active-pro">
                                <a href="./upgrade.html">
                                    <i className="nc-icon nc-spaceship" />
                                    <p>Upgrade to PRO</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="main-panel">
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent">
                        <div className="container-fluid">
                            <div className="navbar-wrapper">
                                <div className="navbar-toggle">
                                    <button type="button" className="navbar-toggler">
                                        <span className="navbar-toggler-bar bar1" />
                                        <span className="navbar-toggler-bar bar2" />
                                        <span className="navbar-toggler-bar bar3" />
                                    </button>
                                </div>
                                <a className="navbar-brand" href="javascript:;">Paper Dashboard 2</a>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-bar navbar-kebab" />
                                <span className="navbar-toggler-bar navbar-kebab" />
                                <span className="navbar-toggler-bar navbar-kebab" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-end" id="navigation">
                                <form>
                                    <div className="input-group no-border">
                                        <input type="text" defaultValue className="form-control" placeholder="Search..." />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <i className="nc-icon nc-zoom-split" />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link btn-magnify" href="javascript:;">
                                            <i className="nc-icon nc-layout-11" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Stats</span>
                                            </p>
                                        </a>
                                    </li>
                                    <li className="nav-item btn-rotate dropdown">
                                        <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="nc-icon nc-bell-55" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Some Actions</span>
                                            </p>
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link btn-rotate" href="javascript:;">
                                            <i className="nc-icon nc-settings-gear-65" />
                                            <p>
                                                <span className="d-lg-none d-md-block">Account</span>
                                            </p>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* End Navbar */}
                    <div className="content">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="card card-user">
                                    <div className="image">
                                        <img src="../assets/img/damir-bosnjak.jpg" alt="..." />
                                    </div>
                                    <div className="card-body">
                                        <div className="author">
                                            <a href="#">
                                                <img className="avatar border-gray" src="../assets/img/mike.jpg" alt="..." />
                                                <h5 className="title">Chet Faker</h5>
                                            </a>
                                            <p className="description">
                                                @chetfaker
                                            </p>
                                        </div>
                                        <p className="description text-center">
                                            "I like the way you work it <br />
                                            No diggity <br />
                                            I wanna bag it up"
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <hr />
                                        <div className="button-container">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6 col-6 ml-auto">
                                                    <h5>12<br /><small>Files</small></h5>
                                                </div>
                                                <div className="col-lg-4 col-md-6 col-6 ml-auto mr-auto">
                                                    <h5>2GB<br /><small>Used</small></h5>
                                                </div>
                                                <div className="col-lg-3 mr-auto">
                                                    <h5>24,6$<br /><small>Spent</small></h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">Team Members</h4>
                                    </div>
                                    <div className="card-body">
                                        <ul className="list-unstyled team-members">
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-2 col-2">
                                                        <div className="avatar">
                                                            <img src="../assets/img/faces/ayo-ogunseinde-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        DJ Khaled
                                                        <br />
                                                        <span className="text-muted"><small>Offline</small></span>
                                                    </div>
                                                    <div className="col-md-3 col-3 text-right">
                                                        <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope" /></btn>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-2 col-2">
                                                        <div className="avatar">
                                                            <img src="../assets/img/faces/joe-gardner-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-7 col-7">
                                                        Creative Tim
                                                        <br />
                                                        <span className="text-success"><small>Available</small></span>
                                                    </div>
                                                    <div className="col-md-3 col-3 text-right">
                                                        <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope" /></btn>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="row">
                                                    <div className="col-md-2 col-2">
                                                        <div className="avatar">
                                                            <img src="../assets/img/faces/clem-onojeghuo-2.jpg" alt="Circle Image" className="img-circle img-no-padding img-responsive" />
                                                        </div>
                                                    </div>
                                                    <div className="col-ms-7 col-7">
                                                        Flume
                                                        <br />
                                                        <span className="text-danger"><small>Busy</small></span>
                                                    </div>
                                                    <div className="col-md-3 col-3 text-right">
                                                        <btn className="btn btn-sm btn-outline-success btn-round btn-icon"><i className="fa fa-envelope" /></btn>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="card card-user">
                                    <div className="card-header">
                                        <h5 className="card-title">Edit Profile</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-md-5 pr-1">
                                                    <div className="form-group">
                                                        <label>Company (disabled)</label>
                                                        <input type="text" className="form-control" disabled placeholder="Company" defaultValue="Creative Code Inc." />
                                                    </div>
                                                </div>
                                                <div className="col-md-3 px-1">
                                                    <div className="form-group">
                                                        <label>Username</label>
                                                        <input type="text" className="form-control" placeholder="Username" defaultValue="michael23" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pl-1">
                                                    <div className="form-group">
                                                        <label htmlFor="exampleInputEmail1">Email address</label>
                                                        <input type="email" className="form-control" placeholder="Email" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6 pr-1">
                                                    <div className="form-group">
                                                        <label>First Name</label>
                                                        <input type="text" className="form-control" placeholder="Company" defaultValue="Chet" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 pl-1">
                                                    <div className="form-group">
                                                        <label>Last Name</label>
                                                        <input type="text" className="form-control" placeholder="Last Name" defaultValue="Faker" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Address</label>
                                                        <input type="text" className="form-control" placeholder="Home Address" defaultValue="Melbourne, Australia" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-4 pr-1">
                                                    <div className="form-group">
                                                        <label>City</label>
                                                        <input type="text" className="form-control" placeholder="City" defaultValue="Melbourne" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 px-1">
                                                    <div className="form-group">
                                                        <label>Country</label>
                                                        <input type="text" className="form-control" placeholder="Country" defaultValue="Australia" />
                                                    </div>
                                                </div>
                                                <div className="col-md-4 pl-1">
                                                    <div className="form-group">
                                                        <label>Postal Code</label>
                                                        <input type="number" className="form-control" placeholder="ZIP Code" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>About Me</label>
                                                        <textarea className="form-control textarea" defaultValue={"Oh so, your weak rhyme You doubt I'll bother, reading into it"} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="update ml-auto mr-auto">
                                                    <button type="submit" className="btn btn-primary btn-round">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="footer footer-black  footer-white ">
                        <div className="container-fluid">
                            <div className="row">
                                <nav className="footer-nav">
                                    <ul>
                                        <li><a href="https://www.creative-tim.com" target="_blank">Creative Tim</a></li>
                                        <li><a href="https://www.creative-tim.com/blog" target="_blank">Blog</a></li>
                                        <li><a href="https://www.creative-tim.com/license" target="_blank">Licenses</a></li>
                                    </ul>
                                </nav>
                                <div className="credits ml-auto">
                                    <span className="copyright">
                                        © , made with <i className="fa fa-heart heart" /> by Creative Tim
                                    </span>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            {/*   Core JS Files   */}
            {/*  Google Maps Plugin    */}
            {/* Chart JS */}
            {/*  Notifications Plugin    */}
            {/* Control Center for Now Ui Dashboard: parallax effects, scripts for the example pages etc */}
            {/* Paper Dashboard DEMO methods, don't include it in your project! */}
        </div>
    )
}
