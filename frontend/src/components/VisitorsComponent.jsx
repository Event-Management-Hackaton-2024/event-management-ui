import React, { useState } from "react";
import "./StyleComponent.css";

const VisitorsComponent = ({ visitorsArray }) => {
  const [showAllVisitors, setShowAllVisitors] = useState(false);

  const renderVisitors = () => {
    // Check if visitorsArray is defined and has a length property
    if (!visitorsArray || visitorsArray.length === 0) {
      return "Включете се първи";
    }

    const displayedVisitors = showAllVisitors ? visitorsArray : visitorsArray.slice(0, 3);

    return (
      <>
        {displayedVisitors.map((visitor, index) => (
          <span key={index}>
            {visitor}
            {index !== displayedVisitors.length - 1 && ", "}
          </span>
        ))}
        {!showAllVisitors && visitorsArray.length > 3 && (
          <>
            <strong className="m-1">+{visitorsArray.length - 3}</strong>
            <br />
            <button className="btn control" onClick={() => setShowAllVisitors(true)}>
              Покажи всички
            </button>
          </>
        )}
        <br />
        {showAllVisitors && (
          <button className="btn control" onClick={() => setShowAllVisitors(false)}>
            Скрий
          </button>
        )}
      </>
    );
  };

  return (
    <>
      <strong>Visitors:</strong> {renderVisitors()}
    </>
  );
};

export default VisitorsComponent;
