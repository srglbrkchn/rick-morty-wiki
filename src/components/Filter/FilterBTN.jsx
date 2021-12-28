import React from "react";

const FilterBtn = ({name, index, item}) => {
    return (
        <div>
            <div className="form-check">
                <input className="form-check-input" type="radio" name={name} id={`${name}-${index}`} />
                <label style={{textTransform: "capitalize"}} class="btn btn-outline-primary" for={`${name}-${index}`} >{item}</label>
            </div>
        </div>
    );
};

export default FilterBtn;

