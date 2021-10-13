import { createElement } from "react";
import UnityFC from "./components/UnityFC";
import { UnityWebGLPlayerPreviewProps } from "../typings/UnityWebGLPlayerProps";

declare function require(name: string): string;

export function preview(props: UnityWebGLPlayerPreviewProps) {
    console.log(props);
    return <UnityFC name={""} hoverMethod="" modelPath={props.unityModelPath} class={props.class}></UnityFC>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
