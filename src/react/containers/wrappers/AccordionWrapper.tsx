import { ContainerWrapperMeta } from '@lib/containers';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/material';
import { FC, ReactNode, useState } from 'react';
import { ContainerStateIcon } from './ContainerStateIcon';


type Props = {
    contents: ReactNode;
    meta: ContainerWrapperMeta;
}

export const AccordionWrapper : FC<Props> = ({contents, meta }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Stack direction='row' spacing={2} alignItems='center' >

                    <Typography variant="h6">{meta.label}</Typography>
                    <ContainerStateIcon meta={meta}/>
                </Stack>

            </AccordionSummary>
            <AccordionDetails>{contents}</AccordionDetails>
        </Accordion>
    );
}
