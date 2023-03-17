import React from "react";
import loader from "../../assets/wip_loadinganimation_02.gif";

function Spinner() {
    return (
        <div>
            <img
                src={loader}
                className="mx-auto d-block"
                alt=""
            />
        </div>
    );
}

export default Spinner;