export type ContactCardItemType = {
  icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  name: string;
  linkAddress: string;
  linkName: string;
  target?: boolean;
  rel?: boolean;
};
