import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  // minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  transition: 'background-color 0.2s, color 0.2s',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$primary500',

        '&:not(:disabled):hover': {
          background: '$primary300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
          cursor: 'not-allowed',
        },
      },
      secondary: {
        color: '$primary300',
        border: '2px solid $primary500',

        '&:not(:disabled):hover': {
          background: '$primary500',
          color: '#FFF',
        },

        '&:disabled': {
          borderColor: '$gray200',
          color: '$gray200',
          cursor: 'not-allowed',
        },
      },
      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '#FFF',
        },

        '&:disabled': {
          color: '$gray600',
          cursor: 'not-allowed',
        },
      },
    },
    size: {
      xl: {
        padding: '0 $4',
        height: 64,
        fontSize: '$lg',
      },
      lg: {
        padding: '0 $4',
        height: 56,
        fontSize: '$md',
      },
      md: {
        padding: '0 $4',
        height: 46,
        fontSize: '$sm',
      },
      sm: {
        padding: '0 $4',
        height: 38,
        fontSize: '$xs',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})
