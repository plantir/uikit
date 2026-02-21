import type { Avatar, AvatarColor, AvatarSize, AvatarMask, AvatarShape } from './Avatar.type.js';
import './Avatar.css';
type $$ComponentProps = {
    size?: AvatarSize;
    color?: AvatarColor;
    shape?: AvatarShape;
    mask?: AvatarMask;
    ring?: boolean;
    text?: boolean;
    online?: boolean;
    offline?: boolean;
    children?: any;
};
declare const Avatar: import("svelte").Component<$$ComponentProps, {}, "">;
type Avatar = ReturnType<typeof Avatar>;
export default Avatar;
