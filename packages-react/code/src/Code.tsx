import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
  useEffect,
  useState,
} from 'react';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

/* Register only necessary languages for the light version */
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript';

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', markup);

import { clsx } from 'clsx';

import { IconClipboard, IconClipboardCheck } from '@tabler/icons-react';

import { Box } from '@pittorica/box-react';
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
  const [isCopied, setIsCopied] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = String(children);
  const isInline = !content.includes('\n');

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard
        .writeText(content)
        .then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000);
        })
        .catch((error) => {
          console.error('Failed to copy text:', error);
        });
    }
  };

  const Tag = (as || (isInline ? 'code' : 'pre')) as ElementType;

  if (isInline) {
    return (
      <Tag
        className={clsx('pittorica-code-inline', className)}
        style={style}
        {...(props as ComponentPropsWithoutRef<E>)}
      >
        {children}
      </Tag>
    );
  }

  return (
    <Box className={clsx('pittorica-code-container', className)} style={style}>
      {/* Header Banner */}
      <div className="pittorica-code-header">
        <Text
          weight="bold"
          size="2"
          style={{
            textTransform: 'lowercase',
            opacity: 0.8,
          }}
        >
          {filename || language}
        </Text>

        <button
          type="button"
          onClick={handleCopy}
          className="pittorica-code-copy-button"
          aria-label={isCopied ? 'Copied' : 'Copy to clipboard'}
        >
          {isCopied ? (
            <IconClipboardCheck size={18} color="var(--pittorica-green-9)" />
          ) : (
            <IconClipboard size={18} />
          )}
        </button>
      </div>

      {/* Code Area */}
      <Box style={{ position: 'relative' }}>
        {mounted ? (
          <SyntaxHighlighter
            language={language}
            style={vscDarkPlus}
            showLineNumbers={showLineNumbers}
            PreTag="div"
            lineNumberStyle={{
              minWidth: '2.5em',
              paddingRight: '1.5em',
              opacity: 0.3,
              textAlign: 'right',
              userSelect: 'none',
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
          </SyntaxHighlighter>
        ) : (
          <div
            style={{
              padding: '1.5rem',
              fontSize: 'var(--pittorica-font-size-2)',
              lineHeight: '1.7',
              fontFamily: 'var(--pittorica-font-mono)',
              whiteSpace: 'pre-wrap',
              opacity: 0.5,
            }}
          >
            {content.replace(/\n$/, '')}
          </div>
        )}
      </Box>
    </Box>
  );
};

Code.displayName = 'Code';
