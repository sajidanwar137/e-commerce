import React from "react";
import Radio from "components/common/radio/Radio";
import Checkbox from "components/common/checkbox/Checkbox";
import ToggleCheckbox from "components/common/toggle-checkbox/ToggleCheckbox";
import Button from "components/common/button/Button";
import ReactSelect from "components/common/reactselect/ReactSelect";
import Datepicker from "components/common/datepicker/Datepicker";
import IconButton from "components/common/icon-button/IconButton";

export default function Guideline() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className="dc-container">
      <div className="row pt-30 mb-15">
        <div className="col-lg-12">
          <h1>Guideline</h1>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h3>Color</h3>
      </div>
      <div className="d-flex justify-content-start flex-wrap mb-10 guideline-color">
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
        <div className="me-3 mb-3 p-5 border d-inline-flex"></div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h3>Icon List</h3>
      </div>
      <div className="d-flex justify-content-start flex-wrap mb-10 guideline-icon">
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-admin"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-delete"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-edit"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-email"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-home"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-idea"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-key"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-arrow-up"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-arrow-right"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-arrow-down"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-arrow-left"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-logout"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-password"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-pencil"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-reset-password"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-role-setting"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-search"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-setting"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-user"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-administrator"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-error"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-info"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-success"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-warning"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-forgot-password"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-heart"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-cart"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-share"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-truck"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-cloud-upload"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-compare"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-eye"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-close"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-newsletter"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-address-book"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-account-edit"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-returns"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-rewards"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-transactions"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-download"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-upload"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-orders"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-camera"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-filter"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-save"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-refresh"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-print"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-location"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-plus"></span>
        </div>
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-minus"></span>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h4>Button</h4>
      </div>
      <div className="d-flex justify-content-start flex-wrap mb-10">
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="primary" buttonLabel="Primary" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="secondary" buttonLabel="Secondary" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="success" buttonLabel="Success" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="danger" buttonLabel="Danger" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="warning" buttonLabel="Warning" />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h4>Icon Tooltip Button</h4>
      </div>
      <div className="d-flex justify-content-start flex-wrap mb-10">
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="primary" tooltip="Edit" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="secondary" tooltip="Edit" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="success" tooltip="Edit" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="danger" tooltip="Edit" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="warning" tooltip="Edit" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="white" tooltip="Edit" />
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <IconButton type="delete" theme="gray" tooltip="Edit" />
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h3>Form Elements</h3>
      </div>
      <div className="row mb-15">
        <div className="col-lg-4">
          <div className="mb-10">
            <h4>React Select</h4>
          </div>
          <div>
            <ReactSelect inputId='inputId' placeholder='Type...' data={options} classprefix='react-select' labelstatus={true} labeltext='React select'/>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-10">
            <h4>Datepicker</h4>
          </div>
          <div>
            <Datepicker />
          </div>
        </div>
      </div>
      <div className="row mb-15">
        <div className="col-lg-4">
          <div className="mb-10">
            <h4>Toggle checkbox</h4>
          </div>
          <div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <ToggleCheckbox />
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <ToggleCheckbox />
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <ToggleCheckbox />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-10">
            <h4>Radio</h4>
          </div>
          <div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Radio label={"Label 1"} labelid={"radio1"} name={"radio"} />
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Radio label={"Label 2"} labelid={"radio2"} name={"radio"} />
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Radio label={"Label 3"} labelid={"radio3"} name={"radio"} />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-10">
            <h4>Checkbox</h4>
          </div>
          <div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox label={"Label 1"} labelid={"checkbox1"} />
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox label={"Label 2"} labelid={"checkbox2"} />
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox label={"Label 3"} labelid={"checkbox3"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
