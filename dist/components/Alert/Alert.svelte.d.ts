import type { Alert, AlertType } from './Alert.type.js';
import './Alert.css';
import type { GlobalColor } from '../../utils/El.types.js';
type $$ComponentProps = {
    color: GlobalColor;
    type: AlertType;
    children: any;
};
declare const Alert: import("svelte").Component<$$ComponentProps, {}, "">;
type Alert = ReturnType<typeof Alert>;
export default Alert;
