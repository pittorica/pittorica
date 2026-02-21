/* eslint-disable @eslint-react/no-array-index-key */
import {
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type ElementType,
  type ReactNode,
  useEffect,
  useId,
  useState,
} from 'react';
import type {
  Prism as SyntaxHighlighterType,
  SyntaxHighlighterProps,
} from 'react-syntax-highlighter';

import { clsx } from 'clsx';

import { IconClipboard, IconClipboardCheckFilled } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
import { Flex } from '@pittorica/flex-react';
import { Text, type TextProps } from '@pittorica/text-react';

/* --- Props Types --- */

export type CodeProps<E extends ElementType = 'code'> = Omit<
  TextProps<E>,
  'as'
> & {
  children?: ReactNode;
  language?: string;
  showLineNumbers?: boolean;
  as?: E;
  filename?: string;
};

interface HighlightingAssets {
  Highlighter: typeof SyntaxHighlighterType;
  theme: Record<string, CSSProperties>;
}

/* --- Internal Skeleton --- */

const CodeSkeleton = ({
  lines = 5,
  showLineNumbers = true,
}: {
  lines?: number;
  showLineNumbers?: boolean;
}) => {
  const skeletonId = useId();
  return (
    <Box p="4" className="pittorica-code-skeleton">
      {Array.from({ length: lines }).map((_, i) => (
        <Flex key={`${skeletonId}-${i}`} align="center" gap="4" mb="3">
          {showLineNumbers && (
            <Text
              size="1"
              style={{
                width: '20px',
                opacity: 0.1,
                textAlign: 'right',
                fontFamily: 'var(--pittorica-font-mono)',
                color: 'var(--pittorica-white)',
              }}
            >
              {i + 1}
            </Text>
          )}
          <Box
            style={{
              height: '14px',
              width: `${Math.floor(Math.random() * (80 - 30 + 1) + 30)}%`,
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: 'var(--pittorica-radius-1)',
            }}
          />
        </Flex>
      ))}
    </Box>
  );
};

/* --- Main Component --- */

export const Code = <E extends ElementType = 'code'>({
  children,
  language = 'typescript',
  showLineNumbers = true,
  filename,
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
      const [{ Prism }, { vscDarkPlus }] = await Promise.all([
        import('react-syntax-highlighter'),
        import('react-syntax-highlighter/dist/esm/styles/prism'),
      ]);

      setAssets({
        Highlighter: Prism,
        theme: vscDarkPlus as Record<string, CSSProperties>,
      });
    };

    if (!isInline) loadAssets();
  }, [isInline]);

  const handleCopy = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(content).then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
      });
    }
  };

  const Tag = (as || (isInline ? 'code' : 'pre')) as ElementType;
  const preTag = Tag as NonNullable<SyntaxHighlighterProps['PreTag']>;

  if (isInline) {
    if (!assets)
      return (
        <Tag
          className={clsx('pittorica-code-inline', className)}
          {...(props as ComponentPropsWithoutRef<E>)}
        >
          {children}
        </Tag>
      );
    return (
      <assets.Highlighter
        language={language}
        style={assets.theme}
        PreTag={preTag}
        className={clsx('pittorica-code-inline', className)}
        {...(props as ComponentPropsWithoutRef<E>)}
      >
        {content}
      </assets.Highlighter>
    );
  }

  return (
    <Box
      className={clsx('pittorica-code-container', className)}
      style={{
        borderRadius: 'var(--pittorica-radius-4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backgroundColor: '#1e1e1e',
        overflow: 'hidden',
        boxShadow: 'var(--pittorica-shadow-4)',
        ...style,
      }}
    >
      {/* Header Banner */}
      <Flex
        align="center"
        justify="between"
        px="4"
        py="3"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <Text
          weight="bold"
          color="white"
          style={{
            fontSize: 'var(--pittorica-font-size-2)',
            color: 'var(--pittorica-white)',
            textTransform: 'lowercase',
          }}
        >
          {filename || language}
        </Text>

        <button
          type="button"
          onClick={handleCopy}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            color: 'rgba(255, 255, 255, 0.5)',
            borderRadius: 'var(--pittorica-radius-1)',
            display: 'flex',
            alignItems: 'center',
            transition: 'color 0.2s, background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--pittorica-white)';
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'rgba(255, 255, 255, 0.5)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          {isCopied ? (
            <IconClipboardCheckFilled
              size={18}
              color="var(--pittorica-green-9)"
            />
          ) : (
            <IconClipboard size={18} />
          )}
        </button>
      </Flex>

      {/* Code Area */}
      <Box style={{ position: 'relative' }}>
        {assets ? (
          <assets.Highlighter
            language={language}
            style={assets.theme}
            showLineNumbers={showLineNumbers}
            PreTag={preTag}
            lineNumberStyle={{
              minWidth: '2.5em',
              paddingRight: '1.5em',
              opacity: 0.2,
              textAlign: 'right',
              userSelect: 'none',
              color: 'var(--pittorica-white)',
            }}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              fontSize: 'var(--pittorica-font-size-2)',
              backgroundColor: 'transparent',
              lineHeight: '1.7',
              fontFamily: 'var(--pittorica-font-mono)',
            }}
          >
            {content.replace(/\n$/, '')}
          </assets.Highlighter>
        ) : (
          <CodeSkeleton
            lines={content.split('\n').length || 5}
            showLineNumbers={showLineNumbers}
          />
        )}
      </Box>
    </Box>
  );
};

Code.displayName = 'Code';
