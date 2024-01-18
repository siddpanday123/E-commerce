import { styled } from '@mui/system';

const StyledComponent = styled('div')(({ theme }) => ({

  margin: 'auto',
  marginTop: theme.spacing(2), 
marginBottom:"40px",
background:"#B9D9EB",
boxShadow: "2px 2px 5px #4B9CD3", 
}));

export const Image = styled('img')({
  width: '100%',
  height: 'auto',
  
});

export default StyledComponent;
