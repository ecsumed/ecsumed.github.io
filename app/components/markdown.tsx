'use client'

/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { tomorrow, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';

import { BlockQuoteRenderer, CheckboxRenderer, H1Renderer, H2Renderer, H3Renderer, ImgRenderer, InlineCodeRenderer, LiRenderer, LinkRenderer, OlRenderer, ParagraphRenderer, PreRenderer, TableRenderer, TdRenderer, ThRenderer, UlRenderer } from './markdown_renderers';

import { useTheme } from 'next-themes'

type MarkdownRendererProps = {
  children: string;
};

export function MarkdownRenderer({ children: markdown }: MarkdownRendererProps) {
  const { resolvedTheme } = useTheme()

  const codeTheme = (resolvedTheme == 'light') ? prism : tomorrow

  return (
    <div className="">
      <Markdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          pre: (props) => <PreRenderer {...props} codeTheme={codeTheme} />,    
          code: (props) => <InlineCodeRenderer {...props} />,
          ul: (props) => <UlRenderer {...props} />,
          ol: (props) => <OlRenderer {...props} />,
          li: (props) => <LiRenderer {...props} />,
          h1: ({ children }) => H1Renderer(children),
          h2: ({ children }) => H2Renderer(children),
          h3: ({ children }) => H3Renderer(children),
          table: (props) => <TableRenderer {...props} />,
          th: (props) => <ThRenderer {...props} />,
          td: (props) => <TdRenderer {...props} />,
          tr: ({ children }) => <tr className="last:border-0">{children}</tr>,
          blockquote: ({ children }) => BlockQuoteRenderer(children),
          img: (props) => ImgRenderer(props),
          a: (props) => LinkRenderer(props),
          input: (props) => {
            if (props.type === 'checkbox') return <CheckboxRenderer {...props} />;
            return <input {...props} />;
          },
          p: (props) => <ParagraphRenderer {...props} />,
        }}
      >
        {markdown}
      </Markdown>
    </div>
  );
}