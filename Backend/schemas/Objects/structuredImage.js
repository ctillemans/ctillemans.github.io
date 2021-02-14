export default {
  title: 'Structured Image',
  name: 'structuredImage',
  type: 'object',
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
      validation: (Rule) => Rule.max(250),
    },
    {
      title: 'Image Alt',
      name: 'imageAlt',
      type: 'string',
      validation: (Rule) => Rule.max(50),
    },
  ],
};
