import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Activation01 from "@/components/Activation01";
import Activation02 from "@/components/Activation02";
import Activation03 from "@/components/Activation03";
import BudgetSummary from "@/components/BudgetSummary";
import Closing from "@/components/Closing";

export default function Page() {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Activation01 />
      <Activation02 />
      <Activation03 />
      <BudgetSummary />
      <Closing />
    </main>
  );
}
