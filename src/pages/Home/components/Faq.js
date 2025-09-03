import { Accordion } from "./Accordion";

export const Faq = () => {
    const faqs = [
        {
          "id": 1,
          "question": "Why should I choose Learnify?",
          "answer": "Learnify offers high-quality, industry-relevant courses taught by expert instructors. We focus on hands-on projects, practical skills, and personalized learning paths to help you achieve your career goals faster."
        },
        {
          "id": 2,
          "question": "Can I access courses on my phone?",
          "answer": "Yes! Learnify works perfectly on smartphones and tablets. You can watch lectures, complete assignments, and download resources anytime, anywhere."
        },
        {
          "id": 3,
          "question": "Do you offer refunds?",
          "answer": "Yes. We have a 14-day money-back guarantee if you’re not satisfied with your course—no questions asked."
        },
        {
          "id": 4,
          "question": "Do you support international payments?",
          "answer": "Yes. Learnify accepts payments from most countries, supporting credit/debit cards, PayPal, and other secure global payment options."
        }
    ];
    
  return (
    <section className="my-10 p-7 border rounded dark:border-slate-700 shadow-sm">        
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-3 underline underline-offset-8">Question in mind?</h1>    
            <div className="" id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
              { faqs.map((faq) => (
                <Accordion key={faq.id} faq={faq} /> 
              )) }
            </div>
      </section>
  )
}
