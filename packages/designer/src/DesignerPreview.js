import React from "react";
import { cmfConnect, Inject } from "@talend/react-cmf";
import Immutable from 'immutable';
import DesignerTree from "./DesignerTree";
import DesignerForm from "./DesignerForm";

function DesignerPreview(props) {
  if (!props.previewComponent) {
    return "Please select a component";
  }
  return (
    <div>
      <Inject
        component={props.previewComponent}
        componentId={props.previewId}
        {...props.form.toJS()}
      />
    </div>
  );
}

const DEFAULT_FORM = new Immutable.Map();

function mapStateToProps(state) {
    const form = DesignerForm.getState(state);
  const selected = DesignerTree.getState(state)
    .get("selected", "")
    .split("#");
  if (selected.length === 2) {
    return {
      previewComponent: selected[0],
      previewId: selected[1],
      form,
    };
  }
  return { form };
}

export default cmfConnect({ mapStateToProps })(DesignerPreview);
