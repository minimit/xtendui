module.exports = {
  component: theme => ({
    '.scroll-sticky': {
      // setup
      position: 'relative',
      zIndex: theme('zIndex.sticky') - 1,
      height: 'auto !important',
      maxHeight: 'none !important',
      '&[style*="position: fixed"]': {
        zIndex: theme('zIndex.sticky'),
      },
    },
  }),
}
