const PREFIX = 'ui-';
import { uniq } from 'lodash-es';
export const ClassMerge = ({
	prefix,
	name,
	componentClass,
	staticClassess
}: {
	prefix?: string;
	name?: string;
	componentClass?: Object;
	staticClassess?: string;
}) => {
	prefix = prefix || PREFIX;
	const result: Array<string> = [];
	const pre = `${prefix}${name}`;
	result.push(pre);
	componentClass &&
		Object.entries(componentClass).map(([key, value]) => {
			value && key != '' && result.push(`${pre}-${key}`);
		});
	// componentClass &&
	// 	componentClass.map((className) => {
	// 		className && className != '' && result.push(`${pre}-${className}`);
	// 	});
	staticClassess && staticClassess != '' && result.push(...staticClassess.split(' '));
	return uniq(result).join(' ');
};
