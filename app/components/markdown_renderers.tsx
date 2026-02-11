/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/no-unused-vars */

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

/**
 * HEADINGS
 * Sharp vertical bars + adaptivity
 */
export function H1Renderer(children: any) {
    return (
        <div className="mt-12 mb-8">
            <h1 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                <span className="w-1 h-10 bg-rose-600 dark:bg-rose-800 shrink-0" />
                {children}
            </h1>
            <div className="mt-3 h-px w-full bg-rose-200 dark:bg-rose-900/50" />
        </div>
    );
}

export function H2Renderer(children: any) {
    return (
        <h2 className="mt-10 mb-6 text-2xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
            <span className="w-1 h-7 bg-rose-600 dark:bg-rose-800 shrink-0" />
            <span className="w-1 h-7 bg-rose-700/50 dark:bg-rose-900/60 shrink-0 mr-1" />
            {children}
        </h2>
    );
}

export function H3Renderer(children: any) {
    return (
        <h3 className="mt-8 mb-4 text-xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-1">
            <span className="w-1 h-6 bg-rose-600 dark:bg-rose-800 shrink-0" />
            <span className="w-1 h-6 bg-rose-700/50 dark:bg-rose-900/60 shrink-0" />
            <span className="w-1 h-6 bg-rose-800/30 dark:bg-rose-900/40 shrink-0 mr-1 shadow-[0_0_1px_rgba(244,63,94,0.2)]" />
            {children}
        </h3>
    );
}

export function ParagraphRenderer({ children }: any) {
    return (
        <p className="whitespace-pre-wrap wrap-break-word mb-4 text-slate-700 dark:text-zinc-300 leading-relaxed">
            {children}
        </p>
    );
}

/**
 * QUOTES
 * Retro terminal style
 */
export function BlockQuoteRenderer(children: any) {
    return (
      <div className="my-8 max-w-fit">
        <div className="bg-slate-100/80 dark:bg-black/40 border-l-2 border-rose-300 dark:border-rose-900/50 pl-5 pr-8 py-3 font-mono">
          <div className="flex items-start gap-3">
            <span className="text-rose-600 dark:text-rose-800 font-bold text-sm mt-1 select-none">
              {'>'}
            </span>
            <div className="italic text-slate-600 dark:text-zinc-400 text-sm leading-relaxed [&>p]:m-0">
              {children}
            </div>
          </div>
        </div>
      </div>
    );
}

/**
 * LISTS & CHECKBOXES
 */
export function UlRenderer({ children }: any) {
    return <ul className="my-5 ml-6 list-disc space-y-1.5 text-slate-800 dark:text-zinc-200">{children}</ul>;
}

export function OlRenderer({ children }: any) {
    return <ol className="my-5 ml-6 list-decimal space-y-1.5 text-slate-800 dark:text-zinc-200">{children}</ol>;
}

export function LiRenderer({ children, checked, ...props }: any) {
    return (
        <li 
            className={`leading-relaxed pl-1 [&>p]:m-0 mb-1 ${checked !== undefined ? 'flex items-start gap-1' : ''}`} 
            {...props}
        >
            {children}
        </li>
    );
}

export function CheckboxRenderer({ checked, ...props }: any) {
    return (
        <input
          type="checkbox"
          checked={checked}
          readOnly
          className={`
            appearance-none float-left w-4 h-4 rounded border cursor-default 
            mt-1 mr-3 shrink-0 flex items-center justify-center
            ${!checked 
              ? "bg-rose-50/50 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40" 
              : "bg-rose-500 border-rose-600 after:content-['✔'] after:text-white after:text-[10px] after:font-black after:block after:translate-y-[-0.5px]"
            }
          `}
          {...props}
        />
    );
}

/**
 * MEDIA & LINKS
 */
export function ImgRenderer(props: any) {
    return <img className="inline-flex m-2 rounded-lg" src={props.src!} alt={props.alt!} />;
}

export function LinkRenderer(props: any) {
    return (
        <a
            className="text-rose-600 dark:text-rose-400 underline decoration-dotted decoration-2 underline-offset-4 hover:text-rose-700 dark:hover:text-rose-300 transition-colors"
            href={props.href}
        >
            {props.children}
        </a>
    );
}

/**
 * CODE BLOCKS
 */
export function PreRenderer({ children, codeTheme, ...props }: any) {
    const codeElement = children?.props;
    const className = codeElement?.className || '';
    const match = /language-(\w+)/.exec(className);
    const language = match ? match[1] : 'text';

    return (
        <div className="block my-6 overflow-hidden border border-slate-200 dark:border-zinc-800 shadow-sm rounded-lg">
            <div className="flex items-center justify-between px-4 py-1.5 bg-slate-50 dark:bg-zinc-900 border-b border-slate-200 dark:border-zinc-800">
                <span className="text-xs font-mono font-medium text-slate-500 dark:text-zinc-500 uppercase tracking-wider">
                    {language}
                </span>
            </div>
            <SyntaxHighlighter
                style={codeTheme}
                language={language}
                PreTag="div"
                showLineNumbers={true}
                showInlineLineNumbers={false}
                lineNumberContainerStyle={{
                    float: 'left',
                    borderRight: '1px solid',
                    borderColor: 'rgba(226, 232, 240, 0.8)',
                    marginRight: '1rem',
                    borderInlineEndWidth: '1px',
                    borderInlineEndColor: 'rgba(115, 115, 115, 0.2)'
                }}
                lineNumberStyle={{
                    minWidth: '2.5em',
                    paddingRight: '1em',
                    color: '#94a3b8',
                    textAlign: 'right',
                    userSelect: 'none',
                    opacity: 0.5
                }}
                customStyle={{
                    margin: 0,
                    padding: '1rem',
                    fontSize: '0.85rem',
                    lineHeight: '1.6',
                    //background: 'transparent',
                }}
                lineProps={{ style: { wordBreak: 'normal', overflowWrap: 'break-word', whiteSpace: 'pre-wrap' } }}
                wrapLines={true}
            >
                {String(codeElement?.children || '').replace(/\n$/, '')}
            </SyntaxHighlighter>
        </div>
    );
}

export function InlineCodeRenderer({ children, ...props }: any) {
    return (
        <code
            className="rounded bg-rose-50/80 dark:bg-rose-950/20 px-1.5 py-0.5 font-mono text-[0.85em] font-medium text-rose-800/80 dark:text-rose-400 border border-dashed border-rose-200 dark:border-rose-800/50"
            {...props}
        >
            {children}
        </code>
    );
}

/**
 * TABLES
 */
export function TableRenderer({ children }: any) {
    return (
        <div className="my-8 overflow-x-auto">
            <div className="inline-block min-w-full lg:min-w-0 align-middle border border-slate-200 dark:border-zinc-800 rounded-lg shadow-sm wrap-break-word">
                <table className="border-separate border-spacing-0">
                    {children}
                </table>
            </div>
        </div>
    );
}

export function ThRenderer({ children }: any) {
    return (
        <th className="px-6 py-3 text-sm font-medium text-rose-700/90 dark:text-rose-400/90 bg-slate-50 dark:bg-zinc-900/50 border-b border-r border-slate-200 dark:border-zinc-800 last:border-r-0 first:rounded-tl-lg last:rounded-tr-lg text-left">
            {children}
        </th>
    );
}

export function TdRenderer({ children }: any) {
    return (
        <td className="px-6 py-3 text-sm text-slate-700 dark:text-zinc-300 border-b border-r border-slate-200 dark:border-zinc-800 last:border-r-0">
            {children}
        </td>
    );
}