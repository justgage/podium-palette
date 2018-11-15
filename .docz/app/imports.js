export const imports = {
  'src/catalog.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-catalog" */ 'src/catalog.mdx'),
}
