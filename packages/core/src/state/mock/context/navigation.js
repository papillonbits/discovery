import { Link } from 'react-router-dom'
import { rootLocation } from '../../../library/constant'

export const navigation = {
  ariaAttr: {
    label: rootLocation.text,
    current: 'page',
  },
  items: [
    {
      link: {
        component: Link,
        props: { ...{ to: '/fantastic-dashboard' } },
        children: 'Fantastic Dashboard',
      },
      isSelected: false,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: '/fantastic-files' } },
        children: 'Fantastic Files',
      },
      isSelected: false,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: '/fantastic-credentials' } },
        children: 'Fantastic Credentials',
      },
      isSelected: false,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: '/fantastic-pipelines' } },
        children: 'Fantastic Pipelines',
      },
      isSelected: true,
    },
    {
      link: {
        component: Link,
        props: { ...{ to: '/fantastic-monitors' } },
        children: 'Fantastic Monitors',
      },
      isSelected: false,
    },
  ],
}
