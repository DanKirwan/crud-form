import { NonEmptyObject } from 'type-fest';

export type ArrayEditOptions<RenderT> = {content: RenderT[], remove: (index: number) => void, add: () => void }

export type ArrayContainer<RenderT, TOptions = undefined> = {
    display: (content: RenderT[]) => RenderT,
    edit: (data: ArrayEditOptions<RenderT>, options: TOptions) => RenderT
};


export type ArrayContainerConfig<RenderT> = NonEmptyObject<Record<string, ArrayContainer<RenderT>>>;
