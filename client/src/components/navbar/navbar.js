import React from "react";
import { BrowserRouter as Router, Link } from 'react-router-dom'
import "./navbar.css";

// const Navbar = (props) => (
//     <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
//         <a className="navbar-brand" href="/">
//             <i className="far fa-newspaper icon"> </i>
//             <span className="siteName h2">The News Saver</span>
//         </a>
//         <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav mr-auto">
//                 <li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
//                     <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 {/* <li className={window.location.pathname === "/saved"? "nav-item active":"nav-item"}>
//                     <a className="nav-link" href="/saved">Saved</a>
//                 </li> */}
//                 <li>
//                     <Router>
//                         <Link to="/saved" className="nav-link">Test</Link>
//                     </Router>
//                 </li>

//                 {/* <li className="nav-item">
//                     <a className="nav-link disabled" href="">Disabled</a>
//                 </li> */}
//             </ul>
//             <form className="form-inline my-2 my-lg-0">
//                 <input className="form-control mr-sm-2" type="search" placeholder="Search Articles" aria-label="Search" onChange={props.inputChangeHandler} />
//                 <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"
//                     onKeyPress={props.search}
//                     onClick={props.search}
//                     disabled={!props.filledInput}
//                 >Search</button>
//             </form>
//         </div>
//     </nav>
// )

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <a className="navbar-brand" href="/">
                    <i className="far fa-newspaper icon"> </i>
                    <span className="siteName h2">The News Saver</span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav mr-auto"> 
                        <li className={window.location.pathname === "/" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={window.location.pathname === "/saved" ? "nav-item active" : "nav-item"}>
                            <a className="nav-link" href="/saved">Saved</a>
                        </li>

                        {/* {this.props.children} */}

                    </ul>

                    {window.location.pathname === "/"
                    ?
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search Articles" aria-label="Search" onChange={this.props.inputChangeHandler} />
                        <button className="btn btn-outline-primary my-2 my-sm-0" type="submit"
                            onKeyPress={this.props.search}
                            onClick={this.props.search}
                            disabled={!this.props.filledInput}
                        >Search</button>
                    </form>
                    :null}
                </div>
            </nav>
        )
    }
}

export default Navbar;