import React, {useState} from "react";
import Radio from "components/common/radio/Radio";
import Checkbox from "components/common/checkbox/Checkbox";
import Button from "components/common/button/Button";
import AutoSelect from "components/common/autoselect/AutoSelect";
import Datepicker from "components/common/datepicker/Datepicker";
import Input from "components/common/input/Input";
import File from "components/common/file/File";
import Textarea from "components/common/textarea/Textarea";

export default function Guideline() {
  const [status, setStatus] = useState(true);
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const fn = (e) => {
    console.log("first", e.target.value)
  }
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
        <div className="me-3 mb-3 p-5 border d-inline-flex justify-content-center align-items-center">
          <span className="dc-icon-update"></span>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h4>Button</h4>
      </div>
      <div className="d-flex justify-content-start flex-wrap mb-10">
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" theme="primary" label="Primary" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" theme="secondary" label="Secondary" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" theme="success" label="Success" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" theme="danger" label="Danger" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" theme="warning" label="Warning" handler={fn}/>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h4>Icon Tooltip Button</h4>
      </div>
      <div className="d-flex justify-content-start flex-wrap mb-10">
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="primary" tooltip="Delete" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="secondary" tooltip="Edit" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="success" tooltip="Edit" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="danger" tooltip="Edit" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="warning" tooltip="Edit" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="white" tooltip="Edit" handler={fn}/>
        </div>
        <div className="me-3 mb-3 p-2 d-inline-flex">
          <Button type="button" icon='delete' theme="gray" tooltip="Edit" handler={fn}/>
        </div>
      </div>
      <div className="d-flex justify-content-start mb-10">
        <h3>Form Elements</h3>
      </div>
      <div className="row mb-15 d-flex align-items-end">
      <div className="col-lg-3">
          <div className="mb-10">
            <h4>File input</h4>
          </div>
          <div>
            <File theme='secondary' id='id-3' name='logo' label='Placeholder' handler={fn}/>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="mb-10">
            <h4>React Select</h4>
          </div>
          <div>
            <AutoSelect inputId='inputId' placeholder='Type...' data={options} classprefix='react-select-default' labelstatus={true} labeltext='React select'/>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="mb-10">
            <h4>React Select</h4>
          </div>
          <div>
            <AutoSelect inputId='inputId2' placeholder='Type...' data={options} classprefix='react-select-primary' labelstatus={true} labeltext='React select'/>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="mb-10">
            <h4>Datepicker</h4>
          </div>
          <div>
            <Datepicker />
          </div>
        </div>
      </div>
      <div className="row mb-15 d-flex align-items-end">
        <div className="col-lg-3">
          <div>
            <Input name='name' type='text' labelid='id-1' placeHolder='Placeholder' theme='border'/>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <Input name='name' type='text' labelid='id-2' placeHolder='Placeholder'/>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <Input name='name' type='text' labelid='id-3' label='Name' theme='border' handler={fn}/>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <Input name='name' type='text' labelid='id-4' label='Name' handler={fn}/>
          </div>
        </div>
      </div>
      <div className="row mb-15 d-flex align-items-end">
        <div className="col-lg-3">
          <div>
            <Textarea name='name' labelid='id-1' placeHolder='Placeholder' rows="4" cols="50"/>
          </div>
        </div>
        <div className="col-lg-3">
          <div>
            <Textarea name='name' labelid='id-2' label='Placeholder' rows="4" cols="50" handler={fn}/>
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
              <Checkbox toggleSwitch='true' checked={status} name='name1' ON='On' OFF='Off' label={"Label 1"} labelid={"checkbox1"} handler={fn}/>
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox toggleSwitch='true' name='name2' ON='On' OFF='Off' label={"Label 1"} labelid={"checkbox2"} handler={fn}/>
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox toggleSwitch='true' name='name3' ON='On' OFF='Off' label={"Label 1"} labelid={"checkbox3"} handler={fn}/>
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
              <Checkbox name='name4' label="Label 1" labelid="checkbox4" handler={fn}/>
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox name='name5' label="Label 2" labelid="checkbox5" handler={fn}/>
            </div>
            <div className="me-3 mb-3 p-2 d-inline-flex">
              <Checkbox name='name6' label="Label 3" labelid="checkbox6"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
