import React from "react";
import localData from "../localData";

const EmployeeDirectory = (props) => {
    return (
        <div>
            {localData.map((employee) => (
                <div key={employee.id}>
                    <img
                        className="employee-img"
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
