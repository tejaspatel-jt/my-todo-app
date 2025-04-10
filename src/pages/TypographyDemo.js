import React from 'react';
import { Typography, Box, TextField, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TypographyDemo = () => {
  const theme = useTheme();

  return (
    <Box sx={{ padding: 3 }}>

        {/* Here fontSize ovverrides the variant prop */}
      <Typography variant="h1" fontSize={100} gutterBottom>
        Typography Demo
      </Typography>
      
      <Typography variant="h2" gutterBottom>
        This is a header (h2)
      </Typography>
      
      <Typography variant="body1" gutterBottom>
        This is regular body text (body1)
      </Typography>
      
      <Typography variant="body2" gutterBottom>
        This is smaller body text (body2)
      </Typography>
      
      <Typography variant="subtitle1" gutterBottom>
        This is a subtitle (subtitle1)
      </Typography>
      
      <Box sx={{ marginTop: 2, marginBottom: 2 }}>
        <Typography variant="h6" gutterBottom>
          Form Label Example:
        </Typography>
        <TextField 
          label="Input Label" 
          variant="outlined"
          InputLabelProps={{
            sx: theme.typography.subtitle2
          }}
          InputProps={{
            sx: theme.typography.body1
          }}
        />
      </Box>
      
      <Box sx={{ marginTop: 2 }}>
        <Typography variant="h6" gutterBottom>
          List Example:
        </Typography>
        <List>
          <ListItem>
            <ListItemText 
              primary="List Item 1" 
              secondary="Secondary text"
              primaryTypographyProps={{ variant: 'body1' }}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
          </ListItem>
          <ListItem>
            <ListItemText 
              primary="List Item 2" 
              secondary="Secondary text"
              primaryTypographyProps={{ variant: 'body1' }}
              secondaryTypographyProps={{ variant: 'body2' }}
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default TypographyDemo;