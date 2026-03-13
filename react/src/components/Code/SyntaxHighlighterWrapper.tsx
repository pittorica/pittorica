import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash.js';
import css from 'react-syntax-highlighter/dist/esm/languages/prism/css.js';
import js from 'react-syntax-highlighter/dist/esm/languages/prism/javascript.js';
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json.js';
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup.js';
import ts from 'react-syntax-highlighter/dist/esm/languages/prism/typescript.js';
import vscDarkPlus from 'react-syntax-highlighter/dist/esm/styles/prism/vsc-dark-plus.js';

SyntaxHighlighter.registerLanguage('typescript', ts);
SyntaxHighlighter.registerLanguage('javascript', js);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('json', json);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('html', markup);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SyntaxHighlighterWrapper(props: any) {
  return <SyntaxHighlighter style={vscDarkPlus} {...props} />;
}
