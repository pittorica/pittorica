import { useEffect, useState } from 'react';
import type { Prism as SyntaxHighlighterType } from 'react-syntax-highlighter';

import { clsx } from 'clsx';

import { IconClipboard, IconClipboardCheckFilled } from '@tabler/icons-react';

import { type TextProps } from '@pittorica/text-react';

export interface CodeProps extends TextProps {
  language?: string;
  showLineNumbers?: boolean;
  theme?: 'dark' | 'light';
}

interface HighlightingAssets {
  Highlighter: typeof SyntaxHighlighterType;
  themes: {
    oneLight: Record<string, React.CSSProperties>;
    vscDarkPlus: Record<string, React.CSSProperties>;
  };
}

/**
 * Code component with syntax highlighting support.
 * Zero 'any' usage. All dynamic imports are strictly typed.
 */
export const Code = ({
  children,
  language = 'typescript',
  showLineNumbers = false,
  theme = 'dark',
  className,
  style,
  ...props
}: CodeProps) => {
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
        themes: { oneLight, vscDarkPlus },
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

  if (!assets) {
    const FallbackTag = isInline ? 'code' : 'pre';
    return (
      <FallbackTag
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
        {...props}
      >
        {children}
      </FallbackTag>
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
        PreTag="span"
        className={clsx('pittorica-code-inline', className)}
        customStyle={{
          padding: '0.2em 0.4em',
          borderRadius: 'var(--pittorica-radius-1)',
          fontFamily: 'var(--pittorica-font-mono)',
          ...style,
        }}
        {...props}
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
