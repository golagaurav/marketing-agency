import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as AiIcons from 'react-icons/ai';
import type { IconType } from 'react-icons';

interface IconProps {
name: string;
size?: number;
color?: string;
className?: string;
}

const iconSets: Record<string, IconType>[] = [FaIcons, MdIcons, AiIcons];

const Icon: React.FC<IconProps> = ({ name, size = 24, color = 'currentColor', className }) => {
let IconComponent: IconType | undefined;

for (const set of iconSets) {
    if (name in set) {
    IconComponent = set[name];
    break;
    }
}

if (!IconComponent) {
    return (
    <svg
        className={className}
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <circle cx="12" cy="12" r="10" stroke="red" strokeWidth="2" fill="none" />
        <line x1="8" y1="8" x2="16" y2="16" stroke="red" strokeWidth="2" />
        <line x1="16" y1="8" x2="8" y2="16" stroke="red" strokeWidth="2" />
    </svg>
    );
}

  // Type assertion here — tell TS it's a valid React component
const Component = IconComponent as React.ComponentType<any>;

return <Component size={size} color={color} className={className} />;
};

export default Icon;
