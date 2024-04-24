import Comment from "../Components/Comments";
import Hero from "../Components/hero";
import HowItWorks from "../Components/HowItWorks";
import MessageForm from "../Components/messageForm";
import WhoWeAre from "../Components/WhoWeAre";
import WhyChooseUs from "../Components/WhyChooseUs";

export default function Home() {
    return (
        <>
            <Hero/>
            <WhoWeAre />
            <HowItWorks/>
            <WhyChooseUs />
            <MessageForm />
            <Comment/>
        </>
    )
}