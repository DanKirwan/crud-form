import { List, ListItem, IconButton, Button, ListProps } from "@mui/material";
import { ArrayContainer } from "@src/lib/arrays";
import { ReactNode } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const CustomizableListArrayContainer = {
    display: (content) => <div>{content}</div>,
    edit: ({add, content, remove}, options?: Pick<ListProps, 'dense' | 'color'>) => (
        <List {...options}>
            {content.map((item, index) => (
                <ListItem 
                secondaryAction={
                        <IconButton onClick={() => remove(index)}>
                            <DeleteIcon/>
                        </IconButton>
                }
                >
                    {item}
                </ListItem>
            ))}
            <ListItem>
                    <Button onClick={() => add()} variant='contained'>
                    Add
                    </Button>
            </ListItem>
        </List>
    ),
} as const satisfies ArrayContainer<ReactNode>;