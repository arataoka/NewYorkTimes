import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';
import React from 'react';

interface BaseCardProps extends LinkProps {
  url: string;
  children: React.ReactNode;
}

const baseCardStyles = {
  borderRadius: 'sm',
  boxShadow: {
    lg: 'none',
    base: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
  },
  overflow: 'hidden',
  height: '100%',
  _hover: {
    boxShadow:
      'rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px;',
    transform: 'translateY(-2px)',
    backgroundColor: 'white',
  },
};
export const BaseCard: React.FC<BaseCardProps> = ({
  url,
  children,
  ...linkProps
}) => {
  return (
    <Link
      as={NextLink}
      href={url}
      role="group"
      {...baseCardStyles}
      {...linkProps}
    >
      {children}
    </Link>
  );
};
