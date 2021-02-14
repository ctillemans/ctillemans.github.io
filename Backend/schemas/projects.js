import { string } from 'prop-types';

export default {
  title: 'Projects',
  name: 'projects',
  type: 'document',
  fields: [
    {
      title: 'Project Title',
      name: 'projectTitle',
      description: 'The title of the project',
      type: 'string',
      validation: (Rule) => Rule.max(100),
    },
    {
      title: 'Project Subtitle',
      name: 'projectSubtitle',
      description: 'short form description of project for previews',
      type: 'string',
      validation: (Rule) => Rule.max(140),
    },
    {
      title: 'Project Description',
      name: 'projectDescription',
      description: 'Detailed account of the project',
      type: 'string',
    },

    {
      title: 'Technologies',
      name: 'tecnologies',
      description: 'technologies used for this project',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'technologies' }],
        },
      ],
    },
    {
      title: 'Project tags',
      name: 'projectTags',
      description: 'Simple list of keywords that could pertain to a project',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      title: 'Project Images',
      name: 'projectImages',
      type: 'array',
      of: [{ type: 'structuredImage' }],
    },
    {
      title: 'Featured',
      name: 'featured',
      type: 'boolean',
    },
    {
      title: 'Current Project',
      name: 'currrentProject',
      description: 'Is is something in the works?',
      type: 'boolean',
    },
    {
      title: 'Role',
      name: 'role',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};

// title, subtitle,  desc, technologies(linked**), tags, images, video url boolean current
