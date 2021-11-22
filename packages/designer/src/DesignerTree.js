import React from "react";
import { cmfConnect } from "@talend/react-cmf";
import Immutable from "immutable";

function DesignerTree(props) {
  return (
    <ul>
      {Object.keys(props.props)
        .filter(key => key !== "App#default")
        .map(key => (
          <li key={key}>
            <button
              className="btn btn-default"
              onClick={() => props.setState({ selected: key })}
            >
              {key}
            </button>
          </li>
        ))}
    </ul>
  );
}

function mapStateToProps(state) {
  return {
    props: state.cmf.settings.props
  };
}

export default cmfConnect({
  mapStateToProps,
  defaultState: new Immutable.Map({})
})(DesignerTree);
