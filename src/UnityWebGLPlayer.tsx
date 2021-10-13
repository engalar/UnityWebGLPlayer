import { createElement, useCallback } from "react";
import { ValueStatus } from "mendix";

import { UnityWebGLPlayerContainerProps } from "../typings/UnityWebGLPlayerProps";

import "./ui/index.scss";
import UnityFC from "./components/UnityFC";


export default function UnityWebGLPlayer(props: UnityWebGLPlayerContainerProps) {
    const onEvent = useCallback(
        (eventName: string, value: string) => {
            switch (eventName) {
                case "ClickObject":
                    if (props.out1 && props.out1?.status === ValueStatus.Available) {
                        props.out1.setValue(value);
                    }
                    break;
                default:
                    break;
            }
        },
        [props.out1]
    );

    return (
        <UnityFC
            onEvent={onEvent}
            eventNames={["ClickObject"]}
            name={props.name}
            hoverMethod={props.hoverMethod}
            hoverGo={props.hoverGameObject}
            style={{ width: "100%", ...props.style }}
            class={props.class}
            modelPath={props.unityModelPath}
        ></UnityFC>
    );
}
