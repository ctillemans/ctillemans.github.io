export default {
  title: 'Technologies',
  name: 'technologies',
  type: 'document',
  fields: [
    {
      title: 'technology Name',
      name: 'technologyName',
      type: 'string',
    },
    {
      title: 'Technology Type',
      name: 'technologyType',
      type: 'string',
      options: {
        list: [
          'Object-Oriented Language',
          'JS Library',
          'Frontend Framework',
          'Ecom platform',
          'Database',
          'Backend',
          'styling',
          'templating',
          'headless cms',
          'version control ',
          'Project Management  ',
        ],
      },
    },
    {
      title: 'Technology Description',
      name: 'technologyDescription',
      type: 'string',
    },
    {
      title: 'Icon Classes',
      name: 'iconClasses',
      description: 'class names for tech icons using fontawesome and devicons css libraries',
      type: 'string',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      description: 'How would you rate working with this technology?',
      options: {
        range: { min: 0, max: 10 },
      },
    },
  ],
};
