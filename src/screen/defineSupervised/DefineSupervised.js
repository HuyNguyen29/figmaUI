import React, { useState } from "react";
import { InputTextField } from "disprzcomponents";
import "./DefineSupervised.scss";
import img from "../../asset/img.jpeg";
import { useHistory } from "react-router";
function DefineSupervised() {
  const imgData = [1, 2, 3, 4, 5, 6];
  const [enableSave, setEnableSave] = useState(true);
  const history = useHistory();
  const onSaveClicked = () => {
    history.push("/detailSupervised");
  };
  return (
    <div>
      Header
      <div className="define-container">
        <div className={"title"}>Define your Supervised OJT</div>
        <div className="sub-title" style={{ marginTop: 15, marginBottom: 10 }}>
          Supervised OJT Name
        </div>
        <textarea
          style={{
            height: 30,
            width: 500,
            resize: "none",
            boxSizing: "border-box",
            fontSize: 14,
            textCombineUpright: "center",
            borderColor: "#d0d0d0",
            borderRadius: 5,
            paddingTop: 5,
            paddingLeft: 5,
          }}
          placeholder=""
          rows={1}
          //   onChange={props.onChangeQuestion}
          //   value={props.data?.[props.selected]?.question}
        />
        <div className="sub-title" style={{ marginTop: 15, marginBottom: 10 }}>
          Supervised OJT Description
        </div>
        <textarea
          style={{
            height: "100px",
            width: 920,
            resize: "none",
            boxSizing: "border-box",
            fontSize: "1rem",
            textCombineUpright: "center",
            borderColor: "#d0d0d0",
            borderRadius: 5,
            paddingLeft: 5,
          }}
          placeholder=""
          rows={1}
          //   onChange={props.onChangeQuestion}
          //   value={props.data?.[props.selected]?.question}
        />
        <div className="sub-title" style={{ marginTop: 15, marginBottom: 10 }}>
          Supervised OJT Image
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: 450 }}>
            {imgData.map((item, i) => (
              <img
                src={img}
                style={{
                  height: 120,
                  width: 130,
                  borderRadius: 5,
                  marginRight: 15,
                  marginBottom: 15,
                }}
                alt="img"
              />
            ))}
          </div>
          <div
            style={{
              display: "flex",
              width: 470,
              borderStyle: "dashed",
              borderWidth: 1,
              borderColor: "#E0E0E0",
              textAlign: "center",
              justifyContent: "center",
              alignItems: "center",
              height: 260,
            }}
          >
            Select a poster image for your Self-Paced Module !
            <br />
            TIP: Press Ctrl+V to paste an image!
          </div>
        </div>
        <div className={"bottom-view"}>
          <button onClick={() => {}} className={"button"}>
            Cancel
          </button>
          <button
            onClick={onSaveClicked}
            className={enableSave ? "button-active" : "button-inactive"}
            disabled={!enableSave}
          >
            Save & Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default DefineSupervised;
