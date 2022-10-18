import React from "react";
import PropTypes from "prop-types";

export default function Profile(props) {

    function handleName(){
        alert(props.fullName)
    }

    return (
        <>
            <div className="px-4 py-5">
                <div className="card mb-3 m-auto border-dark" style={{maxWidth:540}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.children} width={179.33} height={250} alt="img.webp" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title" style={{color: "red"}} onMouseOver={handleName}>{props.fullName}</h5>
                                <p className="card-text">
                                    {props.bio}
                                </p>
                                <p className="card-text">
                                    {props.profession}
                                </p>
                                <p className="card-text"><small className="text-muted">Profile created 2 years ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

//Set default props
Profile.defaultProps = {
    fullName: "Celia Almeda",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit deserunt ! Lorem ipsum dolor sit.",
    profession: "FullStack Web Developpersss"
};

//Set PropTypes
Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
};