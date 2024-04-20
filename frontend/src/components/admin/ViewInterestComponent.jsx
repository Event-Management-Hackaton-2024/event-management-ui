import React, { useEffect, useState } from "react";
import { getAllInterests } from "../../services/InterestService";

const ViewInterestComponent = () => {
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    getAllInterests()
      .then((response) => {
        setInterests(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="flex m-2">
      <div className="d-flex justify-content-between m-2">
        <h3>All Interests</h3>
      </div>
      <div className="d-flex flex-wrap justify-content-start col-12">
        {interests ? (
          interests.map((item) => (
            <>
              <div key={item.id} className="border p-2 mb-2">
                {item.name}
              </div>
              <br />
            </>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default ViewInterestComponent;
