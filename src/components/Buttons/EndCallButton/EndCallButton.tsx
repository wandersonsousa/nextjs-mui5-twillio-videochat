import React from 'react';
import { Theme } from '@mui/material/styles';
import { makeStyles } from 'src/styles/makeStyles';

import { Button } from '@mui/material';

import useVideoContext from '../../../hooks/useVideoContext/useVideoContext';

const useStyles = makeStyles()((theme: Theme) => ({
  button: {
    background: theme.brand,
    color: 'white',
    '&:hover': {
      background: '#600101',
    },
  },
}));

export default function EndCallButton(props: { className?: string }) {
  const { classes, cx } = useStyles();
  const { room } = useVideoContext();

  return (
    <Button onClick={() => room!.disconnect()} className={cx(classes.button, props.className)} data-cy-disconnect>
      Disconnect
    </Button>
  );
}
