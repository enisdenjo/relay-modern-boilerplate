/**
 *
 * Form
 *
 * Smart form where the `onSubmit` callback receives
 * values built using input `name` attributes. Empty
 * values will return `null`. Any errors during the
 * submit phase will be caught so you can directly
 * call your `Promise` in the `onSubmit`.
 *
 */

import React from 'react';
import set from 'lodash/set';

// components
import RootRef from '@material-ui/core/RootRef';
import Grid, { GridProps } from '@material-ui/core/Grid';

export interface Props<V>
  extends Pick<GridProps, Exclude<keyof GridProps, 'onSubmit' | 'component'>> {
  children: (state: State) => React.ReactNode;
  onSubmit?: (values: V) => Promise<any>;
  /** Reset inputs with the passed `names`. */
  resetOnError?: Array<keyof V> | string[] | boolean;
}

export interface State {
  error: Error | null;
  submitting: boolean;
  retry: () => void;
}

class Form<V extends object> extends React.PureComponent<Props<V>, State> {
  public state: State = {
    error: null,
    submitting: false,
    retry: () => this.form.current && this.form.current.submit(),
  };

  private form = React.createRef<HTMLFormElement>();

  private extractFormValues = (form: HTMLFormElement): V => {
    const { elements } = form;

    const values = {};

    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLInputElement;
      if (element.name) {
        set(values, element.name, element.value || null);
      }
    }

    return values as V;
  };

  private handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const { onSubmit, resetOnError } = this.props;
    if (onSubmit && this.form.current) {
      this.setState({ error: null, submitting: true });

      try {
        await onSubmit(this.extractFormValues(this.form.current));
        this.setState({ submitting: false });
      } catch (error) {
        this.setState({ error, submitting: false });

        if (!this.form.current) {
          return;
        }

        if (resetOnError === true) {
          this.form.current.reset();
          return;
        } else if (Array.isArray(resetOnError)) {
          // dont ask...
          (resetOnError as string[]).forEach((name) => {
            const el = this.form.current!.elements[name] as HTMLInputElement | undefined;
            if (el) {
              el.value = el.defaultValue;
            }
          });
        }
      }
    }
  };

  public render() {
    const { children, resetOnError, ...rest } = this.props;
    return (
      <RootRef rootRef={this.form}>
        <Grid {...rest} component="form" onSubmit={this.handleSubmit}>
          {children(this.state)}
        </Grid>
      </RootRef>
    );
  }
}

export default Form;
