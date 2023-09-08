/// <reference types="vite/client" />
/// <reference types="p-elements-core" />
/// <reference types="@types/animejs" />
/// <reference types="@types/underscore" />

declare namespace JSX {
  interface IntrinsicElements {
    // eslint-disable-next-line   @typescript-eslint/no-explicit-any
    [elemName: string]: any;
  }
}

declare const _: _.UnderscoreStatic;

declare const anime: typeof anime;

declare const Maquette: {
  h: (selector: string) => VNode;
  createProjector: (projectorOptions?: ProjectorOptions) => Projector;
};
