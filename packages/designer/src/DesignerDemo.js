import React from 'react';
import PropTypes from 'prop-types';
import { cmfConnect } from '@talend/react-cmf';
import omit from 'lodash/omit';

function DesignerDemo(props) {
    return (
        <table className="table table-border">
            <tr>
                <td>Name</td>
                <td>Value</td>
                <td>Type</td>
            </tr>
            {Object.keys(omit(props, cmfConnect.INJECTED_PROPS)).map(key => <tr><td>{key}</td><td>{props[key]}</td><td>{typeof props[key]}</td></tr>)}
        </table>
    );
}
DesignerDemo.displayName = 'DesignerDemo';
DesignerDemo.propTypes = {
    string: PropTypes.string,
    object: PropTypes.object,
    number: PropTypes.number,
    bool: PropTypes.bool,
    oneOf: PropTypes.oneOf(['foo', 'bar']),
};
export default cmfConnect({})(DesignerDemo);