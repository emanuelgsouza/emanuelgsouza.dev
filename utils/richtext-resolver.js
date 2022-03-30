import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'

const resolver = new RichTextResolver()

resolver.addNode('code_block', (node) => {
  return {
    tag: [
      {
        tag: 'pre',
        attrs: node.attrs,
      },
      {
        tag: 'code',
        attrs: node.attrs,
      },
    ],
  }
})

resolver.addMark('link', (node) => {
  const attrs = { ...node.attrs }
  const { linktype = 'url' } = node.attrs

  const isLinkTypeEmail = linktype === 'email'
  if (isLinkTypeEmail) {
    attrs.href = `mailto:${attrs.href}`
  }

  const hasAnchor = attrs.anchor
  if (hasAnchor) {
    attrs.href = `${attrs.href}#${attrs.anchor}`
    delete attrs.anchor
  }

  const isNotStoryOpenNewTab = linktype !== 'story' && attrs.target === '_blank'
  if (isNotStoryOpenNewTab) {
    attrs.rel = 'noreferrer noopener'
  }

  return {
    tag: [
      {
        tag: 'a',
        attrs,
      },
    ],
  }
})

export default resolver
