import type { NextPage } from 'next';
import EventList from '../../components/events/event-list';
import EventSearch from '../../components/events/event-search';
import { getAllEvents } from '../../dummy-data';
import { useRouter } from 'next/router';

const AllEventsPage: NextPage = () => {
	const router = useRouter();

	const events = getAllEvents();

	const findEventsHandler = (year: string, month: string) => {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	};
	return (
		<div>
			<EventSearch onSearch={findEventsHandler} />
			<EventList items={events} />
		</div>
	);
};

export default AllEventsPage;
