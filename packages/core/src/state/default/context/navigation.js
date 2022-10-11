import { Link } from 'react-router-dom'
import { pageContent } from '../../../library/constant'
import { isRunningOnLocalHost } from '../../../library/environment/host'

import {
  dashboardPagePath,
  instancesPagePath,
  filesPagePath,
  credentialsPagePath,
  pipelinesPagePath,
  monitorsPagePath,
} from '../../../route/path'

export const navigation = {
  ariaAttr: {
    label: pageContent.files.contextNavigationItemText,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: dashboardPagePath } },
        children: pageContent.dashboard.contextNavigationItemText,
      },
      isSelected: false,
      enabled: isRunningOnLocalHost,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: instancesPagePath } },
        children: pageContent.instances.contextNavigationItemText,
      },
      isSelected: false,
      enabled: true,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: filesPagePath } },
        children: pageContent.files.contextNavigationItemText,
      },
      isSelected: true,
      enabled: true,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: credentialsPagePath } },
        children: pageContent.credentials.contextNavigationItemText,
      },
      isSelected: false,
      enabled: isRunningOnLocalHost,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: pipelinesPagePath } },
        children: pageContent.pipelines.contextNavigationItemText,
      },
      isSelected: false,
      enabled: isRunningOnLocalHost,
      visible: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: monitorsPagePath } },
        children: pageContent.monitors.contextNavigationItemText,
      },
      isSelected: false,
      enabled: isRunningOnLocalHost,
      visible: true,
    },
  ],
}
