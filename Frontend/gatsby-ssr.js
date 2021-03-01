import React from 'react';
import Layout from './src/components/layout';
import { FormspreeProvider } from '@formspree/react';

export function wrapPageElement({ element, props }) {
  return (
    <FormspreeProvider project='{1622577481821191904}'>
      <Layout {...props}>{element}</Layout>;
    </FormspreeProvider>
  );
}
