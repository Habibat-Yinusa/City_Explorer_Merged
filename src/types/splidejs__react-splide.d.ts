// src/types/splidejs__react-splide.d.ts

declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";

  interface SplideProps {
    options?: Record<string, any>;
    extensions?: Record<string, any>;
    children?: ReactNode;
    [key: string]: any;
  }

  interface SplideSlideProps {
    children?: ReactNode;
    [key: string]: any;
  }

  const Splide: ComponentType<SplideProps>;
  const SplideSlide: ComponentType<SplideSlideProps>;

  export { Splide, SplideSlide };
}

declare module "@splidejs/splide-extension-auto-scroll" {
  const AutoScroll: any;
  export { AutoScroll };
}
