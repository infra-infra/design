import { css } from '@emotion/css';

export const style = {
  container: css({
    minWidth: '112px',
    maxWidth: '280px',
    borderRadius: '4px',
    padding: '8px 0',
    backgroundColor: 'var(--md-sys-color-surface)',
  }),
  item: css({
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    '&:hover': {
      color: 'var(--md-sys-color-on-surface)',
      background:
        'linear-gradient(0deg, rgba(0, 0, 0, 0.08), rgba(0, 0, 0, 0.08)),var(--md-sys-color-surface)',
    },
  }),
};
