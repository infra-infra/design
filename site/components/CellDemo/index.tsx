import { css } from '@emotion/css';

export default function CellDemo({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={css`
        margin-top: 24px;
        padding: 48px;
        background-color: var(--bgColor-neutral-muted);
        border: 1px solid var(--borderColor-default);
        border-radius: var(--overlay-borderRadius);
      `}
    >
      {children}
    </div>
  );
}
