import { Fragment } from 'react';
import MainHeader from './main-header';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<Fragment>
			<MainHeader />
			<main>{children}</main>
		</Fragment>
	);
};

export default Layout;
