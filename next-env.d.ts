/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

import type {
    NextComponentType,
    NextPageContext,
    NextLayoutComponentType,
} from 'next';
import type { AppProps } from 'next/app';

declare module 'next' {
    type NextLayoutComponentType<P = {}> = NextComponentType<
        NextPageContext,
        any,
        P
        > & {
        layout?: (page: ReactNode) => ReactNode;
    };
}

declare module 'next/app' {
    type AppLayoutProps<P = {}> = AppProps & {
        Component: NextLayoutComponentType;
    };
}

declare global {
    interface Window {
        cardano: any;
    }
}
