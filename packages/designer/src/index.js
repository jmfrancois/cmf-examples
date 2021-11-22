import 'babel-polyfill';
import cmf from '@talend/react-cmf';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import DesignerForm from './DesignerForm';
import DesignerPreview from './DesignerPreview';
import DesignerTree from './DesignerTree';
import DesignerDemo from './DesignerDemo';
// import components from './components';


cmf.bootstrap({
    components: Object.assign({ App, DesignerDemo, DesignerForm, DesignerPreview, DesignerTree }),
    appId: 'root',
});