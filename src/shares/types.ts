export type RouteItem = {
  title: string;
  href: string;
  subroute?: RouteItem[];
};

export type Services = {
  service: string;
  description: string;
  link: string;
  video: string;
  fromColor: string;
  viaColor: string;
};
