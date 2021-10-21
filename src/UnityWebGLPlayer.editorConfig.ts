import { UnityWebGLPlayerContainerProps, UnityWebGLPlayerPreviewProps } from "../typings/UnityWebGLPlayerProps";
import { Properties, StructurePreviewProps } from "./piw/PageEditor";
import { transformGroupsIntoTabs } from "./piw/PageEditorUtils";

export function getProperties(
    _: UnityWebGLPlayerContainerProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}

export function getPreview(values: UnityWebGLPlayerPreviewProps): StructurePreviewProps | null {
    console.log(values);

    // const outputs: StructurePreviewProps[] = values.outputEvents.map<StructurePreviewProps>(e => {
    //     return {
    //         type: "RowLayout",
    //         children: [
    //             {
    //                 type: "Text",
    //                 content: e.eventName
    //             },
    //             {
    //                 type: "Text",
    //                 content: e.handlerType === "mf" ? `微流【${e.mfName}】` : `纳流【${e.nfName}】`
    //             }
    //         ]
    //     } as StructurePreviewProps;
    // });
    return {
        type: "Text",
        content: "Unity3d wbgl view"
    };
}
