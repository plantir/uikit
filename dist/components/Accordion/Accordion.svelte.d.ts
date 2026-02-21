import type { Accordion, AccordionIcon } from './Accordion.type.js';
import './Accordion.css';
type $$ComponentProps = {
    icon?: AccordionIcon;
    open?: boolean;
    join?: boolean;
    title?: string;
    name?: string;
    children?: any;
};
declare const Accordion: import("svelte").Component<$$ComponentProps, {}, "">;
type Accordion = ReturnType<typeof Accordion>;
export default Accordion;
