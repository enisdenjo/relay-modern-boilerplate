import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing.unit * 4,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[1],
      maxWidth: 384,
    },
  });

export type Decorate = WithStyles<typeof styles>;

export default withStyles(styles);
