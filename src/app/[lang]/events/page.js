import PageBannerTitle from "@/components/Shared/PageBannerTitle";
import Partner from "@/components/Shared/Partner";
import NewsletterBox from "@/components/Shared/NewsletterBox";
import EventsList from "@/components/Events/EventsList";

export default function EventsPage({ params: { lang } }) {
	return (
		<>
			<PageBannerTitle
				title="All Events"
				homeText="Home"
				homeUrl={`/${lang}`}
				image="/images/page-banner1.jpg"
				image2="/images/page-banner2.jpg"
				image3="/images/page-banner3.jpg"
			/>

			<div className="bg-[#E1F8E6]">
				<EventsList />

				<Partner />

				<NewsletterBox />
			</div>
		</>
	);
}
