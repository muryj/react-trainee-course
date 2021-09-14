import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {id: 'q1', author: 'Max', text: 'Learning React is fun'},
  {id: 'q2', author: 'Marina', text: 'Learning React is sun'}
]

const AllQuotes = () => {
  return (
    <QuoteList quotes={DUMMY_QUOTES}/>
  )
}

export default AllQuotes
