import { ContainerWrapperConfig } from '@src/lib/containers';
import { ReactNode } from 'react';
import { AccordionWrapper } from './AccordionWrapper';
import { ModalWrapper } from './ModalWrapper';
import { PaperWrapper } from './PaperWrapper';

// Create the wrapper configuration
export const REACT_CONTAINER_WRAPPER_CONFIG = {
    identity: (contents) => contents,
    paper: (contents, meta) => <PaperWrapper contents={contents} meta={meta}/>,
    accordion: (contents, meta) => <AccordionWrapper contents={contents} meta={meta}/>,
    modal: (contents, meta) => <ModalWrapper  contents={contents} meta={meta}/>,
} as const satisfies ContainerWrapperConfig<ReactNode>;

export type ReactContainerWrapperConfig = typeof REACT_CONTAINER_WRAPPER_CONFIG