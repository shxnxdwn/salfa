import styles from './Icon.module.css';
import { type SVGProps } from 'react';
import HeartIcon from '@shared/assets/icons/heart.svg?react';
import TrashIcon from '@shared/assets/icons/trash.svg?react';

type IconName = keyof typeof iconsMap;

type IconProps = SVGProps<SVGSVGElement> & {
  name: IconName;
  className?: string;
};

const iconsMap = {
  heart: HeartIcon,
  trash: TrashIcon
};

export const Icon = (props: IconProps) => {
  const { name, className, ...restProps } = props;
  const SvgIcon = iconsMap[name];

  const iconClasses = [styles.icon, className].filter(Boolean).join(' ');

  return <SvgIcon className={iconClasses} {...restProps} />;
};
