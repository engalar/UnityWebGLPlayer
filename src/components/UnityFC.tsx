import { useCreation, useHover } from "ahooks";
import { createElement, CSSProperties, useEffect, useRef } from "react";
import Unity, { UnityContext } from "react-unity-webgl";

export interface UnityFCProps {
    placeholder?: string;
    style?: CSSProperties;
    class: string;
    tabIndex?: number;
    modelPath: string;
    hoverGo?: string;
    hoverMethod: string;
    name: string;
    onEvent?: (name: string, value: string) => void;
    eventNames?: string[];
}

export default function UnityFC(props: UnityFCProps) {
    const unityContext = useCreation(
        () =>
            new UnityContext({
                loaderUrl: `${props.modelPath}.loader.js`,
                dataUrl: `${props.modelPath}.data`,
                frameworkUrl: `${props.modelPath}.framework.js`,
                codeUrl: `${props.modelPath}.wasm`
            }),
        [props.modelPath]
    );

    const ref = useRef<any>();
    const isHovering = useHover(ref);

    useEffect(() => {
        if (props.hoverGo) {
            unityContext.send(props.hoverGo, props.hoverMethod, isHovering ? 1 : 0);
        }
    }, [isHovering]);

    useEffect(() => {
        if (!unityContext) {
            return;
        }
        (window as any).unityContext = (window as any).unityContext ? (window as any).unityContext : {};
        (window as any).unityContext[props.name] = unityContext;

        if (props.onEvent) {
            props.eventNames?.forEach(eventName => {
                unityContext.on(eventName, value => {
                    props.onEvent!(eventName, value);
                });
            });
        }

        return () => {
            unityContext.removeAllEventListeners();
        };
    }, [unityContext]);

    return (<div ref={ref}>
        <Unity
            className={props.class}
            tabIndex={props.tabIndex}
            style={props.style}
            unityContext={unityContext}
        />
    </div>);
}
