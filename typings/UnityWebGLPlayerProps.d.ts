/**
 * This file was generated from UnityWebGLPlayer.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";

export type HandlerTypeEnum = "mf" | "nf";

export interface OutputEventsType {
    eventName: string;
    handlerType: HandlerTypeEnum;
    nfName: string;
    mfName: string;
}

export interface OutputEventsPreviewType {
    eventName: string;
    handlerType: HandlerTypeEnum;
    nfName: string;
    mfName: string;
}

export interface UnityWebGLPlayerContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    unityModelPath: string;
    outputEvents: OutputEventsType[];
    hoverGameObject: string;
    hoverMethod: string;
}

export interface UnityWebGLPlayerPreviewProps {
    class: string;
    style: string;
    unityModelPath: string;
    outputEvents: OutputEventsPreviewType[];
    hoverGameObject: string;
    hoverMethod: string;
}
