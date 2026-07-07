export {};

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'model-viewer': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    src?: string;
                    poster?: string;
                    alt?: string;
                    'camera-controls'?: boolean | '';
                    'auto-rotate'?: boolean | '';
                    'shadow-intensity'?: string;
                    exposure?: string;
                    onLoad?: () => void;
                },
                HTMLElement
            >;
        }
    }
}
