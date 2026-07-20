import {
    createShikiHighlighter,
    ShikiCode,
    setShikiHighlighter
} from '@humanspeak/svelte-markdown/extensions/shiki'
import csharp from 'shiki/langs/csharp.mjs'
import ts from 'shiki/langs/typescript.mjs'
import githubDark from 'shiki/themes/github-dark.mjs'

export const highlighter = setShikiHighlighter(
    createShikiHighlighter({ langs: [ts, csharp], themes: [githubDark] })
)

export const formatter = ShikiCode;
