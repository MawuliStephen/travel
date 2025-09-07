"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="flex flex-col items-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="w-full max-w-3xl text-center">
        {/* <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-10">
          What's on your mind;<br />
          Questions?
        </h1>  */}

        <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-10">
          What&rsquo;s on your mind;<br />
          Questions?
        </h1>


        <Accordion type="single" collapsible className="w-full space-y-2">
          {faqItems.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border rounded-lg overflow-hidden data-[state=open]:bg-purple-100"
            >
              <AccordionTrigger className="px-4 py-3 text-left text-base sm:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-sm sm:text-base text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

const faqItems = [
  {
    question: "Do I need a visa to travel?",
    answer: "Yes, visa requirements depend on your destination. We help you through the process.",
  },
  {
    question: "How long does visa processing take?",
    answer: "Typically between 2 to 6 weeks, depending on the country and documentation.",
  },
  {
    question: "Can I work while studying abroad?",
    answer: "Most countries allow part-time work for international students. We help you find those opportunities.",
  },
  {
    question: "Are scholarships available?",
    answer: "Yes. We have programs with partial or full scholarships depending on your qualifications.",
  },
  {
    question: "What if I get rejected?",
    answer: "We support you with appeal options and alternative programs so you're not left behind.",
  },
]
