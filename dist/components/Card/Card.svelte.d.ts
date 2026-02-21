import type { Card } from './Card.type.ts';
import './Card.css';
import type { Snippet } from 'svelte';
type $$ComponentProps = {
    color?: Card['color'];
    size?: Card['size'];
    border?: Card['border'];
    dashed?: Card['dashed'];
    fullImage?: Card['fullImage'];
    side?: Card['side'];
    children?: Snippet;
};
declare const Card: import("svelte").Component<$$ComponentProps, {}, "">;
type Card = ReturnType<typeof Card>;
export default Card;
