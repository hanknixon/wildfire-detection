import spinner from './spinner.gif'


const loader = () => {
  return (
    <div className='loader'>
        <img src={spinner} alt="Loading..." />
        <h1>Fetching Data</h1>
    </div>
  )
}

export default loader
