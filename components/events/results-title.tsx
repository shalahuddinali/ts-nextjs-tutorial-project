import Button from '../ui/Button';
import styles from './results-title.module.css';

interface Props {
	date: Date;
}

function ResultsTitle(props: Props) {
	const { date } = props;

	const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
		month: 'long',
		year: 'numeric',
	});

	return (
		<section className={styles.title}>
			<h1>Events in {humanReadableDate}</h1>
			<Button link="/events">Show all events</Button>
		</section>
	);
}

export default ResultsTitle;
