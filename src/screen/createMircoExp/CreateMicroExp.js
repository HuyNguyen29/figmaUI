import React, { useState } from "react";
import "./CreateMicroExp.scss";
import imageMicro from "../../asset/imageMicro.png";
import { useHistory } from "react-router";

function CreateMicroExp() {
  const [data, setData] = useState([{ a: 1 }, { a: 2 }, { a: 3 }]);
  const history = useHistory();

  const onCreateExpClicked = () => {
    history.push("/defineSupervised");
  };

  return (
    <div>
      <div>header</div>
      <div className="create-micro-screen">
        <div>
          <div>Select the type of Micro experience to continue</div>
          <div className="list-item">
            {data.map((item, i) => (
              <div key={item.a} className="item-micro-exp">
                <div className="item-content">
                  <img className="photo" src={imageMicro} alt="img" />
                  <div className="item-title">Supervised OJT</div>
                  <div className="item-description">Description</div>
                  <div className="item-video">Watch Tutorial</div>
                </div>
              </div>
            ))}
          </div>
          <div className="item-bottom">
            <button onClick={onCreateExpClicked} className={"button-create"}>
              Create new microexperience
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateMicroExp;
