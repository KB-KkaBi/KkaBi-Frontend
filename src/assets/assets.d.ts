declare module "*.jpg";
declare module "*.png";
declare module "*.jpeg";
declare module "*.gif";

declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default sr;
}

declare module "*.mp3" {
  const content: string;
  export default content;
}
declare module "*.wmv" {
  const content: string;
  export default content;
}
