import { ArrayContainerConfig } from "@src/lib/arrays";
import { ListViewArrayContainer } from "./ListArrayContainer";
import { ReactNode } from "react";
import { CustomizableListArrayContainer } from "./CustomizableListArrayContainer";

// Create the wrapper configuration
export const REACT_ARRAY_CONTAINER_CONFIG = {
    list: ListViewArrayContainer,
    customizableList: CustomizableListArrayContainer
} as const satisfies ArrayContainerConfig<ReactNode>

export type ReactArrayContainerConfig = typeof REACT_ARRAY_CONTAINER_CONFIG