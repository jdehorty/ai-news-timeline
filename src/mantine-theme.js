import { createTheme } from '@mantine/core';

// Custom theme for Mantine
export const mantineTheme = createTheme({
  primaryColor: 'indigo',
  fontFamily: '"Roboto", sans-serif',
  headings: {
    fontFamily: '"Roboto", sans-serif',
  },
  components: {
    MultiSelect: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        input: {
          minHeight: '42px',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          '&:focus': {
            borderColor: '#3f51b5',
          },
        },
        pill: {
          backgroundColor: 'rgba(63, 81, 181, 0.08)',
          color: '#333',
          fontWeight: 'normal',
        },
        label: {
          marginBottom: '4px',
          fontSize: '0.875rem',
        },
        item: {
          '&[data-selected]': {
            backgroundColor: 'rgba(63, 81, 181, 0.12)',
            color: '#3f51b5',
          },
          '&[data-hovered]': {
            backgroundColor: 'rgba(63, 81, 181, 0.05)',
          },
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        },
        section: {
          marginRight: '6px',
          display: 'flex',
          alignItems: 'center'
        },
        dropdown: {
          padding: '6px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        },
        value: {
          color: '#333',
          padding: '0 8px',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '4px',
        }
      },
    },
    Select: {
      defaultProps: {
        radius: 'sm',
      },
      styles: {
        input: {
          minHeight: '42px',
          borderColor: 'rgba(0, 0, 0, 0.08)',
          '&:focus': {
            borderColor: '#3f51b5',
          },
        },
        label: {
          marginBottom: '4px',
          fontSize: '0.875rem',
        },
        item: {
          '&[data-selected]': {
            backgroundColor: 'rgba(63, 81, 181, 0.12)',
            color: '#3f51b5',
          },
          '&[data-hovered]': {
            backgroundColor: 'rgba(63, 81, 181, 0.05)',
          },
          padding: '6px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px'
        },
        section: {
          marginRight: '6px',
          display: 'flex',
          alignItems: 'center'
        },
        dropdown: {
          padding: '6px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)'
        }
      }
    },
    Badge: {
      defaultProps: {
        variant: 'light',
      },
      styles: {
        root: {
          textTransform: 'none',
          fontWeight: 'normal',
          fontSize: '0.8rem',
          backgroundColor: 'rgba(63, 81, 181, 0.08)',
          color: '#333',
          padding: '4px 10px 4px 6px',
          height: 'auto',
          display: 'inline-flex',
          alignItems: 'center',
        },
        section: {
          marginRight: '6px',
          marginLeft: '0',
          display: 'flex',
          alignItems: 'center',
        }
      }
    },
    DatePickerInput: {
      styles: {
        root: {
          marginBottom: 0,
        },
        dropdown: {
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
}); 