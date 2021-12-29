import React from "react"
import FilterBTN from "../FilterBTN";

const Gender = () => {
    let gender = ["female", "male", "genderless", "unknown"];

    return (
        <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne">
                            Gender
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div className="accordion-body d-flex flex-wrap gap-3">
                            {  gender.map((item, index) => {
                                return(
                                    <FilterBTN key={index} index={index} name="gender" item={item} />
                                );
                            })}
                        </div>
                    </div>
                </div>
    );
}

export default Gender;
