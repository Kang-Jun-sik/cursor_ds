import React from 'react';
import styled from '@emotion/styled';
import { ThemeProvider } from '@emotion/react';
import type { Theme } from '../../theme/types';
import { defaultTheme } from '../../theme/defaultTheme';

export type ButtonVariant = 'primary' | 'secondary' | 'outlined';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
}

interface StyledButtonProps extends Omit<ButtonProps, 'children'> {
  // theme prop은 ThemeProvider를 통해 자동으로 주입되므로 여기서 제거
}

const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  cursor: pointer;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  transition: ${({ theme }) => theme.transitions.default};
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  /* Size styles */
  ${({ theme, size = 'medium' }) => {
    switch (size) {
      case 'small':
        return `
          padding: ${theme.spacing.xs} ${theme.spacing.small};
          font-size: ${theme.typography.fontSize.small};
        `;
      case 'large':
        return `
          padding: ${theme.spacing.medium} ${theme.spacing.large};
          font-size: ${theme.typography.fontSize.large};
        `;
      default:
        return `
          padding: ${theme.spacing.small} ${theme.spacing.medium};
          font-size: ${theme.typography.fontSize.medium};
        `;
    }
  }}

  /* Variant styles */
  ${({ theme, variant = 'primary' }) => {
    switch (variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary.main};
          color: ${theme.colors.background.default};
          &:hover {
            background-color: ${theme.colors.secondary.dark};
          }
        `;
      case 'outlined':
        return `
          background-color: transparent;
          border: 2px solid ${theme.colors.primary.main};
          color: ${theme.colors.primary.main};
          &:hover {
            background-color: ${theme.colors.primary.main};
            color: ${theme.colors.background.default};
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.background.default};
          &:hover {
            background-color: ${theme.colors.primary.dark};
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.colors.text.disabled};
    color: ${({ theme }) => theme.colors.background.default};
  }

  &:focus {
    outline: none;
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  children,
  ...props
}) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledButton
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        {...props}
      >
        {children}
      </StyledButton>
    </ThemeProvider>
  );
}; 