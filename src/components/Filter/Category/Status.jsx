import React from "react";
import FilterBTN from "../FilterBTN";

function Status() {
    let status = ["Alive", "Dead", "Unknown"];

    return (
        <div className="accordion-item">
        <h2 className="accordion-header" id="headingThree">
            <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree">
                Status
            </button>
        </h2>
        <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
                {status.map((item, index)=> {
                     return <FilterBTN key={index} name="status" index={index} item={item} />;
                })}  
            </div>
        </div>
    </div>
    );
}

export default Status;
