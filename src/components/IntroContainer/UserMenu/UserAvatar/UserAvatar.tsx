import React from 'react';
import Avatar from '@mui/material/Avatar';
import Person from '@mui/icons-material/Person';
import { StateContextType } from '../../../../state';
import { makeStyles } from 'src/styles/makeStyles';

const useStyles = makeStyles()({
  red: {
    color: 'white',
    backgroundColor: '#F22F46',
  },
});

export function getInitials(name: string) {
  return name
    .split(' ')
    .map(text => text[0])
    .join('')
    .toUpperCase();
}

export default function UserAvatar({ user }: { user: StateContextType['user'] }) {
  const { classes } = useStyles();
  const { displayName, photoURL } = user!;

  return photoURL ? (
    <Avatar src={photoURL} />
  ) : (
    <Avatar className={classes.red}>{displayName ? getInitials(displayName) : <Person />}</Avatar>
  );
}
