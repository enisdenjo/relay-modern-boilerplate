import { withStyles, WithStyles } from '@material-ui/core/styles';

const decorate = withStyles((theme) => ({
  root: {
    padding: theme.spacing.unit * 4,
    maxWidth: 1024,
    margin: '0 auto',
  },
  pageContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
    border: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing.unit * 4,
    padding: theme.spacing.unit * 4,
  },
}));

export type Decorate = WithStyles<'root' | 'pageContainer'>;

export default decorate;
