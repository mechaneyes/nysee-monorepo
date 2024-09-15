import React, { useState, useMemo } from "react";
import CustomDate from "@/components/date";
import HomeStories from "../components/home-stories";

interface Post {
  node: {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: string;
    events: {
      eventDate: string;
    };
  };
}

interface EventDateListProps {
  morePosts: Post[];
  onDateSelect: (date: string | null) => void;
}

const EventDateList: React.FC<EventDateListProps> = ({
  morePosts,
  onDateSelect,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const orderedDates = useMemo(() => {
    const displayedDates = new Set<string>();
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Set to start of day
    const currentWeekEnd = new Date(currentDate);
    currentWeekEnd.setDate(currentDate.getDate() + (6 - currentDate.getDay()));
    currentWeekEnd.setHours(23, 59, 59, 999); // Set to end of day

    const isWithinCurrentWeek = (date: Date) => {
      return date >= currentDate && date <= currentWeekEnd;
    };

    const adjustToLocalTimezone = (dateString: string) => {
      const date = new Date(dateString);
      return new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    };

    return morePosts
      .map(({ node }) => node.events.eventDate)
      .filter((dateString) => {
        const localDate = adjustToLocalTimezone(dateString);
        return (
          localDate >= currentDate &&
          !displayedDates.has(dateString) &&
          displayedDates.add(dateString)
        );
      })
      .sort((a, b) => adjustToLocalTimezone(a).getTime() - adjustToLocalTimezone(b).getTime())
      .sort((a, b) => {
        const dateA = adjustToLocalTimezone(a);
        const dateB = adjustToLocalTimezone(b);
        const aInCurrentWeek = isWithinCurrentWeek(dateA);
        const bInCurrentWeek = isWithinCurrentWeek(dateB);
        if (aInCurrentWeek && !bInCurrentWeek) return -1;
        if (!aInCurrentWeek && bInCurrentWeek) return 1;
        return 0;
      });
  }, [morePosts]);

  const handleDateClick = (dateString: string | null) => {
    setSelectedDate(dateString);
    onDateSelect(dateString);
  };

  return (
    <ul className="home__sub-nav--list inline-flex justify-center gap-2 text-xl text-white">
      <li className="home__sub-nav--item flex items-center">
        <a
          href="#"
          className={`home__sub-nav--link ${
            selectedDate === null ? "home__sub-nav--link--active" : ""
          }`}
          onClick={(e) => {
            e.preventDefault();
            handleDateClick(null);
          }}
        >
          All
        </a>
      </li>
      {orderedDates.map((dateString, index) => (
        <React.Fragment key={dateString}>
          <li className="home__sub-nav--item flex items-center justify-center">
            &middot;
          </li>
          <li className="home__sub-nav--item flex items-center text-center">
            <a
              href="#"
              className={`home__sub-nav--link ${
                selectedDate === dateString ? "home__sub-nav--link--active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                handleDateClick(dateString);
              }}
            >
              <CustomDate dateString={dateString} subNav={true} />
            </a>
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

const EventsContainer: React.FC<{ allPosts: { edges: Post[] } }> = ({
  allPosts,
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const morePosts = allPosts.edges;

  const filteredPosts = useMemo(() => {
    if (selectedDate === null) {
      return morePosts;
    }
    return morePosts.filter(
      ({ node }) => node.events.eventDate === selectedDate
    );
  }, [morePosts, selectedDate]);

  return (
    <div className="home__stories--container px-5 max-w-[1280px] mx-auto -mt-8 sm:mt-0">
      <div id="stories" className="home__sub-nav pb-4">
        <EventDateList morePosts={morePosts} onDateSelect={setSelectedDate} />
      </div>
      {filteredPosts.length > 0 && <HomeStories posts={filteredPosts} />}
    </div>
  );
};

export default EventsContainer;
