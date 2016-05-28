import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react';
import { mount } from 'react-mounter';

// Layouts and Pages
import AppContainer from '../../ui/containers/app_container'
import { Homepage } from '../../ui/pages/Homepage'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(AppContainer, {
      content: (props) => <Homepage {...props} />
    })
  }
})
