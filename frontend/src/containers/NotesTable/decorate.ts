import { withStyles, WithStyles } from '@material-ui/core/styles';

const decorate = withStyles({
  clickableTableRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
    },
  },
});

export type Decorate = WithStyles<'clickableTableRow'>;

export default decorate;
