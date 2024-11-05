/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import React from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { BlockQuoteRenderer, H1Renderer, H2Renderer, H3Renderer, ImgRenderer, LiRenderer, LinkRenderer, TdRenderer, ThRenderer, UlRenderer } from './markdown_renderers';

type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer({ children: markdown }: MarkdownRendererProps) {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      className="markdown"
      components={{
        code({ node, inline, className, children, ...props }: any) {
          const match = /language-(\w+)/.exec(className || '');

          if (inline) {
            return (
              <code className="markdown text-red-400" {...props}>
                {children}
              </code>
            )
          } else if (!inline && match) {
            return (
              <SyntaxHighlighter style={dracula} PreTag="div" language={match[1]} {...props}>
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            )
          } else {
            return (
              <code className="markdown" {...props}>
                {children}
              </code>
            )
          }
        },
        ul: ({ children }) => UlRenderer(children),
        li: ({ children }) => LiRenderer(children),
        h1: ({ children }) => H1Renderer(children),
        h2: ({ children }) => H2Renderer(children),
        h3: ({ children }) => H3Renderer(children),
        th: ({ children }) => ThRenderer(children),
        td: ({ children }) => TdRenderer(children),
        blockquote: ({ children }) => BlockQuoteRenderer(children),
        img: (props) => ImgRenderer(props),
        a: (props) => LinkRenderer(props),
      }}
    >
      {markdown}
    </Markdown>
  );
}

