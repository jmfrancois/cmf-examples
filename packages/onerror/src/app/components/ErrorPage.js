import React from 'react';
import { cmfConnect, ErrorBoundary, Inject } from '@talend/react-cmf';
import { MY_ACTION } from '../constants';

function RenderWithError() {
    throw new Error('render with error');
}

class WithEventHandler extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }
    onClick() {
        throw new Error(`you can t touch it`);
    }
    render() {
        return <TestIt onClick={this.onClick} />
    }
}

function TestIt(props) {
    return (
        <button onClick={(event) => {
            if (props.onClick) {
                props.onClick(event)
            }
            if (props.setIt) {
                props.setIt(props.kind)

            }
        }}>Test it</button>
    );
}

function WithErrorBoundary(props) {
    return (
        <ErrorBoundary>
            <RenderWithError />
        </ErrorBoundary>
    )
}

function ErrorPage(props) {
    const [kind, setIt] = React.useState();
    let el = <pre>I am a component without any pb</pre>;
    switch (kind) {
        case 'render':
            el = <RenderWithError />;
            break;
        case 'render-local':
            el = <WithErrorBoundary />;
            break;
        default:
            break;
    };
    const content = (
        <div style={{margin: 20}}>
            <h1>Hello uncaught error</h1>
            <p>Here is the list of different kind of uncaught error</p>
            <ul>
                <li>Rendering (component, mapStateToProps, expressions) <TestIt kind="render" setIt={setIt} /></li>
                <li>Rendering with local ErrorBoundary <TestIt kind="render-local" setIt={setIt} /></li>
                <li>Event handler aka onClick <WithEventHandler /></li>
                <li>Action creator aka dispatch <TestIt onClick={() => props.dispatchActionCreator('withError')} /></li>
                <li>Action creator with thunk <TestIt onClick={() => props.dispatchActionCreator('withThunk')} /></li>
                <li>Reducer (during the global state change) <TestIt onClick={() => props.dispatch({ type: MY_ACTION })} /></li>
                <li>Saga (asyn business) <TestIt onClick={() => props.dispatch({ type: 'MY_SAGA' })} /></li>
            </ul>
            <div className="row">
                <div className="col-md-4">
                    {el}
                </div>
            </div>
            <h2>Display All errors</h2>
            <span className="label label-danger">{props.errors.length}</span>
            <ul>
                {props.errors.map(e => <li key={e}>{e.name} {e.message}</li>)}
            </ul>
        </div>
    );
    return (
        <React.Fragment>
            <Inject component="IconsProvider" />
            <Inject component="Notification" saga="Notification#default" />
            <Inject component="Layout" content={content} />
        </React.Fragment>
    );
}

function mapStateToProps(state) {
    return { errors: state.cmf.errors || [] };
}

export default cmfConnect({
    withDispatchActionCreator: true,
    withDispatch: true,
    mapStateToProps,
})(ErrorPage);
