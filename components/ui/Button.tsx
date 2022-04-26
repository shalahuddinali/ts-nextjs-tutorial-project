import Link from 'next/link';
import styles from './Button.module.css';

interface Props {
	link?: string;
	children: React.ReactNode;
}

const Button = ({ link, children }: Props) => {
	if (link) {
		return (
			<Link href={link}>
				<a className={styles.btn}>{children}</a>
			</Link>
		);
	}

	return <button className={styles.btn}>{children}</button>;
};

export default Button;
