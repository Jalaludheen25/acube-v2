export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}
