import { useState, ReactNode, FC } from 'react';
import { Box, Button, LinearProgress, Stack, Typography } from '@mui/material';

type Props =  {
    pages: ReactNode[];
}

export const PagesLayout : FC<Props> = ({ pages }) => {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNext = () => {
        if (currentPage < pages.length - 1) {
            setCurrentPage((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage((prev) => prev - 1);
        }
    };

    return (
        <Stack height='100%' spacing={1} justifyContent='space-between'>
            
            {/* Progress Bar */}
            <Box width="100%" mb={2}>
                <LinearProgress
                    variant="determinate"
                    value={(currentPage / (pages.length - 1)) * 100}
                />
                <Typography align="center" variant="body2" mt={1}>
                    Page {currentPage + 1} of {pages.length}
                </Typography>
            </Box>
                

            {pages[currentPage]}

            {/* Navigation Buttons */}
            <Box display="flex" justifyContent="space-between" width="100%">
                <Button variant="outlined" onClick={handlePrev} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button variant="contained" onClick={handleNext} disabled={currentPage === pages.length - 1}>
                    Next
                </Button>
            </Box>
        </Stack>
    );
};
