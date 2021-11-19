import { UserSelectionWidget } from "disprzcomponents";
import React, { useState } from "react";

import { useHistory } from "react-router";

function Analytics() {
  return (
    <div className="display-user-selection-container">
      <UserSelectionWidget
        additionalOptions={[
          {
            displayValue: "Delete User",
            // onClick: () => handleDeleteUserClick(),
          },
          {
            displayValue: "Trigger welcome email",
            // onClick: () => handleTriggerWelcomeMail(),
          },
          {
            displayValue: "Bulk Deactivate",
            // onClick: () => handleBulkDeactivate(),
          },
        ]}
        extraQueryParams={{
          restrictToMyUsers: false,
        }}
        limitedUserDefinedFieldsSummaryFetchAPIUrl="https://disprzpipeline.disprz.com/demoservice/api/service/getFilteredData"
        // onRowChecked={handleOnRowChecked}
        onRowSelection={function noRefCheck() {}}
        rowSelectable={false}
        showAdvancedSearch={false}
        showTotalCountAsHeading={false}
        allowSelect={false}
        user={{
          dbPointer: "dev",
          userName: "vasanth001",
        }}
        userFetchAPIUrl="https://disprzpipeline.disprz.com/demoservice/api/service/searchusers"
      />
    </div>
  );
}

export default Analytics;
