

export type ContainerLayoutConfig<RenderT> = Record<string, (items: RenderT[]) => RenderT>;

export type ContainerMeta = {
    label: string;  
    hasErrors: boolean;
    isCompleted: boolean;
}
export type ContainerWrapperConfig<RenderT> = Record<string, (contents: RenderT, meta: ContainerMeta) => RenderT>;
