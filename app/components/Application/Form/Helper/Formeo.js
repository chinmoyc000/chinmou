import React, { createRef, useEffect } from 'react';
import { FormeoEditor, FormeoRenderer } from 'formeo';
import 'formeo/dist/formeo.min.css';

export const FormEditor = () => {
  const editorRef = createRef();


  

  const controlOptions = {
    elements: [
      {
        tag: 'input', // HTML tag used to render the element
        config: {
          label: 'Email',
          disabledAttrs: ['type'], // Attributes hidden from the user
          lockedAttrs: [], // Attributes that cannot be deleted
        },
        meta: {
          group: 'common',
          id: 'email',
          icon: '@', // Icon name in icon set
        },
        attrs: {
          // actual attributes on the HTML element, and their default values
          type: 'email', // type field is important if tag==input
          name: 'email',
        },
        options: [
          // Used for element types like radio buttons
          // {label: 'Option 1', value: 'opt1', selected: true}
        ],
      },
    ],
    elementOrder: {
      // Must be set in conjunction or it may not appear in the group
      common: ['email'],
    },
  };
  useEffect(() => {
    new FormeoEditor({
      controls: controlOptions,
      editorContainer: editorRef.current
    });
  }, [editorRef]);

  return <div ref={editorRef} />;
};

export const FormRenderer = () => {
  const rendererRef = createRef();

  useEffect(() => {
    const renderer = new FormeoRenderer({
      renderContainer: rendererRef.current
    });
    const handleUpdate = ({ detail: { formData } }) => renderer.render(formData);
    document.addEventListener('formeoSaved', handleUpdate, false);
  }, [rendererRef]);

  return <div ref={rendererRef} />;
};

export default { FormEditor, FormRenderer };
