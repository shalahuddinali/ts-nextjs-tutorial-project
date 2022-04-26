import EventItem from './event-item';
import { Item } from '../../types';
import styles from './event-list.module.css';

interface Props {
	items: Item[];
}

const EventList = ({ items }: Props) => {
	return (
		<ul className={styles.list}>
			{items.map((item) => (
				<EventItem
					key={item.id}
					id={item.id}
					title={item.title}
					location={item.location}
					date={item.date}
					image={item.image}
				/>
			))}
		</ul>
	);
};

export default EventList;
