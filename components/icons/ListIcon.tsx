import Svg, { Path } from 'react-native-svg';

interface ListIconProps {
  size?: number;
  color?: string;
}

export default function ListIcon({ size = 24, color = 'currentColor' }: ListIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M3 5h.01" />
      <Path d="M3 12h.01" />
      <Path d="M3 19h.01" />
      <Path d="M8 5h13" />
      <Path d="M8 12h13" />
      <Path d="M8 19h13" />
    </Svg>
  );
}
