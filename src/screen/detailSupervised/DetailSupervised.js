import React, { useState } from "react";
import { Tabs, Tab, Col } from "react-bootstrap";

import { useHistory } from "react-router";
import Analytics from "./Analytics";
import Configure from "./Configure";
import "./DetailSupervised.scss";
import Invite from "./Invite";
import Create from "./Create";

function DetailSupervised() {
  return (
    <div>
      Header
      <Tabs defaultActiveKey="configure" className="tab-view">
        <Tab eventKey="configure" title="Configure" className="tab-active">
          <Configure />
        </Tab>
        <Tab eventKey="create" title="Create">
          <Create />
        </Tab>
        <Tab eventKey="invite" title="Invite">
          <Invite />
        </Tab>
        <Tab eventKey="analytics" title="Analytics">
          <Analytics />
        </Tab>
      </Tabs>
    </div>
  );
}

export default DetailSupervised;
