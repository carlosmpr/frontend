import * as React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Members from './members';
export default function MembersDialog({id, closeDialog}) {
  const [open, setOpen] = React.useState(true);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));



  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
     
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={closeDialog}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
        
        </DialogTitle>
        <DialogContent>
        
        <Members id={id} />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closeDialog}>
           Ok
          </Button>
        
        </DialogActions>
      </Dialog>
    </div>
  );
}
