import { FlowRouter } from 'meteor/kadira:flow-router'
import React from 'react';
import { mount } from 'react-mounter';

// Layouts and Pages
import { App } from '../../ui/layouts/App'
import { Homepage } from '../../ui/pages/Homepage'

FlowRouter.route('/', {
  name: 'homepage',
  action() {
    mount(App, {
      content: <Homepage />
    })
  }
})
