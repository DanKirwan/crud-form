

export type ContainerLayoutConfig<RenderT> = Record<string, (items: RenderT[]) => RenderT>;

export type ContainerWrapperMeta = {
    label: string;  
    hasErrors: boolean;
    isCompleted: boolean;
}
export type ContainerWrapperConfig<RenderT> = Record<string, (contents: RenderT, meta: ContainerWrapperMeta) => RenderT>;
