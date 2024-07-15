import { PropsWithChildren, ReactElement } from 'react';

export const Button = ({ children, ...props }: PropsWithChildren): ReactElement => {
	return <button {...props}>TS {children}</button>;
};
