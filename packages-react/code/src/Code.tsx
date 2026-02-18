import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import type {
  Prism as SyntaxHighlighterType,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';

import { clsx } from 'clsx';

import { IconClipboard, IconClipboardCheckFilled } from '@tabler/icons-react';

import { type TextProps } from '@pittorica/text-react';

/* --- Props Types --- */

export type CodeProps<E extends ElementType = 'code'> = Omit<
  TextProps<E>,
  'as'
> & {
  children?: ReactNode;
  language?: string;
  showLineNumbers?: boolean;
  theme?: 'dark' | 'light';
  as?: E;
};

interface HighlightingAssets {
  Highlighter: typeof SyntaxHighlighterType;
  themes: {
    oneLight: Record<string, CSSProperties>;
    vscDarkPlus: Record<string, CSSProperties>;
  };
}

/**
 * Code component with syntax highlighting support.
 * Strict typing with zero 'any' usage.
 */
export const Code = <E extends ElementType = 'code'>({
  children,
  language = 'typescript',
  showLineNumbers = false,
  theme = 'dark',
  className,
  style,
  as,
  ...props
}: CodeProps<E>) => {
  const [assets, setAssets] = useState<HighlightingAssets | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const content = String(children);
  const isInline = !content.includes('\n');

  useEffect(() => {
    const loadAssets = async () => {
      const [{ Prism }, { oneLight, vscDarkPlus }] = await Promise.all([
        import('react-syntax-highlighter'),
        import('react-syntax-highlighter/dist/esm/styles/prism'),
      ]);

      setAssets({
        Highlighter: Prism,
        themes: {
          oneLight: oneLight as Record<string, CSSProperties>,
          vscDarkPlus: vscDarkPlus as Record<string, CSSProperties>,
        },
      });
    };

    loadAssets();
  }, []);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(content).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  const Tag = (as || (isInline ? 'code' : 'pre')) as ElementType;

  /**
   * Fix TS2769 & TS2503:
   * Instead of using JSX namespace, we extract the type directly from the library props.
   * This is the safest way to ensure compatibility without 'any'.
   */
  const preTag = Tag as NonNullable<SyntaxHighlighterProps['PreTag']>;

  if (!assets) {
    const Fallback = Tag;
    return (
      <Fallback
        className={clsx(
          isInline ? 'pittorica-code-inline' : 'pittorica-code-block',
          className
        )}
        style={{
          padding: isInline ? '0.2em 0.4em' : undefined,
          margin: isInline ? undefined : 'var(--pittorica-space-4) 0',
          borderRadius: isInline
            ? 'var(--pittorica-radius-1)'
            : 'var(--pittorica-radius-2)',
          fontFamily: 'var(--pittorica-font-mono)',
          fontSize: isInline ? undefined : 'var(--pittorica-font-size-2)',
          ...style,
        }}
        {...(props as ComponentPropsWithoutRef<E>)}
      >
        {children}
      </Fallback>
    );
  }

  const { Highlighter, themes } = assets;
  const syntaxTheme = theme === 'light' ? themes.oneLight : themes.vscDarkPlus;

  if (isInline) {
    return (
      <Highlighter
        language={language}
        style={syntaxTheme}
        showLineNumbers={false}
        PreTag={preTag}
        className={clsx('pittorica-code-inline', className)}
        customStyle={{
          padding: '0.2em 0.4em',
          borderRadius: 'var(--pittorica-radius-1)',
          fontFamily: 'var(--pittorica-font-mono)',
          ...style,
        }}
        {...(props as ComponentPropsWithoutRef<E>)}
      >
        {content}
      </Highlighter>
    );
  }

  return (
    <div
      className={clsx('pittorica-code-block', className)}
      style={{ position: 'relative' }}
    >
      <button
        type="button"
        onClick={handleCopy}
        style={{
          position: 'absolute',
          zIndex: 10,
          top: 'var(--pittorica-space-2)',
          right: 'var(--pittorica-space-2)',
          padding: 'var(--pittorica-space-1) var(--pittorica-space-2)',
          fontSize: '0.75rem',
          borderRadius: 'var(--pittorica-radius-1)',
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(255, 255, 255, 0.1)',
          color: theme === 'light' ? '#333' : '#fff',
          cursor: 'pointer',
        }}
      >
        {isCopied ? (
          <IconClipboardCheckFilled size={16} />
        ) : (
          <IconClipboard size={16} />
        )}
      </button>
      <Highlighter
        language={language}
        style={syntaxTheme}
        showLineNumbers={showLineNumbers}
        PreTag={preTag}
        customStyle={{
          margin: 'var(--pittorica-space-4) 0',
          borderRadius: 'var(--pittorica-radius-2)',
          fontSize: 'var(--pittorica-font-size-2)',
          ...style,
        }}
      >
        {content.replace(/\n$/, '')}
      </Highlighter>
    </div>
  );
};

Code.displayName = 'Code';
