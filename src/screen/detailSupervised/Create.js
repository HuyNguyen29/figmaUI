import React, { useState } from "react";
import { Row } from "react-bootstrap";
import "./DetailSupervised.scss";
import arrow from "../../asset/arrow.png";
import { DropDown } from "disprzcomponents";

function Create() {
  const [data, setData] = useState([1, 2]);
  return (
    <div className="create-container">
      <Row>
        <div className="create-title">
          <div className={"left-checkpoint col-sm-7"}>
            <h1 style={{ marginRight: 20 }}>Define your OJT check-points</h1>
            <button className={"button-check-points"}>Add section</button>
            <button className={"button-check-points"}>Add Languages </button>
          </div>
          <div className={"right-checkpoint col-sm-5"}>
            Total: 2 Check-points
          </div>
        </div>
      </Row>
      <div className="checkpoint-content">
        <div className="checkpoint-header">
          <h2>Candidate attitude (2)</h2>
          <img src={arrow} alt="arrow" />
        </div>
        {data.map((item, i) => (
          <div
            className={
              i % 2 !== 0 ? "checkpoint-body-active" : "checkpoint-body"
            }
          >
            <h3 style={{ marginTop: 30 }}>Q1</h3>
            <div className="checkpoint-text">
              <h3>Check points</h3>
              <textarea
                style={{
                  height: 86,
                  width: 413,
                  resize: "none",
                  boxSizing: "border-box",
                  textCombineUpright: "center",
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  paddingTop: 5,
                  paddingLeft: 5,
                  marginTop: 4,
                }}
                placeholder=""
                rows={1}
                //   onChange={props.onChangeQuestion}
                //   value={props.data?.[props.selected]?.question}
              />
            </div>
            <div className="checkpoint-dropdown">
              <div>
                <h3 style={{ marginBottom: 4 }}>Response type</h3>
                <DropDown
                  clearable
                  items={[
                    {
                      label: "Option 1",
                      value: 1,
                    },
                    {
                      label: "Option 2",
                      value: 2,
                    },
                    {
                      label: "Option 3",
                      value: 3,
                    },
                  ]}
                  onSelect={function noRefCheck() {}}
                  value=""
                />
                <div className={"txt-edit"}>Edit score</div>
              </div>
              <div style={{ marginLeft: 15 }}>
                <h3 style={{ marginBottom: 4 }}>If Response</h3>
                <DropDown
                  clearable
                  items={[
                    {
                      label: "Option 1",
                      value: 1,
                    },
                    {
                      label: "Option 2",
                      value: 2,
                    },
                    {
                      label: "Option 3",
                      value: 3,
                    },
                  ]}
                  onSelect={function noRefCheck() {}}
                  value=""
                />
              </div>
            </div>
            <div className="checkpoint-text">
              <h3>OJT Pointers</h3>
              <textarea
                style={{
                  height: 86,
                  width: 413,
                  resize: "none",
                  boxSizing: "border-box",
                  textCombineUpright: "center",
                  borderColor: "#d0d0d0",
                  borderRadius: 5,
                  paddingTop: 5,
                  paddingLeft: 5,
                  marginTop: 4,
                }}
                placeholder=""
                rows={1}
                //   onChange={props.onChangeQuestion}
                //   value={props.data?.[props.selected]?.question}
              />
            </div>
          </div>
        ))}
        <div className="button-addquestion">
          <button className="add-question">Add Question</button>
        </div>
      </div>
    </div>
  );
}

export default Create;
