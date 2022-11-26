## Home App

This is trying out the still experimental app dir support for next.js 13.

Rough edges noticed so far are:

1. The extra div nesting in markup from page nesting.
2. The extra `.vscode/settings.json` file, may be npm workspace related.
3. Having Server Components be default and needing to `'use client'` a bunch.
