import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const StyledButton = styled.button<Pick<ButtonProps, 'size' | 'primary'>>`
  font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;

  color: ${(props) => (props.primary ? 'white' : '#333')};
  background-color: ${(props) => (props.primary ? '#1ea7fd' : 'transparent')};
  box-shadow: ${(props) =>
    props.primary ? 'none' : 'rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset'};

  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'large' ? '18px' : '14px'};
  padding: ${(props) =>
    props.size === 'small'
      ? '10px 16px'
      : props.size === 'large'
      ? '22px 30px'
      : '14px 20px'};
`;

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      type="button"
      primary={primary}
      size={size}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </StyledButton>
  );
};
