import { ContainerWrapperMeta } from '@lib/containers';
import { Paper, Typography, Box, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import {FC, ReactNode, useState} from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


type Props = {
    contents: ReactNode;
    meta: ContainerWrapperMeta;
}

export const AccordionWrapper : FC<Props> = ({contents, meta }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Accordion expanded={expanded} onChange={() => setExpanded(!expanded)}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="h6">{meta.label}</Typography>
                <Box ml={2}>
                    <Typography
                        variant="body2"
                        color={meta.hasErrors ? 'error' : 'textSecondary'}
                    >
                        {meta.hasErrors ? 'Error' : meta.isCompleted ? 'Completed' : 'In Progress'}
                    </Typography>
                </Box>
            </AccordionSummary>
            <AccordionDetails>{contents}</AccordionDetails>
        </Accordion>
    );
}
