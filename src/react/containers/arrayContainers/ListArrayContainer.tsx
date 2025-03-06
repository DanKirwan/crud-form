import { List, ListItem, IconButton, Button } from "@mui/material";
import { ArrayContainer } from "@src/lib/arrays";
import { ReactNode } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export const ListViewArrayContainer = {
    display: (content) => <div>{content}</div>,
    edit: ({add, content, remove}) => (
        <List>
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