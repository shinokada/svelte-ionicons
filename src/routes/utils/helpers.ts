import type { Component } from 'svelte';
import type { ListType } from 'runes-webkit';
import { ExpandOutline, CogOutline, sidebarList } from 'runes-webkit';

const extra: ListType[] = [
  {
    name: 'Icons',
    Icon: ExpandOutline as Component,
    href: '/icons'
  },
  {
    name: 'Icon Sets',
    Icon: CogOutline as Component,
    href: 'https://svelte-svg-icons.codewithshin.com/'
  }
];

export const newSidebarList: ListType[] = [
  ...(Array.isArray(sidebarList) ? sidebarList : []),
  ...extra
];
