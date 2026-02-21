import type { Chat, ChatColor } from './Chat.type.js';
import './Chat.css';
import type { Snippet } from 'svelte';
type $$ComponentProps = {
    start?: boolean;
    end?: boolean;
    color?: ChatColor;
    children?: Snippet;
    header?: Snippet;
    image?: Snippet;
    footer?: Snippet;
};
declare const Chat: import("svelte").Component<$$ComponentProps, {}, "">;
type Chat = ReturnType<typeof Chat>;
export default Chat;
