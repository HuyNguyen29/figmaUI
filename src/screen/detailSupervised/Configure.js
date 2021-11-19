import React, { useState } from "react";
import "./DetailSupervised.scss";
import { useHistory } from "react-router";
import { Container, Col, Row, Form } from "react-bootstrap";
import { DropDown } from "disprzcomponents";
import deleteImg from "../../asset/delete.png";
import info from "../../asset/info.png";

function Configure() {
  const [tag, setTag] = useState([
    { id: 1, name: "skill1" },
    { id: 2, name: "skill2" },
  ]);

  const [day, setDay] = useState(1);

  const onSubClicked = () => {
    setDay(day - 1);
  };

  const onAddClicked = () => {
    setDay(day + 1);
  };

  return (
    <Container fluid className="p-0 configure-container">
      <Col>
        <Row>
          <div className={"left-pane col-sm-7"}>
            <div>Training objectives</div>
            <textarea
              style={{
                marginTop: 7,
                marginLeft: 25,
                height: 84,
                width: 500,
                resize: "none",
                boxSizing: "border-box",
                textCombineUpright: "center",
                borderColor: "#d0d0d0",
                borderRadius: 5,
                paddingTop: 5,
                paddingLeft: 5,
              }}
              className={"txt-area"}
              placeholder=""
              rows={1}
              //   onChange={props.onChangeQuestion}
              //   value={props.data?.[props.selected]?.question}
            />
            <div style={{ marginTop: 39 }}>Training venue</div>
            <textarea
              style={{
                marginTop: 7,
                marginLeft: 25,
                height: 73,
                width: 500,
                resize: "none",
                boxSizing: "border-box",
                textCombineUpright: "center",
                borderColor: "#d0d0d0",
                borderRadius: 5,
                paddingTop: 5,
                paddingLeft: 5,
              }}
              className={"txt-area"}
              placeholder=""
              rows={1}
              //   onChange={props.onChangeQuestion}
              //   value={props.data?.[props.selected]?.question}
            />
            <div style={{ marginTop: 39 }}>
              Select skills for this Supervised OJT{" "}
            </div>
            <div style={{ marginLeft: 25, marginTop: 20 }}>
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
            <div className="tag-view">
              {tag.map((item, i) => (
                <div key={item.id} className={"tag-item"}>
                  tag
                  <img
                    src={deleteImg}
                    alt={"delete"}
                    style={{ marginLeft: 22.5 }}
                    onClick={() => alert("a")}
                  />
                </div>
              ))}
            </div>
            <button onClick={() => {}} className={"button-reread"}>
              <div className={"badge-button"}>2</div>
              Add Pre-read
            </button>
          </div>
          <div className={"right-pane col-sm-5"}>
            <div style={{ marginBottom: 20 }}>Session settings</div>
            <div className="session-setting">
              <div style={{ width: 78 }}> Pass criteria</div>
              <input className="input-value" type="text" name="name" />% of
              total marks
              <img src={info} alt={"info"} style={{ marginLeft: 12 }} />
            </div>
            <div className="session-setting">
              <div style={{ width: 78 }}> Re-attempt</div>
              <input className="input-value" type="text" name="name" />
              days after failure
              <img src={info} alt={"info"} style={{ marginLeft: 12 }} />
            </div>
            <div className="session-setting">
              <div style={{ width: 78 }}> Watch</div>
              <input className="input-value" type="text" name="name" />
              days after passing
              <img src={info} alt={"info"} style={{ marginLeft: 12 }} />
            </div>
            <div style={{ marginTop: 30 }}>
              Due day(s)
              <img src={info} alt={"info"} style={{ marginLeft: 12 }} />
            </div>
            <div className={"due-day"}>
              Complete in
              <div className="sub-icon" onClick={onSubClicked}>
                -
              </div>
              <div className="txt-day">{day}</div>day(s)
              <div className="add-icon" onClick={onAddClicked}>
                +
              </div>
            </div>
            <div className={"txt-note"}>
              Note: It includes Saturdays and Sundays.
            </div>
          </div>
        </Row>
      </Col>
      <button
        //   onClick={onSaveClicked}
        className={"button-active-detail"}
      >
        Save & Continue
      </button>
    </Container>
  );
}

export default Configure;
