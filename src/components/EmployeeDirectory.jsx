import React, { useState } from "react";
import localData from "../localData";

const EmployeeDirectory = (props) => {
    const [isSelected, setIsSelected] = useState(false);

    function handleSelection() {
        setIsSelected(!isSelected);
    }

    return (
        <div>
            {localData.map((employee) => (
                <div key={employee.id}>
                    <img
                        onClick={(e) => handleSelection()}
                        className={
                            isSelected
                                ? "selected-employee-img"
                                : "employee-img"
                        }
                        src={employee.image}
                        alt="employee's picture"
                    />
                    <p>{employee.employeeName}</p>
                    <p>{employee.jobTitle}</p>
                </div>
            ))}
        </div>
    );
};

export default EmployeeDirectory;
