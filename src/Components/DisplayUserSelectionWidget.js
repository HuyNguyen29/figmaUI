import { UserSelectionWidget } from "disprzcomponents";
import { Toast } from "disprzcomponents";
import { useCallback, useState } from "react";

export default function DisplayUserSelectionWidget() {
  const [showToast, setShowToast] = useState(false);
  const [deleteUserState, setDeleteUserState] = useState(false);
  const [ToastContent, setToastContent] = useState("");

  function handleOnRowChecked() {
    setDeleteUserState(true);
  }

  const handleDeleteUserClick = () => {
    setShowToast(true);
    if (deleteUserState) {
      setToastContent("Selected User Will be Deleted!");
    } else {
      setToastContent("Select Atleast One User!");
    }
  };

  const handleTriggerWelcomeMail = () => {
    setShowToast(true);
    setToastContent("Welcome Mail Will be Sent");
  };
  const handleBulkDeactivate = () => {
    setShowToast(true);
    setToastContent("Bulk deactivation enabled");
  };

  return (
    <div className="display-user-selection-container">
      <UserSelectionWidget
        additionalOptions={[
          {
            displayValue: "Delete User",
            onClick: () => handleDeleteUserClick(),
          },
          {
            displayValue: "Trigger welcome email",
            onClick: () => handleTriggerWelcomeMail(),
          },
          {
            displayValue: "Bulk Deactivate",
            onClick: () => handleBulkDeactivate(),
          },
        ]}
        extraQueryParams={{
          restrictToMyUsers: false,
        }}
        limitedUserDefinedFieldsSummaryFetchAPIUrl="https://disprzpipeline.disprz.com/demoservice/api/service/getFilteredData"
        onRowChecked={handleOnRowChecked}
        onRowSelection={function noRefCheck() {}}
        rowSelectable={true}
        showAdvancedSearch={true}
        showTotalCountAsHeading
        user={{
          dbPointer: "dev",
          userName: "vasanth001",
        }}
        userFetchAPIUrl="https://disprzpipeline.disprz.com/demoservice/api/service/searchusers"
      />

      {showToast === true ? (
        <Toast
          autoHide
          autoHideTimeOut={2000}
          content={ToastContent}
          name="success_toast_html"
          onCancel={() => setShowToast(false)}
          onChange={function noRefCheck() {}}
          position="BOTTOM_RIGHT"
          toastType="WARN"
          header="WARNING"
        />
      ) : null}
    </div>
  );
}
