import React from "react";
import PropTypes from 'prop-types';
import cmf, { cmfConnect } from "@talend/react-cmf";
import Immutable from 'immutable';
import DesignerTree from "./DesignerTree";
import get from 'lodash/get';

function Input({label, type, ...props}) {
	switch(type) {
		case PropTypes.string:
		return (
			<div className="form-group">
				<label>{label}</label>
				<input className="form-control" type="text" name={label} {...props} />
			</div>
		);
		case PropTypes.number:
		return (
			<div className="form-group">
				<label>{label}</label>
				<input className="form-control" type="number" name={label} {...props} />
			</div>
		);
		case PropTypes.bool:
		return (
			<div className="form-group form-check">
				<input type="checkbox" className="form-check-input" id={label} {...props} />
				<label className="form-check-label" for={label}>{label}</label>
			</div>
		);
		case PropTypes.func:
		return null;
		case PropTypes.object:
		return null;
		default:
		return (
			<div className="form-group">
				<label>{label}</label>
				<div className="alert alert-warning">Not supported</div>
			</div>
		);
	}
}

function DesignerForm(props) {
	let types = {};
	if (props.component) {
		const component = cmf.component.get(props.component);
		types = get(component, 'WrappedComponent.propTypes', {});
		debugger; PropTypes;
	}
	return (
		<div>
			<h2>{props.component}</h2>
			{Object.keys(types).map(key => <Input onChange={event => props.setState({ [key]: event.target.value || false })} type={types[key]} label={key} key={key} />)}
		</div>
	);
}

function mapStateToProps(state) {
	const selected = DesignerTree.getState(state)
		.get("selected", "")
		.split("#");
	if (selected.length === 2) {
		return {
			component: selected[0]
		};
	}
	return {};
}

export default cmfConnect({mapStateToProps, defaultState: new Immutable.Map()})(DesignerForm);
