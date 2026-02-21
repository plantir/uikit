import type { Step } from './Steps.type.js';
import './Steps.css';
declare const Steps: import("svelte").Component<Step, {}, "selected">;
type Steps = ReturnType<typeof Steps>;
export default Steps;
