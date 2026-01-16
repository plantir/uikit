const PREFIX = 'ui-';
import { uniq } from 'lodash-es';
export const ClassMerge = ({ prefix, name, componentClass, staticClassess }) => {
    prefix = prefix || PREFIX;
    const result = [];
    const pre = `${prefix}${name}`;
    result.push(pre);
    componentClass &&
        Object.entries(componentClass).map(([key, value]) => {
            if (value == true) {
                // ui-avatar-ring
                result.push(`${pre}-${key}`);
            }
            else if (value && key != '') {
                // ui-avatar-mask-circle
                result.push(`${pre}-${key}-${value}`);
            }
        });
    // componentClass &&
    // 	componentClass.map((className) => {
    // 		className && className != '' && result.push(`${pre}-${className}`);
    // 	});
    staticClassess && staticClassess != '' && result.push(...staticClassess.split(' '));
    return uniq(result).join(' ');
};
